## Work To Do:
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
