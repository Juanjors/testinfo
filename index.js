const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 5001

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => {
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        req.userIp = ip;
        console.log('LA IP DEL USUARIO ES: ', ip)
        res.render('pages/index')
    })
    .listen(PORT, () => console.log(`Listening on ${PORT}`))


