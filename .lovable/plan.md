

## Plan: Update Favicon and Fix Logo Visibility

### Summary
Update the favicon to use the new logo and fix the visibility issue where the logo is not showing on the black header background.

---

### Changes Overview

#### 1. Update Favicon (index.html + public folder)

**Copy logo to public directory:**
- Copy `src/assets/fivsys-logo.png` to `public/favicon.png`

**Update index.html (lines 79-81):**
| Current | New |
|---------|-----|
| `<link rel="icon" type="image/x-icon" href="/favicon.ico" />` | `<link rel="icon" type="image/png" href="/favicon.png" />` |
| `<link rel="apple-touch-icon" href="/favicon.ico" />` | `<link rel="apple-touch-icon" href="/favicon.png" />` |

**Update schema logo (line 90):**
| Current | New |
|---------|-----|
| `"logo": "https://fivsys.com/favicon.ico"` | `"logo": "https://fivsys.com/favicon.png"` |

---

#### 2. Fix Logo Visibility in Navbar (src/components/Navbar.tsx)

**Problem:** The logo has dark elements that blend into the black header background.

**Solution (line 38):** Add CSS filter to brighten the logo or add a subtle glow effect to make it stand out on the dark background.

```text
Current:
className="h-10 w-auto group-hover:opacity-80 transition-opacity duration-300"

New:
className="h-10 w-auto group-hover:opacity-80 transition-opacity duration-300 brightness-110 drop-shadow-[0_0_8px_rgba(223,37,49,0.5)]"
```

This adds:
- `brightness-110` - slightly increases logo brightness
- `drop-shadow-[0_0_8px_rgba(223,37,49,0.5)]` - adds a subtle red glow matching brand color

---

#### 3. Fix Logo Visibility in Footer (src/components/Footer.tsx)

**Solution (line 27):** Apply the same enhancement for consistency.

```text
Current:
className="h-10 w-auto group-hover:opacity-80 transition-opacity duration-300"

New:
className="h-10 w-auto group-hover:opacity-80 transition-opacity duration-300 brightness-110 drop-shadow-[0_0_8px_rgba(223,37,49,0.5)]"
```

---

### Files Modified

| File | Change |
|------|--------|
| `public/favicon.png` | New file (copy of logo) |
| `index.html` | Update favicon references (lines 79-81, 90) |
| `src/components/Navbar.tsx` | Add brightness and glow to logo (line 38) |
| `src/components/Footer.tsx` | Add brightness and glow to logo (line 27) |

---

### Technical Notes
- Using PNG format for favicon provides better quality than ICO for modern browsers
- The `drop-shadow` uses the brand red color (#df2531 = rgba(223,37,49)) for consistent branding
- If the logo still isn't visible after these changes, we may need to add a white/light version of the logo specifically for dark backgrounds

