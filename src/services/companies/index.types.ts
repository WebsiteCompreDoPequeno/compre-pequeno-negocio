export interface ContentType {
  type: 'img' | 'text'
  content: JSX.Element
}

export interface CompanyContent {
  title: string
  cardImage: JSX.Element
  contents: ContentType[][]
}
