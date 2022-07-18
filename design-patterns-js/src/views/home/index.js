import Header from "../../components/header";
import Footer from "../../components/footer";

import check from "../../assets/img/circle-check.svg";
import arrow from "../../assets/img/arrow.svg";

let Home = {
  render: async () => {
    let view = `
    ${Header}
<div class="banner">
    <div class="content container">
        <div class="information">
            <h1>Fornecemos quaisquer soluções <span>residenciais</span></h1>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <p><img src="${check}" alt="Serviço" />Lorem ipsum et dolor</p>
                        </td>
                        <td>
                            <p><img src="${check}" alt="Serviço" />Lorem ipsum et dolor</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p><img src="${check}" alt="Serviço" />Lorem ipsum et dolor</p>
                        </td>
                        <td>
                            <p><img src="${check}" alt="Serviço" />Lorem ipsum et dolor</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p><img src="${check}" alt="Serviço" />Lorem ipsum et dolor</p>
                        </td>
                        <td>
                            <p><img src="${check}" alt="Serviço" />Lorem ipsum et dolor</p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <a class="button warning" href="/">Ver serviços<img src="${arrow}" alt="Serviço" /></a>
        </div>
    </div>
</div>
${Footer}
`;

    return view;
  },

  after_render: async () => {},
};

export default Home;
