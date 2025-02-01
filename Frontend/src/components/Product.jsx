import { star } from "../assets/icons"

const Product = ({productData}) => {
    const imgURL = productData.images[0];
    const name = productData.name;
    const price = productData.price;
    const rating = productData.rating;
    return (
        <div className="flex flex-wrap flex-col w-1/2">
            <img src={imgURL} alt={name} className="object-cover w-[280px] h-[280px]" />
            
            <div className="mt-8 flex justify-start gap-2.5">
                <img src={star} alt="rating" width={24} height={24} />
                <p className="font-montserrat text-xl leading-normal text-slate-gray">({rating})</p>
            </div>

            <h3 className="mt-2 text-2xl leading-normal font-palanquin font-semibold">{name}</h3>
            <p className="font-semibold leading-normal font-montserrat text-coral-red text-2xl">{price}</p>
        </div>
    )
}

export default Product