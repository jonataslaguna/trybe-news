export type MostRecentNewsProps = {
    title: string;
    description: string;
    image: string;
    url: string;
    date: string;
};

export type NewsData = {
    id: number;
    titulo: string;
    introducao: string;
    data_publicacao: string;
    imagens: string;
    link: string;
};