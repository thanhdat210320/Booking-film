const ShowtimeDetail = () => {
	return <div className="mx-auto w-full max-w-6xl px-5 " >
	<div className="mb-5 text-center text-[25px] font-bold text-[#d82f8b]">LỊCH CHIẾU PHIM</div>
	<div className="flex flex-col justify-between border-2 rounded-lg" style={{
		boxShadow: `0 2px 8px 0 rgba(20,16,11,.07)`
	}}>
		<div className="w-full p-[10px]">
			<div className="flex">
				<p>Vị trí</p>
				<select name="" id="">
					<option value="">Hà nội</option>
				</select>
				<div className="">Gần bạn</div>
			</div>
			<div className="flex mt-[15px] ml-[10px]">
				<div className="mr-[20px]">
				<div className="border-2 rounded-lg border-rose-600 w-[60px] h-[60px]">
					<img className="w-full h-full" src="https://static.mservice.io/placebrand/s/momo-upload-api-190709165424-636982880641515855.jpg" alt="" />
				</div>
				<p>Tất cả</p>
				</div>
				<div className="mr-[20px]">
				<div className="border-2 rounded-lg border-rose-600 w-[60px] h-[60px]">
					<img className="w-full h-full" src="https://static.mservice.io/placebrand/s/momo-upload-api-190709165424-636982880641515855.jpg" alt="" />
				</div>
				<p>Tất cả</p>
				</div>
				<div className="mr-[20px]">
				<div className="border-2 rounded-lg border-rose-600 w-[60px] h-[60px]">
					<img className="w-full h-full" src="https://static.mservice.io/placebrand/s/momo-upload-api-190709165424-636982880641515855.jpg" alt="" />
				</div>
				<p>Tất cả</p>
				</div>
				
				<div className="mr-[20px]">
				<div className="border-2 rounded-lg border-rose-600 w-[60px] h-[60px]">
					<img className="w-full h-full" src="https://static.mservice.io/placebrand/s/momo-upload-api-190709165424-636982880641515855.jpg" alt="" />
				</div>
				<p>Tất cả</p>
				</div>
				<div className="mr-[20px]">
				<div className="border-2 rounded-lg border-rose-600 w-[60px] h-[60px]">
					<img className="w-full h-full" src="https://static.mservice.io/placebrand/s/momo-upload-api-190709165424-636982880641515855.jpg" alt="" />
				</div>
				<p>Tất cả</p>
				</div>

			</div>
		</div>
		<div className="flex ">
			<div className="w-[30%] pt-[10px]">
				<div className="m-auto w-[90%] h-[40px] mb-[10px]">
					<input type="text" name="" id="" className="w-full h-full bg-[#ccc] pl-[10px] focus:none rounded-md" placeholder="Tìm kiếm theo từ khóa..."/>
				</div>
				<div className="flex flex-col">
					<div className="flex items-center  border-b-[#e5e5e5] border-b-2 pb-[10px] p-[10px]">
						<div className="w-[40px] h-[40px] mr-[10px] border-[#e5e5e5] border-2 rounded-sm">
						<img className="w-full h-full" src="https://static.mservice.io/blogscontents/momo-upload-api-210604170617-637584231772974269.png" alt="" />
						</div>
						<div className="flex-1">Lotte Kosmo</div>
						<div className="mr-[10px]"> : </div>
					</div>
					<div className="flex items-center  border-b-[#e5e5e5] border-b-2 pb-[10px] p-[10px]">
						<div className="w-[40px] h-[40px] mr-[10px] border-[#e5e5e5] border-2 rounded-sm">
						<img className="w-full h-full" src="https://static.mservice.io/blogscontents/momo-upload-api-210604170617-637584231772974269.png" alt="" />
						</div>
						<div className="flex-1">Lotte Kosmo</div>
						<div className="mr-[10px]"> : </div>
					</div>
					<div className="flex items-center border-b-[#e5e5e5] border-b-2 pb-[10px] p-[10px]">
						<div className="w-[40px] h-[40px] mr-[10px] border-[#e5e5e5] border-2 rounded-sm">
						<img className="w-full h-full" src="https://static.mservice.io/blogscontents/momo-upload-api-210604170617-637584231772974269.png" alt="" />
						</div>
						<div className="flex-1">Lotte Kosmo</div>
						<div className="mr-[10px]"> : </div>
					</div>

				</div>
				<div className="flex items-center justify-center">
					<button className="text-[#fff] my-[10px] p-[8px] hover:opacity-[0.8] text-[16px] font-bold bg-[#f9b5c3] m-auto rounded-lg">Xem thêm</button>
				</div>
			</div>
			<div className="w-[70%] h-[550px] overflow-y-auto relative">
				<div className=" sticky top-0 z-[999]">
				<div className="flex items-center p-[10px] h-[62px] bg-gray-50 px-4 pb-2.5 pt-2.5">
					<div className="w-[40px] h-[40px] mr-[10px] border-[#e5e5e5] border-2 rounded-sm">
						<img className="w-full h-full" src="https://static.mservice.io/blogscontents/momo-upload-api-210604170617-637584231772974269.png" alt="" />
					</div>
					<div className="flex flex-col sticky top-0">
						<div className="">Lotte Kosmo</div>
						<div className="">Tầng 2 Kosmo Tây Hồ, Số 161 Xuân La, P. Xuân Tảo, Q. Bắc Từ Liêm
							[ Bản đồ ]</div>
					</div>
				</div>
				<div className="flex p-[10px] bg-white border-b-[#e5e5e5] border-b-2" >
					<div className="flex flex-col justify-center items-center border-[#e5e5e5] border-2 rounded-sm mr-[10px]" >
						<div className="bg-[#a50064] py-[10px] flex w-full text-white justify-center">27</div>
						<div className="p-[10px] text-[12px]">Hôm nay</div>
					</div>
					<div className="flex flex-col justify-center items-center border-[#e5e5e5] border-2 rounded-sm mr-[10px]" >
						<div className="bg-[#a50064] py-[10px] flex w-full text-white justify-center">27</div>
						<div className="p-[10px] text-[12px]">Hôm nay</div>
					</div>
					<div className="flex flex-col justify-center items-center border-[#e5e5e5] border-2 rounded-sm mr-[10px]" >
						<div className="bg-[#a50064] py-[10px] flex w-full text-white justify-center">27</div>
						<div className="p-[10px] text-[12px]">Hôm nay</div>
					</div>
				</div>
				</div>

				<div className="mt-[15px]">
					<div className="py-[10px] px-[20px] border-b-[#e5e5e5] border-b-2">
						<div className="flex border-b-[#e5e5e5] border-b-2 mb-[20px] pb-[20px]">
							<div className="w-[120px] h-[180px] mr-[20px] rounded-lg overflow-hidden">
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
								<div className="border-[#e5e5e5] border-2 rounded-md p-[5px]">
									<p className="flex justify-center items-center">22:30 ~ 00:21	</p>
								</div>
							</div>

						</div>
						<div className="flex border-b-[#e5e5e5] border-b-2 mb-[20px] pb-[20px]">
							<div className="w-[120px] h-[180px] mr-[20px] rounded-lg overflow-hidden">
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
								<div className="border-[#e5e5e5] border-2 rounded-md p-[5px]">
									<p className="flex justify-center items-center">22:30 ~ 00:21	</p>
								</div>
							</div>

						</div>
						<div className="flex border-b-[#e5e5e5] border-b-2 mb-[20px] pb-[20px]">
							<div className="w-[120px] h-[180px] mr-[20px] rounded-lg overflow-hidden">
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
								<div className="border-[#e5e5e5] border-2 rounded-md p-[5px]">
									<p className="flex justify-center items-center">22:30 ~ 00:21	</p>
								</div>
							</div>

						</div>
						<div className="flex border-b-[#e5e5e5] border-b-2 mb-[20px] pb-[20px]">
							<div className="w-[120px] h-[180px] mr-[20px] rounded-lg overflow-hidden">
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
								<div className="border-[#e5e5e5] border-2 rounded-md p-[5px]">
									<p className="flex justify-center items-center">22:30 ~ 00:21	</p>
								</div>
							</div>

						</div>

					</div>
				</div>
			</div>

		</div>

	
	</div>
			</div>
}
export default ShowtimeDetail