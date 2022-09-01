const app = require('../backend/server')

app.listen(port, () => console.log(`Its hot on port: ${port}`))


module.exports = app