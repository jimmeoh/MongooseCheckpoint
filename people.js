const express   = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.Promise = global.Promise; // ES6 - Promise

const peopleSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age : Number,
    favoriteFoods: [String]
});
const Schema = mongoose.model('Person', peopleSchema);

const app = express();


const PORT = 5000;
console.log('working');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen((PORT), () => console.log(`Server listening on PORT 5000`)))
  .catch((error) => console.log(error));

// Person Prototype
//name : string [required]
//age: number [optional]
//favoriteFood: array of string [optional]

//Use the mongoose Schema basic


app.get('/', (req, res) => {
    res.send('Welcome tp Mongoose Checkpoints')
});

const Person = mongoose.model('Person', peopleSchema);
// 1
//run()
//async function run () {

  //  const dave = new Person({name: 'Dave', age: 30, favoriteFoods:['pizza', 'chips']})
  //  await dave.save()
  //  console.log(dave)

//}
// 2 create and save a recode

//var createAndSavePerson = async function (done) {
   // let francesca = new Person({ name: 'Francesca', age: 30, favoriteFoods: ['sushi'] })
    
   // francesca.save();
   // console.log(francesca)

//createAndSavePerson()

//Lesson 4: create many records with model.create()

//const arrayOfPeople = ( [
   // {name: 'Garry', age: 35, favoriteFoods:['fried cheese', 'chicken wings', 'chicken nugget']},
   // {name: 'John', age: 24, favoriteFoods:['watermelon', 'mango']},
   // {name: 'Moses', age: 52, favoriteFoods:['vegetable soup']}
//]);
//Person.insertMany(arrayOfPeople)
//.then(function () {
    //console.log("arrayOfPeople of people is saved")
//})
//.catch (function (err) {
   // console.log(err); 
//})

//const arrayOfPeople = ([
  //  {name: 'Whitney Bayerl', age: 32, favoriteFoods: ['donuts', 'broccoli', 'cereal']},
  //  {name: 'Rylan Dunn', age: 14, favoriteFoods: ['sushi', 'ramen', 'potato chips']},
 //   {name: 'Evie Bayerl', age: 5, favoriteFoods: ['pop tarts', 'milk', 'hot dogs']},
 //   {name: 'Talia Bayerl', age: 1, favoriteFoods: ['oatmeal', 'beef', 'mac & cheese']}
 // ]);
  
   // Person.create(arrayOfPeople)
  //  .then(function () {
     //   console.log("Created arrayOfPeople is successful")
  //  })
    //.catch(function (err) {
       // console.log(err);
    //})

    /** 5) Use model.find() */
//run()
//async function run() {
  //  try {
   // const people = await Person.find({name: 'Garry'})
   // console.log(people)
   // } catch (err) {
        //console.log(err);
   // }
//}

/** 6) Use model.findOne() to Return a single Document  */
//run ()
//async function run() {
   //try {
    //  const findPeopleByOne = await Person.findOne({ favoriteFoods:'pop tarts'});
    //  console.log(findPeopleByOne)

 //  } catch (e) {
    //  console.log(e);
   //}
//}
//  7 use Model.findById to Search Database
//run ()
//async function run() {
   //try {
    //  const findById = await Person.findById("651688a97defb8013cefef84")
    //  console.log(findById)
   //} catch (e) {
     // console.log(e);
  // }
//}
// 8 use Model.findOne to Search Database
//run()
 //async function run() {
  // try {
   //   const doc = await Person.findOne({name: 'Francesca'})
    //  doc.age = '56';
   //   doc.favoriteFoods.push('spaghetti')
     // console.log(await doc.save());
 //  }
 //  catch (e) {
      //handleError(e);
  // }
 //}
/** 9) Perform New Update on Document Using Model.findOneAndUpdate()  */
//run()
// async function run() {
  // try {
    // const doc = await Person.findOneAndUpdate({name: 'Garry'})
     // doc. name = 'cosmos'
     // doc.age = '56';
    // doc.favoriteFoods.push('spaghetti')
    // console.log(await doc.save());
 // }
 //catch (e) {
 //     handleError(e);
  // }
// }
/** 10) delete one Document with Model.findByIdAndRemove  */
//run ()
//async function run() {
 //  try {
  //   const findByIdAndRemove = await Person.findByIdAndRemove(""651688a97defb8013cefef84")
  //  console.log(findOneAndDelete)
  // } catch (e) {
   //   console.log(e);
 //  }
//}
/** 12) chain Search Query helper Narrow  */

//async function run() {
 // try {
   //const chainSearchQuery = await Person.find({age: 52})
//.sort({name: -1})
//.limit(5)
//.select({favoriteFoods: 0})
//.exec()
 //   console.log(chainSearchQuery )
 //  } catch (e) {
  //  console.log(e);
//  }
//}



