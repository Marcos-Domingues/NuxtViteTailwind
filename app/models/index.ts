
export interface PageModel {
    id: string;
    title: string;
    datePublished: string;
    dateModified: string;
    seo: {
      title: string;
      description: string;
    };
  }

export interface PageItemModel extends PageModel {
    reviewer: {
      name: string,
      credentials: string,
      affiliation: string
    },
    body: string
  }