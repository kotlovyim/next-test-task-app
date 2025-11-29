"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Profile() {
    const profileCompletion = 75;

    return (
        <aside className="bg-white w-80 p-6 flex flex-col h-screen min-h-[600px] flex-shrink-0">
            <div className="mb-8">
                <h1 className="text-xl font-bold text-foreground">
                    My Profile
                </h1>
                <span className="text-sm text-primary font-medium">
                    {profileCompletion}% completed your profile
                </span>
            </div>

            <div className="flex-1 flex flex-col items-center">
                <div className="relative w-32 h-32 mb-4 flex items-center justify-center">
                    <div className="absolute w-full h-full">
                        <CircularProgressbar
                            value={profileCompletion}
                            strokeWidth={4}
                            styles={buildStyles({
                                pathColor: "#22c55e",
                                trailColor: "#e4e4e7",
                                strokeLinecap: "round",
                            })}
                        />
                    </div>
                    <Avatar className="w-24 h-24">
                        <AvatarImage src="" />
                        <AvatarFallback className="bg-zinc-300 text-3xl text-zinc-500"></AvatarFallback>
                    </Avatar>
                </div>

                <h2 className="text-lg font-semibold text-foreground">
                    User R.
                </h2>
                <p className="text-sm text-muted-foreground">
                    Developer at White Digital
                </p>
            </div>

            <div className="mt-auto">
                <Button variant="destructive" className="w-full">
                    Logout
                </Button>
            </div>
        </aside>
    );
}
