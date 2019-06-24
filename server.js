const path = require('path');
const express = require('express');
const app = express();
const history = require('connect-history-api-fallback');
const port = process.env.PORT || 2019;

const staticFileMiddleware = express.static(path.join(__dirname, 'public'));

app.use(staticFileMiddleware);
app.use(history());
app.use(staticFileMiddleware);

app.get('/', function (req, res) {
  res.render(path.join(__dirname + '/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
