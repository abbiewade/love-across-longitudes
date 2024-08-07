import type {APIRoute} from 'astro';
import {CARDS_LIST} from "../data/cards.ts";
import type {Card, Category, DbCard} from "../utils/types.ts";
import {CATEGORIES_MAP, DEFAULT_CATEGORY} from "../data/categories.ts";
import {sample} from "../utils/arrays.ts";

export const GET_CARD: APIRoute = async () => {
    const c: DbCard = sample(CARDS_LIST);
    const category: Category = CATEGORIES_MAP[c.categoryId] ?? DEFAULT_CATEGORY;

    const card: Card = {
        id: c.id,
        question: c.question,
        category: category.name,
        color: category.color,
        icon: category.icon,
    };

    const smsQuestion = encodeURIComponent(c.question.trim())
    const share = {
        sms: `sms://;?&body=Q:%20${smsQuestion}%0aA:%20`
    };

    return new Response(
        JSON.stringify({
            card,
            share,
        }),
    )
}