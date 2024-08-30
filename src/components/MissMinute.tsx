import { Menu,LastLine } from "./Utils"

export const MissMinute = () => {
    return (
        <div className="h-screen w-screen p-4 ">
            <div className="custom-div relative ">
                <div className=" bg-orange-400 m-4 p-2 text-4xl text-center font-bold font-mono">HOW TO CONNECT WITH ME</div>
                <div className=" flex justify-evenly items-center mt-12">
                <div className=" py-12 px-2 border-4 border-orange-400 shadow-lg shadow-orange-300 w-fit h-fit">
                <img src="giphy.webp" alt="" width={250} />
                </div>
                
                <div className=" text-orange-300 space-y-6 text-4xl font-bold font-mono w-fit cursor-pointer"> 
                    <div className="bg-black hover:text-black hover:bg-orange-300">1. LINKEDIN</div>
                    <div className="bg-black hover:text-black hover:bg-orange-300">2. X</div>
                    <div className="bg-black hover:text-black hover:bg-orange-300">3. GITHUB</div>
                    <div className="bg-black hover:text-black hover:bg-orange-300">4. EMAIL</div>
                </div>
                <div className="img-right">
                <img src="tva-removebg-preview.png" alt="" className="w-32 md:w-48" />
                </div>
                <div>
                    <Menu />
                </div>
                <div>
                    <LastLine 
                    pgno="2"
                    />
                </div>
                </div>
            </div>
        </div>
    )
}