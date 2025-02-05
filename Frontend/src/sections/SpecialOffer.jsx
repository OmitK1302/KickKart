import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const SpecialOffer = () => {
  return (

    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container ">
      
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain w-full" />
      </div>
      
      <div className="flex flex-col flex-1">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red"> Special</span> Offer
        </h2>
        <p className="text-slate-gray text-lg font-montserrat leading-7 mt-4 lg:max-w-lg">
          Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart
        </p>

        <p className="mt-6 lg:max-w-lg text-slate-gray font-montserrat leading-7 text-lg">
          Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your jouney with us is nothing short of exceptional.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <Link to={"/products"}>
            <Button label={"Shop now"} iconURL={arrowRight}/>
          </Link>
          

          <Button label={"Learn More"} backgroundColor = "bg-white" borderColor = "border-slate-gray" textColor = "text-slate-gray"/>
        </div>
      </div>
    </section> 

  )
}

export default SpecialOffer;