export default function HeaderTop(){
    return(
        <div className="flex gap-2 items-center mt-20">
            <div>
                <span className="absolute w-fit font-black text-5xl text-yellow-300 drop-shadow-2xl shadow-yellow-50 blur-xl">3</span>
                <span className="absolute w-fit font-black text-5xl text-yellow-200 drop-shadow-2xl blur-md">3</span>
                <span className="relative w-fit font-semibold text-5xl text-yellow-50 drop-shadow-2xl">3</span>
            </div>
            <div className="">
                <span className="absolute w-fit uppercase font-bold text-2xl text-orange-500 drop-shadow-2xl shadow-yellow-50 blur-3xl">en raya</span>
                <span className="absolute w-fit uppercase font-bold text-2xl text-orange-300 drop-shadow-2xl blur-md">en raya</span>
                <span className="relative w-fit uppercase font-bold text-2xl text-white drop-shadow-2xl">en raya</span>
            </div>
        </div>
    )
}