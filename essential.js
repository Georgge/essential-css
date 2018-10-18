const express = require('express');
const app = express();

const publicDir = 'essential/public/'
app.use(express.static(`${__dirname}/${publicDir}`));

app.get('/', (request, response) => {
  const fileName = 'example.html';
  const options = {
    root: `${__dirname}/${publicDir}`,
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true,
    }
  };

  response.sendFile('example.html', options, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Sent: ${fileName}`);
    }
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Listening in port ${port}`);
})