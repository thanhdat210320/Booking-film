import Modal from '../Popup';
import { useState } from "react";

const Showing = () => {
	const [isOpen, setIsOpen] = useState<any>(false);
	const [isOpen1, setIsOpen1] = useState<any>(false);
	const [data, setData] = useState<any>([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]);

	return (
		<>
			<Modal
				title="Giới thiệu phim"
				open={isOpen}
				handleCancel={() => {
					setIsOpen(false)
				}}
				isOutSide={true}
				className="w-full max-w-[60%] h-[90vh]"
			>
				<div className="">
				<div className="w-full h-[400px]" style={{ boxShadow: "1px 1px 5px 1px #E8FFE0"}}>
					<iframe className='w-full h-full' allow="autoplay; encrypted-media" 
              allowFullScreen src="https://www.youtube.com/embed/tgbNymZ7vqY?rel=0&autoplay=1" />
				</div>
				<div className="flex text-white mt-[20px]">
					<div className=" w-[10%] h-[120px] mr-[20px]">
						<img className="w-[80px] h-full object-cover" src="https://img.cdn.vncdn.io/cinema/img/90576470029227527-y5rrebdZsGgpKb2U52rxMQTYbn0.jpg" alt="" />
					</div>
					<div className="w-[90%]">
						<p>Mikey 17 - Khoa Học Viễn Tưởng, Phiêu Lưu, Chính Kịch</p>
						<p>Được chuyển thể từ tiểu thuyết Mickey 7 của nhà văn Edward Ashton, Cuốn tiểu thuyết xoay quanh các phiên bản nhân bản vô tính mang tên “Mickey”, dùng để thay thế con người thực hiện cuộc chinh phạt nhằm thuộc địa hóa vương quốc băng giá Niflheim. Mỗi khi một Mickey chết đi,</p>
						<div className="flex mt-[10px]">
						<button className="py-[5px] px-[15px] bg-pink-500 rounded-md mr-[10px] hover:opacity-[0.8]">
							Đặt vẽ
						</button>
						<button onClick={() => setIsOpen(false)} className="py-[5px] px-[15px] bg-[#cccc] rounded-md mr-[10px] hover:opacity-[0.8]">
							Đóng
						</button>
						</div>
					</div>
				</div>
				</div>
			</Modal>

			<Modal
				title="Mua vé xem phim"
				open={isOpen1}
				handleCancel={() => {
					setIsOpen1(false)
				}}
				isOutSide={true}
				className="w-full max-w-[60%] h-[90vh]"
			>
				<div className="">
				<div className="w-full h-[400px]" style={{ boxShadow: "1px 1px 5px 1px #E8FFE0"}}>
					<div className="text-white w-[60%] h-[60%] m-auto flex justify-center items-center flex-wrap">
						{data?.map((i: any) =>{ return (
						<button className="w-[2.5rem] h-[2.5rem] ml-[0.6rem] mt-[20px] mb-[0.6rem] hover:opacity-[0.6] rounded-md bg-red-600">{i}</button>
						)}
						)}
					</div>
				</div>
				<div className="flex text-white mt-[20px] flex-col justify-between h-[150px] px-[20px]">
					<div className="border-b-[2px] border-white pb-[10px]">
						<p>Lật Mặt 6: Tấm Vé Định Mệnh</p>
						<p>23:45 ~ 01:57 · T4, 17/05 · Phòng chiếu P1 · 2D Phụ đề</p>
					</div>
					<div className="flex justify-between border-b-[2px] border-white pb-[10px]">
						<p>Chỗ ngồi: </p>
						<p>E4, E3, C3, B8, C8, A1 </p>
					</div>
					<div className="flex justify-between">
						<p>Tạm tính: 320.000đ</p>
						<button className="py-[5px] px-[15px] bg-pink-500 rounded-md mr-[10px] hover:opacity-[0.8]">Mua vé</button>
					</div>
				</div>
				</div>
			</Modal>
			<div className=" bg-black bg-contain bg-bottom bg-no-repeat py-8 md:py-10 lg:py-14 flex justify-center items-center p-28" style={{
				backgroundImage: `url(https://static.mservice.io/img/momo-upload-api-210701105436-637607336767432408.jpg)`
			}}>
				<div className="mx-auto w-full max-w-6xl px-5" >
					<div className="mb-5 text-center text-[25px] font-bold text-[#fff]">PHIM ĐANG CHIẾU</div>
					<div className="flex justify-between">
						<div className="w-[23%]  text-[#fff]">
							<div className="group h-[340px] overflow-hidden rounded-lg " onClick={() => setIsOpen(true)}>
								<img className="group-hover:scale-110 transition-transform duration-300 w-full h-full" src="https://img.cdn.vncdn.io/cinema/img/4907798370779676-9F0L1Ksfe2pqCRIvCdaA7Uvnr9W.jpg" alt="" />
							</div>
							<div className=" mt-[10px]">Lật mặt 6: Tấm vé định mệnh</div>
							<div className="">Tâm Lí Giật Gân</div>
							<div className="">600</div>
						</div>
						<div className="w-[23%]  text-[#fff]">
							<div className="group h-[340px] overflow-hidden rounded-lg " onClick={() => setIsOpen1(true)}>
								<img className="group-hover:scale-110 transition-transform duration-300 w-full h-full" src="https://img.cdn.vncdn.io/cinema/img/4907798370779676-9F0L1Ksfe2pqCRIvCdaA7Uvnr9W.jpg" alt="" />
							</div>
							<div className=" mt-[10px]">Lật mặt 6: Tấm vé định mệnh</div>
							<div className="">Tâm Lí Giật Gân</div>
							<div className="">600</div>
						</div>
						<div className="w-[23%]  text-[#fff]">
							<div className="group h-[340px] overflow-hidden rounded-lg ">
								<img className="group-hover:scale-110 transition-transform duration-300 w-full h-full" src="https://img.cdn.vncdn.io/cinema/img/4907798370779676-9F0L1Ksfe2pqCRIvCdaA7Uvnr9W.jpg" alt="" />
							</div>
							<div className=" mt-[10px]">Lật mặt 6: Tấm vé định mệnh</div>
							<div className="">Tâm Lí Giật Gân</div>
							<div className="">600</div>
						</div>
						<div className="w-[23%]  text-[#fff]">
							<div className="group h-[340px] overflow-hidden rounded-lg ">
								<img className="group-hover:scale-110 transition-transform duration-300 w-full h-full" src="https://img.cdn.vncdn.io/cinema/img/4907798370779676-9F0L1Ksfe2pqCRIvCdaA7Uvnr9W.jpg" alt="" />
							</div>
							<div className=" mt-[10px]">Lật mặt 6: Tấm vé định mệnh</div>
							<div className="">Tâm Lí Giật Gân</div>
							<div className="">600</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default Showing