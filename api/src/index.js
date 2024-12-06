const express = require('express');
const { port } = require('./configuration');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/user', (req, res) => {
  const user = { name: "Linda", age: 11 };
  res.json({
    response: true,
    user
  });
});

app.get('/users', (req, res) => {
  const user1 = { name: "Linda", age: 11 };
  const user2 = { name: "Marta", age: 15 };
  const user3 = { name: "Mark", age: 10 };
  res.json({
    response: true,
    users: [user1, user2, user3]
  });
});

app.listen(port, () => {
  console.log(`Listening on ${port} port`);
});
