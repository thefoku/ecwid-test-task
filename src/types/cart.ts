export interface CartItem {
  id: number;
  title: string;
  price: number;
  imageURL?: string;
  quantity: number;
  slug: string;
  formattedPrice: string;
}
