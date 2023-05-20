const BannerDetail = () => {
  return <div className="flex justify-center items-center p-20 relative" style={{backgroundImage: "url(https://static.mservice.io/cinema/momo-upload-api-230202102047-638109300473359982.jpg)", backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}>
		<div className="bg-black/60 absolute top-0 left-0 right-0 bottom-0 h-full w-full z-50" style={{ background: "background-color: rgb(0 0 0 / 0.6)"}}/>
    <div className="flex items-center w-[1200px] z-[999]" >
      <div className="w-[25%]">
				<div className="w-[257px] h-[380px] border-[#fff] border-[1px]">
        <img className="w-full h-full" src="https://img.cdn.vncdn.io/cinema/img/575493613191880-7tbQEN9yEFkuxhsvF0eh7dckLTQ.jpg" style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"}} />
				</div>
      </div>
			<div>
        <h1 className="font-bold text-3xl text-white z-999">Quá Nhanh Quá Nguy Hiểm 10</h1>
        <ul className="flex flex-col text-white space-y-1 font-medium pt-1 m-[10px]">
          <li>Fast X·2023·140 phút</li>
          <li>Bắt đầu đoạn cuối cung đường.</li>
          <li>Nội dung</li>
          <li>Phần phim thứ 10 của chuỗi phim Quá Nhanh Quá Nguy Hiểm.</li>
        </ul>
      </div>
    </div>
  </div>
}
export default BannerDetail