import Header from "../../components/header";

let Contato = {
  render: async () => {
    let view = `
        ${Header}
        <div class="contact">
            <form>
                <input type="text" placeholder="Digite seu nome" />
                <input type="email" placeholder="Digite seu e-mail" />
                <textarea rows="10" cols="30" placeholder="Digite sua mensagem"></textarea>
                <input class="buuton warning" type="submit" />
            </form>
        </div>
        `;

    return view;
  },

  after_render: async () => {},
};

export default Contato;
