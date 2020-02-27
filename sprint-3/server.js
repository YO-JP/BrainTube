const express = require('express');



const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/video', require('./routes/api/video'));

const port = 5000;

app.listen(process.env.PORT ||  port, () => `Server running on port ${port}`);