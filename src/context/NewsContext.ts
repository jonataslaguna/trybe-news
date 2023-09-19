import { createContext } from 'react';
import { NewsData, NewsProps } from '../types';

type NewsContextType = {
    news: NewsData[];
    setNews: (news: NewsData[]) => void;
    dateFormat: (date: string ) => string | undefined;
    favorites: NewsProps[] | undefined;
    setFavorites: (news: NewsProps[]) => void;
};

const NewsContext = createContext({} as NewsContextType);

export default NewsContext;
