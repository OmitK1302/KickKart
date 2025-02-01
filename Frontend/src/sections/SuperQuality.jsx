import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-col flex-1">
          <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            We Provide You
            <span className="text-coral-red"> Super</span>
            <span className="text-coral-red"> Quality</span> Shoes
          </h2>
          <p className="text-slate-gray text-lg font-montserrat leading-7 mt-4 lg:max-w-lg">
            Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience,
            providing you with unmatched quality, innovation, and a touch of elegance.
          </p>

          <p className="mt-6 lg:max-w-lg text-slate-gray font-montserrat leading-7 text-lg">
            Our dedication ot detail and excellence ensures you satisfaction.
          </p>

          <div className="mt-6">
            <Button label={"View Details"}/>
          </div>
          
        
      </div>


      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="shoe image" width={570} height={522} className="object-contain" />
      </div>
    </section>
  )
}

export default SuperQuality;