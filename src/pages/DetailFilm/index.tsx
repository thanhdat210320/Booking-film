import Footer from "../../components/Layout/Footer"
import Header from "../../components/Layout/Header"
import BannerDetail from "../../components/BannerDetail"
import ShowtimeDetail from "../../components/ShowTmeDetail"
import MovieBlogDetail from "../../components/MovieBlogDetail"
import Comment from "../../components/Comment"
import Performer from "../../components/Performer"
import { Link, useParams } from 'react-router-dom'
import bookingsAPI from "../../services/bookings.service"
import { useState , useEffect} from "react"

function DetailFilm() {
	const [cinemas, setCinemas] = useState<any>([]);
	const [commingMovies, setCommingMovies] = useState<any>([])
	const { id } = useParams()

	console.log(id)

	const [movie, getMovie] = useState<any>({})
	const getMovieById = async () => {
		const res = await bookingsAPI.getMoive(id)
		getMovie(res?.data)
	}

	const getDataListCinemas = async () => {
		try {
			const data = await bookingsAPI.getCinemas({ size: 999 })
			setCinemas(data?.data?.data)
		} catch (error) {
			console.log(error)
		}
	}

	
	const getDataListCommingMovies = async () => {
		try {
			const data = await bookingsAPI.getMoivesComming({ size: 10 })
			setCommingMovies(data?.data?.data?.splice(10, 14))
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getDataListCinemas()
		getDataListCommingMovies()
	}, [])
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
						<ShowtimeDetail movie={movie} cinemas={cinemas}/>
						<Performer movie={movie}/>
						<Comment />
						{/* <MovieBlogDetail /> */}
					</div>
					<div className="w-[32%]">
						<h1 className="text-[24px] font-bold mb-[20px] mt-[30px]">Phim đang chiếu</h1>
						<div className=" ">
							{commingMovies?.map((item: any) => {
							return (
								<div className="flex mb-[20px] pb-[20px]">
								<div className="w-[120px] h-[160px] mr-[20px] rounded-lg overflow-hidden">
									<img className="hover:scale-110 transition-transform duration-300 w-full h-full" src={`http://localhost:8228/files/${item.poster}`} alt="" />
								</div>
								<Link to={`/${item.id}`} className="">
									<div className="font-bold">{item?.title}</div>
									<div className="text-[#ccc]">
										{item?.genre}
									</div>
									<br />

									<div className="mb-[5px] font-bold">
										2D Phụ đề
									</div>

								</Link>

							</div>
								)
							})}

						</div>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	)
}

export default DetailFilm
