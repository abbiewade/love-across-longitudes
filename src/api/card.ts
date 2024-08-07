import {db, Cards, sql, eq, min, Categories, NOW} from 'astro:db';
import type {APIRoute} from 'astro';
import assert from "node:assert";

export const GET_CARD: APIRoute = async () => {
    const smallestCard = await db.select({value: min(Cards.askedCount)}).from(Cards);
    const smallestLastCount: number = smallestCard[0]?.value ?? 0;

    const cardsArr = await db
        .select({
            id: Cards.id,
            question: Cards.question,
            category: Categories.name,
            color: Categories.color,
            icon: Categories.icon,
            lastAsked: Cards.lastAsked,
            askedCount: Cards.askedCount,
        })
        .from(Cards)
        .leftJoin(Categories, eq(Cards.categoryId, Categories.id))
        .where(eq(Cards.askedCount, smallestLastCount))
        .orderBy(sql.raw("RANDOM()"))
        .limit(1);

    const card = cardsArr[0];
    assert(card);

    await db.update(Cards)
        .set({
            lastAsked: NOW,
            askedCount: card.askedCount + 1,
        })
        .where(eq(Cards.id, card.id));

    return new Response(
        JSON.stringify({
            card,
        }),
    )
}