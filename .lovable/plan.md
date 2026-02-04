

## Plan: Change Header to White/Light Gray

### Summary
Update the navbar header from black to white/light gray background to make your logo clearly visible. This will give your site a clean, professional look.

---

### Changes Overview

#### 1. Update Navbar Background (`src/components/Navbar.tsx`)

**Line 26-28 - Main header background:**

| State | Current | New |
|-------|---------|-----|
| Scrolled | `bg-black/95 backdrop-blur-md shadow-lg border-b border-fivsys-red/20` | `bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200` |
| Not Scrolled | `bg-transparent` | `bg-white/90 backdrop-blur-md` |

**Line 38 - Logo styling:**
- Remove the brightness/drop-shadow filters since they're no longer needed on a light background

| Current | New |
|---------|-----|
| `brightness-110 drop-shadow-[0_0_8px_rgba(223,37,49,0.5)]` | (remove these classes) |

**Lines 46-72 - Navigation links:**
- Change text color from gray/white to dark for readability on light background

| Current | New |
|---------|-----|
| `text-gray-300 hover:text-fivsys-red` | `text-gray-700 hover:text-fivsys-red` |

**Line 91 - Mobile menu button:**

| Current | New |
|---------|-----|
| `text-gray-400 hover:text-white hover:bg-fivsys-red/20` | `text-gray-600 hover:text-fivsys-red hover:bg-fivsys-red/10` |

---

#### 2. Update Mobile Menu (`src/components/Navbar.tsx`)

**Line 103 - Mobile menu container:**

| Current | New |
|---------|-----|
| `bg-black/98 backdrop-blur-md border-t border-fivsys-red/20` | `bg-white/98 backdrop-blur-md border-t border-gray-200` |

**Lines 104-152 - Mobile menu links:**

| Current | New |
|---------|-----|
| `text-white hover:bg-fivsys-red/20 hover:text-fivsys-red` | `text-gray-700 hover:bg-fivsys-red/10 hover:text-fivsys-red` |

---

### Summary of Changes

| Element | Before | After |
|---------|--------|-------|
| Header background | Black/transparent | White with blur |
| Navigation text | Light gray | Dark gray |
| Mobile menu | Black | White |
| Logo filters | Brightness + glow | Natural appearance |
| Border color | Red accent | Light gray |

---

### Files Modified

| File | Lines Changed |
|------|---------------|
| `src/components/Navbar.tsx` | Lines 26-28, 38, 46-72, 91, 103-152 |

---

### Visual Result
- Clean white header that contrasts with your logo
- Dark navigation text for readability
- Brand red hover effects maintained
- Professional, modern SaaS appearance
- Logo will be clearly visible without any color adjustments

