# Asset Generation Guide - Phase 3

## Overview
This document provides instructions for generating required image assets for the InvokeHoneyBadger website. These assets are needed to complete Phase 3 improvements.

## Required Assets

### 1. PWA Icons

#### Icon Specifications
Create the following icons from the existing HBV logo design:

**192x192 Icon** (`icons/icon-192.png`)
- Size: 192x192 pixels
- Format: PNG with transparent background
- Purpose: Android PWA install prompt, app drawer
- Design: HBV logo on dark background (#030304)
- Text: "HBV" in yellow (#FFF244)
- Style: Match existing favicon design

**512x512 Icon** (`icons/icon-512.png`)
- Size: 512x512 pixels
- Format: PNG with transparent background
- Purpose: Android splash screen, high-DPI displays
- Design: Same as 192x192 but higher resolution
- Quality: Maximum quality, optimized for retina displays

#### WebP Versions
After creating PNG icons, generate WebP versions for better performance:

```bash
# Install cwebp if not available
# Ubuntu/Debian: sudo apt-get install webp
# macOS: brew install webp

# Convert 192x192
cwebp -q 90 icons/icon-192.png -o icons/icon-192.webp

# Convert 512x512
cwebp -q 90 icons/icon-512.png -o icons/icon-512.webp
```

### 2. Open Graph Preview Image

**OG Image** (`images/og-preview.png`)
- Size: 1200x630 pixels (Facebook/LinkedIn optimal)
- Format: PNG or JPG
- Max file size: < 300KB
- Design requirements:
  - HBV branding prominent
  - Terminal/matrix theme aesthetic
  - Title: "InvokeHoneyBadger — HBV"
  - Tagline: "Built in the shadows"
  - Background: Dark (#030304) with matrix rain or hex pattern
  - Accent color: HBV Yellow (#FFF244)

**Twitter Card Image** (Optional, can reuse OG image)
- Size: 1200x600 pixels (alternative: 800x418)
- Format: PNG or JPG
- Purpose: Better preview on Twitter/X

## Design Tools

### Recommended Tools
1. **Figma** (Free tier available)
   - Template: Use 192x192 and 512x512 artboards
   - Export: PNG at 2x resolution

2. **GIMP** (Free, open-source)
   - Import existing favicon
   - Scale to required sizes
   - Export with transparency

3. **Inkscape** (Free, vector graphics)
   - Create scalable SVG first
   - Export to PNG at different sizes

4. **Online Tools**
   - [Real Favicon Generator](https://realfavicongenerator.net/)
   - [PWA Asset Generator](https://github.com/elegantapp/pwa-asset-generator)

### Quick Generation with pwa-asset-generator

```bash
npm install -g pwa-asset-generator

# Generate all PWA icons from a single source
pwa-asset-generator invokehoneybadger_favicon_32.png icons \
  --background "#030304" \
  --padding "10%" \
  --quality 90
```

## After Generating Assets

### 1. Update manifest.json

Add new icons to the manifest:

```json
{
  "icons": [
    {
      "src": "/invokehoneybadger_favicon_32.png",
      "sizes": "32x32",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/icon-192.webp",
      "sizes": "192x192",
      "type": "image/webp",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/icon-512.webp",
      "sizes": "512x512",
      "type": "image/webp",
      "purpose": "any maskable"
    }
  ]
}
```

### 2. Update Open Graph Tags

Replace placeholder image in `index.html`:

```html
<meta property="og:image" content="https://invokehoneybadger.com/images/og-preview.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:image" content="https://invokehoneybadger.com/images/og-preview.png" />
```

### 3. Regenerate SRI Hashes

If manifest.json changes, regenerate its SRI hash:

```bash
cat manifest.json | openssl dgst -sha384 -binary | openssl base64 -A
```

Update the integrity attribute in `index.html`:

```html
<link rel="manifest" href="/manifest.json"
      integrity="sha384-NEWHASHHERE"
      crossorigin="anonymous" />
```

## Design Guidelines

### Color Palette
- Background: `#030304` (near black)
- Primary (HBV Yellow): `#FFF244`
- Matrix Green: `#6af072`
- Muted Green: `#83a17a`
- Accent Blue: `#3aa0ff`

### Typography
- Font: Monospace (Courier New, Roboto Mono)
- Style: Terminal/hacker aesthetic
- Weight: Bold for emphasis

### Visual Style
- Terminal/command-line inspired
- Matrix rain aesthetic (optional background)
- Hexagon patterns (from site design)
- Minimalist, functional
- High contrast for readability

## Validation

After adding assets, validate with:

1. **PWA Manifest Validator**
   ```bash
   npx pwa-manifest-validator manifest.json
   ```

2. **Lighthouse PWA Audit**
   - Open DevTools
   - Run Lighthouse audit
   - Check "Progressive Web App" category
   - Should score 100/100

3. **Social Preview Testing**
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)
   - [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

## File Structure

After completion, assets should be organized as:

```
invokehoneybadger.github.io/
├── icons/
│   ├── icon-192.png
│   ├── icon-192.webp
│   ├── icon-512.png
│   └── icon-512.webp
├── images/
│   └── og-preview.png
├── invokehoneybadger_favicon.ico (existing)
└── invokehoneybadger_favicon_32.png (existing)
```

## Notes

- All icons should maintain consistent branding
- Test on actual devices (Android, iOS) after deployment
- Monitor file sizes - optimize for web delivery
- Consider adding Apple-specific icons if needed:
  - `apple-touch-icon-180x180.png`
  - `apple-touch-startup-image-*.png`

## References

- [Web App Manifest Spec](https://w3c.github.io/manifest/)
- [PWA Icon Guide](https://web.dev/add-manifest/)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Card Docs](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
