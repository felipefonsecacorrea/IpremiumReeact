import "./style.css"
import imgWhats from "../../assets/img/1.png"
import imgInsta from "../../assets/img/2.png"

export default function Contatos(){
    return(
        <>
        <main id="mainContatos">
            <div>
                <h2>WhatsApp</h2>
                <a href="https://wa.me/message/B2RT3PDJZTZFC1" target="_blank"><img src={imgWhats} alt="" /></a>
            </div>

            <div id="divInstagram">
                <h2>Instagram</h2>
                <a href="https://www.instagram.com/ipremiumoficial?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA==" target="_blank"><img src={imgInsta} alt="" /></a>
            </div>
        </main>
        </>
    )
}