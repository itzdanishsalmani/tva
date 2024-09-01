import { ProjectCard } from "./Utils"

export const Project1 = () => {
    return (
        <div className="h-screen w-screen p-4">
            <ProjectCard
            img="hyperdev.png"
            title="HyperDev"
            description="Full stack web application in MERN Stack with PayPal Payment Gateway, where Admin can perform CRUD operation and Users can buy courses."
            skills="React, Express, MongoDB, Nodejs, Tailwind CSS, PayPal API, Vercel" 
            livelink="https://www.hyperdev.vercel.app"
            />
        </div>
    )
}
