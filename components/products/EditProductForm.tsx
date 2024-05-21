"use client"
import { ReactNode } from "react";
import { ProductSchema } from "@/src/schema";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { updateProduct } from "@/actions/update-product-action";
import { useParams } from "next/navigation";

export default function EditProductForm({children} : {children: ReactNode}) {
    const router = useRouter()
    const params = useParams<{id: string}>()
    const id = +params.id!

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
        
        const response = await updateProduct(result.data, id)

        if(response?.errors) {
            response.errors.forEach(error => {
                toast.error(error.message)
            })
        }

        toast.success('Producto actualizado correctamente!')
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
                value="Guardar Cambios"
            />
        </form>
    </div>
  )
}
