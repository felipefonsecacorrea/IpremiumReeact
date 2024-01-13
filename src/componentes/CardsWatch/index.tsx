import "./style.css"

export default function CardWatch(){

    return(
        <>
        <section id="cardWatch">
            <div className="linhaWatch linha2">
                <div className="cardW">
                    <h2>PAGAMENTO</h2>
                    <p>Cartão de Crédito (12x) <br/>mais acréscimo </p>
                    <p>Cartão de Débito</p>
                    <p>Pix</p>

                </div>

                <div className="cardW">
                    <h2>ATENDIMENTO</h2>
                    <p>Seg. a Sexta das 10:00 as 18:00</p>
                    <p>Sábado das 10:00 as 14:00</p>
                    <p><br/>Gregório gomes da Silva 141 <br/> Centro de Francisco Morato</p>
                </div>

                <div className="cardW">
                    <h2>GARANTIA</h2>
                    <p>Semi Novos - Garantia de 90 <br/>(NOVENTA) dias <br/>de acordo com o Art. 26</p>
                    <p>Lacrados - 1 ano de <br/>Garantia (Fabrincante)</p>
                </div>
            </div>
        </section>
        </>
    )
}