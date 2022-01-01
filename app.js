const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.send('This is my AWS tester!');
});

app.listen(app.get('port'), () => {
    console.log(`listening on port ${app.get('port')}`);
})