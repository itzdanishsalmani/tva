import { ProjectCard } from "./Utils"

export const Project3 = () => {
    return (
        <div className="h-screen w-screen p-4">
            <ProjectCard
            img="/payze.png"
            title="Payze"
            description="It is an online payment web application in MERN Stack where users can send payment to each other with virtual money."

            skills="React, Express, MongoDB Atlas, Node.js, Tailwind CSS, Vercel"
            livelink="https://payze.vercel.app" />
        </div>
    )
}
