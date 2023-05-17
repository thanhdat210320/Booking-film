import CinemaSystem from "../CinemaSystem"

const CommentViews = () => {
	return <div className=" scroll-margin-top bg-gray-50 bg-contain bg-bottom bg-no-repeat py-8 md:py-10 lg:py-14 flex flex-col justify-center items-center p-28">
		<div className="mx-auto w-full max-w-6xl px-5" >
      <div className="mb-5 text-center text-[30px] font-bold text-[#d82f8b]">Bình luận từ người xem
</div>
			<div className="flex justify-between">
				<div className="w-[32%] rounded-lg  text-[#fff] pb-[20px]" style={{
				boxShadow: `0 2px 8px 0 rgba(20,16,11,.07)`}}>
					<div className=" rounded-lg">
					<img src="https://traffic-edge37.cdn.vncdn.io/cinema/img/4907747409891181-maxresdefault.jpg" alt="" />
					</div>
					<div className="px-[10px]">
					<div className="text-black mt-[10px] flex items-center">
						<img className="w-[30px] h-[30px] rounded-full mr-[5px]" src="https://atc-edge14.mservice.com.vn/avatars/avatar/6f27/d88a400cfe9611d9cb0a0023b1ffb1df2fe9ce24a28f0e6fd3681419c23b.png" alt="" />
						<p>Trần Anh Thư · 27/04/2023</p>
					</div>
					<div className="mt-[5px] text-black">phim quá hay cảm xúc thay đổi liên tục đúng như lật mặt</div>
					</div>
					<div className="text-black font-bold px-[20px] mt-[20px] flex justify-end underline ">
						Xem thêm
					</div>
				</div>
				<div className="w-[32%] rounded-lg  text-[#fff] pb-[20px]" style={{
				boxShadow: `0 2px 8px 0 rgba(20,16,11,.07)`}}>
					<div className=" rounded-lg">
					<img src="https://traffic-edge37.cdn.vncdn.io/cinema/img/4907747409891181-maxresdefault.jpg" alt="" />
					</div>
					<div className="px-[10px]">
					<div className="text-black mt-[10px] flex items-center">
						<img className="w-[30px] h-[30px] rounded-full mr-[5px]" src="https://atc-edge14.mservice.com.vn/avatars/avatar/6f27/d88a400cfe9611d9cb0a0023b1ffb1df2fe9ce24a28f0e6fd3681419c23b.png" alt="" />
						<p>Trần Anh Thư · 27/04/2023</p>
					</div>
					<div className="mt-[5px] text-black">phim quá hay cảm xúc thay đổi liên tục đúng như lật mặt</div>
					</div>
					<div className="text-black font-bold px-[20px] mt-[20px] flex justify-end underline ">
						Xem thêm
					</div>
				</div>
				<div className="w-[32%] rounded-lg  text-[#fff] pb-[20px]" style={{
				boxShadow: `0 2px 8px 0 rgba(20,16,11,.07)`}}>
					<div className=" rounded-lg">
					<img src="https://traffic-edge37.cdn.vncdn.io/cinema/img/4907747409891181-maxresdefault.jpg" alt="" />
					</div>
					<div className="px-[10px]">
					<div className="text-black mt-[10px] flex items-center">
						<img className="w-[30px] h-[30px] rounded-full mr-[5px]" src="https://atc-edge14.mservice.com.vn/avatars/avatar/6f27/d88a400cfe9611d9cb0a0023b1ffb1df2fe9ce24a28f0e6fd3681419c23b.png" alt="" />
						<p>Trần Anh Thư · 27/04/2023</p>
					</div>
					<div className="mt-[5px] text-black">phim quá hay cảm xúc thay đổi liên tục đúng như lật mặt</div>
					</div>
					<div className="text-black font-bold px-[20px] mt-[20px] flex justify-end underline ">
						Xem thêm
					</div>
				</div>
			</div>
			<div className="flex content-center items-center mt-[40px]">
				<button className="text-[#d82f8b] px-[10px] py-[7px] hover:opacity-[0.8] text-[18px] border-[#d82f8b] border-2 font-bold bg-[#fff] m-auto rounded-2xl">
					Xem tiếp nhé !
				</button>
			</div>
    </div>
		<CinemaSystem />
  </div>
}
export default CommentViews