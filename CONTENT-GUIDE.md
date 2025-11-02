# 📝 Content Editing Guide

## Where to Edit Your Content

### ✏️ All Text & Links → `content.config.ts`

This is your **single source of truth** for all content!

#### Profile Section
```typescript
profile: {
  image: "/your-photo.png",        // Change path to your image
  name: "Your Name",               // Your display name
  bio: "Your bio text here",       // Your bio (keep it concise!)
}
```

#### Social Links
```typescript
socialLinks: [
  {
    name: "Instagram",
    url: "https://instagram.com/yourhandle",  // ← Update URL
    icon: "/icons/instagram.svg",             // ← Update icon path
  },
  {
    name: "LinkedIn",                         // ← You can add more!
    url: "https://linkedin.com/in/yourname",
    icon: "/icons/linkedin.svg",
  },
]
```

**To add more social links**: Just copy a social link block and add it to the array!

**To remove a link**: Delete the entire block.

#### Featured Project
```typescript
featuredProject: {
  title: "My Project — Coming 2025",  // Project title
  image: "/project-screenshot.png",    // Project image
  spotsLeft: 50,                       // Number to display
  ctaText: "Get Early Access ->",      // Button text
  ctaUrl: "https://yourproject.com",   // Button link
}
```

---

## 🎨 Images to Replace

### Required Images

| File Location | Purpose | Recommended Size |
|---------------|---------|------------------|
| `/public/profile.png` | Your profile photo | 400x400px |
| `/public/project-image.png` | Featured project screenshot | 1200x800px |
| `/public/background.jpg` | Page background | 1080x1920px |
| `/public/icons/instagram.svg` | Instagram icon | 40x40px |
| `/public/icons/threads.svg` | Threads icon | 40x40px |
| `/public/icons/github.svg` | GitHub icon | 40x40px |

### How to Replace Images

1. Save your image in the `/public` folder
2. Update the path in `content.config.ts`

Example:
```typescript
// Before
image: "/placeholder-profile.svg"

// After (if you saved as profile.jpg)
image: "/profile.jpg"
```

---

## 🎨 Styling (Optional)

### Want to change colors?

Edit **`app/globals.css`**:

#### Background Color
```css
/* Line 16 */
background-color: #e8e4dc;  /* Change this hex code */
```

#### Button Color
```css
/* Line 164 */
.cta-button {
  background: #c4b5fd;  /* Change button color */
}
```

#### Profile Name Badge
```css
/* Line 60 */
.profile-name {
  background: white;        /* Badge background */
  border: 2px solid #1a1a1a; /* Badge border */
}
```

---

## 🚫 What NOT to Change

Unless you know React/Next.js, avoid editing:
- `app/page.tsx` - Main component structure
- `app/layout.tsx` - App layout
- `package.json` - Dependencies
- `tsconfig.json` - TypeScript config
- `next.config.js` - Next.js config

---

## ✅ Quick Checklist

- [ ] Installed dependencies (`npm install`)
- [ ] Updated `content.config.ts` with your info
- [ ] Added your profile photo to `/public`
- [ ] Added your project image to `/public`
- [ ] Added your background image to `/public`
- [ ] Added your social icons to `/public/icons`
- [ ] Updated all image paths in `content.config.ts`
- [ ] Tested locally (`npm run dev`)
- [ ] Ready to deploy! 🚀

---

## 💡 Pro Tips

1. **Keep it simple**: Less text = more impact on mobile
2. **Optimize images**: Compress images before uploading (use tinypng.com)
3. **Test mobile**: Always preview on a mobile device
4. **Fast loading**: Keep images under 500KB each

---

Need help? Open an issue or check the full README.md!

