import express from 'express';
const app = express();
const port = 3010;

app.get('/', (req, res) => {
  res.status(200).send({
    status: 'success',
    message: 'welcome to tanfith.io 👋 🎉',
  });
});

app.listen(port, () => {
  console.log(`server running on: http://localhost:${port}`);
});
// ------
