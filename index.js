require('dotenv').config();

const server = reqire('./server.js')

const port = process.env.PORT || 6050;

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})