//Express
let express = require("express");
let app = express();
const path = require("path");

//Body Parser
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Mongo Database
let mongoose = require("mongoose");
let config = require("./config/database");
mongoose.connect(config.database, {
    useMongoClient: true,
});

//On Connection
mongoose.connection.on("connected ", () => {
    console.log("Connected to database "+config.database);
});
mongoose.connection.on("error ", (err) => {
    console.log("Database error "+err);
});
let FilmSchema = new mongoose.Schema({
    image_film: { 
        type: String, 
        require: true 
    },
    film_name: { 
        type: String, 
        require: true 
    },
    director_name: { 
        type: String, 
        require: true 
    },
    actors_name: { 
        type: String, 
        require: true 
    },
    resume_film: { 
        type: String, 
        require: true 
    },
    link_film: { 
        type: String, 
        require: true 
    },
    editable: { 
        type: Boolean, 
        require: true 
    },
})
mongoose.model("Film", FilmSchema);
let Film = mongoose.model("Film");

//Cors Middlewar
let cors = require("cors");
app.use(cors());

//Static Folder
app.use(express.static(__dirname + '/cinema/dist'));
//app.use(express.static(path.join(__dirname, 'public')));

//Passport
let passport = require("passport");
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);

//Users
let users = require("./routes/users");
app.use("/users", users);

//Routes
//Get Films
app.get("/films", (req, res, next) => {
    console.log("Server > GET '/films'");
    Film.find({}, (err, films) => {
        return res.json(films);
    })
});

//Get Film
app.get("/films/:id", (req, res, next) => {
    console.log("Server > GET '/films/:id' > id ", req.params.id);
    Film.find({_id:req.params.id}, (err, film) => {
        return res.json(film);
    })
})

//Create Film
app.post("/films", (req, res, next) => {
    console.log("Server > POST '/films' > film", req.body);
    delete req.body._id
    Film.create(req.body, (err, film) => {
        if(err) return res.json(err)
        else return res.json(film)
    })
});

//Destroy Film
app.delete("/films/:id", (req, res, next) => {
    console.log("Server > DELETE '/films/:id' > id", req.params.id);
    Film.deleteOne({_id:req.params.id}, (err, data) => {
        if(err) return res.json(err)
        else return res.json(true)
    })
});

//Update Film
app.put("/films/:id", (req, res, next) => {
    console.log("Server > PUT '/films/:id' > id", req.params.id);
    console.log("Server > PUT '/films/:id' > id", req.body);
    Film.update({_id:req.params.id}, req.body, (err, rawData) => {
        if(err) return res.json(err)
        else return res.json(true)
    })
});

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./cinema/dist/index.html"))
})

//Server Listening @ 1337
app.listen(1337, ()=> console.log("Server running at 1337"));
