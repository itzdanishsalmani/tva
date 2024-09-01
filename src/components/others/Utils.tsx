import { useNavigate } from "react-router-dom";

export const Menu = () => {
  const navigate = useNavigate()
return (
        <div className="menu-items">
            <div><img src="one.svg" alt="" width={40} onClick={()=>navigate('/intro')} /></div>
            <div><img src="two.svg" alt="" width={40} onClick={()=>navigate('/project')}/></div>
            <div><img src="three.svg" alt="" width={40}  onClick={()=>navigate('/contact')}/></div>
            <div><img src="four.svg" alt="" width={40}  onClick={()=>navigate('/skills')}/></div>
          </div>
  )
}

interface LastLineProps {
    pgno: string;
  };

export const LastLine = ({pgno}:LastLineProps) => {
    return (
        <div className="text-orange-400 absolute bottom-1 left-4 hidden md:block">
          {pgno} &nbsp; TIME VARIANCE AUTHORITY COMMISSION PRESENTATION COMMISSION // DSTROY.CO
        </div>
    )
}

interface ProjectCardProps {
  img:string,
  title:string,
  description:string,
  skills:string,
  livelink?:string
  pageno:string
}

export const ProjectCard = ({img,title,description,skills,livelink,pageno}:ProjectCardProps) => {
  return (
    <div  className="w-full h-full">
       <div className="custom-div relative ">
                <div className=" bg-orange-400 m-4 p-2 text-4xl text-center font-bold ">DESCRIPTION OF PROJECT</div>
                <div className=" flex flex-col md:flex-row justify-center items-center mt-4 md:mt-12 px-4 md:px-24 space-x-4">
                <div className=" py-8 md:py-12 px-2 border-4 border-orange-400 shadow-lg shadow-orange-300 w-fit h-fit">
                  <div className="my mx-8 border-2 border-orange-400 shadow-lg shadow-orange-300 ">
                    
                    <img src={img} alt="" width={500} />
                </div>
                </div>
                
                <div className=" mt-6 text-orange-400 space-y-6 md:text-xl font-bold w-fit text-center"> 
                    <div className="hover"> {title}</div>
                    <div className="hover"> {description}</div>
                    <div className="hover"> {skills}</div>
                    <div className="hover cursor-pointer"><a href={livelink} target="_blank" rel="noopener noreferrer">Link</a></div>
                </div>
                <div className="img-right">
                <img src="tva-logo-red.png" alt="" className="w-32 md:w-36" />
                </div>
                <div>
                    <Menu />
                    <LastLine 
                    pgno={pageno}
                    />
                </div>
                </div>
            </div>
    </div>
  )
}  