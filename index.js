const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
app.get('/', (req, res) => {
	res.json({message: 'helloooo jii !!'})
})
let server = app.listen(port, () => {
	console.log('this application is listening at http://localhost:${port}')
})
function stop() {
	server.close();
}
module.exports = server;
module.exports.stop = stop;
