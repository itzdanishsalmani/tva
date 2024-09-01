import { Menu,LastLine } from "./Utils"

export const Contact = () => {
    return (
        <div className="h-screen w-screen p-4 ">
            <div className="custom-div relative ">
                <div className=" bg-orange-400 m-4 p-2 text-4xl text-center font-bold ">HOW TO CONNECT WITH ME</div>
                <div className=" flex flex-col md:flex-row justify-evenly items-center mt-12">
                <div className=" py-8 md:py-12 px-2 border-4 border-orange-400 shadow-lg shadow-orange-300 w-fit h-fit">
                <img src="giphy.webp" alt="" width={250} />
                </div>
                
                <div className=" mt-4 md:mt-0 text-orange-400 space-y-3 md:space-y-6 text-3xl font-bold w-fit cursor-pointer "> 
                    <div className="hover"><Link link="https://linkedin.com/in/mohammed-danish-salmani-ab2586258" text="1. LINKEDIN" /> </div>
                    <div className="hover"><Link link="https://x.com/itzzdanish" text="2. X (TWITTER)" /></div>
                    <div className="hover"><Link link="https://github.com/itzdanishsalmani" text="3. GITHUB" /></div>
                    <div className="hover"><Mail text="4. EMAIL"/></div>
                </div>
                <div className="img-right">
                <img src="tva-logo-red.png" alt="" className="w-32 md:w-36" />
                </div>
                <div>
                    <Menu />
                    <LastLine 
                    pgno="2"
                    />
                </div>
                </div>
            </div>
        </div>
    )
}

interface linkProps {
    link:string
    text:string
}

export const Link = ({link,text}:linkProps) => {
    return (
        <>
            <a href={link} target="_blank" rel="noopener noreferrer">{text}</a>
        </>
    )
}

export const Mail = ({text}:any) => {
    return (
        <>
        <a href="mailto:salmanidanish488@gmail.com">{text}</a>
        </>
    )
}