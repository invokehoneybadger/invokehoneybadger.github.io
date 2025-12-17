# Deployment Guide

## Security Headers Configuration

### Important Note
Some security headers cannot be set via HTML `<meta>` tags according to HTML5 specification. These must be configured at the **server or CDN level**.

### Required HTTP Response Headers

For optimal security, configure the following headers on your web server or CDN:

```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://api.countapi.xyz; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self' https://api.countapi.xyz; frame-ancestors 'none'; base-uri 'self'; form-action 'self';
```

### Platform-Specific Configuration

#### GitHub Pages
GitHub Pages has limited support for custom headers. Consider:
1. Using a CDN like Cloudflare in front of GitHub Pages
2. Migrating to Netlify or Vercel for better header control

#### Cloudflare
Add these headers in **Rules** → **Transform Rules** → **Modify Response Header**

#### Netlify
Use the `_headers` file (already included in this repository)

#### Vercel
Create a `vercel.json` file:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()"
        }
      ]
    }
  ]
}
```

#### Apache (.htaccess)
```apache
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options "nosniff"
    Header always set X-Frame-Options "DENY"
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
    Header always set Permissions-Policy "geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()"
</IfModule>
```

#### Nginx
```nginx
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "DENY" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()" always;
```

## Asset Optimization

The repository includes automated minification workflows:
- CSS files are minified to `.min.css`
- JS files are minified to `.min.js`
- Minification runs automatically on push to main branch

## Performance Recommendations

1. **Enable HTTP/2** on your server for better resource loading
2. **Enable Gzip/Brotli compression** for text assets
3. **Configure proper cache headers** (see `_headers` file)
4. **Use a CDN** for global distribution
5. **Enable HTTPS** (required for many modern web features)

## Testing

Run local tests before deployment:
```bash
# Install dependencies
npm install -g http-server lighthouse

# Serve locally
http-server . -p 8000

# Run Lighthouse audit
lighthouse http://localhost:8000 --view

# Validate HTML
npx html-validator --file=index.html
```

## CI/CD Pipeline

The repository includes GitHub Actions workflows for:
- **Deployment** (`deploy.yml`) - Automatic deployment to GitHub Pages
- **Security Scanning** (`security-scan.yml`) - Trivy, TruffleHog, HTML validation, Lighthouse
- **CodeQL Analysis** (`codeql.yml`) - Advanced security analysis
- **Asset Optimization** (`optimize-assets.yml`) - Automatic minification

All workflows run automatically on push/PR to main branch.
