import './App.css';
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import Header from './components/Header/Header'
import { Component } from 'react';
class App extends Component {
  constructor(props){
    super(props)
    this.state={

      originales:[],
      peliculas:[],
      url:"",
      cargando:false,
      orientation: false,
      search:[],
   

      }
    }
  componentDidMount(){
    console.log('did mount');
    let page = 1
    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=764e5562e5fed92cb370d453ac0ed8a3&language=en-US&page:${page}`

        fetch(url)
        .then(respuesta => respuesta.json())
        .then(data=>{ 
            this.setState({
                originales:data.results, 
                peliculas:data.results, 
                search:data.results,
                cargando: true,
                url: data.page,
                orientation: false,
            })
            console.log(data);
        })
        .catch(err=> console.log(err))
    }
    addMore(){
      let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=764e5562e5fed92cb370d453ac0ed8a3&language=en-US&page=${this.state.url + 1 } `
      //preguntar como hacer para cambiar la page
      fetch(url)
      .then(respuesta => respuesta.json())
      .then(data => {
          this.setState({
              peliculas: this.state.peliculas.concat(data.results),
              search: this.state.peliculas.concat(data.results),
              url: data.page
          })
      })
      .catch(err=> console.log(err))
      
  }
  reset(){
      this.setState({
          peliculas:this.state.originales,
          search:this.state.originales
      })
     
  }
  deleteCard(id){
      console.log(id);
      const peliculasRestantes = this.state.peliculas.filter(pelicula=> pelicula.id != id)
    
      this.setState({
          peliculas: peliculasRestantes,
          search: peliculasRestantes
          //le digo que agarre a todos los persoanjes y saque el que tiene el id que manda el componente hijo al hacer click
      })
  }
  changeOrientation(){
    if(this.state.orientation){
        this.setState({
           orientation: false,
        })
    } else{
        this.setState({
            orientation: true,
        })
    }
  }
filtrarPeliculas(texto){
    let peliculasFiltradas = this.state.search.filter((pelicula)=> pelicula.title.toLowerCase().includes(texto.toLowerCase()));
    
    this.setState({
       peliculas: peliculasFiltradas,
        
    });
}
  render(){
      return (
      <div id="body">
          <Header changeOrientation={
            ()=> this.changeOrientation()}
            orientation= {this.state.orientation}
            filtrarPeliculas={(texto)=>this.filtrarPeliculas(texto)}/>
          <Main peliculas= {this.state.peliculas}
          cargando={this.state.cargando}
          addMore={
            ()=>this.addMore()
          }
          deleteCard={
            (peliculaBorrar)=>this.deleteCard(peliculaBorrar)
          }
          reset={
            ()=>this.reset()
          }
          orientation={
            this.state.orientation
          }
          
          />
          <Footer/>

      </div>
      );
    }
}

export default App;
