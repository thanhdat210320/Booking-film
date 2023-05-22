import Footer from "../../components/Layout/Footer"
import Header from "../../components/Layout/Header"
import BannerDetail from "../../components/BannerDetail"
import ShowtimeDetail from "../../components/ShowTmeDetail"
import MovieBlogDetail from "../../components/MovieBlogDetail"
import Comment from "../../components/Comment"
import Performer from "../../components/Performer"
import { useParams } from 'react-router-dom'
import bookingsAPI from "../../services/bookings.service"
import { useState , useEffect} from "react"

function DetailFilm() {

	const { id } = useParams()

	console.log(id)

	const [movie, getMovie] = useState<any>({})
	const getMovieById = async () => {
		const res = await bookingsAPI.getMoive(id)
		getMovie(res?.data)
	}

	console.log(movie)
	useEffect(() => {
		getMovieById()
	}, [id])

	return (
		<div className="flex items-center justify-center">
			<div className="w-full">

				
				<Header />
				<BannerDetail movie={movie}/>
				<div className="flex p-[5rem] pt-[50px] ">
					<div className="w-[68%] mr-[30px]">
						<ShowtimeDetail />
						<Comment />
						<Performer />
						<MovieBlogDetail />
					</div>
					<div className="w-[32%]">
						<h1 className="text-[24px] font-bold mb-[20px] mt-[30px]">Phim đang chiếu</h1>
						<div className=" ">
							<div className="flex mb-[20px] pb-[20px]">
								<div className="w-[120px] h-[160px] mr-[20px] rounded-lg overflow-hidden">
									<img className="hover:scale-110 transition-transform duration-300 w-full h-full" src="https://traffic-edge31.cdn.vncdn.io/cinema/img/4186357399981418-ccaqnG8K0ub279MX19F2RPsEwal.jpg" alt="" />
								</div>
								<div className="">
									<div className="font-bold">Khắc tinh của quỷ</div>
									<div className="text-[#ccc]">
										Kinh dị, Bí ẩn
									</div>
									<br />

									<div className="mb-[5px] font-bold">
										2D Phụ đề
									</div>

								</div>

							</div>
							<div className="flex border-b-[#e5e5e5] border-b-2 mb-[20px] pb-[20px]">
								<div className="w-[120px] h-[160px] mr-[20px] rounded-lg overflow-hidden">
									<img className="hover:scale-110 transition-transform duration-300 w-full h-full" src="https://traffic-edge31.cdn.vncdn.io/cinema/img/4186357399981418-ccaqnG8K0ub279MX19F2RPsEwal.jpg" alt="" />
								</div>
								<div className="">
									<div className="font-bold">Khắc tinh của quỷ</div>
									<div className="text-[#ccc]">
										Kinh dị, Bí ẩn
									</div>
									<br />

									<div className="mb-[5px] font-bold">
										2D Phụ đề
									</div>

								</div>

							</div>
							<div className="flex border-b-[#e5e5e5] border-b-2 mb-[20px] pb-[20px]">
								<div className="w-[120px] h-[160px] mr-[20px] rounded-lg overflow-hidden">
									<img className="hover:scale-110 transition-transform duration-300 w-full h-full" src="https://traffic-edge31.cdn.vncdn.io/cinema/img/4186357399981418-ccaqnG8K0ub279MX19F2RPsEwal.jpg" alt="" />
								</div>
								<div className="">
									<div className="font-bold">Khắc tinh của quỷ</div>
									<div className="text-[#ccc]">
										Kinh dị, Bí ẩn
									</div>
									<br />

									<div className="mb-[5px] font-bold">
										2D Phụ đề
									</div>

								</div>

							</div>
							<div className="flex mb-[20px] pb-[20px]">
								<div className="w-[120px] h-[160px] mr-[20px] rounded-lg overflow-hidden">
									<img className="hover:scale-110 transition-transform duration-300 w-full h-full" src="https://traffic-edge31.cdn.vncdn.io/cinema/img/4186357399981418-ccaqnG8K0ub279MX19F2RPsEwal.jpg" alt="" />
								</div>
								<div className="">
									<div className="font-bold">Khắc tinh của quỷ</div>
									<div className="text-[#ccc]">
										Kinh dị, Bí ẩn
									</div>
									<br />

									<div className="mb-[5px] font-bold">
										2D Phụ đề
									</div>

								</div>

							</div>

						</div>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	)
}

export default DetailFilm
