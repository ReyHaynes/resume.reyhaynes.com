'use client';

import { Timer, Users, Star, Trophy, UserRound, LayoutGrid, Rocket } from 'lucide-react';
import Header from './components/Header';
import Section from './components/Section';
import ExperienceItem from './components/ExperienceItem';
import Achievement from './components/Achievement';
import Certification from './components/Certification';
import Skills from './components/Skills';
import resumeData from './data/resume.json';
import type { ExperienceData, ResumeData } from './types/resume';
import { useBasicAnalytics } from './hooks/useAnalytics';

function calculateYearsOfExperience(skill: string, experiences: ExperienceData[]): number {
  let totalYears = 0;
  const skillExperiences = experiences.filter(exp => 
    exp.technologies.includes(skill) || exp.additionalSkills.includes(skill)
  );

  skillExperiences.forEach(exp => {
    const startDate = new Date(exp.startDate);
    const endDate = exp.endDate ? new Date(exp.endDate) : new Date(); // today's date
    const years = (endDate.getFullYear() - startDate.getFullYear()) +
                 (endDate.getMonth() - startDate.getMonth()) / 12;
    totalYears += Math.max(0, Math.round(years * 10) / 10);
  });

  return Math.round(totalYears * 10) / 10;
}

function processSkillsWithYears(skills: string[], experiences: ExperienceData[], notableSkills: string[] = []) {
  return skills
    .map(skill => ({
      name: skill,
      years: calculateYearsOfExperience(skill, experiences),
      isNotable: notableSkills.includes(skill)
    }))
    .sort((a, b) => b.years - a.years || a.name.localeCompare(b.name));
}

export default function Home() {
  // Initialize basic analytics tracking
  useBasicAnalytics();
  
  const data = resumeData as ResumeData;
  
  // Extract and calculate years for technologies and skills
  const allTechnologies = Array.from(new Set(
    data.experience.flatMap(exp => exp.technologies)
  ));
  
  const allAdditionalSkills = Array.from(new Set(
    data.experience.flatMap(exp => exp.additionalSkills)
  ));

  const technologiesWithYears = processSkillsWithYears(
    allTechnologies, 
    data.experience,
    data.topTechnologySkills.otherNotables
  );
  
  const additionalSkillsWithYears = processSkillsWithYears(
    allAdditionalSkills, 
    data.experience,
    data.topAdditionalSkills.otherNotables
  );

  const iconMap = {
    Timer,
    Users,
    Star,
    Trophy,
    UserRound,
    LayoutGrid,
    Rocket
  };

  return (
    <div className="min-h-screen print:bg-white print:py-0 print:!w-4xl print:!m-0 print:!p-0">
      <div className="a4-page p-0">
        <div className="flex flex-col md:flex-row">
          {/* Main content */}
          <div className="flex-1">
            <Header {...data.header} />

            <Section title="SUMMARY">
              <p className="px-8" style={{ color: 'var(--text-secondary)' }}>
                {data.summary}
              </p>
            </Section>

            <Section title="EXPERIENCE">
              {data.experience.map((exp, index) => (
                <ExperienceItem
                  key={index}
                  {...exp}
                  startDate={exp.startDate.replace(/(\d{4})-(\d{2})/, '$2/$1')}
                  endDate={exp.endDate ? exp.endDate.replace(/(\d{4})-(\d{2})/, '$2/$1') : undefined}
                />
              ))}
            </Section>
          </div>

          {/* Sidebar with white background */}
          <div
            className="xl:w-lg lg:w-md md:w-sm print:bg-white print:!w-80 pt-8"
            style={{ backgroundColor: 'var(--sidebar-bg)' }}>
            <Section title="ACHIEVEMENTS">
              {data.achievements.map((achievement, index) => (
                <Achievement
                  key={index}
                  Icon={iconMap[achievement.icon]}
                  title={achievement.title}
                  description={achievement.description}
                />
              ))}
            </Section>

            <Section
              title="SKILLS"
              subContent={"Sorted by Professional years of experience, with notable skills highlighted."}>
              <Skills 
                groups={[
                  {
                    title: "Stack Expertise",
                    skills: technologiesWithYears
                  },
                  {
                    title: "Core Professional Skills",
                    skills: additionalSkillsWithYears
                  }
                ]}
              />
            </Section>

            { data.certifications.length > 0 &&
              <Section title="CERTIFICATION">
                <div className="space-y-4">
                  {data.certifications.map((cert, index) => (
                    <Certification
                      key={index}
                      title={cert.title}
                      description={cert.description}
                    />
                  ))}
                </div>
              </Section>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
