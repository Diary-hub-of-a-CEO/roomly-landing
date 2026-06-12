# RoomLy Landing Page

A modern, responsive landing page for RoomLy — Nepal's smart housing platform.

## 📁 Project Structure

```
roomly-landing/
├── index.html       # Main HTML file with all sections
├── styles.css       # Complete CSS styling
├── script.js        # JavaScript for interactivity
└── README.md        # This file
```

## 🚀 Quick Start

### 1. **Open in VS Code**
   - Open VS Code
   - File → Open Folder → Select `roomly-landing` folder
   - Or drag the folder into VS Code

### 2. **Install Live Server Extension (Optional but Recommended)**
   - Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X)
   - Search "Live Server"
   - Install by Ritwick Dey
   - Right-click `index.html` → "Open with Live Server"

### 3. **Or Open Directly**
   - Right-click `index.html`
   - Select "Open in Default Browser"

## ✨ Features Implemented

✅ **Responsive Design** - Works on mobile, tablet, and desktop
✅ **Interactive FAQ** - Accordion toggle functionality
✅ **Form Handling** - Early access and landlord signup forms
✅ **Smooth Scrolling** - Navigation links scroll smoothly
✅ **Animations** - Fade-in effects as you scroll
✅ **Modern UI** - Clean, professional design
✅ **Accessibility** - Semantic HTML, proper contrast

## 🎨 Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #4f46e5;      /* Main brand color */
    --secondary-color: #06b6d4;    /* Accent color */
    --dark-bg: #0f172a;            /* Dark background */
    --light-bg: #f8fafc;           /* Light background */
}
```

### Content
- Edit text in `index.html`
- Update company name/email in footer
- Modify form fields as needed

### Styling
- Mobile breakpoints are at 768px and 480px
- Adjust padding/margins in `styles.css`
- All font sizes use `rem` units for easy scaling

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px - 1199px (adjusted grid)
- **Mobile**: Below 768px (stacked layout)
- **Small Mobile**: Below 480px (minimal layout)

## 🔧 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Form Setup

Currently, forms show alerts on submission. To connect to a backend:

**In `script.js`, replace the form handling with:**

```javascript
// Example with Fetch API
earlyAccessForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(earlyAccessForm);
    
    try {
        const response = await fetch('/api/early-access', {
            method: 'POST',
            body: formData
        });
        const result = await response.json();
        alert('Success: ' + result.message);
    } catch (error) {
        alert('Error: ' + error.message);
    }
});
```

## 🎯 Deployment Options

### Netlify (Easiest)
1. Drag & drop folder to netlify.com/drop
2. Done! Get a live URL instantly

### Vercel
1. Push to GitHub
2. Connect repository to Vercel
3. Auto-deploys on every push

### GitHub Pages
1. Push to GitHub
2. Settings → Pages → Enable
3. Deployed at `yourusername.github.io/roomly-landing`

## 🛠️ Additional Features to Add

- [ ] Dark mode toggle
- [ ] Image sliders for listings
- [ ] Map integration (Google Maps)
- [ ] Testimonial carousel
- [ ] Blog/News section
- [ ] Newsletter subscription
- [ ] Multi-language support
- [ ] Analytics tracking (Google Analytics)

## 📞 Contact & Support

- Email: hello@roomlynepal.com
- Website: roomlynepal.com

## 📄 License

© 2026 RoomLy. All Rights Reserved.

---

**Made with ❤️ for Nepal**