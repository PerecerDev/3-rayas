
type StartButtonProps = {
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export default function StartButton({ onClick }:StartButtonProps){

    return(
        <div onClick={onClick} className=" cursor-grab border text-blue-950 hover:text-blue-800 border-blue-700 px-12 py-10 rounded-xl bg-gradient-to-br from-blue-200 to-blue-300 hover:from-blue-100 hover:to-blue-300 shadow-[0px_0px_100px_0px] shadow-blue-600 hover:shadow-blue-500">
          <button className="text-2xl font-black uppercase flex flex-col gap-2 text-center">
            EMPEZAR PARTIDA
          </button>
        </div>
    )

}