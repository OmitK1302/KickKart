import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";
import { Link } from "react-router-dom";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container p-2">
      <div className="relative xl:w-[40%] flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 z-10">
        <p className="font-montserrat text-xl text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap z-10 pr-10">The New Arrivals</span>
          <br />
          <span xl:bg-white xl:whitespace-nowrap z-10 pr-10>at </span><span className="text-coral-red mt-3 inline-block">KickCart</span>
        </h1>
        <p className="text-slate-gray text-lg font-montserrat leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish new arrivals, quality comfort, and innovation for your active life</p>

        <Link to={"/products"} className="z-10">
          <Button label={"Shop Now"} iconURL={arrowRight} />
        </Link> 

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((item) =>  
            <div key={item.label}>

              <p className="text-4xl font-palanquin font-bold">{item.value}</p>

              <p className="font-montserrat text-slate-gray leading-7">{item.label}</p>
            </div>
          )}
        </div>
      </div>
      
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
          <img src={bigShoeImg} alt="Shoe Collection" width={610} height={500} className="relative object-contain z-10"/>
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map(shoe => 
            <div key={shoe.thumbnail}>
              <ShoeCard imgURL={shoe} changeBigShoeImage={(shoe) => {setBigShoeImg(shoe)}} bigShoeImg= {bigShoeImg} />
            </div>
          )}
        </div>
      </div>

    </section>
  )
}

export default Hero;