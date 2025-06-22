# Squirly Comedy Website

A modern, responsive website for comedy performer Squirly, built with HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean design with purple and orange color scheme matching your brand
- **Interactive Elements**: 
  - Quote carousel with auto-rotation
  - Smooth scrolling navigation
  - Mobile-friendly hamburger menu
  - Contact form with validation
  - Fade-in animations
- **Performance Optimized**: Fast loading with modern web standards
- **SEO Ready**: Semantic HTML structure for better search engine visibility

## File Structure

```
squirly-website/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Getting Started

1. **Local Development**: Simply open `index.html` in your web browser to view the site locally.

2. **Live Preview**: You can also run a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have it installed)
   npx serve .
   ```

## Deployment Options

### Option 1: GitHub Pages (Free)
1. Created a new repository on GitHub - squirly-website
2. Pushed all files to the repository
3. Go to Settings > Pages
4. Select "Deploy from a branch" and choose "main"
5. Your site will be available at `https://alycest.github.io/squirly-website`

### Traditional Web Hosting - using web central (beginner package)
Upload all files to your web hosting provider's public folder (usually `public_html` or `www`).

## Customization Guide & Updating Content

#### Personal Information
- Edit the hero section in `index.html` (lines 45-50)
- Update contact information (lines 140-155)
- Modify the about section (lines 110-120)

#### Show Information
- Update show details in the "Next Show" section (lines 85-105)
- Add new shows by duplicating the show card structure

#### Quotes/Testimonials
- Edit quotes in `script.js` (lines 12-24)
- Add new quotes to the `quotes` array

### Styling Changes

#### Colors
The main brand colors are defined in `styles.css`:
- Purple: `#4b398b` (primary)
- Orange: `#ff6b35` (accent)
- Update these throughout the CSS file to change the color scheme

#### Fonts
- Current font: Inter (Google Fonts)
- Change the font import in `index.html` (line 7) and update `font-family` in `styles.css`

#### Layout
- Modify grid layouts in the `.content-grid` and other grid classes
- Adjust spacing by changing padding and margin values

### Adding New Sections

1. Add HTML structure in `index.html`
2. Add corresponding styles in `styles.css`
3. Add any interactive functionality in `script.js`

### SEO Optimization

#### Meta Tags
Add these to the `<head>` section of `index.html`:
```html
<meta name="description" content="Squirly - Professional comedy performer in Australia">
<meta name="keywords" content="comedy, performer, Australia, stand-up, entertainment">
<meta property="og:title" content="Squirly - Comedy Performer">
<meta property="og:description" content="Professional comedy performer bringing laughter across Australia">
<meta property="og:image" content="path-to-your-image.jpg">
```

#### Images
- Add images to improve visual appeal and SEO
- Use descriptive `alt` attributes
- Optimize images for web (WebP format recommended)

## Domain Setup

### Using Your Existing Domain (squirly.com.au)

1. **DNS Configuration**: 
   - If using GitHub Pages: Create a CNAME record pointing to `yourusername.github.io` on web central
   - If using traditional hosting: Point A records to your hosting provider's IP

2. **SSL Certificate**: Most modern hosting providers offer free SSL certificates

3. **Redirects**: Set up redirects from your old Wix site to the new one

## Content Management

### Blog Posts
- Currently static content in the blog section
- Consider integrating with:
  - Headless CMS (Strapi, Contentful)
  - Static site generator (Jekyll, Huls
  - Simple markdown files

### Video Content
- Replace video placeholders with actual content
- Consider using:
  - YouTube embeds
  - Vimeo embeds
  - Self-hosted videos

## Performance Tips

1. **Image Optimization**: Compress images and use modern formats (WebP)
2. **Minification**: Minify CSS and JavaScript for production
3. **CDN**: Use a Content Delivery Network for faster global loading
4. **Caching**: Configure proper browser caching headers

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Maintenance

### Regular Updates
- Keep content fresh (shows, news, blog posts)
- Update testimonials and quotes
- Monitor site performance
- Check for broken links

### Analytics
Consider adding:
- Google Analytics
- Google Search Console
- Social media tracking

## Support

For technical questions or customization help:
1. Check this README first
2. Search online documentation for HTML/CSS/JavaScript
3. Consider hiring a web developer for major changes

## License

This website template is created specifically for Squirly. Feel free to modify and use as needed.

---

**Next Steps:**
1. Customize the content to match your specific needs
2. Add your own images and media
3. Test thoroughly on different devices
4. Deploy to your chosen hosting platform
5. Set up your domain
6. Launch and promote your new website!
