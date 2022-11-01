require("./error-handling")(app) // impostamos e já executamos a função já executando ela
duvida desse (app)

// caso um endereço não seja especificado, permitiremos acesso apenas a partir do localhost:3000, padrão do REACT.
const FRONTEND_URL = process.env.ORIGIN || 'http://localhost:3000';

    // configuração para nosso servidor poder receber informações no formato JSON.

app.use(json());
app.use(urlencoded({ extended: false })); <=== essa parte

module.exports = multer({ storage });

como funciona a exportação
