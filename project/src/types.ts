export interface TShirt {
  id: number;
  name: string;
  color: string;
  colorName: string;
  price: number;
  image: string;
  description: string;
  style: TShirtStyle;
  inventory?: number; // Add inventory count
}

export interface CartItem {
  product: TShirt;
  size: string;
  quantity: number;
}

export type Size = 'M' | 'L' | 'XL' | '2XL' | '3XL' | '4XL' | '5XL';
export type TShirtStyle = 'Crew Neck' | 'V-Neck' | 'Pyramid';