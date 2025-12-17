# Contributing to InvokeHoneyBadger

Thank you for your interest in contributing to **HoneyBadger Vanguard (HBV)**! We welcome contributions from the security community.

## 🦡 Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it before contributing.

## 🚀 How to Contribute

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce** the issue
- **Expected behavior** vs actual behavior
- **Screenshots** (if applicable)
- **Browser/environment** details
- **Additional context** that may help

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear, descriptive title**
- **Provide detailed description** of the proposed functionality
- **Explain why this enhancement would be useful**
- **List any alternatives** you've considered

### Security Vulnerabilities

**NEVER** open a public issue for security vulnerabilities. Instead:

- Email: **security@invokehoneybadger.com**
- See [SECURITY.md](SECURITY.md) for full policy
- We'll respond within 48 hours

## 💻 Development Process

### 1. Fork & Clone

```bash
# Fork the repository on GitHub, then:
git clone https://github.com/YOUR_USERNAME/invokehoneybadger.github.io.git
cd invokehoneybadger.github.io
```

### 2. Create a Branch

```bash
# Create a feature branch
git checkout -b feature/your-feature-name

# Or for bug fixes
git checkout -b fix/issue-description
```

### 3. Make Changes

- Follow existing code style and conventions
- Keep changes focused and atomic
- Test thoroughly in multiple browsers
- Ensure all security headers remain intact

### 4. Test Locally

```bash
# Serve locally for testing
python3 -m http.server 8000

# Or with Node.js
npx http-server -p 8000
```

Test in:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### 5. Commit Your Changes

We use **Conventional Commits** for clear history:

```bash
# Feature
git commit -m "feat: add dark mode toggle"

# Bug fix
git commit -m "fix: correct email link in footer"

# Documentation
git commit -m "docs: update README with new instructions"

# Security
git commit -m "security: patch XSS vulnerability in search"

# Performance
git commit -m "perf: optimize canvas rendering"

# Refactor
git commit -m "refactor: extract CSS into separate file"
```

**Commit Types:**
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation only
- `style:` - Code style/formatting (no logic change)
- `refactor:` - Code restructuring (no behavior change)
- `perf:` - Performance improvement
- `test:` - Adding/updating tests
- `security:` - Security fix
- `chore:` - Maintenance tasks

### 6. Push & Create Pull Request

```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub with:
- **Clear title** following conventional commits
- **Description** of what changed and why
- **Screenshots** (if UI changes)
- **Testing performed**
- **Related issues** (if applicable)

## 📋 Pull Request Guidelines

### Before Submitting

- [ ] Code follows existing style and conventions
- [ ] All security headers remain intact
- [ ] No sensitive data (credentials, keys) committed
- [ ] Tested in multiple browsers
- [ ] Documentation updated (if needed)
- [ ] Commit messages follow conventional commits
- [ ] PR description is clear and complete

### PR Review Process

1. **Automated checks** run (when CI/CD is configured)
2. **Maintainer review** (usually within 3-5 days)
3. **Requested changes** addressed
4. **Approval & merge** by maintainer

## 🎨 Style Guidelines

### HTML
- Use semantic HTML5 elements
- Include ARIA labels for accessibility
- Maintain proper indentation (2 spaces)

### CSS
- Use CSS variables for theming
- Keep specificity low
- Group related properties
- Comment complex sections

### JavaScript
- Use modern ES6+ syntax
- Prefer `const` over `let`, avoid `var`
- Use descriptive variable names
- Add comments for complex logic
- Handle errors gracefully

### File Naming
- Use lowercase with hyphens: `file-name.html`
- Be descriptive: `security-policy.md` not `sp.md`

## 🔒 Security Requirements

All contributions must:

- ✅ Maintain existing Content Security Policy
- ✅ Not introduce XSS, injection, or CSRF vulnerabilities
- ✅ Not expose sensitive information in errors/logs
- ✅ Follow OWASP security best practices
- ✅ Not include hardcoded credentials or API keys
- ✅ Validate and sanitize all user input

## 🧪 Testing

Currently, this is a static site without automated tests. When contributing:

- **Manual testing** in multiple browsers is required
- **Responsive testing** on mobile devices
- **Accessibility testing** (keyboard navigation, screen readers)
- **Performance testing** (check load times, animations)

## 📝 Documentation

Update documentation when:

- Adding new features
- Changing existing functionality
- Modifying configuration
- Adding dependencies

Files to update:
- `README.md` - For user-facing changes
- Inline comments - For code complexity
- `CHANGELOG.md` - For version changes

## 🤝 Community

### Getting Help

- **GitHub Issues** - For bugs and feature requests
- **Email** - hi@invokehoneybadger.com
- **X/Twitter** - [@InvokHonyBadgr](https://x.com/InvokHonyBadgr)

### Recognition

Contributors will be:
- Listed in release notes
- Credited in CHANGELOG.md
- Acknowledged on the project page (if significant contribution)

## 📜 License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).

---

## Questions?

If you have questions about contributing, please:
- Check existing [Issues](https://github.com/invokehoneybadger/invokehoneybadger.github.io/issues)
- Open a new issue with the `question` label
- Email: hi@invokehoneybadger.com

**Thank you for contributing to HBV!** 🦡

---

*Built with ☕ and BRRRRT.*
