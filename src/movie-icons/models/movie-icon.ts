export interface MovieIcon {
    id: string;
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
