function ArticleCard( { titre, description, image, auteur } ) {
    return (
        <div className="article-card">
            <img src={image} alt="Article" />
            <h2>{titre}</h2>
            <p>{description}</p>
            <p>Auteur : {auteur}</p>
            <a href="#">Lire la suite</a>
        </div>
    )


}
export default ArticleCard