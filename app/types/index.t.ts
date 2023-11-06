
export interface Layout{
    children: React.ReactNode,
    params: LayoutParams
}

export interface Metadata{
    params: LayoutParams
    searchParams: { [key: string]: string | string[] | undefined }
  }
  
export interface LayoutParams{
    locale: string
}