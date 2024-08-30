export const Menu = () => {
return (
        <div className="menu-items">
            <img src="two.svg" alt="" width={40} />
            <img src="three.svg" alt="" width={40} />
            <img src="four.svg" alt="" width={40} />
            <img src="five.svg" alt="" width={40} />
            <img src="seven.svg" alt="" width={40} />
          </div>
)
}

interface LastLineProps {
    pgno: string;
  };

export const LastLine = ({pgno}:LastLineProps) => {
    return (
        <div className="text-orange-400 absolute bottom-1 left-4 font-mono">
          {pgno} &nbsp; TIME VARIANCE AUTHORITY COMMISSION PRESENTATION COMMISSION // DSTROY.CO
        </div>
    )
}