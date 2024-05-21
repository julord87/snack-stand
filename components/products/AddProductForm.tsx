"use client"
import { ReactNode } from "react";
import ProductForm from "./ProductForm";
import { ProductSchema } from "@/src/schema";
import { toast } from "react-toastify";
import { createProduct } from "@/actions/create-product-action";
import { useRouter } from "next/navigation";

export default function AddProductForm({children} : {children: ReactNode}) {
    const router = useRouter()

    const handleSubmit = async (formData : FormData) => {
        const data = {
            name: formData.get('name'),
            price: formData.get('price'),
            categoryId: formData.get('categoryId'),
            image: formData.get('image')
        }

        const result = ProductSchema.safeParse(data)
        
        if(!result.success) {
            result.error.issues.forEach(issue => {
                toast.error(issue.message)
            })
            return
        }
        
        const response = await createProduct(data)

        if(response?.errors) {
            response.errors.forEach(error => {
                toast.error(error.message)
            })
        }

        toast.success('Tu producto ha sido creado!')
        router.push('/admin/products')
    }

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto">
        <form 
            className="space-y-5"
            action={handleSubmit}
        >
            {children}

            <input 
                type="submit" 
                className=" bg-indigo-600 hover:bg-indigo-800 text-white w-full p-3 uppercase font-bold cursor-pointer"
                value="Registrar Producto"
            />
        </form>
    </div>
  )
}
