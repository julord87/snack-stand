import Link from "next/link";

type ProductsPaginationProps = {
    page: number
    totalPages: number
}


export default function ProductsPagination({page, totalPages} : ProductsPaginationProps) {
  return (
    <nav className="flex justify-center py-10">

        {page < totalPages && (
            <Link
                href={`products?page=${page + 1}`}
                className=" bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
            >&raquo;</Link>
        )}
    </nav>
  )
}
