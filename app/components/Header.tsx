import { Mail, Linkedin, MapPin } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  name: string;
  title: string;
  email: string;
  location: string;
  linkedin: string;
}

export default function Header({ name, title, email, location, linkedin }: HeaderProps) {
  return (
    <header className="px-8 py-6">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>{name}</h1>
        <ThemeToggle />
      </div>
      <h2 className="text-xl mb-4" style={{ color: 'var(--text-secondary)' }}>{title}</h2>
      <div className="flex flex-wrap gap-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
        <span className="flex items-center gap-1">
          <Mail size={16} />
          {email}
        </span>
        <a href={linkedin}
          className="flex items-center gap-1 transition-colors hover:opacity-80"
          style={{ color: 'var(--accent-primary)' }}
          target="_blank" rel="noopener noreferrer">
          <Linkedin size={16} />
          linkedin.com
        </a>
        <span className="flex items-center gap-1">
          <MapPin size={16} />
          {location}
        </span>
      </div>
    </header>
  );
}
