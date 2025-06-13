import type { EcwidProduct } from './ecwid'

export interface ProductCardItem {
  title: string
  price: string
  discountedPrice?: string | null
  shortDescription: string
  description?: string
  imageURL: string
  slug: string
  sku: string
  currentProduct: EcwidProduct
}
