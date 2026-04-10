export interface Project {
    title: string;
    description: string;
    tags: Tag[];
}

export interface Tag {
    label: string;
    color: 'orange' | 'blue' | 'green' | 'amber';
}