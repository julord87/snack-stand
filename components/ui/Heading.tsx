import { ReactNode } from "react";

export default function Heading({children} : {children: ReactNode}) {
  return (
    <h1 className="text-3xl my-10 poetsen">
      {children}
    </h1>
  )
}
