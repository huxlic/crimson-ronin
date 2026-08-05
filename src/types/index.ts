
import {type ComponentType} from "react";
import type {LucideIcon} from "lucide-react";

export interface NavLinks {
	href: string,
	title: string,
	element: ComponentType<unknown>,
	icon?: LucideIcon,
}