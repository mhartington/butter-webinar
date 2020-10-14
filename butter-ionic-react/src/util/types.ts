export interface IPageType {
  fields?: IPageFields;
  name?: string;
  slug?: string;
}
export interface IPageFields {
  seo: { meta_description: string; title: string };
  sections: any[];
}
