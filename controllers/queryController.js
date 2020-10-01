const axios = require('axios');
require('dotenv').config()

module.exports ={
    findBook: (request,response) =>{
        console.log(request.params.query)
        axios.get(process.env.GOOGLE_BOOKS_API + request.params.query)
        .then(({data}) => response.json(data))
        .catch(err => console.log(err));

    }

}