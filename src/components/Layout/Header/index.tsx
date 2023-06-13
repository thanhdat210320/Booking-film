import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import bookingsAPI from "../../../services/bookings.service";
import logo from "../../../assets/images/box.jpg"
const Header = () => {
  const [user, setUser] = useState<any>()
  const [isOpen, setIsOpen] = useState<any>(false)
  const [cinemas, setCinema] = useState<any>([])
  
  const username = localStorage.getItem('username');
  const logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("auth");
    localStorage.removeItem("userIds");
    window?.location?.reload()
  }

  const openMenu = () => {
    if(isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }
  const Cinema = async () =>{   
      const res = await bookingsAPI.getCinemas()
      setCinema(res?.data.data)
      console.log(res?.data.data)
  }
	const bookingFilm: any = localStorage.getItem('booking')
	const filmId = JSON.parse(bookingFilm)

  useEffect(() =>  {
    Cinema()
  },[])


  useEffect(() => {
    if (username) {
      setUser(username)
    }
  }, [username])

  

  return <div className="flex justify-center items-center p-[1rem]">
    <div className="flex justify-between items-center w-[1200px]">
      <div className="flex items-center space-x-2">
        <p className="border-r-2 border-[#ccc] pr-[15px]">
         <img src={logo} className="w-[70px] h-[40px]" alt="" />
        </p>
        <Link to="/" className="flex space-x-2">
          <img src="	https://static.mservice.io/fileuploads/svg/momo-file-221117104714.svg"></img>
          <p className="font-medium text-[#e77b7b] text-sm">Đặt vé <br></br> xem phim</p>
        </Link>
      </div>
      <div>
        <ul className="flex items-center text-[#616161] font-bold">
          <div className="cursor-pointer">
            <li className="text-[#e77b7b] mr-[25px] relative"  onClick={openMenu}>Rạp chiếu</li>
             {
              isOpen && (
                      <div className="bg-[#fff] text-[18px] border-[1px] mt-[5px] h-[auto] w-[250px] absolute ">
               {cinemas?.map((item:any) =>{
                return(
                  <p className="py-[10px] pl-[20px] hover:bg-[#FAEBD7]">{item?.name}</p>
                )
               })}         
              
              
              
            </div>
              )
            }
          </div>
          <Link to={`/bookingviews/${filmId?.movieId}`} className="mr-[25px] cursor-pointer">Thông tin</Link>
          <Link to={`/filterfilm`} className="mr-[25px]">Phim chiếu</Link>
          <li className="mr-[25px]">Review phim</li>
          <li className="mr-[25px]">Blog phim</li>
          <li className="mr-[25px]">Khuyến mãi</li>
          <div className="flex">
            {
              username ? (
                <div className="">{user?.replaceAll('"', ' ')}</div>
              ) : (
                <Link to="/login">
                  <div className="cursor-pointer hover:text-rose-600">Đăng Nhập</div>
                </Link>
              )
            }

            <div className="px-[10px]">|</div>
            {
              username ? (
                <div onClick={logout} className="cursor-pointer hover:text-rose-600">Đăng Xuất</div>
              ) : (
                <Link to="/register">
                  <div className="cursor-pointer hover:text-rose-600">Đăng Ký</div>
                </Link>
              )
            }

          </div>
        </ul>
      </div>

    </div>
  </div>
}
export default Header;