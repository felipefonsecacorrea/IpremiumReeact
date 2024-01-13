import "./style.css"

import Iphone15Pro from "../../assets/img/iphone15pro-digitalmat-gallery-1-202309.png"
import Iphone15 from "../../assets/img/iphone15-digitalmat-gallery-1-202309.png"
import Iphone14 from "../../assets/img/iphone14-digitalmat-gallery-1-202303.png"
import IpadPro from "../../assets/img/ipadpro11-digitalmat-gallery-1-202210.png"
import IphoneAir from "../../assets/img/ipadair-digitalmat-gallery-1-202203.png"
import Ipad from "../../assets/img/ipad-digitalmat-gallery-1-202210.png"

export default function Produtos(){

    return(
        <>
        <section className="produtos">
            <div className="iphone">
                <div className="cardIphone">
                    <img src={Iphone15Pro} alt=""/>
                    <h2>iPhone 15 Pro e
                        iPhone 15 <br/>Pro Max</h2>
                        <button><a href="https://wa.me/message/B2RT3PDJZTZFC1" target="_blank">Saiba Mais</a></button>
                </div>

                <div className="cardIphone">
                    <img src={Iphone15} alt=""/>
                    <h2>iPhone 15 e
                        iPhone 15 Plus.</h2>
                        <button><a href="https://wa.me/message/B2RT3PDJZTZFC1" target="_blank">Saiba Mais</a></button>
                </div>

                <div className="cardIphone">
                    <img src={Iphone14} alt=""/>
                    <h2>iPhone 14 e
                        iPhone 14 Plus.</h2>
                        <button><a href="https://wa.me/message/B2RT3PDJZTZFC1" target="_blank">Saiba Mais</a></button>
                </div>

            </div>

            <div className="ipad">
                <div className="cardIpad">
                    <img src={IpadPro} alt=""/>
                    <h2>iPad Pro.</h2>
                    <button><a href="https://wa.me/message/B2RT3PDJZTZFC1" target="_blank">Saiba Mais</a></button>
                </div>

                <div className="cardIpad">
                    <img id="ipadMeio" src={IphoneAir} alt=""/>
                    <h2>iPad Air.</h2>
                    <button><a href="https://wa.me/message/B2RT3PDJZTZFC1" target="_blank">Saiba Mais</a></button>
                </div>

                <div className="cardIpad">
                    <img src={Ipad} alt=""/>
                    <h2>iPad. <i>(10ª geração)</i></h2>
                    <button><a href="https://wa.me/message/B2RT3PDJZTZFC1" target="_blank">Saiba Mais</a></button>
                </div>
            </div>
        </section>
        </>
    )
}