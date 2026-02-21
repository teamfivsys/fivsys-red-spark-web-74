/*
  # Create Leads Table

  ## Purpose
  Stores inbound lead submissions from the multi-step contact form on fivsys.com.

  ## New Tables
  - `leads`
    - `id` (uuid, primary key) — unique identifier
    - `name` (text, not null) — full name of the prospect
    - `email` (text, not null) — contact email address
    - `phone` (text) — optional phone number
    - `service_interest` (text) — selected service category
    - `project_details` (text) — notes on the project scope
    - `budget_range` (text) — selected budget tier
    - `city` (text) — city/location within Kerala or India
    - `status` (text, default 'new') — lead pipeline status: new | contacted | converted | closed
    - `created_at` (timestamptz, default now()) — submission timestamp

  ## Security
  - RLS enabled: table is private by default
  - INSERT policy: anyone (anon + authenticated) can submit a lead
  - SELECT/UPDATE/DELETE: restricted to authenticated users (admins) only
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  service_interest text DEFAULT '',
  project_details text DEFAULT '',
  budget_range text DEFAULT '',
  city text DEFAULT '',
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a lead"
  ON leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update leads"
  ON leads
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
