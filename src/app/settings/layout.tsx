import Profile from "@/features/settings/components/Profile";

export default function SettingsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-full flex-col lg:flex-row">
            <div className="flex-1 overflow-auto">{children}</div>
            <div className="hidden lg:block">
                <Profile />
            </div>
        </div>
    );
}
