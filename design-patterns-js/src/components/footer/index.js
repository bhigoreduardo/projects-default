import arrow from "../../assets/img/arrow.svg";
import tools from "../../assets/img/tools.svg";
import suitcase from "../../assets/img/suitcase.svg";
import rule from "../../assets/img/rule.svg";

let Footer = `
<footer class="footer">
    <div class="content container">
        <div class="information">
            <h2>Sobre nós</h2>
            <h3>Lorem ipsum dolor sit amet consectetur.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <a class="button warning" href="/">Ver serviços<img src="${arrow}" alt="Serviço" /></a>
        </div>

        <div class="icons">
            <div class="icon">
                <img src="${tools}" alt="Serviço" />
                <span>+500</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            </div>

            <div class="icon">
                <img src="${suitcase}" alt="Serviço" />
                <span>+3500</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            </div>

            <div class="icon">
                <img src="${rule}" alt="Serviço" />
                <span>+800</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            </div>
        </div>
    </div>
</footer>
`;

export default Footer;
