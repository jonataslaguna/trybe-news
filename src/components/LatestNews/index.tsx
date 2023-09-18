import { NewsProps } from "../../types";
import NewsContext from "../../context/NewsContext";
import { useContext } from "react";

function LatestNews ({ title, description, image, url, date }: NewsProps) {
  const { dateFormat } = useContext(NewsContext);

  const timeAgo = dateFormat(date)

    return (
      <div className="card">
      <img src={`https://agenciadenoticias.ibge.gov.br/${image}`} alt={title} /> 
        <div>
          <p>Noticia mais recente</p>
            <h2>{title}</h2>
            <p>{description}</p>
          <div>
            <p>{ timeAgo }</p>
            <a href={url} target="_blank">Leia a notícia aqui</a>
          </div>
        </div>
      </div>
    )
}

export default LatestNews; 