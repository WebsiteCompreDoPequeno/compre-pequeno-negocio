export interface ContentType {
  type: 'img' | 'text'
  content: string
}

export interface CompanyContent {
  title: string
  cardImage: string
  contents: ContentType[][]
}
