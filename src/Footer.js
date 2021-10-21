import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {

    return (
        <div className="footer">
            <div className="footer-icons">
                <FacebookIcon fontSize="small" className="footer-icon" onClick={() =>window.location.href = 'https://www.facebook.com/HBOPolska'}/>
                <TwitterIcon fontSize="small" className="footer-icon" onClick={() =>window.location.href = 'https://twitter.com/hbopolska'}/>
                <InstagramIcon fontSize="small" className="footer-icon" onClick={() =>window.location.href = 'https://www.instagram.com/hbopolska/'}/>
                <YouTubeIcon fontSize="small" className="footer-icon" onClick={() =>window.location.href = 'https://www.youtube.com/user/hbopolska'}/>
            </div>
            <div className="footer-links">
                <a href="https://helpcenter.hbogo.eu/pl"><p>FAQ</p></a>
                <a href="https://hbogo.pl/regulamin"><p>Warunki Korzystania</p></a>
                <a href="https://hbogo.pl/polityka-prywatnosci"><p>Polityka Prywatności (Zaktualizowana)</p></a>
                <a href="https://hbogo.pl/kontakt"><p>Kontakt</p></a>
                <p>Ustawienia plików coockies</p>
                <p>Polski</p>
            </div>
            <div className="footet-info">
                <p>© 2021 Home Box Office Inc. Wszelkie prawa zastrzeżone. Strona może zawierać treści przeznaczone wyłącznie dla widzów dorosłych.</p>
            </div>
        </div>
    )
}

export default Footer
