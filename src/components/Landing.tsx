export const Landing = () =>{
    return (
        <div
      className="w-screen h-screen bg-cover p-4" // Removed overflow-hidden
      style={{
        backgroundImage: `url('/hhh.jpg')`,
      }}
    >
      <div className="w-full h-full border-8 border-orange-400 shadow-2xl shadow-orange-400 relative">
        <div className="flex justify-center items-center w-full h-full p-4">
          <div className="border text-orange-400 border-orange-400 bg-black p-2 md:p-4 text-3xl md:text-7xl font-bold">
            <span>FOR &nbsp; ALL &nbsp; TIMES. &nbsp; ALWAYS.</span>
          </div>
          <div className="absolute bottom-1 right-1 bg-black">
            <img src="tva-removebg-preview.png" alt="" className="w-32 md:w-48" />
          </div>
          <div className="flex md:block absolute left-3 bottom-10  space-y-2 cursor-pointer">
            <img src="two.svg" alt="" width={40} />
            <img src="three.svg" alt="" width={40} />
            <img src="four.svg" alt="" width={40} />
            <img src="five.svg" alt="" width={40} />
            <img src="seven.svg" alt="" width={40} />
          </div>
          <div className="text-orange-400 absolute bottom-1 left-4 font-mono">
          13 &nbsp; TIME VARIANCE AUTHORITY COMMISSION PRESENTATION COMMISSION // DSTROY.CO
        </div>
        </div>
       
      </div>
    </div>
    )
}