"use client";
import useSWR from "swr";
import Logo from "@/components/ui/Logo";
import { OrderWithProducts } from "@/src/types";
import LatestsOrderItem from "@/components/order/LatestsOrderItem";

export default function Page() { // Cambiado a 'Page'
  const url = "/orders/api";
  const fetcher = () => fetch(url).then((res) => res.json()).then((data) => data);
  const { data, error, isLoading } = useSWR<OrderWithProducts[]>(url, fetcher, { 
    revalidateOnFocus: false, 
    refreshInterval: 120000 
  });

  if (isLoading) return <p>Cargando...</p>; // Cambiado a comillas dobles

  if (data) return (
    <>
      <h1 className="poetsen text-center mt-20 text-6xl font-black">Ordenes Listas</h1>
      <div className="flex justify-center">
        <Logo />
      </div>

      {data.length ? (
        <div className="grid grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mt-10 max-w-5xl mx-auto">
          {data.map((order) => (
            <LatestsOrderItem key={order.id} order={order} />
          ))}
        </div>
      ) : (
        <p className="text-center poetsen">No hay ordenes pendientes</p>
      )}
    </>
  );

  return null; // Asegura que siempre haya un return statement
}
