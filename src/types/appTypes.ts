import { IconifyIcon } from "@iconify/react";

export enum RoleName {
    AGENT = "AGENT",
    SUB_AGENT = "SUB_AGENT",
    ADMIN = "ADMIN",
    
}

interface ISubNavLinks{
    id?: number;
    subType?: string;
    link?: string;
}

export interface NavLinksProps {
    id: number;
    name: string;
    link: string;
    icon: string | IconifyIcon;
    subLinks: ISubNavLinks[];
}