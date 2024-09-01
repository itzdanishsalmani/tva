import { ProjectCard } from "./Utils"

export const Project2 = () => {
    return (
        <div className="h-screen w-screen p-4">
            <ProjectCard
            img="/mediumm.png"
            title="Mediumm"
            description="Develop a full-stack responsive web app where authenticated users can create and update blog posts with descriptions."
            skills="TypeScript, React, Hono, Postgresql, Prisma ORM, Tailwind CSS, Cloudflare workers, Vercel"
            livelink="https://www.mediumm.vercel.app" />
        </div>
    )
}