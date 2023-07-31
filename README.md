<h1>ChatBotLolApp</h1>


<p>No projeto final do módulo de React-Native, criei um chat com respostas automáticas para perguntas fora do contexto do jogo. Com isso, evita o consumo dos tokens da API_Key do chatGPT,  e em consequência nao gera custo monetário.</p>

<p>Para as perguntas que tem relação com esse contexto do jogo (criei um array de palavras chaves sobre ojogo), eu deixei o chatbot acessar o chat GPT responder ao usuário. Dei uma pequena personalizada com o tema do meu trabalho (jogo LOL).</p> 

<p>Explorei bastante essa biblioteca do React Native sensacional que é o GIFTedChat (https://github.com/FaridSafi/react-native-gifted-chat)
Ela serve para criação do chat, que trazer o formato e as funcionalidades de um chat.</p>

<p>Além disso, essa biblioteca já diferencia mensagens de diferentes pessoas na tela e possui uma funcionalidade bem interessante, pois toda vez que enviarmos uma mensagem, é criado um objeto dessa mensagem contendo os seguintes campos:</p>

<ol type="I">
<li>id: Um identificador da mensagem gerado de forma aleatória;</li>
<li>text: O conteúdo de texto da mensagem;tedAt: Um marcador de tempo dizendo quando a mensagem foi criada;</li>
<li>Casa</li>
<li>user: Informações do usuário que enviou aquela mensagem.</li>
</ol>


<img width="2560" alt="Captura de Tela 2023-06-26 às 11 25 00" src="https://github.com/marceloabbadia/chatbotlolapp/assets/112344339/c6061398-fa11-4492-a067-1c2be22d9385">
