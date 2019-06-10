import { Artist } from './artist';

export interface Track {
    id: number;
    title: string;
    releaseDate: Date;
    image: string;
    music: string;
    genreId: number;
    featured: boolean;
    artists: Artist[];

}
