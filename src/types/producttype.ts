export interface MobileProduct {
  id: string;
  title: string;
  image: string;
  rating: number;
  reviews: string;
  specs: string[];
  warranty: string;
  price: number;
  originalPrice: number;
  discount: string;
  offer?: string;
  coins?: number; 
  exchange?: string;
}
