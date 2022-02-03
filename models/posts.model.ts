export interface TagInterface {
  id: number;
  name: string;
}

export function getName(tag: TagInterface | string) {
  if (typeof tag === "string") {
    return tag;
  } else {
    return tag.name;
  }
}

export interface PostInterface {
  slug: string;
  image: string;
  content: string;
  description: string;
  featured: boolean;
  title: string;
  subtitle: string;
  date_posted: string;
  updated: string;
  category: string[];
  tags: TagInterface[] | string[];
}

export interface CategoryInterface {
  name: string;
  id: number;
  post_count: number;
  featured: boolean;
}

export interface DataInterface {
  data: {
    results: PostInterface[];
    next: string;
    previous: string;
    count: number;
  };
}

export interface PhotoInterface {
  caption: string;
  image: string;
}
