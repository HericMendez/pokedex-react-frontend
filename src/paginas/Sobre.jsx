import '../assets/css/componentes/cartao.css'



const Sobre = () => {
  
  return (
    <main>
           <div style={{marginBottom: "80px"}}>
     <br/>
    </div>
    <div className="container post">
        <h2 className="titulo-pagina flex--centro">About the Project</h2>
      </div>
    <section className="container flex flex--centro">
      
        <article className="cartao post">
          <p className="flex flex--centro">

PokeNodeJs(formerly named Pokédex-React-Node) is a project developed for educational purposes, with the objective of learning and applying the React.js, Node.js and database storage technologies.
          </p>
          <br/>
          <h5>Github links:</h5>
          <br/>
          <p>
          <a className="red" target='_blank' rel='noreferrer' href='https://github.com/HericMendez/pokedex-react-frontend'><strong>React.js Front-end Page</strong></a>
          </p>
          <p>
           <a className="blue" target='_blank' rel='noreferrer' href='https://github.com/HericMendez/pokedex-nodejs-api'><strong>Node.js/SQLite3 Back-end API</strong></a>
          </p>
          <br></br>
  
         

        </article>
        
      </section>



    </main>
  )
}

export default Sobre