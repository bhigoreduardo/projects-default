import phone from "../../assets/img/phone.svg";
import clock from "../../assets/img/clock.svg";
import location from "../../assets/img/location.svg";
import logo from "../../assets/img/logo.svg";

let Header = `
<!-- HEADER -->
<header class="header">
    
    <div class="top">
        <div class="content container">
            <div class="icon">
                <img src="${phone}" alt="Contato" />
                <a href="tel:(11) 9999-9999">(11) 9999-9999</a>
            </div>

            <div class="icon">
                <img src="${clock}" alt="Funcionamento" />
                <span>07:00 - 16:00</span>
            </div>

            <div class="icon">
                <img src="${location}" alt="Localização" />
                <span>São Paulo, São Paulo - Brasil</span>
            </div>

            <a class="button white" href="/">Entrar em Contato</a>
        </div>
    </div>

    <nav class="navbar">
        <div class="content container">
            <a href="/" class="logo">
                <img src="${logo}" alt="Logo" />
            </a>
            
            <div class="links">
                <a href="/">Home</a>
                <a href="/">Sobre</a>
                <a href="/">Projetos</a>
                <a href="/">Planos</a>
            </div>
        </div>
    </nav>

</header>
<!-- / HEADER -->
`;

export default Header;
