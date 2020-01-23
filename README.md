# Loja virtual LadoDiCá

### Apresentação do Projeto

Desenvolvido em React e utilizando Redux e Redux-Saga, a loja virtual LadoDiCá é uma inicitiva referente a criação de um e-commerce para disponibilizar os produtos voltado para o público infantil.

### Recursos disponíveis

#### Funcionalidades

1- Página principal

- Listagem dos produtos com informações do nome e preço e quantidade de itens no carrinho;
- Possibilidade de inserir itens no carrinho;
- Campo de busca onde o usuário pode buscar por nome ou referência(código) do produto;
- Informação de quantos itens (diferentes) possui no carrinho, o mesmo pode ser acessado de qualquer lugar da aplicação;
- Mostrar os produtos por categoria (Meninas/Meninos/Kits/Fraldas/Satinhos) apenas clicando nas mesmas.
- Informações para contato no rodapé, todos com redirecionamento para a mídia social/Whatsapp.

2- Detalhamento do Produto

- Possbilidade de ver as fotos disponiveis do protudo em destaque, apenas clicando nas miniaturas;
- Campo para inserir o tamanho do produto;
- Detalhes do produto onde é apresentado uma descrição mais detalhada do mesmo;
- Botão para inserir o item no carrinho;

3- Carrinho de compras

- Listagem dos produtos adicionados ao carrinho, com suas respectivas quantidades,
- Possibiliade de aumentar/diminuir a quantidade dos itens;
- Possibilidade de remover o item do carrinho;
- Informação dos valores (Subtotal/Total Geral), todos são calculados de forma dinâmica;
- Possibilidade de inserir um cupom de desconto disponível;
- Botão para finalizar a compra;

4- Finalização da compra

- Um modal onde é mostrada a informação que a compra foi concluída com sucesso, após fechar o mesmo, o carrinho será limpo e o usuário será direcionado para página inicia;

#### Fonte dos dados

Como fonte de dados foi utilizado o [JSON-SERVER](https://github.com/typicode/json-server) ele disponibiliza um MOCK de dados previamente cadastrados, como se fosse uma API, onde a aplicação pode fazer requisições utilizando os verbos HTTP; </br>
Para utilizar o recurso de buscas, como o [JSON-SERVER](https://github.com/typicode/json-server) não possui o recurso para buscar por um campo OU outro, foi adicionado um middleware (de acordo com a documentação), onde a requisição POST é recebida e processada, e retorna os dados encontrados.

> O arquivo JSON onde estão cadastrados os produtos, estão no diretório /json-server/db.json

# Como executar o projeto

Após o Download do repositório, na raiz da pasta executar o comando para instalar todas as dependências: </br>
`npm install`

Após o processo terminar execute o seguinte comando (também na raiz) para colocar no ar o JSON-SERVER:</br>
`node server.js`

Se der tudo certo a página ficará disponível no endereço: http://localhost:3000/

# Imagens da Loja

![Screen Shot 2020-01-23 at 17 56 36](https://user-images.githubusercontent.com/21282437/73023348-1fa93780-3e0a-11ea-8a2e-027810bf4509.png)
![Screen Shot 2020-01-23 at 17 57 09](https://user-images.githubusercontent.com/21282437/73023349-1fa93780-3e0a-11ea-9eae-35e5adf893b9.png)
![Screen Shot 2020-01-23 at 17 57 47](https://user-images.githubusercontent.com/21282437/73023350-2041ce00-3e0a-11ea-92e2-e2f29125edb4.png)
![Screen Shot 2020-01-23 at 17 58 22](https://user-images.githubusercontent.com/21282437/73023352-2041ce00-3e0a-11ea-9bde-8303bc8c5f99.png)
![Screen Shot 2020-01-23 at 17 57 56](https://user-images.githubusercontent.com/21282437/73023351-2041ce00-3e0a-11ea-9aa5-83a37eeca5a9.png)
