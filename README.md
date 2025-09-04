# Modern Portfolio Website

A fully responsive, modern portfolio website built with React, TypeScript, and Tailwind CSS featuring a dark theme with light mode toggle.

## Features

### Navigation
- **Responsive Design**: Smooth transition between desktop and mobile views
- **Mobile-First**: Hamburger menu activates at 768px breakpoint
- **Smooth Scrolling**: Enhanced navigation with smooth scroll behavior
- **Active States**: Visual indicators for current section
- **Accessibility**: Proper ARIA labels and keyboard navigation

### Contact Form with EmailJS Integration
- **Real Email Sending**: Integrated with EmailJS for actual email delivery
- **Form Validation**: Client-side validation with real-time feedback
- **Loading States**: Visual feedback during form submission
- **Error Handling**: Comprehensive error messages and recovery
- **Mobile Optimized**: Touch-friendly form inputs
- **Security**: Basic CSRF protection and input sanitization

## EmailJS Setup

To use the contact form, you need to set up EmailJS:

1. **Create EmailJS Account**: Visit [www.emailjs.com](https://www.emailjs.com) and create a free account
2. **Create Email Service**: Add your email service (Gmail, Outlook, etc.)
3. **Create Email Template**: Design your email template with these variables:
   - `{{name}}` - Sender's name
   - `{{email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Message content
4. **Get Credentials**: Note your Service ID, Template ID, and Public Key
5. **Update Configuration**: Replace the placeholder values in `src/components/Contact.tsx`

### Current EmailJS Configuration
```javascript
const EMAILJS_SERVICE_ID = 'service_portfolio'; // Update this
const EMAILJS_TEMPLATE_ID = 'template_portfolio'; // Update this
const EMAILJS_PUBLIC_KEY = 'gfw60VbCzbF5d1FJX'; // Your provided key
```

## Technical Specifications

### Responsive Breakpoints
- **Mobile**: < 768px (hamburger menu active)
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Form Validation Rules
- **Name**: Required, minimum 2 characters
- **Email**: Required, valid email format
- **Subject**: Optional
- **Message**: Required, minimum 10 characters

### Performance Features
- **Lazy Loading**: Images load as they enter viewport
- **Smooth Animations**: CSS transitions with reduced motion support
- **Optimized Bundle**: Tree-shaking and code splitting
- **Accessibility**: WCAG 2.1 AA compliant

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Security Features
- Input sanitization
- XSS protection
- CSRF token validation
- Rate limiting ready (server-side implementation needed)

## Customization

### Colors
Update CSS custom properties in `src/styles/main.css`:
```css
:root {
  --color-primary: #0a84ff;
  --color-secondary: #af52de;
  --color-accent: #30d158;
  /* ... */
}
```

### Content
Update personal information in respective component files:
- `src/components/Hero.tsx` - Main introduction
- `src/components/About.tsx` - About section and services
- `src/components/Projects.tsx` - Portfolio projects
- `src/components/Contact.tsx` - Contact information

## License
MIT License - feel free to use this template for your own portfolio!