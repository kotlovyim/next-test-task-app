"use client";

import { Avatar, AvatarFallback } from "../ui/avatar";
import { SidebarContent } from "../ui/sidebar";
import Link from "next/link";
import { LayoutDashboard, Settings } from "lucide-react";
import { usePathname } from "next/navigation";

type Link = {
    icon: React.ReactNode;
    href: string;
    label: string;
};

const links: Link[] = [
    {
        icon: <LayoutDashboard />,
        href: "/",
        label: "Dashboard",
    },
    {
        icon: <Settings />,
        href: "/settings",
        label: "Settings",
    },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <SidebarContent className="max-w-64 h-screen px-7 py-9 bg-white">
            <div className="flex items-center gap-2 mb-10">
                <Avatar className="w-8 h-8">
                    <AvatarFallback>C</AvatarFallback>
                </Avatar>
                <p className="text-lg font-bold">TESTAPP</p>
            </div>
            <nav className="-mx-3">
                {links.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link key={link.href} href={link.href}>
                            <div
                                className={`flex items-center gap-2 py-2 px-3 rounded-md transition-colors ${
                                    isActive
                                        ? "text-primary font-semibold"
                                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                                }`}
                            >
                                {link.icon}
                                {link.label}
                            </div>
                        </Link>
                    );
                })}
            </nav>
            <div className="flex items-center gap-2 mt-auto">
                <Avatar className="w-8 h-8">
                    <AvatarFallback>C</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <p className="font-bold text-xs">User R.</p>
                    <span className="text-[10px] text-muted-foreground">
                        test-mail@email.com
                    </span>
                </div>
            </div>
        </SidebarContent>
    );
}
