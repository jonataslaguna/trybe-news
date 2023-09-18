import { createContext } from 'react';
import { NewsData } from '../types';

type NewsContextType = {
    news: NewsData[];
    setNews: (news: NewsData[]) => void;
    dateFormat: (date: string) => string;
};

const NewsContext = createContext({} as NewsContextType);

export default NewsContext;
