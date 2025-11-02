# Mobile Portfolio Template - Next.js

A beautiful, responsive mobile portfolio website template built with Next.js. Perfect for creating a Linktree-style page with your profile, social links, and featured project. **You only need to edit one file to customize everything!**

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see your portfolio.

### 3. Build for Production

```bash
npm run build
npm start
```

## 📝 Customizing Your Portfolio

**Everything you need to customize is in one file: `content.config.ts`**

### Step 1: Add Your Images

First, add your images to the `/public` folder:

```
/public
  ├── profile.png              ← Your profile photo
  ├── project-image.png        ← Your featured project image
  ├── background.png           ← Your background image
  └── /icons
      ├── instagram.svg        ← Instagram icon (should have transparent background)
      ├── threads.svg          ← Threads icon (should have transparent background)
      ├── github.svg           ← GitHub icon (should have transparent background)
      └── linkedin.svg        ← LinkedIn icon (should have transparent background)
```

**Image Recommendations:**
- **Profile photo**: 400x400px or larger (will be displayed as a circle)
- **Project image**: 1200x800px or larger (will scale automatically)
- **Background**: Any size (will be displayed at original size)
- **Icons**: SVG format with transparent backgrounds

**Image Formats:** You can use `.png`, `.jpg`, `.jpeg`, or `.svg` for any image. Make sure icon SVGs have transparent backgrounds.

### Step 2: Edit `content.config.ts`

Open `content.config.ts` in the root folder. This is the **ONLY file you need to edit** to customize your portfolio.

The file contains detailed comments guiding you through every change. Simply:

1. Update your profile information (name, bio, image)
2. Update your social media links (add/remove/edit links)
3. Update your featured project information
4. Update your background image path

All instructions are included directly in the file comments!

### Example Customization

```typescript
export const CONTENT = {
  profile: {
    image: "/profile.png",           // Your profile image
    name: "Your Name",                // Your name
    bio: "Your bio text here",        // Your bio
  },
  // ... rest of the config
};
```

## 🎨 Customization Options

### Adding More Social Links

In `content.config.ts`, add more items to the `socialLinks` array:

```typescript
socialLinks: [
  {
    name: "Instagram",
    url: "https://instagram.com/yourhandle",
    icon: "/icons/instagram.svg",
  },
  {
    name: "Twitter",              // Add new social link
    url: "https://twitter.com/yourhandle",
    icon: "/icons/twitter.svg",
  },
  // Add as many as you want!
],
```

### Removing Social Links

Simply delete the entire object `{ name: "...", url: "...", icon: "..." }` from the `socialLinks` array.

### Changing Font

The template uses "Dreaming Outloud Sans" font. To change it:

1. Place your font file in `/public/fonts/`
2. Update `app/globals.css` - find the `@font-face` declaration and update:
   - `font-family` name
   - `src: url()` path to your font file
   - All `font-family` references in the CSS

## 📱 Features

- ✅ Fully responsive mobile-first design
- ✅ Smooth animations and premium micro-interactions
- ✅ Scrollable content (works on all screen sizes)
- ✅ Easy content management (one config file)
- ✅ Optimized images with Next.js Image component
- ✅ SEO-friendly structure
- ✅ Fast loading times

## 🔧 Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **CSS** - Custom styling with animations
- **Next/Image** - Optimized image handling

## 📦 Project Structure

```
linktree/
├── app/
│   ├── globals.css          # All styles (edit for advanced customization)
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page component
├── public/
│   ├── fonts/               # Font files
│   ├── icons/               # Social media icons
│   └── (your images here)   # Your profile, project, and background images
├── content.config.ts        # 🎯 EDIT THIS FILE - All content customization
├── package.json
├── tsconfig.json
└── next.config.js
```

## 💡 Tips & Best Practices

1. **Image Optimization**: Keep images under 500KB for fast loading
2. **Icon Format**: Use SVG icons with transparent backgrounds for best results
3. **Testing**: Test on mobile devices or use browser dev tools mobile view
4. **Profile Photo**: Use a square image for best results (will be cropped to circle)
5. **Background Image**: Large images will display at original size
6. **Bio Text**: The words "design", "code", "focused", and "consistent" are automatically underlined in the bio

## 🚢 Deployment

### Deploy to Vercel (Recommended - Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Import Project" and select your repository
4. Click "Deploy" - Vercel will automatically detect Next.js
5. Your site will be live in minutes!

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign in
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

### Deploy to Other Platforms

This is a standard Next.js application, so it can be deployed to any platform that supports Next.js:
- AWS Amplify
- Railway
- DigitalOcean App Platform
- Heroku
- Any VPS with Node.js

## ❓ FAQ

**Q: Do I need to know coding to use this template?**  
A: Basic knowledge helps, but the `content.config.ts` file has detailed comments guiding you through every step.

**Q: Can I change the colors and styling?**  
A: Yes! Edit `app/globals.css` to change colors, fonts, spacing, and more. All styles are documented with comments.

**Q: How do I add more social links?**  
A: Simply add more objects to the `socialLinks` array in `content.config.ts`. See the file comments for detailed instructions.

**Q: Can I remove the project card?**  
A: Yes, but you'll need to edit `app/page.tsx` to remove that section. The template is designed to be customizable.

**Q: The background image isn't showing.**  
A: Make sure the image path in `content.config.ts` matches the file location in `/public`. The path should start with `/` (e.g., `/background.png`).

**Q: How do I change the font?**  
A: See the "Changing Font" section above. You'll need to update the font files and CSS.

## 📄 License

This is a commercial template. You have purchased the right to use and modify this template for your own projects. You may not redistribute or resell this template.

## 🆘 Need Help?

- Check the comments in `content.config.ts` - they contain detailed instructions
- Review the Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
- All styling questions can be answered by checking `app/globals.css`

## 🎉 That's It!

Your mobile portfolio is ready to customize. Just edit `content.config.ts` and you're done!

---

**Remember**: The only file you need to edit for content is `content.config.ts` - everything else is optional for advanced customization.
