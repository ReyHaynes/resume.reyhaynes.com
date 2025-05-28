## Work Done (Part 6):
- [x] New Feature: Visual Display of `standouts` for Skills.
  - [x] Above the list of skills, add a new StandoutSkills component
  - [x] Pop the skills unique skills from the map table and pass them to component
  - [x] Create a display that looks similar to this example:
    ``` 
    Javascript (x Yrs)
    ==========+
    ```
    "=" should represent a flexible slim rectangular box that fills with --accent-primary based on (skill years of experience / `baseYears`) for this experience group
    "+" should be added after and represent only if (skill years of experience) is exceeding `baseYears`

## Work Done (Part 5):

- [x] Display years of experience for each skill in 
  - [x] Create two columns
  - [x] Calculate how many years the technology was used using `startDate` and `endDate` for each
    - [x] If no `endDate` for experience, then `endDate` should be calculated as today.
  - [x] Display each item like this: `Javascript (x Yrs)`

### Extra Work
- Added sorting by years of experience (descending) with alphabetical tiebreaker
- Added proper rounding to one decimal place for experience years
- Implemented grid layout for skills to prevent uneven columns

## Work Done (Part 4):
- [x] Add early theme detection script to prevent theme flicker
- [x] Add space to the left of title and company for optional company logo. 40x40 Icon will be hosted in public folder.
- [x] Fix printing color for the main section to use darker blacks


## Work Done (Part 3):
- [x] Let's create a controllable theme switcher
  - [x] Create a day/night toggle to the right of `resume.name`
  - [x] Refactor CSS to work with light/dark (aka. day/night) theme
  - [x] Default user to theme that matches their preference
  - [x] Create functionality to switch from day (light) theme and night (dark) theme with new toggle

### Extra Work Done:
- [x] Optimized for Next.js with proper client/server component separation
- [x] Added hydration mismatch prevention with dynamic imports and suppressHydrationWarning
- [x] Implemented theme persistence with localStorage
- [x] Enhanced accessibility with ARIA labels and proper HTML semantics
- [x] Ensured print compatibility by hiding theme toggle


## Work Done (Part 2):
- [x] Separate <ExperienceItem/> `date` into `startDate` and `endDate`
- [x] Add `technologies` array to <ExperienceItem/> prop
- [x] Add `additionalSkills` array to <ExperienceItem/> prop
- [x] Add technologies and additionalSkills to <ExperienceItem/> display. Example:

```
Technologies: Item1 • Item2 • Item3
Additional Skills: Item4 • Item5 • Item6
```

- [x] Abstract Resume Data to JSON file
- [x] Refactor Technologies in Skills to pull from technologies array in experience data
- [x] Refactor Additional Skills in Skills section to pull from additionalSkills array in experience data
- [x] Add printing styles for new Technologies and Additional Skills displays

## Work Done (Part 1):
- [x] Create project: Next.js, TailwindCSS, Typescript
- [x] Create main content and sidebar
- [x] Create components: Header, Section
- [x] Create page sections: Header, Summary, Experience, Achievements, Skills, Certifications
- [x] Move Achievements, Skills, and Certifications to Sidebar
- [x] Create light & dark theme, system dependent. (Might add switcher later)
- [x] Make sure it's printable (basic white bg, black text)