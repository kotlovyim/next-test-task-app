import type { LucideIcon } from "lucide-react";
import { LayoutDashboard, Settings } from "lucide-react";

export type SidebarNavItem = {
    href: string;
    label: string;
    icon: LucideIcon;
};

export const sidebarNav: SidebarNavItem[] = [
    {
        href: "/",
        label: "Dashboard",
        icon: LayoutDashboard,
    },
    {
        href: "/settings",
        label: "Settings",
        icon: Settings,
    },
];
