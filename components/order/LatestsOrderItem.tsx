import { OrderWithProducts } from '@/src/types'
import React from 'react'

type LatestsOrderItemProps = {
    order: OrderWithProducts
}

export default function LatestsOrderItem({order} : LatestsOrderItemProps) {
  return (
    <div className='bg-white shadow p-5 space-y-5 rounded-lg'>
        <p className='text-2xl font-bold text-slate-600'>
            Cliente: {order.name}
        </p>

        <ul 
            className='divide-y divide-slate-200 border-t border-gray-200 text-sm font-medium text-gray-500'
            role='list'
        >
            {order.orderProducts.map((product) => (
                <li key={product.id} className='flex justify-between py-1'>
                    
                    <span>{product.quantity} {' '}<span>{product.product.name}</span></span>
                </li>
            ))}
        </ul>

    </div>
  )
}
