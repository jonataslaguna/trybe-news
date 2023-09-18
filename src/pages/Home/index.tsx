import { useContext} from "react";
import MostRecentNew from "../../components/MostRecentNew";
import Nav from "../../components/Nav";
import MostRecents from "../../components/MostRecent";
import NewsContext from "../../context/NewsContext";

function Home() {
    const { news } = useContext(NewsContext);
    return (
    <div>
       {news && 
          <MostRecentNew 
            title={news[0]?.titulo} 
            description={news[0]?.introducao} 
            url={news[0]?.link} 
            image={news[0]?.imagens}
            date={news[0]?.data_publicacao}
            idCurr={news[0]?.id}
          />
        } 
        <Nav />
        <MostRecents />
    </div>
    )
}

export default Home;