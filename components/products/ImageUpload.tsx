"use client"
import { getImagePath } from "@/src/utils"
import { CldUploadWidget } from "next-cloudinary"
import Image from "next/image"
import { useState } from "react"
import { TbPhotoPlus } from "react-icons/tb"

export default function ImageUpload({image} : {image: string | undefined}) {

    const [imageURL, setImageURL] = useState('')

  return (
    <CldUploadWidget
        onSuccess={(result, {widget}) => {
            if(result.event === 'success') {
                widget.close()
                // @ts-ignore
                setImageURL(result.info?.secure_url)
            }
        }}
        uploadPreset="kfucr3y3"
        options={{
            maxFiles: 1,
            maxFileSize: 2 * 1024 * 1024
        }}
    >
        {({open}) => (
            <>
                <div className="space-y-2">
                    <label className="text-slate-800"></label>
                    <div 
                        className="relative cursor-pointer hover:opacity-70 transition p-10 border-neutral-50 flex flex-col justify-center items-center gap-4 text-neutral-600 bg-slate-100"
                        onClick={() => open()}
                    >
                        <TbPhotoPlus size={50} />
                        <p className="text-lg font-semibold">Agrega una imagen</p>

                        {imageURL && (
                            <div
                                className="absolute inset-0 w-full h-full"
                            >
                                <Image
                                    fill
                                    src={imageURL}
                                    alt="Imagen de producto"
                                    style={{objectFit: 'contain'}}
                                />
                            </div>
                        )}
                    </div>
                </div>

                {image && !imageURL && (
                    <div>
                        <label htmlFor="">Imagen actual:</label>
                        <div className="relative w-64 h-64">
                            <Image
                                fill
                                src={getImagePath(image)}
                                alt="Imagen de producto"
                            />
                        </div>
                    </div>
                )}

                <input
                    type="hidden"
                    name="image"
                    defaultValue={imageURL ? imageURL : image}
                />
            </>
        )}

    </CldUploadWidget>
  )
}
