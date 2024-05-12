"use client"
import { useStore } from "@/src/store"
import ProductDetails from "../products/ProductDetails"
import { useMemo } from "react"
import { formatCurrency } from "@/src/utils"

export default function OrderSummary() {
  const order = useStore(state => state.order)
  const total = useMemo(() => order.reduce((acc, item) => acc + item.quantity * item.price, 0), [order])

  return (
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">
        <h1 className="text-4xl text-center font-black">Mi pedido</h1>

        {order.length === 0 ? (
          <p className="text-xl my-10 text-center">
            No hay elementos en tu pedido
          </p>
        ) : (
          <div className="mt-5">
            {order.map(item => (
              <ProductDetails 
                key={item.id}
                item={item}
              />
            ))}

            <p className="text-2xl mt-20 text-center">
              Total a pagar: {''}
              <span className="font-bold"> {formatCurrency(total)} </span>
            </p>

          </div>
        )}
        
    </aside>
  )
}
