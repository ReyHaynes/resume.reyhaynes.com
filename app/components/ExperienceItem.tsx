import Image from 'next/image';
import resumeData from '../data/resume.json';

interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  points: string[];
  technologies?: string[];
  additionalSkills?: string[];
  logo?: string; // Path to the company logo in public folder
}

export default function ExperienceItem({ 
  title, 
  company, 
  location, 
  startDate, 
  endDate, 
  points,
  technologies,
  additionalSkills,
  logo
}: ExperienceItemProps) {
  const notableTechs = new Set([
    ...resumeData.topTechnologySkills.standouts,
    ...resumeData.topTechnologySkills.otherNotables
  ]);
  const notableSkills = new Set([
    ...resumeData.topAdditionalSkills.standouts,
    ...resumeData.topAdditionalSkills.otherNotables
  ]);

  const renderSkillsWithHighlight = (skills: string[], isNotable: (skill: string) => boolean, label: string) => (
    <span role="list" aria-label={label}>
      {skills.map((skill, i) => (
        <span key={i} role="listitem">
          {i > 0 && <span aria-hidden="true"> • </span>}
          <span 
            style={{ color: isNotable(skill) ? 'var(--accent-primary)' : 'var(--text-secondary)' }}
            className={isNotable(skill) ? 'font-medium' : ''}
          >
            {skill}
          </span>
        </span>
      ))}
    </span>
  );

  return (
    <article className="py-4 px-8 first:pt-0 even:bg-[var(--experience-item-alt-bg)] transition-colors break-inside-avoid">
      <header className="flex justify-between items-start mb-4 print:mb-2.5">
        <div className="flex gap-4 items-center">
          {logo && (
            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
              <Image
                src={logo}
                alt={`${company} company logo`}
                width={40}
                height={40}
                className="object-contain"
                style={{ maxHeight: '100%' }}
              />
            </div>
          )}
          <div className="min-h-[40px] flex flex-col justify-center">
            <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>{title}</h3>
            <p style={{ color: 'var(--text-tertiary)' }}>
              <span className="font-medium">{company}</span>
              <span aria-hidden="true"> - </span>
              <span>{location}</span>
            </p>
          </div>
        </div>
        <time 
          className="ml-3" 
          style={{ color: 'var(--text-secondary)' }}
          dateTime={`${startDate}/${endDate || 'present'}`}
          aria-label={`Employment period: ${startDate} to ${endDate || 'Present'}`}
        >
          {startDate} - {endDate || 'Present'}
        </time>
      </header>
      
      <section aria-label="Key achievements and responsibilities">
        <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--text-secondary)' }}>
          {points.map((point, index) => (
            <li key={index} className="pl-6 mb-1 print:mb-0">{point}</li>
          ))}
        </ul>
      </section>
      
      {technologies && technologies.length > 0 && (
        <section className="mt-6 print:mt-3 text-base experience-metadata" aria-label="Technologies used">
          <div style={{ color: 'var(--text-primary)' }} className="font-semibold underline">Technologies:</div>
          {renderSkillsWithHighlight(technologies, skill => notableTechs.has(skill), 'Technologies used in this role')}
        </section>
      )}
      {additionalSkills && additionalSkills.length > 0 && (
        <section className="mt-1 text-base experience-metadata" aria-label="Additional skills applied">
          <div style={{ color: 'var(--text-primary)' }} className="font-semibold underline">Additional Skills:</div>
          {renderSkillsWithHighlight(additionalSkills, skill => notableSkills.has(skill), 'Additional skills applied in this role')}
        </section>
      )}
    </article>
  );
}
