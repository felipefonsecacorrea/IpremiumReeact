import "./style.css"
import logoTv from "../../assets/img/apple-tv__za3c4sr9utu6_og-removebg-preview.png"

export default function AppleTv(){

    return(
        <>
        <section id="sectionAppleTv">
            <img src={logoTv} alt="" />
            <h1>Assista em qualquer lugar no app Apple TV.</h1>
            <p>O app Apple TV já está nos seus aparelhos Apple favoritos.
            E você também pode assistir online em <a href="https://www.apple.com/br/apple-tv-plus/" target="_blank">tv.apple.com/br</a>.</p>           
        </section>
        </>
    )
}