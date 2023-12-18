let express = require('express');
let app = express();
let port = 9120
let Mongo = require('mongodb');
let bodyParser = require('body-parser');
let cors = require('cors');
let {dbConnect,getData} = require('./Controller/dbController');

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.get('/',(req,res) => {
    res.send("Hiii From Express")
})

// get all location

app.get('/location', async(req,res) =>{
    let query = {};
    let collection = "location";
    let output = await getData(collection,query);
    res.send(output)
});

app.get('/locationing', async(req,res) =>{
    let query = {};
    let collection = "location";
    if(req.query.location_id){
        query = {"location_id":Number(req.query.location_id)}

    }
    let output = await getData(collection,query);
    res.send(output)
});



app.get('/restaurantmenu', async(req,res) =>{
    let query = {};
    let collection = "restaurantmenu";
    if(req.query.restaurant_id){
        query = {"restaurant_id":Number(req.query.restaurant_id)}

    }
    let output = await getData(collection,query);
    res.send(output)
});


app.get('/menu', async(req,res) =>{
    let query = {};
    let collection = "menu";
    if(req.query.restaurant_id){
        query = {"restaurant_id":Number(req.query.restaurant_id)}

    }
    let output = await getData(collection,query);
    res.send(output)
});

app.get('/restaurants', async(req,res) =>{
    let query = {};
    if(req.query.stateId && req.query.foodTypeId){
        query = {
            "state_id":Number(req.query.stateId),
            "foodType.foodtype_id":Number(req.query.foodTypeId)
        } 
    }
    else if(req.query.stateId){
       query = {"state_id":Number(req.query.stateId)} 
    }
    
    
    else if(req.query.foodTypeId){
        query = {"foodType.foodtype_id":Number(req.query.foodTypeId)}
    }
    
    
    else if(req.query.mealId){
       query = {"mealTypes.mealtype_id":Number(req.query.mealId)} 
    }else if(req.query.ratingText){
       query = {"rating_text":Number(req.query.ratingText)} 
    }
    let collection = "restaurants";
    let output = await getData(collection,query);
    res.send(output)
});




// get all mealtypes
app.get('/mealType', async(req,res) => {
    let query = {};
    let collection = "mealType";
    let output = await getData(collection,query);
    res.send(output);
})





// get all mealtypes
app.get('/quicksearch', async(req,res) => {
    let query = {};
    let collection = "foodType";
    let output = await getData(collection,query);
    res.send(output);
})




app.get('/filter/:mealId',async(req,res) => {
    let mealId = Number(req.params.mealId);
    let foodtypeId = Number(req.query.foodtypeId);
    let lcost = Number(req.query.lcost);
    let hcost = Number(req.query.hcost);

    console.log(mealId);
    console.log(foodtypeId);

    if(foodtypeId){
        query = {
            "mealTypes.mealtype_id":Number(mealId),
            "foodType.foodtype_id":Number(foodtypeId)
        }
    }else if(lcost && hcost){
        query = {
            "mealTypes.mealtype_id":Number(mealId),
            $and:[{cost:{$gt:lcost,$lt:hcost}}]
        }
    }
    else{
        query = {"mealTypes.mealtype_id":Number(mealId)}
    }

    let collection = "restaurants";
    let output = await getData(collection,query);
    res.send(output)
})



app.get('/details', async(req,res) => {
    let query = {};
    let restIds = Number(req.query.restId);
    if(req.query.restId){
       query = {"restaurant_id":Number(req.query.restId)} 
    }   
    let collection = "restaurants";
    let output = await getData(collection,query);

    res.send(output);
})




app.get('/filtery/:foodtypeId',async(req,res) => {
    let mealId = Number(req.query.mealId);
    let foodtypeId = Number(req.params.foodtypeId);
    let lcost = Number(req.query.lcost);
    let hcost = Number(req.query.hcost);

    console.log(mealId);
    console.log(foodtypeId);

    if(mealId){
        query = {
            "mealTypes.mealtype_id":Number(mealId),
            "foodType.foodtype_id":Number(foodtypeId)
        }
    }else if(lcost && hcost){
        query = {
            "foodType.foodtype_id":Number(foodtypeId),
            $and:[{cost:{$gt:lcost,$lt:hcost}}]
        }
    }
    else{
        query = {}
    }

    let collection = "restaurants";
    let output = await getData(collection,query);
    res.send(output)
})






app.listen(port,(err) => {
    dbConnect();
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})