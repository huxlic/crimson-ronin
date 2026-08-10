
import type {LucideIcon} from "lucide-react";

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
}