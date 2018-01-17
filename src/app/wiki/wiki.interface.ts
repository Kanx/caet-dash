export interface WikiNavItem {
  Title: string;
  Category: string;
  ID: number;
}

export interface WikiArticle extends WikiNavItem {
  Content: string;
}


