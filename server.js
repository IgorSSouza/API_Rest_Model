import app from './app';

const port = 8000;

app.listen(port, () => {
  console.log();
  console.log(`Escutando na porta ${port}`);
  console.log(`Executando em http://localhost:${port}`);
});
