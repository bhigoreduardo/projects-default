import Header from "../../components/header";
import Footer from "../../components/footer";

let Contato = {
  render: async () => {
    let view = `
        ${Header}
        <div class="contact">
          <div class="content container">
            <h2>Fale conosco</h2>
            <form>
                <input class="input-box" type="text" placeholder="Digite seu nome" />
                <input class="input-box" type="email" placeholder="Digite seu e-mail" />
                <textarea class="input-box" rows="10" cols="30" placeholder="Digite sua mensagem"></textarea>
                <input class="button warning" type="submit" />
            </form>
          </div>
        </div>
        ${Footer}
        `;

    return view;
  },

  after_render: async () => {},
};

export default Contato;
