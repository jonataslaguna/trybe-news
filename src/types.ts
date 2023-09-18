export type NewsProps = {
    title: string;
    description: string;
    image?: {
        image_fulltext: string;
    };
    url: string;
    date: string;
    idCurr: number;
};

export type NewsData = {
    id: number;
    titulo: string;
    introducao: string;
    data_publicacao: string;
    imagens: string;
    link: string;
};