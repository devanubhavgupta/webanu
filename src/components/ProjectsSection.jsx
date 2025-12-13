import React from 'react'

const projects = [
    {
        id: 1,
        title: "K72 Clone",
        description: "A beautiful landing page app using React and Tailwind with touch of GSAP animation Library.",
        image: "/projects/k72.png",
        tags: ["React", "TailwindCSS", "GSAP"],
        demourl: "https://k72-tau.vercel.app/",
        githubUrl: "https://github.com/devanubhavgupta/k72"
    },

    {
        id: 2,
        title: "Study Schedule Planner",
        description: "A simple and beautiful web app to plan your study sessions, prioritize topics, and stay productive.",
        image: "/projects/studyPlanner.png",
        tags: ["HTML", "CSS", "JS vanilla"],
        demourl: "https://devanubhavgupta.github.io/studyplanner/",
        githubUrl: "https://github.com/devanubhavgupta/studyplanner"
    },

    {
        id: 3,
        title: "Portfolio Website",
        description: "A introduction page carry my all skills and my academic growth made with react.",
        image: "/projects/webanu.png",
        tags: ["React", "TailwindCSS", "GSAP"],
        demourl: "#",
        githubUrl: "https://github.com/devanubhavgupta/webanu"
    },
]

const ProjectsSection = () => {
    return (
        <section id='projects '>
            Projects
        </section>
    )
}

export default ProjectsSection