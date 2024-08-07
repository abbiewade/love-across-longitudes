import {useStore} from '@nanostores/react';
import {data} from '../shared/store';
import {convertHexToRgbA} from "../shared/utils.ts";
import {Icon} from '@iconify/react';
import './Card.css';

export function PromptCard() {
    const store = useStore(data);
    const card = store.card;

    return (
        <div
            className="prompt-card"
            style={{
                borderColor: card.color,
                background: convertHexToRgbA(card.color),
            }}
        >
            <Icon icon={card.icon} height={14} width={14} color={card.color}/>
            <p className="prompt-pre-heading" style={{color: card.color}}>
                {card.category.toUpperCase()}
            </p>
            <p className="prompt-question">
                {card.question}
            </p>
        </div>
    )
}