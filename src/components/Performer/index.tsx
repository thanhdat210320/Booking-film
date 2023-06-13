
const Performer = ({movie}: any) => {
    return <div className="pt-[40px] ">
        <p className="text-[24px] font-bold">Diễn viên & Đoàn làm phim</p>
        <div className="flex overflow-auto ">
<p className="text-[18px] mt-[20px] font-bold">{movie?.director}</p>
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