export interface ContentType {
  type: 'img' | 'text'
  content: JSX.Element
}

export interface CompanyContent {
  title: string
  cardImage: string
  contents: ContentType[][]
}
