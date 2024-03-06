import Vue from 'vue';

const app = new Vue({
  el: '#app',
  components: {
    'app-component': {
      template: `
        <div>
          <h1>Cadastro de Cliente e Produto</h1>
          <div class="container">
            <div class="form-cliente">
              <h2>Cadastro de Cliente</h2>
              <form @submit.prevent="cadastrarCliente">
                <input type="text" v-model="cliente.nome" placeholder="Nome">
                <input type="email" v-model="cliente.email" placeholder="E-mail">
                <input type="tel" v-model="cliente.telefone" placeholder="Telefone">
                <button type="submit">Cadastrar</button>
              </form>
            </div>
            <div class="form-produto">
              <h2>Cadastro de Produto</h2>
              <form @submit.prevent="cadastrarProduto">
                <input type="text" v-model="produto.nome" placeholder="Nome">
                <input type="number" v-model="produto.preco" placeholder="Preço">
                <textarea v-model="produto.descricao" placeholder="Descrição"></textarea>
                <button type="submit">Cadastrar</button>
              </form>
            </div>
            <div class="lista-clientes">
              <h2>Lista de Clientes</h2>
              <ul>
                <li v-for="cliente in clientes">
                  {{ cliente.nome }} - {{ cliente.email }} - {{ cliente.telefone }}
                </li>
              </ul>
            </div>
            <div class="lista-produtos">
              <h2>Lista de Produtos</h2>
              <ul>
                <li v-for="produto in produtos">
                  {{ produto.nome }} - R$ {{ produto.preco }} - {{ produto.descricao }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      `,
      data() {
        return {
          clientes: [],
          produtos: [],
          cliente: {
            nome: "",
            email: "",
            telefone: "",
          },
          produto: {
            nome: "",
            preco: 0,
            descricao: "",
          },
        };
      },
      methods: {
        cadastrarCliente() {
          this.clientes.push(this.cliente);
          this.cliente = {
            nome: "",
            email: "",
            telefone: "",
          };
        },
        cadastrarProduto() {
          this.produtos.push(this.produto);
          this.produto = {
            nome: "",
            preco: 0,
            descricao: "",
          };
        },
      },
    },
  },
});
