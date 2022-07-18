import Header from "../../components/header";

let Error = {
  render: async () => {
    let view = `
        ${Header}
        <div class="err-404">
            <h1>Página não encontrada</h1>
        </div>
        `;

    return view;
  },

  after_render: async () => {},
};

export default Error;
