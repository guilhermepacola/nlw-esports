import express from 'express';

const app = express();


app.get("/app", (request, response) => {

  const responseData = response.json([
    {
      id: "1",
      name: "Anuncio 1",
    },
    {
      id: "2",
      name: "Anuncio 2",
    },
    {
      id: "3",
      name: "Anuncio 13",
    }
  ]);

  return responseData
})

app.listen(3333, () => { console.log("servidor rodando na porta 3333") });