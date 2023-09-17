import { useEffect, useState } from "react";
import NewsContext from "./NewsContext";
import { getNews } from "../utils/API/api";
import { NewsData } from "../types";

type ProviderNewsProps = {
    children: React.ReactNode;
  };
  

function ProviderNews({ children }: ProviderNewsProps) {
  const [news, setNews ] = useState<NewsData[]>([]);
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
    }}>
      {children}
    </NewsContext.Provider>
  );
}

export default ProviderNews;