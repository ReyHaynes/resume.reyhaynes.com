import { LucideIcon } from 'lucide-react';

interface AchievementProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export default function Achievement({ Icon, title, description }: AchievementProps) {
  return (
    <article className="mb-2 px-8 py-2">
      <header className="flex items-center gap-2 mb-2">
        <Icon 
          className="w-6 h-6" 
          style={{ color: 'var(--sidebar-accent)' }} 
          aria-hidden="true"
        />
        <h3 className="font-semibold" style={{ color: 'var(--sidebar-text-primary)' }}>{title}</h3>
      </header>
      <p className="text-md" style={{ color: 'var(--sidebar-text-secondary)' }}>{description}</p>
    </article>
  );
}