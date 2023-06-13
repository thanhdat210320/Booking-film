import sex from "../../assets/images/anh_header.jpg"
const Banner = () => {
  return <div className="flex justify-center items-center p-20 bg-pink-50">
    <div className="flex justify-between items-center w-[1200px]" >
      <div>
        <h2 className="font-bold text-3xl text-[#f15050]">Rạp chiếu phim Box Cinemas</h2>
        <ul className="flex flex-col space-y-1 font-medium pt-1 m-[10px]">
          <li>Rạp phim đầy đủ từ Bắc tới Nam</li>
          <li>Suất chiếu cập nhật liên tục</li>
          <li>Ưu đãi đặc biệt từng cụm rạp chiếu</li>
          <li>Chỉ cần một chạm là có vé xem phim</li>
        </ul>
				<div className=" mt-[40px]">
				<button className="text-[#fff] px-[10px] py-[7px] hover:opacity-[0.8] text-[18px] font-bold bg-[#d82f8b] m-auto rounded-lg">
					Đặt vé ngay
				</button>
			</div>
      </div>
      <div className="w-1/2">
        <img src={sex}></img>
      </div>
    </div>
  </div>
}
export default Banner