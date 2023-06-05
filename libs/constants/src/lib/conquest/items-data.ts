// items-data.ts
export type Item = {
    name: string;
    description: string;
    rarity: Rarity;
};

export type Equipment extends Item {
    isEquippable: boolean;
    // Additional attributes specific to equipment...
};
