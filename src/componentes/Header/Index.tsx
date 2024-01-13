import "./Style.css"
import logo from "../../assets/img/IPremium_Logo-removebg-preview.png"
import { Link } from "react-router-dom"
import manutencao from "../../assets/img/manutencao.png"

export default function Header() {

    return(
        <>
    <header>
        <img id="logo" src={logo} alt="Logo Ipremium"/>

        <nav className="menu">
            <ul>
                <li><Link to ='/'>Home</Link></li>
                <li id="linkProdutos"><a href="#">Produtos</a><img src={manutencao} alt="" /></li>
                <li><Link to ='Sobre'>Sobre</Link></li>
                <li><Link to ='Contatos'>Contatos</Link></li>
            </ul>
        </nav>
    </header>
        </>
    )
}