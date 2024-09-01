import { Menu,LastLine } from './Utils'

export const Project = () => {
    return (

        <div className="h-screen w-screen p-4 ">
            <div className="custom-div relative ">
                <div className=" bg-orange-400 m-4 p-2 text-4xl text-center font-bold ">PROJECTS</div>
                <div className="mt-12 flex justify-evenly">
                <Card projectName='HYPERDEV' />
                <Card projectName='PAYZE' />
                <Card projectName='MEDIUMM' />
                <Card projectName='TESTIMONIAL' />
                
                <div className="img-right">
                <img src="tva-logo-red.png" alt="" className="w-32 md:w-36" />
                </div>
                <div>
                    <Menu />
                    <LastLine 
                    pgno="3"
                    />
                </div>
                </div>
            </div>
        </div>
    )
}

interface projectNameProps {
    projectName:string
    
}

const Card = ({projectName}:projectNameProps) => {
    return (
        <div>
        <div className="border-4 border-orange-400 shadow-lg shadow-orange-300 w-48 h-72 cursor-pointer">
            <div className='flex justify-center items-center h-full'>
                <img src="project-icon.svg" alt="" width={50} className='shadow-orange-300 shadow-lg'/>
            </div>
        </div>
        <div className="mt-8 text-center text-2xl font-bold bg-black text-orange-400">{projectName}</div>
        </div>
    )
}