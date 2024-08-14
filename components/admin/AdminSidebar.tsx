import Logo from "../ui/Logo";
import AdminRoute from "./AdminRoute";

const adminNavigation = [
  { url: "/admin/orders", text: "Ordenes", blank: false },
  { url: "/admin/products", text: "Productos", blank: false },
  { url: "/order/cafe", text: "Ver Quiosco", blank: true },
];

export default function AdminSidebar() {
  return (
    <>
      <div className="flex justify-center mb-10">
        <Logo />
      </div>

      <div className="space-y-3 ">
        <nav className="flex flex-col poetsen">

            {adminNavigation.map(link => (
                <AdminRoute 
                    key={link.url}
                    link={link}
                />
            ))}

        </nav>
      </div>
    </>
  );
}
