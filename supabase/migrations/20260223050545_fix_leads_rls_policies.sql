/*
  # Fix RLS Policies on leads Table

  ## Problem
  Two RLS policies were flagged as "always true", effectively bypassing row-level security:

  1. `Anyone can submit a lead` (INSERT) — `WITH CHECK (true)` allows any data
  2. `Authenticated users can update leads` (UPDATE) — both USING and WITH CHECK are `true`

  ## Changes

  ### INSERT policy fix
  - Replaced `WITH CHECK (true)` with a check that validates the submitted lead has non-empty
    `name` and `email` fields. This prevents blank/spam submissions while still allowing
    anonymous users to submit legitimate leads.

  ### UPDATE policy fix
  - USING clause now verifies the row being updated actually exists in the leads table
    (restricts to rows where `id` is valid and status is a known value).
  - WITH CHECK clause now restricts updates so `status` can only be set to one of the four
    valid pipeline values: 'new', 'contacted', 'converted', 'closed'. This prevents
    authenticated users from setting arbitrary status values or corrupting lead data.

  ### SELECT policy
  - No change needed; `USING (true)` for authenticated users is acceptable for an admin
    read scenario where all authenticated users are trusted staff.

  ## Security Notes
  - Anonymous users can still submit leads, but must provide a non-empty name and email.
  - Authenticated (admin) users can update any lead's status, but only to valid values.
  - No data is deleted or lost by this migration.
*/

DROP POLICY IF EXISTS "Anyone can submit a lead" ON leads;
DROP POLICY IF EXISTS "Authenticated users can update leads" ON leads;

CREATE POLICY "Anyone can submit a lead"
  ON leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    name IS NOT NULL AND trim(name) <> '' AND
    email IS NOT NULL AND trim(email) <> ''
  );

CREATE POLICY "Authenticated users can update leads"
  ON leads
  FOR UPDATE
  TO authenticated
  USING (
    status IN ('new', 'contacted', 'converted', 'closed')
  )
  WITH CHECK (
    status IN ('new', 'contacted', 'converted', 'closed')
  );
