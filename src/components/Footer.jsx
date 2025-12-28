import Logo from '/images/logo.svg'
import facebookIcon from '/images/icon-facebook.svg'
import twitterIcon from '/images/icon-twitter.svg'
import pinterestIcon from '/images/icon-pinterest.svg'
import instagramIcon from '/images/icon-instagram.svg'


const Footer = () => {
  return (
    <div className="bg-GrayC-600 -500 py-12 
    text-white flex containerC flex-col gap-8
    items-center
    md:flex-row md:items-start md:gap-8">
        <div className="w-full">
            <img className='invert brightness-[1] flex mx-auto md:block md:mx-0' src={Logo} alt="" />
        </div>
        <div className="flex w-full gap-8 text-nowrap
        flex-col text-center
        md:flex-row md:text-left md:gap-16">
            <div>
                <h2 className='font-Poppins_Bold mb-4'>Features</h2>
                <p className='pb-2 text-GrayC-400 font-Poppins_Regular'>Link Shortening</p>
                <p className='pb-2 text-GrayC-400 font-Poppins_Regular'>Branded Links</p>
                <p className='pb-2 text-GrayC-400 font-Poppins_Regular'>Analytics</p>
            </div>
            <div>
                <h2 className='font-Poppins_Bold mb-4'>Resources</h2>
                <p className='pb-2 text-GrayC-400 font-Poppins_Regular'>Blog</p>
                <p className='pb-2 text-GrayC-400 font-Poppins_Regular'>Developers</p>
                <p className='pb-2 text-GrayC-400 font-Poppins_Regular'>Support</p>
            </div>
            <div>
                <h2 className='font-Poppins_Bold mb-4'>Company</h2>
                <p className='pb-2 text-GrayC-400 font-Poppins_Regular'>About</p>
                <p className='pb-2 text-GrayC-400 font-Poppins_Regular'>Our Team</p>
                <p className='pb-2 text-GrayC-400 font-Poppins_Regular'>Careers</p>
                <p className='pb-2 text-GrayC-400 font-Poppins_Regular'>Contact</p>
            </div>
        </div>
        <div className="w-full flex items-start justify-center gap-4 md:ml-4">
            <img className='w-[20px]' src={facebookIcon} alt="" />
            <img className='w-[20px]' src={twitterIcon} alt="" />
            <img className='w-[20px]' src={pinterestIcon} alt="" />
            <img className='w-[20px]' src={instagramIcon} alt="" />
        </div>
    </div>
  )
}

export default Footer