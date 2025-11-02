import { CONTENT } from "@/content.config";
import Image from "next/image";

export default function Home() {
  return (
    <main 
      className="portfolio-container"
      style={{
        backgroundImage: `url('${CONTENT.backgroundImage}')`,
      }}
    >
      {/* Profile Section */}
      <div className="profile-section">
        <Image
          src={CONTENT.profile.image}
          alt={CONTENT.profile.name}
          width={180}
          height={180}
          className="profile-image"
          priority
        />
        
        <div className="profile-name">
          {CONTENT.profile.name}
        </div>
        
        <p className="profile-bio">
          {CONTENT.profile.bio.split(' ').map((word, index, array) => {
            const wordsToUnderline = ['design', 'code', 'focused', 'consistent'];
            const cleanWord = word.toLowerCase().replace(/[.,]/g, '');
            const punctuation = word.match(/[.,]/)?.[0] || '';
            const wordWithoutPunct = word.replace(/[.,]/g, '');
            
            if (wordsToUnderline.includes(cleanWord)) {
              return (
                <span key={index}>
                  <span className="bio-underline">{wordWithoutPunct}</span>
                  {punctuation}
                  {index < array.length - 1 ? ' ' : ''}
                </span>
              );
            }
            return (
              <span key={index}>
                {word}
                {index < array.length - 1 ? ' ' : ''}
              </span>
            );
          })}
        </p>
      </div>

      {/* Social Links */}
      <div className="social-links">
        {CONTENT.socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label={link.name}
          >
            <Image
              src={link.icon}
              alt={link.name}
              width={40}
              height={40}
              className="social-icon"
            />
          </a>
        ))}
      </div>

      {/* Featured Project Card */}
      <div className="project-card">
        <h2 className="project-title">{CONTENT.featuredProject.title}</h2>
        
        <div className="project-image-wrapper">
          <Image
            src={CONTENT.featuredProject.image}
            alt={CONTENT.featuredProject.title}
            width={600}
            height={400}
            className="project-image"
          />
        </div>
        
        <p className="project-info">
          Only <strong>{CONTENT.featuredProject.spotsLeft}</strong> spots left for{" "}
          <span className="underline">FREE early access</span>
        </p>
        
        <a
          href={CONTENT.featuredProject.ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          {CONTENT.featuredProject.ctaText}
        </a>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>Created by Cristiano. All rights reserved 2025</p>
      </footer>
    </main>
  );
}

