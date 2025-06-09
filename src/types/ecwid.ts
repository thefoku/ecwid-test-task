export interface EcwidCategory {
  id: number
  name: string
  parentId: number
  orderBy: number
  productCount: number
  enabled: boolean
}

export interface EcwidCategoriesResponse {
  total: number
  count: number
  offset: number
  limit: number
  items: EcwidCategory[]
}
