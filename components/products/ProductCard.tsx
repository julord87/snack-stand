import { formatCurrency, getImagePath } from "@/src/utils"
import { Product } from "@prisma/client"
import Image from "next/image"
import AddProductButton from "./AddProductButton"

type ProductCardProps = {product: Product}

export default function ProductCard({product} : ProductCardProps) {
  return (
    <div className="border bg-white">

        <Image
            width={300}
            height={400}
            src={getImagePath(product.image)}
            alt={`Imagen de ${product.name}`}
        />

        <div className="p-5">
            <h3 className="text-2xl font-bold poetsen">{product.name}</h3>
            <p className="mt-5 font-black text-4xl text-amber-500 poetsen">
                {formatCurrency(product.price)}
            </p>

            <AddProductButton product={product}/>
        </div>
        
    </div>
  )
}
