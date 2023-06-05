import bookingsAPI from "../../services/bookings.service"
import { useEffect, useState } from "react"
const Trainner = () => {
	const [movies, getMovies] = useState([])
	const getMovie = async () => {
		const res = await bookingsAPI.getMoives()
		getMovies(res.data?.data)
	}
	useEffect(() => {
		getMovie()
	}, [])

	return <div className=" bg-black bg-contain bg-bottom bg-no-repeat py-8 md:py-10 lg:py-14 flex justify-center items-center p-28" style={{
		backgroundImage: `url(
			https://static.mservice.io/img/momo-upload-api-211001091715-637686766356856456.jpg
	)`}}>
		<div className="mx-auto w-full max-w-6xl px-5" >
			<div className="mb-5 text-center text-[25px] font-bold text-[#fff]">TRAINNER MỚI NHẤT</div>
			<div className="flex justify-between">
				{movies?.map((item: any) => {
					return (
						<div className="w-[23%] text-[#fff] ">
							<div className="h-[150px] rounded-lg overflow-hidden">
								<img className="hover:scale-110 transition-transform duration-300 w-full h-full object-cover" src={`http://localhost:8228/files/${item.poster}`} alt="" />
							</div>
							<div className=" mt-[10px]">{item.title}</div>
							<div className="">{item.genre}</div>
						</div>
					)
				})}


			</div>
		</div>
	</div>
}
export default Trainner