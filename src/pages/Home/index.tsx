import { useEffect, useState } from "react";
import { getNews } from "../../utils/API/api";
import MostRecentNews from "../../components/MostRecentNews";
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
  console.log(news[0]?.data_publicacao);
    return (
    <div>
       {news && 
          <MostRecentNews 
            title={news[0]?.titulo} 
            description={news[0]?.introducao} 
            url={news[0]?.link} 
            image={news[0]?.imagens}
            date={news[0]?.data_publicacao}
          />
        } 
    </div>
    )
}

export default Home;