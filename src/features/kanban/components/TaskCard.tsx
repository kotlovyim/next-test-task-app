import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Calendar, MoreHorizontal, Pencil, Trash2, Eye } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDraggable } from "@dnd-kit/core";

interface TaskCardProps {
    id: string;
    title: string;
    description: string;
    date: string;
}

export default function TaskCard({
    id,
    title = "",
    description = "",
    date = "",
}: TaskCardProps) {
    const { attributes, listeners, setNodeRef, transform, isDragging } =
        useDraggable({
            id: id,
        });

    const style = transform
        ? {
              transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
          }
        : undefined;

    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
            <Card
                className={`w-full h-[180px] shadow-none hover:shadow-md transition-shadow ${
                    isDragging
                        ? "opacity-50"
                        : "cursor-grab active:cursor-grabbing"
                } py-4`}
            >
                <CardContent className="p-4">
                    <div className="space-y-2">
                        <div className="flex items-start justify-between gap-2">
                            <p className="text-xs text-foreground leading-relaxed flex-1">
                                {title}
                            </p>
                            <DropdownMenu>
                                <DropdownMenuTrigger className="h-5 w-5 flex items-center justify-center rounded hover:bg-muted transition-colors">
                                    <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>
                                        <Pencil className="w-4 h-4 mr-2" />
                                        Edit
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-destructive">
                                        <Trash2 className="w-4 h-4 mr-2" />
                                        Delete
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Eye className="w-4 h-4 mr-2" />
                                        Inspect
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>

                        <p className="text-xs text-muted-foreground leading-relaxed">
                            {description}
                        </p>
                        <div className="flex items-center justify-between">
                            <Badge variant="default">
                                <Calendar className="w-3 h-3" />
                                {date}
                            </Badge>
                            <div className="flex -space-x-4">
                                <Avatar>
                                    <AvatarFallback className="bg-gray-300"></AvatarFallback>
                                </Avatar>
                                <Avatar>
                                    <AvatarFallback className="bg-gray-300"></AvatarFallback>
                                </Avatar>
                                <Avatar>
                                    <AvatarFallback className="bg-gray-300"></AvatarFallback>
                                </Avatar>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
