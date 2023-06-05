
const Performer = ({movie}: any) => {
    return <div className="pt-[40px] ">
        <p className="text-[24px] font-bold">Diễn viên & Đoàn làm phim</p>
        <div className="flex overflow-auto ">
            <div className="pt-[20px] pr-[30px] w-[30%] text-center">
                <div className="w-[160px] h-[160px]">
                    <img className="rounded-full h-full w-full object-cover" src="https://traffic-edge26.cdn.vncdn.io/cinema/img/575492346548630-7rwSXluNWZAluYMOEWBxkPmckES.jpg" alt="" />
                </div> <p className="text-[18px] font-medium">Vin Diesel</p>
                <p className="text-slate-600">Dominic Toretto</p>

            </div>
            <div className="pt-[20px] pr-[30px] w-[30%] text-center">
                <div className="w-[160px] h-[160px]">
                    <img className="rounded-full h-full w-full object-cover" src="https://traffic-edge26.cdn.vncdn.io/cinema/img/575492346548630-7rwSXluNWZAluYMOEWBxkPmckES.jpg" alt="" />
                </div>
                <p className="text-[18px] font-medium">Vin Diesel</p>
                <p className="text-slate-600">Dominic Toretto</p>

            </div>
            <div className="pt-[20px] pr-[30px] w-[30%] text-center">
                <div className="w-[160px] h-[160px]">
                    <img className="rounded-full h-full w-full object-cover" src="https://traffic-edge26.cdn.vncdn.io/cinema/img/575492346548630-7rwSXluNWZAluYMOEWBxkPmckES.jpg" alt="" />
                </div>
                <p className="text-[18px] font-medium">Vin Diesel</p>
                <p className="text-slate-600">Dominic Toretto</p>

            </div>
            <div className="pt-[20px] pr-[30px] w-[30%] text-center">
                <div className="w-[160px] h-[160px]">
                    <img className="rounded-full h-full w-full object-cover" src="https://traffic-edge26.cdn.vncdn.io/cinema/img/575492346548630-7rwSXluNWZAluYMOEWBxkPmckES.jpg" alt="" />
                </div>
                <p className="text-[18px] font-medium">Vin Diesel</p>
                <p className="text-slate-600">Dominic Toretto</p>

            </div>
            <div className="pt-[20px] pr-[30px] w-[30%] text-center">
                <div className="w-[160px] h-[160px]">
                    <img className="rounded-full h-full w-full object-cover" src="https://traffic-edge26.cdn.vncdn.io/cinema/img/575492346548630-7rwSXluNWZAluYMOEWBxkPmckES.jpg" alt="" />
                </div>
                <p className="text-[18px] font-medium">Vin Diesel</p>
                <p className="text-slate-600">Dominic Toretto</p>

            </div>
            <div className="pt-[20px] pr-[30px] w-[30%] text-center">
                <div className="w-[160px] h-[160px]">
                    <img className="rounded-full h-full w-full object-cover" src="https://traffic-edge26.cdn.vncdn.io/cinema/img/575492346548630-7rwSXluNWZAluYMOEWBxkPmckES.jpg" alt="" />
                </div>
                <p className="text-[18px] font-medium">Vin Diesel</p>
                <p className="text-slate-600">Dominic Toretto</p>

            </div>
            <div className="pt-[20px] pr-[30px] w-[30%] text-center">
                <div className="w-[160px] h-[160px]">
                    <img className="rounded-full h-full w-full object-cover" src="https://traffic-edge26.cdn.vncdn.io/cinema/img/575492346548630-7rwSXluNWZAluYMOEWBxkPmckES.jpg" alt="" />
                </div>
                <p className="text-[18px] font-medium">Vin Diesel</p>
                <p className="text-slate-600">Dominic Toretto</p>

            </div>
        </div>
        <p className="text-[24px] font-bold pt-[20px]">Hình ảnh & Video</p>
        <div className="flex">
            <div className="w-[280px] h-[160px] pr-[20px] ">
                <img className="object-cover  h-full w-full rounded" src={`http://localhost:8228/files/${movie?.poster}`} alt="" />
            </div>
            <div className="w-[280px] h-[160px] ">
                <img className="object-cover  h-full w-full rounded" src={`http://localhost:8228/files/${movie?.banner}`} alt="" />
            </div>
        </div>
    </div>
}
export default Performer