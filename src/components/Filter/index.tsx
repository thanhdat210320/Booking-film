import bookingsAPI from "../../services/bookings.service";
import { ChevronDown, Search } from "lucide-react";
import { useEffect, useState } from "react";

const theloai = [{
    id:1, name: "Hành động"
},{    id:2, name: "Kinh dị"}]

const LoadingCricle = () => {
    const [OpenCategory, setOpenCategory] = useState<any>(false);
    const [OpenCinemas, setOpenCinemas] = useState<any>(false);
    const [cinemas, getCinemas] = useState<any>([]);
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
    const setCinemas = async () => {
        const res = await bookingsAPI.getCinemas()
        getCinemas(res?.data?.data)
        console.log(res?.data?.data)
    }
    useEffect(() => {
        setCinemas()
    }, [])
    return (
        <div className="mx-auto w-full max-w-7xl pt-[20px] " >
            <div className=" flex py-[10px] justify-between">
                <div className="text-center text-2xl font-bold text-pink-600 lg:text-left lg:text-2xl">Tìm phim chiếu rạp trên MoMo</div>
                <div className="flex">
                    <div className="px-[15px] py-[10px] border-[1px] flex rounded mr-[10px]">
                        <div onClick={OpenCategoryFilm} className="pr-[30px] text-[18px] cursor-pointer relative flex">
                            <p className="pr-[20px]">Thể Loại</p>
                            <ChevronDown />
                            {
                                OpenCategory && (
                                    <div className="bg-[#fff] text-[18px] border-[1px] mt-[42px] ml-[-16px] h-[auto] w-[250px] absolute inline z-10 ">
                                       {theloai?.map((item: any) => {
                                        return (
                                            <p className="py-[10px] pl-[20px] hover:bg-[#FAEBD7]">{item?.name}</p>
                                        )
                                       })}
                                    </div>
                                )
                            }

                        </div>

                    </div>
                    <div className="px-[15px] py-[10px] border-[1px] flex rounded cursor-pointer mr-[10px] ">
                        <div onClick={OpenCinema} className="pr-[30px] text-[18px] flex relative">
                            <p className="pr-[20px]"> Rạp Phim</p>
                            <ChevronDown />
                            {
                                OpenCinemas && (
                                    <div className="bg-[#fff] text-[18px] border-[1px] mt-[42px] ml-[-16px] h-[auto] w-[250px] absolute inline z-10">
                                        {cinemas?.map((item: any) => {
                                            return (
                                                <p className="py-[10px] pl-[20px] hover:bg-[#FAEBD7]">{item?.name}</p>
                                            )
                                        })}

                                    </div>
                                )
                            }



                        </div>

                    </div>

                    <div className="px-[15px] py-[10px] border-[1px] flex rounded">
                        <input className="outline-none bg-gray-50" type="text" placeholder="Tìm theo tên phim ..." />
                        <Search />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LoadingCricle;