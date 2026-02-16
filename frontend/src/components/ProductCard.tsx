import { type Product } from "./ShowProduct"

type ProductCardProps = {
    data: Product
}
const ProductCard = ({ data }: ProductCardProps) => {
    const { id, name, price, category } = data
    return (
        <div className='productCard'>
            <span>
                <h2>{name}</h2>
                <h4><span>{category}</span> <span className='id'>{id}</span></h4>
                <h4>Rs. {price}</h4>
            </span>
        </div>
    )
}

export default ProductCard
