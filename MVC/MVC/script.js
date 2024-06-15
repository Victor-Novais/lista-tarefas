let express = require('express')
let {engine} = require('express-handlebars')

let app = express()

let conn = require('./db/conn')
let Task = require('./models/Task')
let taskRoutes = require('./routes/tasksRoutes')

app.engine('handlebars' , engine())
app.set('view engine' , 'handlebars')

app.use( 
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.use(express.static('public'))
app.use('/tasks' , taskRoutes)



conn.sync().then(() => {app.listen(3000)}).catch((err) => {console.log(err)})