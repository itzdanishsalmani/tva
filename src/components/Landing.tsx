import { Menu,LastLine } from "./Utils"

export const Landing = () =>{
    return (
        <div
      className="w-screen h-screen  p-4">
      <div className="custom-div relative">
        <div className="flex justify-center items-center w-full h-full p-4">
          <div className="border text-orange-400 border-orange-400 bg-black p-2 md:p-4 text-3xl md:text-7xl font-bold">
            <span>FOR ALL TIMES. ALWAYS.</span>
          </div>
          <div className="img-right">
          <img src="tva-logo-red.png" alt="" className="w-32 md:w-36" />
          </div>
          <div>
            <Menu />
          </div>
          <div>
            <LastLine 
            pgno={"1"}
            />
          </div>
          
        </div>
       
      </div>
    </div>
    )
}
