import Button from "./Button"
import HeroImg from '/images/illustration-working.svg'


const Hero = () => {
  return (
    <div className="flex flex-col-reverse pl-[10%] items-center 
    overflow-hidden pt-20
    pb-36 gap-12
    md:flex-row md:pt-40">
      <div className="w-full">
        <h1 className="text-[clamp(2rem,5vw,3.75rem)] 
            font-Poppins_Bold leading-[1.2] text-center
            md:text-left"
        >
          More than just shorter links
        </h1>
        <p className="mb-8 text-center md:text-left">Build your brand's recognition and get detailed insights on how your links are performing.</p>
        <Button textContent='Get Started' display='md:block md:mx-0'/>
      </div>
      <div className="w-full">
        <img src={HeroImg} alt="" />
      </div>
    </div>
  )
}

export default Hero