import { hero_img } from "../assets"

const Hero = () => {
  return (
    <section className="bg-[#BAE2E1] py-5 max-md:py-10">
      <div className="container flex gap-12 items-center max-md:flex-col-reverse justify-between ">
        <div className="max-md:text-center">
          <h1 className="text-red-400 font-bold text-3xl lg:text-4xl pb-2 max-md:pb-4">Make memories with Miva</h1>
          <p className="text-green-800">
            Explore our curated selection of premium quality designed <br />
             and handmade pieces to elevate your decor
          </p>
        </div>
        <div className="relative">
          <div className="z-[1px]"><img src={hero_img} alt="hero_img" /></div>
          {/* <div style={{borderTopRightRadius: '20px'}} className="absolute z-0 bg-green-200 top-0 -right-10 min-w-[250px] min-h-[250px]"></div> */}
        </div>
      </div>
    </section>
  )
}

export default Hero