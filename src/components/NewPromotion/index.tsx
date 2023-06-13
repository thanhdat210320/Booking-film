import bookingsAPI from "../../services/bookings.service"
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
const NewPromotion = () => {
	const [movies, getMovies] = useState([])

	console.log(movies)
	const getMovie = async () => {
		const res = await bookingsAPI.getMoives({size: 999})
		getMovies(res?.data?.data?.splice(16, 18))
	}
	useEffect(() => {
		getMovie()
	}, [])
	return <div className=" scroll-margin-top bg-gray-50 bg-contain bg-bottom bg-no-repeat py-8 md:py-10 lg:py-14 flex flex-col justify-center items-center p-28">
		<div className="mx-auto w-full max-w-6xl px-5" >


			<div className="mb-5 text-center text-[30px] font-bold text-[#d82f8b]">Tin tức - Khuyến mãi
			</div>
			<div className="flex justify-between">
				{movies?.map((item: any) => {
					return (
						<div className="w-[23%] rounded-lg  text-[#fff] pb-[20px]" style={{
							boxShadow: `0 2px 8px 0 rgba(20,16,11,.07)`
						}}>
							<div className=" rounded-lg">
								<img className=" w-[280px] h-[150px] object-cover" src={`http://localhost:8228/files/${item.poster}`} alt="" />
							</div>
							<Link to={`/${item.id}`} className='nav-link'>
								<div className="px-[10px]">

									<div className="mt-[5px] text-black font-bold">{item?.title}</div>

								</div>
								<div className="text-black font-bold px-[20px] mt-[20px]">
								{item?.duration} phút
								</div>
							</Link>
						</div>

					)
				})}


			</div>
			<div className="flex content-center items-center mt-[40px]">
			<Link to={`/filterfilm`}className="text-[#d82f8b] px-[15px] py-[7px] hover:opacity-[0.8] text-[18px] border-[#d82f8b] border-2 font-bold bg-[#fff] m-auto rounded-2xl">
					Xem thêm
				</Link>
			</div>
		</div>
	</div>
}
export default NewPromotion