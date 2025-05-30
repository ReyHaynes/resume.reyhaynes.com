import { Mail, Linkedin, MapPin, Github, Globe } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  name: string;
  title: string;
  email: string;
  website: string;
  websiteLabel: string;
  location: string;
  linkedin: string;
}

export default function Header({ name, title, email, website, websiteLabel, location, linkedin }: HeaderProps) {
  return (
    <header className="px-8 py-6" role="banner">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>{name}</h1>
        <div className="flex items-center gap-2" role="group" aria-label="External links and theme controls">
          <a 
            href="https://github.com/ReyHaynes/resume.reyhaynes.com"
            className="p-2 rounded hover:bg-black/[.05] transition-colors print:hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            style={{ color: 'var(--text-primary)' }}
            title="View source code on GitHub"
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="View source code on GitHub (opens in new tab)"
          >
            <Github className="w-5 h-5" aria-hidden="true" />
          </a>
          <ThemeToggle />
        </div>
      </div>
      <h2 className="text-xl mb-4" style={{ color: 'var(--text-secondary)' }}>{title}</h2>
      <address className="flex flex-wrap gap-4 text-sm not-italic" style={{ color: 'var(--text-secondary)' }}>
        <span className="flex items-center gap-1" aria-label="Email address">
          <Mail size={16} aria-hidden="true" />
          <span>{email}</span>
        </span>
        <a href={website}
          className="flex items-center gap-1 transition-colors hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:rounded"
          style={{ color: 'var(--accent-primary)' }}
          target="_blank" 
          rel="noopener noreferrer"
          aria-label={`Visit personal website ${websiteLabel} (opens in new tab)`}
        >
          <Globe size={16} aria-hidden="true" />
          <span>{websiteLabel}</span>
        </a>
        <a href={linkedin}
          className="flex items-center gap-1 transition-colors hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:rounded"
          style={{ color: 'var(--accent-primary)' }}
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="View LinkedIn profile (opens in new tab)"
        >
          <Linkedin size={16} aria-hidden="true" />
          <span>linkedin.com</span>
        </a>
        <span className="flex items-center gap-1" aria-label="Location">
          <MapPin size={16} aria-hidden="true" />
          <span>{location}</span>
        </span>
      </address>
    </header>
  );
}
