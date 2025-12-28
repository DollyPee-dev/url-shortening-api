
const Card = ({ stat_img, stat_Title, stat_detail, mt }) => {
  return (
    <div className={`bg-white shadow-sm rounded-md p-6 pt-12 relative ${mt} relative z-10 flex-1`}>
        <div className="bg-PurpleC p-4 rounded-full w-fit absolute -top-8">
            <img className="w-[30px]" src={stat_img} alt="" />
        </div>
        <h3 className="text-PurpleC text-base font-Poppins_Bold mb-2">{stat_Title}</h3>
        <p className="text-GrayC-500 leading-6 text-sm font-Poppins_Regular">{stat_detail}</p>
    </div>
  )
}

export default Card