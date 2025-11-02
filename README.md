# Mobile Portfolio - Next.js

A clean, single-page mobile portfolio website with no scrolling. Perfect for creating a Linktree-style page with your profile, social links, and featured project.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm start
```

## 📝 Customizing Your Content

All content is centralized in **`content.config.ts`** for easy editing!

### Step 1: Replace Images

Add your images to the `/public` folder:

- **Profile photo**: Save as `/public/profile.png` (or any format)
- **Project image**: Save as `/public/project-image.png`
- **Background image**: Save as `/public/background.jpg`
- **Social icons**: Save in `/public/icons/` folder
  - `/public/icons/instagram.svg`
  - `/public/icons/threads.svg`
  - `/public/icons/github.svg`

### Step 2: Update content.config.ts

Open `content.config.ts` and update all the fields:

```typescript
export const CONTENT = {
  // Update your profile info
  profile: {
    image: "/profile.png",           // ← Change this to your image path
    name: "Your Name",                // ← Your name
    bio: "Your bio text here",        // ← Your bio
  },

  // Update your social links
  socialLinks: [
    {
      name: "Instagram",
      url: "https://instagram.com/yourhandle",  // ← Your URL
      icon: "/icons/instagram.svg",              // ← Your icon
    },
    // Add more or remove as needed
  ],

  // Update your featured project
  featuredProject: {
    title: "Your Project Title",
    image: "/project-image.png",       // ← Your project image
    spotsLeft: 53,                     // ← Number to display
    ctaText: "Join now ->",            // ← Button text
    ctaUrl: "https://yourproject.com", // ← Button link
  },

  // Update background
  backgroundImage: "/background.jpg",  // ← Your background
};
```

### Step 3: Update Background in CSS (Optional)

If you want to change the background image through CSS instead:

Open `app/globals.css` and update line 18:

```css
background-image: url('/your-background.jpg');
```

## 🎨 Customizing Colors

To change the color scheme, edit `app/globals.css`:

- **Background color**: Line 15 `background-color`
- **Button color**: Line 164 `.cta-button` background
- **Border colors**: Search for `border` properties

## 📱 Responsive Design

The portfolio automatically adjusts for different screen heights:
- Optimized for mobile screens (no scrolling needed)
- Scales down elements on smaller devices
- Maximum width: 480px for optimal mobile viewing

## 🔧 Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **CSS Modules** - Styling
- **Next/Image** - Optimized images

## 📦 Project Structure

```
linktree/
├── app/
│   ├── globals.css          # All styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page component
├── public/
│   ├── icons/               # Social media icons
│   ├── placeholder-*.svg    # Placeholder images
│   └── (your images here)   # Add your actual images
├── content.config.ts        # 🎯 EDIT THIS FILE FOR CONTENT
├── package.json
├── tsconfig.json
└── next.config.js
```

## 💡 Tips

1. **Image Formats**: Use `.png` or `.jpg` for photos, `.svg` for icons
2. **Image Sizes**: 
   - Profile: 400x400px recommended
   - Project: 1200x800px recommended
   - Icons: 40x40px or vector (SVG)
3. **Testing**: Always test on a mobile device or mobile view in browser
4. **Performance**: Keep images under 500KB for fast loading

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click!

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

## 📄 License

Feel free to use this template for your personal portfolio!

## 🤝 Need Help?

- Check the Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
- All content editing happens in `content.config.ts`
- All styling is in `app/globals.css`

---

Built with ❤️ using Next.js

