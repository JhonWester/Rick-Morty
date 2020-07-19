import { Origin } from './origin';
import { LocationCharacter } from './location';

export class Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    location: LocationCharacter;
    image: string;
    episode: Array<string>;
    url: string;
    created: Date;
}
