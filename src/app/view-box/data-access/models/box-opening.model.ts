interface ItemVariant {
    id: string;
    name: string;
    value: number;
}

export interface BoxOpening {
    id: string;
    itemVariant: ItemVariant | null;
}
