const axios = require('axios');

// API Key
// http://api.giphy.com/v1/gifs/trending?api_key=rp4t7Q7Alq6b3QUjASJ5OMnq0a76oIlZ&limit=10
// http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=rp4t7Q7Alq6b3QUjASJ5OMnq0a76oIlZ&limit=10

const trending = (req, res) => {
    axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}&limit=25`)
    .then((response) => {
        console.log(response.data.data)
        let gif = response.data.data
        let image = gif.map((x) => x.images.original.url)
        res.json({ data: image })
    })
    .catch((err) => {
        console.log(err);
        res.json({ error: err })
    })
}

const search = (req, res) => {
    let search = req.query.search;

    axios.get(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${process.env.API_KEY}&limit=25`)
    .then((response) => {
            console.log(response.data)
            let gif = response.data.data
            let image = gif.map((x) => x.images.original.url)
            res.json({ data: image })
    })
    .catch((err) => {
        console.log(err);
        res.json({ error: err })
    })
}
module.exports = {
    trending,
    search
}