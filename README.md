# InvokeHoneyBadger — HBV (HoneyBadger Vanguard)

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Security](https://img.shields.io/badge/security-hardened-green.svg)

**InvokeHoneyBadger** is the origin project for *HoneyBadger Vanguard (HBV)* — red-team tooling, recon frameworks, and community resources.

This repository contains the official landing page for [invokehoneybadger.com](https://invokehoneybadger.com), deployed via GitHub Pages.

---

## 🦡 What is HBV?

**HoneyBadger Vanguard (HBV)** represents:
- **Red-team tooling** for security professionals
- **Reconnaissance frameworks** for ethical hacking and penetration testing
- **Community resources** for security researchers and practitioners
- **Real-world tradecraft** hardened by operational experience

---

## 📁 Repository Contents

```
invokehoneybadger.github.io/
├── index.html                  # Main landing page (responsive, terminal-themed)
├── styles.css                  # External stylesheet (modular, cacheable)
├── js/                         # JavaScript modules
│   ├── matrix.js               # Matrix rain animation
│   ├── hexagon.js              # Hexagon overlay effects
│   ├── terminal.js             # Terminal stream simulation
│   ├── boot.js                 # Boot sequence with audio
│   └── counter.js              # Visitor counter
├── .github/
│   ├── workflows/
│   │   ├── deploy.yml          # GitHub Pages deployment
│   │   ├── security-scan.yml   # Trivy, TruffleHog, HTML validation, Lighthouse
│   │   ├── codeql.yml          # CodeQL security analysis
│   │   └── optimize-assets.yml # Automatic CSS/JS minification
│   └── dependabot.yml          # Automated dependency updates
├── CNAME                       # Custom domain configuration
├── README.md                   # This file
├── LICENSE                     # MIT License
├── SECURITY.md                 # Security policy and vulnerability reporting
├── DEPLOYMENT.md               # Server configuration and deployment guide
├── CONTRIBUTING.md             # Contribution guidelines
├── _headers                    # HTTP headers config (Netlify/CDN)
├── robots.txt                  # SEO crawler directives
├── sitemap.xml                 # SEO sitemap
├── manifest.json               # PWA manifest
├── .well-known/
│   └── security.txt            # RFC 9116 security contact information
├── invokehoneybadger_favicon.ico
└── invokehoneybadger_favicon_32.png
```

---

## 🚀 Quick Start

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/invokehoneybadger/invokehoneybadger.github.io.git
   cd invokehoneybadger.github.io
   ```

2. **Serve locally**:
   ```bash
   # Using Python 3
   python3 -m http.server 8000

   # Or using Node.js (npx http-server)
   npx http-server -p 8000
   ```

3. **Open in browser**:
   ```
   http://localhost:8000
   ```

### GitHub Pages Deployment

This site is automatically deployed via GitHub Pages:
- **Production URL**: https://invokehoneybadger.com
- **GitHub Pages URL**: https://invokehoneybadger.github.io
- **Auto-deploy**: Pushes to `main` branch trigger automatic deployment

---

## 🔒 Security

### Security Features

This repository implements industry-standard security practices:

- ✅ **Content Security Policy (CSP)** - Prevents XSS and code injection
- ✅ **X-Frame-Options** - Clickjacking protection
- ✅ **X-Content-Type-Options** - MIME-sniffing protection
- ✅ **Referrer-Policy** - Controls referrer information leakage
- ✅ **Permissions-Policy** - Restricts browser feature access
- ✅ **RFC 9116 security.txt** - Standardized vulnerability disclosure
- ✅ **HTTPS Enforcement** - GitHub Pages provides automatic HTTPS

### Reporting Vulnerabilities

If you discover a security vulnerability, please report it responsibly:

- **Email**: security@invokehoneybadger.com
- **Alternative**: hi@invokehoneybadger.com
- **Policy**: See [SECURITY.md](./SECURITY.md) for full details
- **Response Time**: Initial response within 48 hours

**Please do NOT open public GitHub issues for security vulnerabilities.**

---

## 🌐 HBV Network

The InvokeHoneyBadger ecosystem includes:

| Service | URL | Description |
|---------|-----|-------------|
| **Main Site** | [invokehoneybadger.com](https://invokehoneybadger.com) | Primary landing page |
| **API Gateway** | [api.invokehoneybadger.com](https://api.invokehoneybadger.com) | API services |
| **Portal** | [portal.invokehoneybadger.com](https://portal.invokehoneybadger.com) | Operations dashboard |
| **Shop** | [shop.invokehoneybadger.com](https://shop.invokehoneybadger.com) | Official HBV merchandise |
| **GitHub** | [@invokehoneybadger](https://github.com/invokehoneybadger) | Open source projects |
| **X/Twitter** | [@InvokHonyBadgr](https://x.com/InvokHonyBadgr) | Updates and announcements |

---

## 🛠️ Technical Stack

- **HTML5** - Semantic, accessible markup (WCAG AA compliant)
- **CSS3** - Modular external stylesheet with CSS variables
- **Vanilla JavaScript** - ES6+ modular architecture, zero dependencies
- **Canvas API** - Hardware-accelerated matrix rain and hexagon animations
- **Web Audio API** - Terminal boot sound effects
- **GitHub Actions** - CI/CD pipeline with automated testing and deployment
- **CodeQL** - Advanced security analysis
- **Lighthouse CI** - Performance and accessibility audits

### Architecture

**Modular Design:**
- Separate CSS file for better caching and maintainability
- JavaScript split into 5 focused modules for code organization
- Resource hints (preload, preconnect, dns-prefetch) for optimal performance
- Deferred loading for non-critical scripts

### Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📜 License

This project is licensed under the **MIT License**.

See [LICENSE](./LICENSE) for full details.

```
Copyright (c) 2025 InvokeHoneyBadger — HoneyBadger Vanguard (HBV)
```

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. **Fork** this repository
2. **Create a branch** for your feature (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Contribution Guidelines

- Follow existing code style and structure
- Test changes locally before submitting
- Update documentation if adding new features
- Ensure all security headers remain intact
- Do not commit sensitive data (credentials, keys, etc.)

---

## 📞 Contact

- **Email**: hi@invokehoneybadger.com
- **Security**: security@invokehoneybadger.com
- **X/Twitter**: [@InvokHonyBadgr](https://x.com/InvokHonyBadgr)
- **GitHub**: [@invokehoneybadger](https://github.com/invokehoneybadger)

---

## 📌 Project Status

**Status**: ✅ Active Development
**Last Updated**: December 2025
**Maintained By**: InvokeHoneyBadger Team

### Recent Improvements (Phase 3)

✅ **Privacy & Third-Party Removal**
- Removed countapi.xyz visitor counter (privacy-first approach)
- Replaced with client-side status display
- No external tracking or API calls

✅ **Enhanced SEO & Social Sharing**
- Added JSON-LD structured data (Organization, WebSite, WebPage schemas)
- Enhanced Open Graph meta tags
- Twitter Card optimization
- Improved social media preview support

✅ **Security Hardening**
- Removed `'unsafe-inline'` from script-src CSP directive
- Moved all inline styles to external CSS
- Added Subresource Integrity (SRI) hashes for all external resources
- Updated security.txt with additional fields

✅ **PWA Enhancements**
- Updated manifest.json with better PWA configuration
- Theme color optimization
- Edge Side Panel support
- Ready for additional PWA icons (see ASSETS.md)

✅ **Documentation**
- Created comprehensive asset generation guide (ASSETS.md)
- Instructions for PWA icons (192x192, 512x512)
- Open Graph image specifications
- WebP conversion guidelines

### Phase 2 Improvements

✅ **Code Organization**
- Extracted CSS into external `styles.css` file
- Modularized JavaScript into 5 separate files
- Improved maintainability and browser caching

✅ **Security & Quality**
- Added CodeQL workflow for advanced security analysis
- Automated asset minification on deployment
- HTML5 compliant security headers configuration
- Comprehensive deployment documentation

✅ **Performance**
- Resource hints (DNS prefetch, preconnect, preload)
- Deferred loading for non-critical scripts
- Optimized script execution order
- Automated minification workflow

✅ **Accessibility (WCAG AA)**
- Skip-to-content link for keyboard navigation
- Enhanced ARIA labels and roles
- Focus indicators on all interactive elements
- Screen reader optimizations

✅ **CI/CD Pipeline**
- GitHub Actions deployment workflow
- Security scanning (Trivy, TruffleHog)
- HTML5 validation
- Lighthouse performance audits
- Automated dependency updates via Dependabot

---

## 🦾 Tagline

> *"Inspired by live tradecraft. Hardened by real-world ops. Built in the shadows."*
> — R.M.

---

**Built with ☕ and BRRRRT.**
