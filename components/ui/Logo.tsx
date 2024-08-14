import Image from "next/image";

export default function Logo() {
  return (
    <div className="flez justify-center mt-5">
        <div className="relative w-40 h-40">
            <Image
                fill
                alt="Logotipo Fresh Coffee"
                src='/logo.svg'            />
        </div>
    </div>
  )
}
