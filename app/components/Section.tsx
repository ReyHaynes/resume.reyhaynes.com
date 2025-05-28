interface SectionProps {
  title: string;
  subContent?: string;
  children: React.ReactNode;
}

export default function Section({ title, subContent, children }: SectionProps) {
  return (
    <section className="mb-6">
      <h2 
        className="text-2xl font-bold px-8 py-1.5"
        style={{ color: 'var(--accent-primary)' }}
      >
        {title}
      </h2>
      { !!subContent && 
        <small
          className="block px-8 text-sm"
          style={{ color: 'var(--text-primary)' }}>
          {subContent}
        </small>
      }
      <div className="mt-4">{children}</div>
    </section>
  );
}
