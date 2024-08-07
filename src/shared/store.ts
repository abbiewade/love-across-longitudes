import {atom} from 'nanostores';
import {generateData} from "./utils.ts";

export const data = atom(generateData());