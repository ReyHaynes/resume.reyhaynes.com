'use client';

interface SkipLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function SkipLink({ href, children }: SkipLinkProps) {
  return (
    <a
      href={href}
      className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-md focus:text-white focus:bg-blue-600 focus:no-underline focus:shadow-lg"
      style={{
        transition: 'all 0.2s ease',
      }}
    >
      {children}
    </a>
  );
}
