import React,{useState, useEffect} from 'react'
import './Row.css'
import axios from "axios"
import logodisney from './logodisney.png'
import smart from './komputer.png'
import tablet from './tablet.png'
import smartfon from './komorka.png'
import apple from './apple.png'
import chromecast from './chrome.png'
import konsola from './konsola.png'
import komputer from './laptop.png'

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({isLargeRow}) {
  const[movies, setMovies] = useState([]);
  const[movies2, setMovies2] = useState([]);
  const[movies3, setMovies3] = useState([]);
  const[movies4, setMovies4] = useState([]);
  const[movies5, setMovies5] = useState([]);
  const[movies6, setMovies6] = useState([]);
  const[movies7, setMovies7] = useState([]);

    useEffect(() => {

        axios.get('https://api.themoviedb.org/3/tv/popular?api_key=080136bb43530e135fef1ad01b68a125')

          .then(function (response) {

            setMovies(response.data.results);
        //    console.log(response.data.results)


        })
        .catch(function (error) {
          console.log(error);
        });
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=080136bb43530e135fef1ad01b68a125')

        .then(function (response) {

          setMovies2(response.data.results);
      //    console.log(response.data.results)


      })
      .catch(function (error) {
        console.log(error);
      });
      axios.get('https://api.themoviedb.org/3/list/7109049?api_key=080136bb43530e135fef1ad01b68a125')

        .then(function (response) {

          setMovies3(response.data.items);
      //    console.log(response.data)


      })
      .catch(function (error) {
        console.log(error);
      });
      axios.get('https://api.themoviedb.org/3/list/7109050?api_key=080136bb43530e135fef1ad01b68a125')

      .then(function (response) {

        setMovies4(response.data.items);
     //   console.log(response.data)


    })
    .catch(function (error) {
      console.log(error);
    });
    axios.get('https://api.themoviedb.org/3/list/7109051?api_key=080136bb43530e135fef1ad01b68a125')

    .then(function (response) {

      setMovies5(response.data.items);
    //  console.log(response.data)


  })
  .catch(function (error) {
    console.log(error);
  });
  axios.get('https://api.themoviedb.org/3/discover/movie?api_key=080136bb43530e135fef1ad01b68a125&with_genres=10751')

  .then(function (response) {

    setMovies6(response.data.results);
  //  console.log(response)


})
.catch(function (error) {
  console.log(error);
});
axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=080136bb43530e135fef1ad01b68a125')

.then(function (response) {

  setMovies7(response.data.results);
  console.log(response)


})
.catch(function (error) {
console.log(error);
});
      },[]);




    return (
        <div className="row">
          <div className="row-najczesciej">    
            <p>Najchętniej oglądane seriale</p>
           
            <div className="row-posters">
           
              {movies.map(movie => (
                <div>
                  <div className="row-poster-images"><img 
                    key={movie.id}
                    className="row-poster" 
                    src={`${base_url}${movie.poster_path ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name} /></div>
                  <p className="title-movie">{movie.title? movie.title : movie.original_name}</p>
                  </div>
              ))}
               
            </div>
            
          </div>
        
          <div className="row-najczesciej">    
            <p>Hity kinowe</p>
           
            <div className="row-posters">
           
              {movies2.map(movie => (
                <div><div className="row-poster-images"><img 
                key={movie.id}
                className="row-poster"
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                alt={movie.name} /></div>
               <p className="title-movie">{movie.title? movie.title : movie.original_name}</p>
               </div>
              ))}
               
            </div>
            
          </div>
          <div className="row-najczesciej">    
            <h2>Gandalf, Frodo, Gollum, Aragorn, Arwen, Bilbo i wielu innych w fantastycznej przygodzie w HBO GO</h2>
           
            <div className="row-posters">
           
            {movies3.map(movie => (
                <div><div className="row-poster-images-hobbit"><img 
                key={movie.id}
                className="row-poster-hobbit"
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                alt={movie.name} /></div>
               <p className="title-movie-hobbit">{movie.title? movie.title : movie.original_name}</p>
               </div>
              ))}
               
            </div>
            
          </div>
          <div className="row-najczesciej-harry">    
          <h5>Wejdź do świata magii</h5>
          <p>Poznaj historię Świata Magii i zobacz Fantastyczne zwierzęta</p>
           
            <div className="row-posters">
           
              {movies4.map(movie => (
                <div><div className="row-poster-images"><img 
                key={movie.id}
                className="row-poster"
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                alt={movie.name} /></div>
               <p className="title-movie">{movie.title? movie.title : movie.original_name}</p>
               </div>
              ))}
               
            </div>
            
          </div>

          <div className="row-najczesciej-disney">    
            <img src={logodisney} alt="" className="image-logo-disney"/>
           
            <div className="row-posters">
           
              {movies5.map(movie => (
                <div><div className="row-poster-images"><img 
                key={movie.id}
                className="row-poster"
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                alt={movie.name} /></div>
               <p className="title-movie">{movie.title? movie.title : movie.original_name}</p>
               </div>
              ))}
               
            </div>
            
          </div>
          <div className="row-najczesciej">    
            <p>Rozrywka dla całej rodziny</p>
           
            <div className="row-posters">
           
              {movies6.map(movie => (
                <div><div className="row-poster-images"><img 
                key={movie.id}
                className="row-poster"
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                alt={movie.name} /></div>
               <p className="title-movie">{movie.title? movie.title : movie.original_name}</p>
               </div>
              ))}
               
            </div>
            
          </div>

          <div className="subskrybuj">
            <div className="subskrybuj-left">
                <p className="subskrybuj-top">Subskrybuj HBO GO online</p>
                <p className="subskrybuj-bottom">Bezpośrednia rejestracja przy użyciu karty płatniczej lub PayPal.</p>
                <button className="subskrybuj-button-left">ZAREJESTRUJ SIĘ</button>
            </div>
            <div className="subskrybuj-right">
              <p className="subskrybuj-top">Masz już HBO GO w abonamencie operatora?</p>
              <p className="subskrybuj-bottom">Jeśli masz już taki dostęp, po prostu zarejestruj się i oglądaj!</p>
              <button className="subskrybuj-button-right">AKTYWUJ TERAZ</button>
            </div>
          </div>

          <div className="ulubione-urzadzenia">
            <div className="ulubione-urzadzenia-tytul">
              <div className="ulubione-urzadzenie-pasek"></div> 
              <h1>OGLĄDAJ NA SWOIM ULUBIONYM URZĄDZENIU</h1>
              <div className="ulubione-urzadzenie-pasek"></div>
            </div>

            <div className="ulubione-urzadzenie-images">
                <div className="ulubione-urzadzenie">
                  <img src={smart} alt="" className="ulubione-urzadzenie-image"/>
                  <p>SMART TV</p>
                </div>
                <div className="ulubione-urzadzenie">
                  <img src={tablet} alt="" className="ulubione-urzadzenie-image"/>
                  <p>TABLET</p>
                </div>
                <div className="ulubione-urzadzenie">
                  <img src={smartfon} alt="" className="ulubione-urzadzenie-image"/>
                  <p>SMARTFON</p>
                </div>
                <div className="ulubione-urzadzenie">
                  <img src={apple} alt="" className="ulubione-urzadzenie-image"/>
                  <p>APPLE TV</p>
                </div>
                <div className="ulubione-urzadzenie">
                  <img src={chromecast} alt="" className="ulubione-urzadzenie-image"/>
                  <p>CHROMECAST</p>
                </div>
                <div className="ulubione-urzadzenie">
                  <img src={konsola} alt="" className="ulubione-urzadzenie-image"/>
                  <p>KONSOLA</p>
                </div>
                <div className="ulubione-urzadzenie">
                  <img src={komputer} alt="" className="ulubione-urzadzenie-image"/>
                  <p>KOMPUTER</p>
                </div>
            </div>

          </div>

          <div className="row-najczesciej">    
            <p>Twoje ulubione seriale</p>
           
            <div className="row-posters">
           
              {movies7.map(movie => (
                <div><div className="row-poster-images"><img 
                key={movie.id}
                className="row-poster"
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                alt={movie.name} /></div>
               <p className="title-movie">{movie.title? movie.title : movie.original_name}</p>
               </div>
              ))}
               
            </div>
            
          </div>
          <div className="dlaczego-kochaja">
            <p className="dlaczego-kochaja-tytul">Dlaczego widzowie kochają HBO GO?</p>
            <p className="dlaczego-kochaja-reszta">- Ponad 800 filmów i 200 seriali w polskiej wersji językowej.</p>
            <p className="dlaczego-kochaja-reszta">- Nowe i kultowe seriale, hity kinowe i tytuły dla najmłodszych..</p>
            <p className="dlaczego-kochaja-reszta">- Wszystkie odcinki oryginalnych produkcji HBO dostępne w każdej chwili.</p>
            <div className="button-dlaczego">
            <button className="dlaczego-kochaja-button">ZAREJESTRUJ SIĘ</button>
            </div>
          </div>
        </div>
    )
}

export default Row
