import "./style.css"
import loja from "../../assets/img/loja.png"
import cartao from "../../assets/img/cartao.png"
import frete from "../../assets/img/entrega.png"
import garantia from "../../assets/img/garantia.png"

export default function Informacoes() {

    return(
        <>
            <section id="section1">
                <div className="cardSecation1">                
                <img src={loja} alt="icone Loja"/>
                    <div >
                        <h2>Retire na Loja</h2>
                        <p>compre e retire na loja</p>
                    </div>
                </div>
                <div className="cardSecation1">
                <img src={cartao} alt="icone cartão de credito"/>
                <div>
                    <h2>Parclamento</h2>
                    <p>facilidade no pagamento</p>
                </div>
            </div>

            <div className="cardSecation1">
                <img src={frete} alt="icone entrega"/>
                <div>
                    <h2>Frete Grátis</h2>
                    <p>Francisco Morato e região</p>
                </div>
            </div>

            <div className="cardSecation1">
                <img src={garantia} alt="icone garantia"/>
                <div>
                    <h2>Garantia</h2>
                    <p>compra 100% Segura</p>
                </div>
            </div>
        </section>
        </>
    )
}