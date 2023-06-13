
import { useEffect, useState } from "react"
import Modal from '../Popup';
import { Link } from "react-router-dom";
const FilterDetail = ({movies}: any) => {
	const [isOpen, setIsOpen] = useState<any>(false);
	const [trailer, setTrailer] = useState<any>({});

	const openTrailer = (item: any) => {
		console.log(item)
		setIsOpen(true)
		setTrailer(item)
	}

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
					<div className="w-full h-[400px]" style={{ boxShadow: "1px 1px 5px 1px #E8FFE0" }}>
						<iframe className='w-full h-full' allow="autoplay; encrypted-media"
							allowFullScreen src={trailer.trailer} />
					</div>
					<div className="flex text-white mt-[20px]">
						<div className=" w-[10%] h-[120px] mr-[20px]">
							<img className="w-[80px] h-full object-cover" src={trailer.poster} alt="" />
						</div>
						<div className="w-[90%]">
							<p className="text-[24px]">{trailer.title}</p>
							<p>Được chuyển thể từ tiểu thuyết Mickey 7 của nhà văn Edward Ashton, Cuốn tiểu thuyết xoay quanh các phiên bản nhân bản vô tính mang tên “Mickey”, dùng để thay thế con người thực hiện cuộc chinh phạt nhằm thuộc địa hóa vương quốc băng giá Niflheim. Mỗi khi một Mickey chết đi,</p>
							<div className="flex mt-[10px]">
								<button className="py-[5px] px-[15px] bg-pink-500 rounded-md mr-[10px] hover:opacity-[0.8]">
									Đặt vé
								</button>
								<button onClick={() => openTrailer(false)} className="py-[5px] px-[15px] bg-[#cccc] rounded-md mr-[10px] hover:opacity-[0.8]">
									Đóng
								</button>
							</div>
						</div>
					</div>

				</div>
			</Modal>
			<div className="bg-contain bg-bottom bg-no-repeat py-8 md:py-10 lg:py-14 flex justify-center items-center p-28">
				<div className="mx-auto w-full max-w-6xl px-5" >
					<div className="flex flex-wrap justify-between">
						{movies?.map((item: any) => {
							return (
								<div className="w-[23%] text-black">
									<div className="group h-[340px] overflow-hidden rounded-lg ">
										<img className="group-hover:scale-110 transition-transform duration-300 w-full h-full object-cover" src={`http://localhost:8228/files/${item.poster}`} alt="" onClick={() => openTrailer(item)} />
									</div>
									<Link to={`/${item.id}`}>
										<div className=" mt-[10px]">{item.title}</div>
										<div className="">{item.genre}</div>
										<div className="">{item.duration} phút</div>
									</Link>

								</div>
							)
						})}

					</div>
				</div>
			</div>
		</>
	)
}
export default FilterDetail