import React, { useState } from 'react';
import Project from "./Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
   
        {
      name: 'Dream-job-Finder',
      description: 'Job Finder website with HTML, CSS, API routes, web services',
      link: "https://github.com/sheetaljwl795/dream-job-finder",
      repo: "https://github.com/sheetaljwl795/dream-job-finder"
    },
    {
      name: 'mysql-employee-tracker',
      description: 'Business owner can view and manage the departments, roles, and employees in his company so that he can organize and plan my business.',
      link: "https://github.com/sheetaljwl795/mysql-employee-tracker",
      repo: "https://github.com/sheetaljwl795/mysql-employee-tracker"
    },
    {
      name: 'note-taker',
      description: 'Note Taker that can be used to write and save notes. This application uses an Express.js back end and will save and retrieve note data from a JSON file.',
      link: "https://github.com/sheetaljwl795/note-taker",
      repo: "https://github.com/sheetaljwl795/note-taker"
    },
    {
      name: 'work-day-scheduler',
      description: 'AN employee with a busy schedule I WANT to add important events to a daily planner SO THAT I can manage my time effectively',
      link: "https://github.com/sheetaljwl795/module5-challenge",
      repo: "https://github.com/sheetaljwl795/module5-challenge"
    },
    {
      name: 'weather-dashboard',
      description: 'AS A traveler I WANT to see the weather outlook for multiple cities SO THAT I can plan a trip accordingly GIVEN a weather dashboard with form inputs WHEN I search for a city THEN I am presented with current and future conditions for that city and that city is added to the search history ',
      link: "https://github.com/sheetaljwl795/module6-weather",
      repo: "https://github.com/sheetaljwl795/module6-weather"
    },
    {
      name: 'brighteducation',
      description: 'With BrightEducation, you can enroll your child into any class where they may need to brush up on some skills or want to be challenged at a higher level. With our professionally certified teaching staff, we guarantee to enrich your child education no matter the cause.',
      link: "https://github.com/jleebootcamp/brighteducation",
      repo: "https://github.com/jleebootcamp/brighteducation"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;