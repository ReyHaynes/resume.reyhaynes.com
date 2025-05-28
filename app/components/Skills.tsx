import StandoutSkills from './StandoutSkills';
import resumeData from '../data/resume.json';

interface SkillWithYears {
  name: string;
  years: number;
  isNotable?: boolean;
}

interface SkillsGroupProps {
  title: string;
  skills: SkillWithYears[];
}

interface SkillsProps {
  groups: SkillsGroupProps[];
}

export default function Skills({ groups }: SkillsProps) {
  return (
    <div className="px-8">
      {groups.map((group, index) => {
        const isTechGroup = group.title === "Stack Expertise";
        const numRows = isTechGroup ? 2 : 1;
        
        const baseYears = isTechGroup 
          ? resumeData.topTechnologySkills.baseYears 
          : resumeData.topAdditionalSkills.baseYears;

        const standoutSkills = group.skills
          .filter(skill => 
            (isTechGroup ? resumeData.topTechnologySkills.standouts : resumeData.topAdditionalSkills.standouts)
              .includes(skill.name)
          )
          .map(skill => ({
            name: skill.name,
            years: skill.years,
            baseYears
          }));
        
        return (
          <div key={index} className="break-inside-avoid not-first:mt-8 not-first:print:pt-4">
            <h3 
              className="font-semibold mb-4"
              style={{ color: 'var(--sidebar-text-primary)' }}
            >
              {group.title}:
            </h3>
            {standoutSkills.length > 0 && (
              <StandoutSkills skills={standoutSkills} />
            )}
            <div 
              className="grid gap-x-4 gap-y-0.5"
              style={{ 
                gridTemplateColumns: `repeat(${numRows}, 1fr)`,
                gridAutoFlow: 'column',
                gridTemplateRows: `repeat(${Math.ceil((group.skills.length - standoutSkills.length) / numRows)}, auto)`
              }}
            >
              {group.skills
                .filter(skill => !standoutSkills.some(s => s.name === skill.name))
                .map((skill, idx) => (
                <p 
                  key={idx} 
                  style={{ 
                    color: skill.isNotable ? 'var(--accent-primary)' : 'var(--sidebar-text-secondary)' 
                  }}
                  className="text-md font-medium"
                >
                  {skill.name} <span className="whitespace-nowrap text-sm">({skill.years} {skill.years === 1 ? 'yr' : 'yrs'})</span>
                </p>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
