"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarNav } from "@/constants/sidebar-nav";
import { cn } from "@/lib/utils";

export default function MobileNav() {
    const pathname = usePathname();

    return (
        <div className="flex items-center justify-between border-b bg-white px-4 py-3 shadow-sm lg:hidden">
            <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                    <AvatarFallback>C</AvatarFallback>
                </Avatar>
                <p className="text-base font-bold">TESTAPP</p>
            </div>
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                        aria-label="Open navigation"
                    >
                        <Menu className="size-5" />
                    </Button>
                </SheetTrigger>
                <SheetContent
                    side="left"
                    className="w-full max-w-full p-0 sm:max-w-sm"
                >
                    <div className="flex h-full flex-col bg-white overflow-hidden">
                        <SheetHeader className="border-b px-6 py-4">
                            <SheetTitle className="text-lg font-semibold">
                                Navigation
                            </SheetTitle>
                        </SheetHeader>
                        <nav className="flex-1 space-y-1 overflow-y-auto px-4 py-4">
                            {sidebarNav.map((link) => {
                                const Icon = link.icon;
                                const isActive = pathname === link.href;
                                return (
                                    <SheetClose asChild key={link.href}>
                                        <Link
                                            href={link.href}
                                            className={cn(
                                                "flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium transition-colors",
                                                isActive
                                                    ? "bg-primary/10 text-primary"
                                                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                                            )}
                                        >
                                            <Icon className="size-4" />
                                            {link.label}
                                        </Link>
                                    </SheetClose>
                                );
                            })}
                        </nav>
                        <div className="flex items-center gap-3 border-t px-6 py-4">
                            <Avatar className="h-10 w-10">
                                <AvatarFallback>UR</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-sm font-semibold">User R.</p>
                                <p className="text-xs text-muted-foreground">
                                    test-mail@email.com
                                </p>
                            </div>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
}
