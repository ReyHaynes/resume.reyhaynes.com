interface SectionProps {
  title: string;
  subContent?: string;
  children: React.ReactNode;
}

export default function Section({ title, subContent, children }: SectionProps) {
  // Create a unique ID for the section based on the title
  const sectionId = title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  
  return (
    <section className="mb-6 print:mb-4" aria-labelledby={`${sectionId}-heading`}>
      <h2 
        id={`${sectionId}-heading`}
        className="text-2xl font-bold px-8 py-1.5"
        style={{ color: 'var(--accent-primary)' }}
      >
        {title}
      </h2>
      { !!subContent && 
        <p
          className="block px-8 text-sm"
          style={{ color: 'var(--text-primary)' }}
          aria-describedby={`${sectionId}-heading`}
        >
          {subContent}
        </p>
      }
      <div className="mt-4 print:mt-1.5">{children}</div>
    </section>
  );
}
