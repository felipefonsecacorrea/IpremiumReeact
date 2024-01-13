import AppleTv from "../../componentes/AppleTv/intex"
import BannerIpad from "../../componentes/BannerIpad"
import CardWatch from "../../componentes/CardsWatch"
import Informacoes from "../../componentes/Informacoes"
import VideosYoutube from "../../componentes/LinhaYoutube"
import Produtos from "../../componentes/Produtos"
import "./style.css"

export default function Home() {

    return(
        <>
        <main id="mainHome">
            <Informacoes/>
            <Produtos/>
            <BannerIpad/>
            <VideosYoutube/>
            <AppleTv/>
            <CardWatch/>
        </main>
        </>
        
    )
}