export const Skills = () => {
    return (
        <div className="relative w-screen h-screen p-4 bg-black">
            <div className="custom-div">
                <div className=" bg-orange-700 m-4 p-2 text-2xl md:text-4xl text-center font-bold ">RESPECT THE DEADLINE</div>
        <div className="w-full h-fit flex justify-center md:pt-12">
            <video src="final.mp4" autoPlay muted loop className="h-24 md:h-48" /> 
            <video src="final.mp4" autoPlay muted loop className="hidden md:block h-48" /> 
        </div>
        <div className="bg-orange-700 h-1 md:h-2 mt-1 md:mt-1">
        </div>
        <div className="bg-orange-700 h-4 md:h-8 mt-1 md:mt-2 p-2"></div>
        <div className=""></div>
        <div className=" border-t-2 border-orange-400 mt-1 md:mt-2 space-y-2 md:space-y-0 text-orange-400 grid grid-cols-2 md:grid-cols-10 p-2 font-semibold">
            <div className="hidden md:block">
                PROJECT#
                <div className="mt-2 md:mt-4">
                    <div>46412321=091</div>
                    <div>46409821=475</div>
                    <div>46415412=590</div>
                    <div>46417630=767</div>
                    <div>46418750=532</div>
                </div>
            </div>

            <div className="hidden md:block">
                TEAM
                <div className="mt-2 md:mt-4">
                    <div>934</div>
                    <div>19999</div>
                    <div>92</div>
                    <div>17</div>
                    <div>9</div>
                </div>
            </div>
            
            <div className="hidden md:block">
                DEADLINE
                <div className="mt-2 md:mt-4">
                    <div>30.10.2023</div>
                    <div>10.11.2023</div>
                    <div>17.07.2027</div>
                    <div>18.15.1413</div>
                    <div>15.11.9125</div>
                </div>
            </div>

            <div>
                LANGUAGES
                <div className="mt-2 md:mt-4">
                    <div>TYPESCRIPT</div>
                    <div>JAVASCRIPT</div>
                </div>
            </div>

            <div>
                FRAMEWORKS
                <div className="mt-2 md:mt-4">
                    <div>NEXT JS</div>
                    <div>REACT JS</div>
                    <div>NODE JS</div>
                </div>
            </div>

            <div>
                DATABASES
                <div className="mt-2 md:mt-4">
                    <div>MONGODB</div>
                    <div>POSTGRESQL</div>
                </div>
            </div>

            <div>
                OTHERS
                <div className="mt-2 md:mt-4">
                    <div>EXPRESS JS</div>
                    <div>PRISMA</div>
                    <div>AWS</div> 
                    <div>DOCKER</div>
                    <div>TAILWIND CSS</div>
                </div>
            </div>

            <div className="hidden md:block grid md:col-span-2">   
                TIME THAT REMAINS
                <div className="mt-2 md:mt-4">
                    <div>02:15:02</div>
                    <div>00:25:04</div>
                    <div>17:07:17</div>
                    <div>19:18:15</div>
                    <div>91:21:59</div>
                </div>
            </div>

            <div className="img-transparent">
                <img src="mm2.webp" alt="" className="w-32 md:w-48" />
            </div>
            
        </div>
        </div>
     </div>
    )
}