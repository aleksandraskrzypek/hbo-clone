import React,{useState, useEffect} from 'react'
import './Baner.css'
import axios from "axios"


function Baner() {
    const [poster, setPoster] = useState('');
    const [poster2, setPoster2] = useState('');
    const [poster3, setPoster3] = useState('');
    const [poster4, setPoster4] = useState('');
    const [poster5, setPoster5] = useState('');
    const [poster6, setPoster6] = useState('');

    useEffect(() => {

        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=080136bb43530e135fef1ad01b68a125')

          .then(function (response) {
          setPoster(poster + response.data.results[0].poster_path);
          setPoster2(poster2 + response.data.results[1].poster_path);
          setPoster3(poster3 + response.data.results[2].poster_path);
          setPoster4(poster4 + response.data.results[3].poster_path);
          setPoster5(poster5 + response.data.results[4].poster_path);
          setPoster6(poster6 + response.data.results[5].poster_path);


        })
        .catch(function (error) {
          console.log(error);
        });
      },[]);

    return (
        <div className="baner">
           
            <div className="baner-posters">

                <div className="baner-jeden" 
                    style={{backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${poster}"
                    )`,}}>
                </div>

                <div className="baner-posters-dwa">
                    <div className="baner-dwa" 
                        style={{backgroundImage: `url(
                        "https://image.tmdb.org/t/p/original/${poster2}"
                        )`,}}>
                    </div>
                    <div className="baner-trzy" 
                        style={{backgroundImage: `url(
                        "https://image.tmdb.org/t/p/original/${poster3}"
                        )`,}}>
                    </div>
                </div>
                
                <div className="baner-cztery" 
                    style={{backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${poster4}"
                    )`,}}>
                </div>

                <div className="baner-posters-dwa">
                    <div className="baner-piec" 
                        style={{backgroundImage: `url(
                        "https://image.tmdb.org/t/p/original/${poster5}"
                        )`,}}>
                    </div>
                    <div className="baner-szesc" 
                        style={{backgroundImage: `url(
                        "https://image.tmdb.org/t/p/original/${poster6}"
                        )`,}}>
                    </div>
                </div>

            </div>

            <div className="baner-rejestracja">
                <p className="first">TWOJE SERIALE ONLINE</p> <br />
                <p className="second">Bez zobowiązań. Zrezygnuj, kiedy chcesz online.</p>
                <button className="button-rejestracja">ZAREJESTRUJ SIĘ</button>
            </div>

            <div className="baner-foot">
                <div className="baner-foot-czesc">
                    <p className="baner-foot-first">Seriale. Filmy. Bajki dla dzieci.</p>
                    <p className="baner-foot-second">Najlepsze seriale, hity filmowe i bajki dla dzieci - wszystko po polsku, z lektorem i napisami. Nowe tytuły każdego dnia.</p>
                </div>
                <div className="baner-foot-czesc">
                    <p className="baner-foot-first">Oglądaj na ulubionym urządzeniu</p>
                    <p className="baner-foot-second">Oglądaj nawet na 5 urządzeniach, na 2 jednocześnie. Tylko 24,90 zł miesięcznie, możesz zrezygnować online, kiedy chcesz.</p>
                </div>
                <div className="baner-foot-czesc">
                    <p className="baner-foot-first">HBO GO jest dostępne także poprzez operatorów.</p>
                    <p className="baner-foot-second">HBO GO możesz też aktywować w ramach ofert operatorów telewizyjnych, internetowych i komórkowych. Jeśli masz już taki dostęp, po prostu zarejestruj się i oglądaj!</p>
                    <button className="button-foot">AKTYWUJ TERAZ</button>
                </div>
            </div>
        </div>
    )
}

export default Baner
