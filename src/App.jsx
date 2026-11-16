import ArticleCard from './components/ArticleCard.jsx'  
import './App.css'

function App( ) {


  return (
    <>
    
    <main>
      <h1>Articles récents</h1>
      <div className="grille">
        <ArticleCard 
          titre="Titre de l'article 1"
          description="Description de l'article 1"
          image="https://via.placeholder.com/150"
          auteur="Auteur 1"
        />
        <ArticleCard 
          titre="Titre de l'article 2"
          description="Description de l'article 2"
          image="https://via.placeholder.com/150"
          auteur="Auteur 2"
        />
      </div>
    </main> 
    </>
  )
}

export default App
