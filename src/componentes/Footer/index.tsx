import "./style.css"
import logo from "../../assets/img/IPremium_Logo-removebg-preview.png"
import instagram from "../../assets/img/insta.png"
import whatsapp from "../../assets/img/chat.png"


export default function Footer(){

    return(
        <>
            <footer>
                <div id="conteudoFooter">
                    <a href="https://www.instagram.com/ipremiumoficial?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA==" target="_blank"><img src={instagram}  alt=""/> Instagram</a>
                    
                    <img id="logo" src={logo} alt="Logo Ipremium"/>
                
                    <a href="https://wa.me/message/B2RT3PDJZTZFC1" target="_blank">WhatsApp<img src={whatsapp} alt=""/></a>
                </div>
            </footer>
        </>
    )
}