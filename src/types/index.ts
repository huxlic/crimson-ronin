import type {LucideIcon} from "lucide-react";
import React, {type ComponentType} from "react";

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
	description: string;
	model: React.ComponentType<{scale?: number;
		position?: [number, number, number];
		rotation?: [number, number, number];}>;
	scale: number;
	position: [number, number, number];
	rotation: [number, number, number];
	alt_pos?: [number, number, number];
}

export interface WeaponDisplayProps {
	ModelComponent: ComponentType<{
		scale?: number;
		position?: [number, number, number];
		rotation?: [number, number, number];
	}>;
	scale?: number;
	position?: [number, number, number];
	rotation?: [number, number, number];
	alt_pos?: [number, number, number];
	name: string;
	description: string;
}