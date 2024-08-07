import type {Card, Category, DbCard} from "./types.ts";
import {CARDS_LIST} from "../data/cards.ts";
import {CATEGORIES_MAP, DEFAULT_CATEGORY} from "../data/categories.ts";

const SMS_SPACE = "%20";
const SMS_NEW_LINE = "%0a"

export function sample<T>(array: Array<T>): T {
    if (array.length === 0) {
        throw new Error("Cannot sample from an empty array");
    }
    return array[Math.floor(Math.random() * array.length)]!;
}

export function generateData() {
    const c: DbCard = sample(CARDS_LIST);
    const category: Category = CATEGORIES_MAP[c.categoryId] ?? DEFAULT_CATEGORY;

    const card: Card = {
        id: c.id,
        question: c.question,
        category: category.name,
        color: category.color,
        icon: category.icon,
    };

    const share = {
        sms: "sms://;?&body=" + `Q:${SMS_SPACE}${encodeURIComponent(category.name.trim())}${SMS_SPACE}-${SMS_SPACE}${encodeURIComponent(c.question.trim())}${SMS_NEW_LINE}A:${SMS_SPACE}`
    };

    return {
        card,
        share
    }
}

export function convertHexToRgbA(hex: string): string {
    // Remove the hash if it exists
    const cleanHex = hex.replace(/^#/, '');

    // Check if the hex is valid
    if (!/^([A-Fa-f0-9]{3}){1,2}$/.test(cleanHex)) {
        throw new Error('Invalid Hex Color');
    }

    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    const fullHex = cleanHex.length === 3
        ? cleanHex.split('').map(char => char + char).join('')
        : cleanHex;

    // Convert to RGB values
    const r = parseInt(fullHex.substring(0, 2), 16);
    const g = parseInt(fullHex.substring(2, 4), 16);
    const b = parseInt(fullHex.substring(4, 6), 16);

    // Return the RGBA string
    return `rgba(${r},${g},${b},0.2)`;
}