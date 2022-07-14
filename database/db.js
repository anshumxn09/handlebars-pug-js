const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/userframe", {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(() => {
    console.log('successfully connected');
}).catch((err) => {
    console.log('connection dismissed due to following reason ', err);
})