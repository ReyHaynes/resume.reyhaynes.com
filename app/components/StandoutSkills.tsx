interface StandoutSkillProps {
  name: string;
  years: number;
  baseYears: number;
}

interface StandoutSkillsProps {
  skills: StandoutSkillProps[];
}

export default function StandoutSkills({ skills }: StandoutSkillsProps) {
  return (
    <div className="space-y-2 mb-8">
      {skills.map((skill) => {
        const progress = Math.min(100, (skill.years / skill.baseYears) * 100);
        return (
          <div key={skill.name}>
            <div className="flex justify-between print:text-[12px]">
              <span style={{ color: 'var(--sidebar-text-secondary)' }}>
                {skill.name} ({skill.years} {skill.years === 1 ? 'yr' : 'yrs'})
              </span>
            </div>
            <div className="flex items-center gap-1 h-2.5 mb-5 print:hidden">
              <div className="flex-grow">
                {/* Year markers */}
                <div className="relative h-3 mb-1">
                  {Array.from({ length: skill.baseYears + 1 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute h-1 w-[1px] print:!h-0.5 print:!w-[0.5px]"
                      style={{
                        backgroundColor: 'var(--sidebar-text-secondary)',
                        left: `${(i / skill.baseYears) * 100}%`,
                        bottom: 0
                      }}
                    />
                  ))}
                </div>
                {/* Progress bar */}
                <div 
                  className="h-2.5 rounded-full print:h-1.5"
                  style={{ backgroundColor: 'var(--progress-bar-bg)' }}
                >
                  <div 
                    className="h-full rounded-full"
                    style={{ 
                      width: `${progress}%`,
                      backgroundColor: 'var(--accent-primary)'
                    }}
                  />
                </div>
              </div>
              <span 
                className={`text-xl font-bold pl-2 print:hidden ${skill.years < skill.baseYears ? 'invisible' : ''}`}
                style={{ color: 'var(--accent-primary)' }}
              >
                +
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
