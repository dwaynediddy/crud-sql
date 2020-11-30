const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'CRUDDatabase',
})

app.use(cors)
app.use(bodyParser.urlencoded({extended: true}))

app.post("/", (req, res) => {
    const movieName = req.body.movieName
    const movieReview = req.body.movieReview


    const sqlInsert = 'INSERT INTO movie_reviews (movie_reviews) VALA (?,?)'
    db.query(sqlInsert, (movieName, movieReview), (err, result) => {
        console.log(result)
    })
    res.send("hello")
})

app.listen(3001, () => {
    console.log('running on port 3001')
})