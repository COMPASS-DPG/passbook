# Compass Competency Passbook

## Why? And What?

COMPASS is envisioned as a component of a goal-oriented human resource management system (GO-HRM) that will allow departments to link their goals with well-defined targets for teams and individuals, map competencies required to fulfill these targets, and link capacity to performance management. Refer to Appendix A for more details on the motivation for COMPASS.

The **competency passbook** is meant to be a repository of the competencies of a user. It is a list of all the self and PIAA assessments that the user has taken till a particular day. It would contain Course Completion Score (CCS), Proctored Independent and Authorized Assessment (PIAA) scores and certificates, Workplace Competency Assessment Scores (WPCAS) and an employee oriented analytical dashboard. It would be accessed by employees through a mobile app developed for showcasing the modules developed under COMPASS.

The following doc will talk more in details about the need and user flow of the passbook
https://docs.google.com/document/d/1ObzSKDK3je5ZZVxCvEEabAqED8PFs5t4OEtUkxYpCtk/edit?usp=sharing

Steps To Install

1. Install docker in your system.

2. then Run the following commands
   ```bash
   docker build -t passbook .
   docker run -p 3000:3000 -d passbook
   ```
3. You can access the passbook on your system at
   ```
   http://localhost:3000/
   ```
