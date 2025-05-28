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

  const renderSkillsWithHighlight = (skills: string[], isNotable: (skill: string) => boolean) => (
    skills.map((skill, i) => (
      <span key={i}>
        {i > 0 && ' • '}
        <span style={{ color: isNotable(skill) ? 'var(--accent-primary)' : 'var(--text-secondary)' }}>
          {skill}
        </span>
      </span>
    ))
  );

  return (
    <div className="py-4 px-8 first:pt-0 even:bg-[var(--experience-item-alt-bg)] transition-colors break-inside-avoid">
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-4 items-center">
          {logo && (
            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
              <Image
                src={logo}
                alt={`${company} logo`}
                width={40}
                height={40}
                className="object-contain"
                style={{ maxHeight: '100%' }}
              />
            </div>
          )}
          <div className="min-h-[40px] flex flex-col justify-center">
            <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>{title}</h3>
            <p style={{ color: 'var(--text-tertiary)' }}>{company} - {location}</p>
          </div>
        </div>
        <p className="ml-3" style={{ color: 'var(--text-secondary)' }}>
          {startDate} - {endDate || 'Present'}
        </p>
      </div>
      <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--text-secondary)' }}>
        {points.map((point, index) => (
          <li key={index} className="pl-6 mb-1 print:mb-0">{point}</li>
        ))}
      </ul>
      {technologies && technologies.length > 0 && (
        <div className="mt-6 print:mt-3 text-base experience-metadata">
          <div style={{ color: 'var(--text-primary)' }} className="font-semibold underline">Technologies:</div>
          {renderSkillsWithHighlight(technologies, skill => notableTechs.has(skill))}
        </div>
      )}
      {additionalSkills && additionalSkills.length > 0 && (
        <div className="mt-1 text-base experience-metadata">
          <div style={{ color: 'var(--text-primary)' }} className="font-semibold underline">Additional Skills:</div>
          {renderSkillsWithHighlight(additionalSkills, skill => notableSkills.has(skill))}
        </div>
      )}
    </div>
  );
}
