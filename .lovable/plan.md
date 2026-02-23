

## Plan: Fix Supabase Error and Build Errors

### Summary
Fix the "supabaseUrl is required" crash on the published site and resolve the TypeScript build error in animations.

---

### Problem 1: Supabase URL Required Error
The published site crashes because `VITE_SUPABASE_URL` is empty, and `createClient('')` throws an error.

**Fix in `src/lib/supabase.ts`:**
Add a guard so the client is only created when the URL is available. This prevents the crash on pages that don't use Supabase features.

```
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? '';

export const supabase = supabaseUrl
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null as any;
```

This allows the site to load normally. Supabase features (lead form) will fail gracefully instead of crashing the entire site.

---

### Problem 2: TypeScript Error in Framer Motion Variants
The `cardHover` animation variant has a `type: 'spring'` typed as `string`, which is incompatible with framer-motion's expected literal type.

**Fix in `src/lib/animations.ts` (line 70):**

| Current | New |
|---------|-----|
| `type: 'spring'` | `type: 'spring' as const` |

---

### Files Modified

| File | Change |
|------|--------|
| `src/lib/supabase.ts` | Guard against empty URL to prevent crash |
| `src/lib/animations.ts` | Add `as const` to fix TypeScript type error |

