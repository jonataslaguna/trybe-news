import { useEffect, useState } from "react";
import { getNews } from "../../utils/API/api";
import FirstNews from "../../components/FirstNews";
import { NewsData } from "../../types";

function Home() {
    const [news, setNews ] = useState<NewsData[]>([]);

    useEffect(() => {
        const fetchNews = async () => {
        const newsData = await getNews();
        setNews(newsData.items);
       };
      fetchNews();
    },[]);
  
    return (
    <div>
       {news && 
          <FirstNews 
            title={news[0]?.titulo} 
            description={news[0]?.introducao} 
            url={news[0]?.link} 
            image={news[0]?.imagens} 
          />
        } 
    </div>
    )
}

export default Home;