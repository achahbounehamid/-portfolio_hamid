export interface Tag {
  label: string;
  type: string;
}

export interface Project {
  name: string;
  description: string;
  tags: Tag[];
  github?: string;
}