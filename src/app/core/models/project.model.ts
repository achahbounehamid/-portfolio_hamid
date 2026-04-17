export interface Project {
    name: string;
    description: string;
    tags: Tag[];
}

export interface Tag {
    label: string;
    type: string;
    color: 'orange' | 'blue' | 'green' | 'amber';
}