# Quick Setup Guide

## 🎯 Your Portfolio is Ready!

Follow these 3 simple steps to customize your mobile portfolio:

## Step 1: Install & Run

```bash
npm install
npm run dev
```

Visit **http://localhost:3000** to see your portfolio!

## Step 2: Add Your Images

Place your images in the `/public` folder:

```
/public
  ├── profile.png          ← Your profile photo
  ├── project-image.png    ← Your featured project image  
  ├── background.jpg       ← Your background image
  └── /icons
      ├── instagram.svg    ← Your Instagram icon
      ├── threads.svg      ← Your Threads icon
      └── github.svg       ← Your GitHub icon
```

💡 **Tip**: You can use any image format (.png, .jpg, .svg, etc.)

## Step 3: Update Your Content

Open **`content.config.ts`** and change:

```typescript
export const CONTENT = {
  profile: {
    image: "/profile.png",              // ← Your image path
    name: "Your Name Here",             // ← Your name
    bio: "Your awesome bio",            // ← Your bio text
  },

  socialLinks: [
    {
      name: "Instagram",
      url: "https://instagram.com/yourhandle",  // ← Your link
      icon: "/icons/instagram.svg",
    },
    // ... update all your social links
  ],

  featuredProject: {
    title: "Your Project - Coming Soon",
    image: "/project-image.png",
    spotsLeft: 100,                      // ← Change the number
    ctaText: "Join now ->",
    ctaUrl: "https://yourlink.com",      // ← Your project link
  },

  backgroundImage: "/background.jpg",    // ← Your background
};
```

## ✅ That's It!

Your changes will appear instantly in the browser!

## 🚀 Deploy Your Portfolio

When ready, deploy to [Vercel](https://vercel.com):
1. Push to GitHub
2. Import on Vercel
3. Deploy! 🎉

---

Need more help? Check the full **README.md**

