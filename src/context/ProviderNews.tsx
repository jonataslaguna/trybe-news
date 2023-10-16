import { useEffect, useState } from "react";
import NewsContext from "./NewsContext";
import { getNews } from "../utils/API/api";
import { NewsData, NewsProps } from "../types";

type ProviderNewsProps = {
    children: React.ReactNode;
  };
  

function ProviderNews({ children }: ProviderNewsProps) {
  const [news, setNews ] = useState<NewsData[]>([]);
  const [favorites, setFavorites] = useState<NewsProps[]>([]);

  const dateFormat = (date: string) => {
    const dateParts = date?.split(/[\s/:-]+/); 

   if (!dateParts) {
      return;
    }
  
    const newsDate =  new Date(
      Number(dateParts[2]), 
      Number(dateParts[1]) - 1, 
      Number(dateParts[0]), 
      Number(dateParts[3]), 
      Number(dateParts[4]), 
      Number(dateParts[5]) 
    );
  
    const currentDate = new Date();
    const timeDifference = Math.round((currentDate.getTime() - newsDate.getTime()) / 1000); 
  
    const formatTimeAgo = (timeAgo: number) => {
      if (timeAgo < 60) {
        return `${timeAgo} segundo${timeAgo > 1 ? 's' : ''} atrás`;
      } else if (timeAgo < 3600) { 
        const minutes = Math.floor(timeAgo / 60);
        return `${minutes} minuto${minutes > 1 ? 's' : ' '} atrás`;
      } else if (timeAgo < 86400) { 
        const hours = Math.floor(timeAgo / 3600);
        return `${hours} hora${hours > 1 ? 's' : ''} atrás`;
      } else {
        const days = Math.floor(timeAgo / 86400);
        return `${days} dia${days > 1 ? 's' : ''}  atrás`;
      }
    };
  
    return formatTimeAgo(timeDifference);
  };
  
  useEffect(() => {
    const fetchNews = async () => {
    const newsData = await getNews();
    setNews(newsData.items);
   };
  fetchNews();
  },[]);

  return (
    <NewsContext.Provider value={
    { 
    news, 
    setNews,
    dateFormat,
    favorites,
    setFavorites,
    }}>
      {children}
    </NewsContext.Provider>
  );
}

export default ProviderNews;