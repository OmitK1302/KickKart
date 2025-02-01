import { star } from "../assets/icons"

const ReviewCard = ({imgURL, feedback, rating, customerName}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={imgURL} alt="customer" className="rounded-full object-cover w-[120px] h-[120px]" />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      
      <div className="mt-5 flex gap-2.5 justify-center items-center">
        <img src={star} alt="rating" width={24} height={24} className="object-containe m-0" /> 
        <p className="font-montserrat text-xl text-slate-gray ">({rating})</p> 
      </div>
      <h3 className="mt-1 text-center font-bold font-palanquin text-3xl">{customerName}</h3>
    </div>
  )
}

export default ReviewCard