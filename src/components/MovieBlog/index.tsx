import { Link } from "react-router-dom"
import bookingsAPI from "../../services/bookings.service"
import { useState, useEffect } from "react"
const MovieBlog = () => {
	const [movies, getMovies] = useState([])
	const getMovie = async () => {
		const res = await bookingsAPI.getMoives()
		getMovies(res?.data?.data?.splice(6, 8))
	}
	useEffect(() => {
		getMovie()
	}, [])
	return <div className=" bg-pink-50 py-8 md:py-10 lg:py-14 flex justify-center items-center p-28">
		<div className="mx-auto w-full max-w-6xl px-5" >
			<div className="mb-5 text-center text-[30px] font-bold text-[#d82f8b]">Blog phim ảnh</div>
			<div className="mb-5 text-center text-[20px] text-[#616161]">Tổng hợp và Review các bộ phim hot, bom tấn, phim chiếu rạp hay mỗi ngày</div>
			<div className="flex justify-between">
				{movies?.map((item: any) => {
					return (
						<div className="w-[23%] text-[#fff]">
							<div className=" rounded-lg">
								<img className=" w-[280px] h-[150px] object-cover" src={`http://localhost:8228/files/${item.poster}`} alt="" />
							</div>
							<div className="text-black text-[18px] font-bold mt-[10px]">{item.title}</div>
							<div className="text-[#ccc]">5.9k lượt xem</div>
						</div>
					)
				})}


			</div>
			<div className="flex content-center items-center mt-[40px]">
			<Link to={`/filterfilm`}  className="text-[#fff] px-[15px] py-[7px] hover:opacity-[0.8] text-[18px] font-bold bg-[#d82f8b] m-auto rounded-2xl">
					Xem thêm
				</Link>
			</div>
		</div>
	</div>
}
export default MovieBlog