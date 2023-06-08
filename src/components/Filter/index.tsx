import bookingsAPI from "../../services/bookings.service";
import { ChevronDown, Search } from "lucide-react";
import { useEffect, useState } from "react";
import FilterDetail from "../../components/FilterDetail"

const theloais = [
   { id: 1, name: "Hành động" },
   { id: 2, name: "Kinh dị" },
   { id: 3, name: "Hoạt hình" },
   { id: 4, name: "Kinh dị" },
   { id: 5, name: "Khoa Học Viễn Tưởng" },
   { id: 6, name: "Hình sự" },
   { id: 7, name: "Phiêu lưu" },
]

const LoadingCricle = () => {
    const [OpenCategory, setOpenCategory] = useState<any>(false);
    const [OpenCinemas, setOpenCinemas] = useState<any>(false);
    const [movies, getMovies] = useState([])
    const [cinemas, getCinemas] = useState<any>([]);
    const [theloai, setTheloai] = useState<any>("")
    const [cinema, setCinema] = useState<any>()
    const [search, setSearch] = useState<any>("")
    const [valueCinema, setValueCinema] = useState<any>("")

    const OpenCategoryFilm = () => {
        if (OpenCategory) {
            setOpenCategory(false)
        }
        else {
            setOpenCategory(true)
            setOpenCinemas(false)
        }
    }
    const OpenCinema = () => {
        if (OpenCinemas) {
            setOpenCinemas(false)

        }
        else {
            setOpenCinemas(true)
            setOpenCategory(false)
        }
    }

    const optionCinemas = (item: any) => {
        setCinema(item?.id)
        setValueCinema(item?.name)
    }
    const setCinemas = async () => {
        const res = await bookingsAPI.getCinemas()
        getCinemas(res?.data?.data)
        console.log(res?.data?.data)
    }

	const getMoive = async () => {
		const res = await bookingsAPI.getMoives({size: 999})
		getMovies(res.data?.data)
        console.log(res.data?.data)
	}

    const searchFilm = async () => {
        const res = await bookingsAPI.getMoives({size: 999,_q: search, genre: theloai, cinemaId: cinema})
		getMovies(res.data?.data)
    }

    useEffect(() => {
        setCinemas()
    }, [])

    useEffect(() => {
		getMoive()
	}, [])
    return (
        <>
        <div className="mx-auto w-full max-w-7xl pt-[20px] " >
            <div className=" flex py-[10px] justify-between">
                <div className="text-center text-2xl font-bold text-pink-600 lg:text-left lg:text-2xl">Tìm phim chiếu rạp trên Box Cinemas</div>
                <div className="flex">
                    <div className="px-[15px] py-[10px] border-[1px] flex rounded mr-[10px]">
                        <div onClick={OpenCategoryFilm} className=" text-[18px] cursor-pointer relative flex justify-between">
                            <p className="pr-[20px]">{ theloai ? theloai : "Thể Loại"}</p>
                            <ChevronDown />
                            {
                                OpenCategory && (
                                    <div className="bg-[#fff] text-[18px] border-[1px] mt-[42px] ml-[-16px] h-[auto] w-[250px] absolute inline z-10 ">
                                       {theloais?.map((item: any) => {
                                        return (
                                            <p className="py-[10px] pl-[20px] hover:bg-[#FAEBD7]" onClick={() => setTheloai(item?.name)}>{item?.name}</p>
                                        )
                                       })}
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className="px-[15px] py-[10px] border-[1px] flex rounded cursor-pointer mr-[10px] ">
                        <div onClick={OpenCinema} className=" text-[18px] flex relative justify-between">
                            <p className="pr-[20px]">{ valueCinema ? valueCinema : "Rạp Phim" }</p>
                            <ChevronDown />
                            {
                                OpenCinemas && (
                                    <div className="bg-[#fff] text-[18px] border-[1px] mt-[42px] ml-[-16px] h-[auto] w-[250px] absolute inline z-10">
                                        {cinemas?.map((item: any) => {
                                            return (
                                                <p className="py-[10px] pl-[20px] hover:bg-[#FAEBD7]" onClick={() => optionCinemas(item)}>{item?.name}</p>
                                            )
                                        })}

                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className="px-[15px] py-[10px] border-[1px] flex rounded">
                        <input onChange={(e: any) =>setSearch(e?.target?.value)} className="outline-none bg-gray-50" type="text" placeholder="Tìm theo tên phim ..." />
                        <Search />
                    </div>
                    <div className="ml-[10px] px-[20px] py-[10px] bg-[#ccc] border-[1px] flex rounded hover:bg-[#fff]">
                        <button onClick={searchFilm} className="outline-none ">Tìm</button>

                    </div>
                </div>
            </div>

        </div>
        <FilterDetail movies={movies}/>
        </>
    );
};

export default LoadingCricle;