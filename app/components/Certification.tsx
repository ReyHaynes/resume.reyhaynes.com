interface CertificationProps {
  title: string;
  description: string;
}

export default function Certification({ title, description }: CertificationProps) {
  return (
    <div className="mb-4 last:mb-0 px-8">
      <h3 className="font-semibold print:text-black" style={{ color: 'var(--sidebar-text-primary)' }}>{title}</h3>
      <p style={{ color: 'var(--sidebar-text-secondary)' }}>{description}</p>
    </div>
  );
}
