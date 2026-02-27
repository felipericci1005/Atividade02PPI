import express from "express";

const host = "0.0.0.0";
const porta = 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <html lang="pt-br">
      <head>
        <meta charset="UTF-8">
        <title>Página Inicial</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
          rel="stylesheet"
        >
      </head>

      <body>
        <div class="container mt-5 text-center">
          <h1 class="mb-4">Bem-vindo ao sistema</h1>
          
          <p class="lead">
            Para acessar o cadastro de cliente, digite na URL:
          </p>

          <div class="alert alert-primary">
            <strong>/cliente</strong>
          </div>

          <a class="btn btn-primary mt-3" href="/cliente">
            Ir para Cadastro
          </a>
        </div>
      </body>
    </html>
  `);
});

app.get("/cliente", (requisicao, resposta) => {
  resposta.send(`
    <html lang="pt-br">
      <head>
        <meta charset="UTF-8">
        <title>Cadastro de Cliente</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
          rel="stylesheet"
        >
      </head>

      <body>
        <div class="container mt-4">
          <h1 class="mb-4">Cadastro de Cliente</h1>

          <form method="POST" action="/cliente" class="row g-3">
            <div class="col-md-6">
              <label class="form-label" for="primeiroNome">Primeiro nome</label>
              <input class="form-control" type="text" id="primeiroNome" name="primeiroNome" required>
            </div>

            <div class="col-md-6">
              <label class="form-label" for="ultimoNome">Último nome</label>
              <input class="form-control" type="text" id="ultimoNome" name="ultimoNome" required>
            </div>

            <div class="col-md-6">
              <label class="form-label" for="email">E-mail</label>
              <input class="form-control" type="email" id="email" name="email" required>
            </div>

            <div class="col-md-6">
              <label class="form-label" for="telefone">Telefone</label>
              <input class="form-control" type="text" id="telefone" name="telefone">
            </div>

            <div class="col-12">
              <label class="form-label" for="endereco">Endereço</label>
              <input class="form-control" type="text" id="endereco" name="endereco">
            </div>

            <div class="col-md-6">
              <label class="form-label" for="cidade">Cidade</label>
              <input class="form-control" type="text" id="cidade" name="cidade">
            </div>

            <div class="col-md-4">
              <label class="form-label" for="estado">Estado</label>
              <select class="form-select" id="estado" name="estado" required>
                <option value="">Selecione...</option>
                <option value="AC">Acre (AC)</option>
                <option value="AL">Alagoas (AL)</option>
                <option value="AP">Amapá (AP)</option>
                <option value="AM">Amazonas (AM)</option>
                <option value="BA">Bahia (BA)</option>
                <option value="CE">Ceará (CE)</option>
                <option value="DF">Distrito Federal (DF)</option>
                <option value="ES">Espírito Santo (ES)</option>
                <option value="GO">Goiás (GO)</option>
                <option value="MA">Maranhão (MA)</option>
                <option value="MT">Mato Grosso (MT)</option>
                <option value="MS">Mato Grosso do Sul (MS)</option>
                <option value="MG">Minas Gerais (MG)</option>
                <option value="PA">Pará (PA)</option>
                <option value="PB">Paraíba (PB)</option>
                <option value="PR">Paraná (PR)</option>
                <option value="PE">Pernambuco (PE)</option>
                <option value="PI">Piauí (PI)</option>
                <option value="RJ">Rio de Janeiro (RJ)</option>
                <option value="RN">Rio Grande do Norte (RN)</option>
                <option value="RS">Rio Grande do Sul (RS)</option>
                <option value="RO">Rondônia (RO)</option>
                <option value="RR">Roraima (RR)</option>
                <option value="SC">Santa Catarina (SC)</option>
                <option value="SP">São Paulo (SP)</option>
                <option value="SE">Sergipe (SE)</option>
                <option value="TO">Tocantins (TO)</option>
              </select>
            </div>

            <div class="col-md-2">
              <label class="form-label" for="cep">CEP</label>
              <input class="form-control" type="text" id="cep" name="cep">
            </div>

            <div class="col-12">
              <button class="btn btn-primary" type="submit">Cadastrar</button>
              <a class="btn btn-secondary" href="/cliente">Limpar</a>
            </div>
          </form>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  `);
});

app.post("/cliente", (requisicao, resposta) => {
  const dados = requisicao.body;

  console.log("Dados recebidos do formulário:");
  console.log(dados);

  resposta.send(`
    <html lang="pt-br">
      <head>
        <meta charset="UTF-8">
        <title>Dados do Cliente</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
          rel="stylesheet"
        >
      </head>

      <body>
        <div class="container mt-4">
          <h1 class="mb-4">Dados cadastrados</h1>

          <p><b>Primeiro nome:</b> ${dados.primeiroNome || ""}</p>
          <p><b>Último nome:</b> ${dados.ultimoNome || ""}</p>
          <p><b>E-mail:</b> ${dados.email || ""}</p>
          <p><b>Telefone:</b> ${dados.telefone || ""}</p>
          <p><b>Endereço:</b> ${dados.endereco || ""}</p>
          <p><b>Cidade:</b> ${dados.cidade || ""}</p>
          <p><b>Estado:</b> ${dados.estado || ""}</p>
          <p><b>CEP:</b> ${dados.cep || ""}</p>

          <a class="btn btn-primary mt-3" href="/cliente">Voltar</a>
        </div>
      </body>
    </html>
  `);
});

app.listen(porta, host, () => {
  console.log(`Servidor rodando em http://\${host}:\${porta}`);
});