export interface Country {
    population: number;
    area: number;
    region: string;
    subregion: string;
    capital: string;
    name: {
        common: string;
    }
    flags: {
        svg: string;
    }    
}
