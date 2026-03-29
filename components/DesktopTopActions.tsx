import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  ShoppingCart,
  User,
  Store,
} from "lucide-react";

export default function DesktopTopActions() {
  const pathname = usePathname();
  const color = pathname==="/online-magazine"?"white":"black";
  const items = [
    { label: "Do‘kon", icon: Store, href:"/online-magazine"},
    { label: "Qidiruv", icon: Search, href: "online-magazine"},
    { label: "Savat", icon: ShoppingCart, href: "/cart"},
    { label: "Profil", icon: User, href: "online-magazine" },
  ];

  return (
    <div className="hidden md:flex items-center justify-end gap-3 px-6 pt-20 lg:px-8">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center gap-2 rounded-full px-4 py-2 transition border border-${color}/15 ${
              item.href===pathname
                ? "bg-white text-[#203b28]"
                : `bg-${color}/5 text-${color} hover:bg-${color}/10`
            }`}
          >
            <Icon size={18} />
            <span className="text-sm font-medium">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}