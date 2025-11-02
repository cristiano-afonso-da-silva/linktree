/**
 * CONTENT CONFIGURATION FILE
 * 
 * 🎯 THIS IS THE ONLY FILE YOU NEED TO EDIT!
 * 
 * Quick Start:
 * 1. Add your images to /public folder
 * 2. Update the values below
 * 3. Save and see changes instantly!
 */

export const CONTENT = {
  // Profile Section
  profile: {
    // Profile photo path (place image in /public folder, path must start with "/")
    image: "/profile.png",
    
    // Your name
    name: "Cristiano Afonso da Silva",
    
    // Your bio (words "design", "code", "focused", "consistent" will be underlined)
    bio: "I design and code tools that help people stay focused and consistent.",
  },

  // Social Media Links
  // To remove a link: Delete the entire { name: "...", url: "...", icon: "..." } block
  // To add a link: Copy a block and paste it below, update the values
  socialLinks: [
    {
      name: "Instagram",
      url: "https://www.instagram.com/cristiano_a.silva", // Your Instagram URL
      icon: "/icons/instagram.svg",
    },
    {
      name: "Threads",
      url: "https://threads.net/cristiano_a.silva", // Your Threads URL
      icon: "/icons/threads.svg",
    },
    {
      name: "GitHub",
      url: "https://github.com/cristiano-afonso-da-silva", // Your GitHub URL
      icon: "/icons/github.svg",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/cristianoafonsodasilva/", // Your LinkedIn URL
      icon: "/icons/linkedin.svg",
    },
    // To add more links, copy the format above and update name, url, and icon
  ],

  // Productivity System Button
  productivitySystem: {
    // Button text
    text: "My Productivity System",
    
    // Button link (must include https://)
    url: "https://cristianosystem.gumroad.com/",
  },

  // Resume Template Button
  resumeTemplate: {
    // Button text
    text: "2025-2026 Ultimate Resume Template",
    
    // Button link (must include https://)
    url: "https://cristianosystem.gumroad.com/l/2025-2026UltimateResumeTemplate",
  },

  // Featured Project
  featuredProject: {
    // Project title
    title: "DOIT — Coming 2026",
    
    // Project image path (place in /public folder, path must start with "/")
    image: "/project-image.png",
    
    // Number of spots left (set to 0 to hide)
    spotsLeft: 53,
    
    // Button text
    ctaText: "Join Doit now ->",
    
    // Button link (must include https://)
    ctaUrl: "https://doit-website.vercel.app/",
  },

  // Background image path (place in /public folder, path must start with "/")
  backgroundImage: "/background.png",
};

/**
 * Tips:
 * - All image paths must start with "/"
 * - All URLs must include "https://"
 * - Place all images in /public folder
 * - Icons should be SVG files with transparent backgrounds
 */
