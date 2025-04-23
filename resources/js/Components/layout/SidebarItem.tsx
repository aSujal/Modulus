import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import React from "react";

interface SidebarButtonProps {
    icon: LucideIcon | any;
    label: string;
    isActive?: boolean;
    onClick: () => void;
}

const SidebarButton = ({
    icon: Icon,
    label,
    isActive,
    onClick,
}: SidebarButtonProps) => {
    return (
        <div className="group flex flex-col justify-center items-center gap-0.5 cursor-pointer">
            <Button
                variant={"transparent"}
                className={cn(
                    "size-9 p-2 group-hover:bg-accent/20",
                    isActive && "bg-accent/20"
                )}
                onClick={onClick}
            >
                <Icon className="size-5 text-white group-hover:scale-110 transition-all" />
            </Button>
            <span className="text-[11px] text-white">{label}</span>
        </div>
    );
};

export default SidebarButton;
