import bookingsAPI from "../../services/bookings.service"
import { useEffect, useState } from "react"
const Coming = () => {
	const [movies, getMovies] = useState([])
	const getMoive = async () => {
		const res = await bookingsAPI.getMoives()
		getMovies(res.data?.data)
	}
	useEffect(() => {
		getMoive()
	}, [])
	return <div className="bg-contain bg-bottom bg-no-repeat py-8 md:py-10 lg:py-14 flex justify-center items-center p-28">
		<div className="mx-auto w-full max-w-6xl px-5" >
			<div className="mb-5 text-center text-[25px] font-bold text-[#d82f8b]">PHIM SẮP CHIẾU</div>
			<div className="flex justify-between">
				{movies?.map((item: any) => {
					return (
						<div className="w-[23%]  text-black">
							<div className="group h-[340px] overflow-hidden rounded-lg ">
								<img className="group-hover:scale-110 transition-transform duration-300 w-full h-full" src={item.poster} alt="" />
							</div>
							<div className=" mt-[10px]">{item.title}</div>
							<div className="">{item.genre}</div>
							<div className="">{item.duration}</div>
						</div>
					)
				})}

			</div>

			<div className="flex content-center items-center mt-[60px]">
				<button className="text-[#fff] p-[10px] hover:opacity-[0.8] text-[20px] font-bold bg-[#d82f8b] m-auto rounded-lg">
					Tìm phim chiếu rạp
				</button>

			</div>
		</div>
	</div>
}
export default Coming