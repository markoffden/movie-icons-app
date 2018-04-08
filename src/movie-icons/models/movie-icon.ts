export interface MovieIcon {
    id: number;
    name: string;
    desc: string;
    imageUrl: string;
    thumbUrl: string;
    quote: {
        text: string;
        ref: string;
    };
    features: string[];
}
