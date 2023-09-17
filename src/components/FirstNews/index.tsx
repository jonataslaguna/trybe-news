import { FirstNewsCardProps } from "../../types";

function FirstNews ({ title, description, image, url }: FirstNewsCardProps) {
    return (
      <div className="card">
      <img src={image} alt={title} /> 
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={url} target="_blank">Leia a notícia aqui</a>
        </div>
      </div>
    )
}

export default FirstNews; 