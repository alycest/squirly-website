# Squirly Website - Deployment Guide

## Quick Start - Get Your Site Live in 5 Minutes

### Option 1: GitHub Pages (Recommended - Free)

1. **Create GitHub Account** (if you don't have one)
   - Go to [github.com](https://github.com) and sign up

2. **Create New Repository**
   - Click "New repository"
   - Name it `squirly-website` 
   - Make it public
   - Don't initialize with README (we have files already)

3. **Upload Your Files**
   - Click "uploading an existing file"
   - Drag and drop all files from the `squirly-website` folder
   - Commit the files

4. **Enable GitHub Pages**
   - Go to Settings > Pages
   - Source: "Deploy from a branch"
   - Branch: "main"
   - Click Save

5. **Your site will be live at:**
   `https://yourusername.github.io/squirly-website`

### Option 2: Netlify (Easiest - Free)

1. **Go to [netlify.com](https://netlify.com)**
2. **Drag and drop** the entire `squirly-website` folder onto their homepage
3. **Get instant live URL** - your site is live immediately!
4. **Optional:** Connect your custom domain `squirly.com.au`

### Option 3: Traditional Web Hosting

1. **Access your hosting control panel**
2. **Upload files** to `public_html` or `www` folder
3. **Your site is live** at your domain

## Setting Up Your Custom Domain (squirly.com.au)

### For GitHub Pages:
1. In your repository, go to Settings > Pages
2. Add `www.squirly.com.au` in the Custom domain field
3. Update your DNS records:
   - CNAME record: `www` → `yourusername.github.io`
   - A record: `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`

### For Netlify:
1. In Netlify dashboard, go to Domain settings
2. Add custom domain `squirly.com.au`
3. Follow their DNS instructions

### For Traditional Hosting:
1. Point your domain to your hosting provider's nameservers
2. Upload files to the web root directory

## Migrating from Wix

### Before You Switch:
1. **Backup your Wix content** - save any images, text, or files you want to keep
2. **Test your new site** thoroughly on different devices
3. **Set up redirects** if needed for SEO

### Content Migration:
1. **Images**: Download from Wix and add to your new site
2. **Blog posts**: Copy content to the blog section
3. **Contact info**: Update in the contact section
4. **Show information**: Update in the "Next Show" section

### SEO Considerations:
1. **Keep the same URL structure** where possible
2. **Set up 301 redirects** from old Wix URLs to new ones
3. **Update Google Search Console** with your new domain
4. **Submit new sitemap** to search engines

## Customization Quick Reference

### Update Show Information:
Edit `index.html` lines 85-105:
```html
<div class="show-venue">
    <h3>Your Event Name</h3>
    <p>Your Show Details</p>
</div>
<div class="show-time">
    <span class="time">7pm</span>
</div>
```

### Add New Quotes:
Edit `script.js` lines 12-24:
```javascript
const quotes = [
    {
        text: "Your new quote here",
        author: "Source, Year"
    }
];
```

### Update Contact Info:
Edit `index.html` lines 140-155:
```html
<div class="contact-method">
    <strong>Email:</strong>
    <a href="mailto:your@email.com">your@email.com</a>
</div>
```

### Change Colors:
Edit `styles.css` - find and replace:
- `#4b398b` (purple) with your new primary color
- `#ff6b35` (orange) with your new accent color

## Testing Checklist

Before going live, test:
- [ ] All navigation links work
- [ ] Quote carousel functions
- [ ] Contact form validation
- [ ] Mobile responsiveness
- [ ] All sections display correctly
- [ ] Images load properly
- [ ] Site loads quickly

## Maintenance

### Regular Updates:
- Update show information
- Add new testimonials/quotes
- Post blog updates
- Keep contact information current

### Performance Monitoring:
- Use Google PageSpeed Insights
- Monitor site uptime
- Check for broken links monthly

## Support

### Common Issues:
1. **Site not loading**: Check file paths and hosting setup
2. **Images not showing**: Verify image file paths
3. **Mobile issues**: Test responsive design
4. **Form not working**: Check JavaScript console for errors

### Getting Help:
- Check browser developer console for errors
- Validate HTML/CSS using online validators
- Search Stack Overflow for specific issues

## Next Steps After Deployment

1. **Set up analytics** (Google Analytics)
2. **Configure SEO** (meta tags, sitemap)
3. **Add social media links**
4. **Set up email marketing** integration
5. **Consider adding** booking system integration
6. **Plan content strategy** for blog and updates

---

**Congratulations!** You now have full control over your website and can update it anytime without Wix limitations.