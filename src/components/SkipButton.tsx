import {data} from '../shared/store';
import './SkipButton.css';
import {generateData} from "../shared/utils.ts";

export function SkipButton() {
    return (
        <button onClick={() => data.set(generateData())} className="skip-button">Skip</button>

    )
}