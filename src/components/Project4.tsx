import { Menu,LastLine } from "./Utils"
export const Project4 = () => {
    return (
        <div className="h-screen w-screen p-4">
            <div className="custom-div relative">
                <div className="text-orange-400 text-3xl font-bold flex items-center justify-center h-full">
                    WORKING IN PROGRESS
                </div>
                <div>
            <Menu />
          </div>
          <div>
            <LastLine 
            pgno={"1"}
            />
            <div className="img-right">
                <img src="tva-logo-red.png" alt="" className="w-32 md:w-36" />
                </div>
          </div>
        </div>
        </div>
    )
}