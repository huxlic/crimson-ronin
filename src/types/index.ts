
import type {LucideIcon} from "lucide-react";
import React from "react";

export interface NavLinks {
	href: string,
	title: string,
	icon?: LucideIcon,
}

export interface PurchaseStore {
	link: string;
	image: string;
	alt: string;
}

export interface NewsItem {
	id: number;
	title: string;
	date: string;
	excerpt: string;
	link?: string;
	image: string;
	category: "Announcement" | "Update" | "Media" | "Lore";
}

export interface Weapon {
	name: string;
	model: React.ComponentType<{ position?: [number, number, number] | undefined;
		rotation?: [number, number, number] | undefined;}>;
}