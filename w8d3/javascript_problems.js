// function titleize(name,callback) {
//    let madeTitle = name.map( n => `Mx. ${n} Jingleheimer Schmidt` )
//    callback(madeTitle)
// }

// titleize(["Mary", "Brian", "Leo"], name => {
//     name.forEach( names => console.log(names))
// })

// function Elephant(name, height, tricks){
//     this.name = name 
//     this.height = height 
//     this.tricks = tricks 

// }

// Elephant.prototype.trumpet = function () {
//     console.log( `${this.name} the elephant goes phrRRRRRRRRRRRRRRRR!!!!`)
// }

// Elephant.prototype.grow = function () {
//     this.height += 12 
// }

// Elephant.prototype.addTrick = function (trick) {
//     this.tricks.push(trick)
// }

// Elephant.prototype.play = function (){
//     console.log(`${this.name} is ${this.tricks[Math.floor(Math.random() * this.tricks.length)]}`)
// }

// let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
// let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
// let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
// let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

// let herd = [ellie, charlie, kate, micah];

// function paradeHelper(elephant) {
//     console.log(`${elephant.name} is trotting by!`)
// }
// herd.forEach(ele => {
//     paradeHelper(ele)
// })
let intro = "I'd like cheesy scarambled eggs"
let beg = "please" 
let ex = " and"
let bfastOrder = function (food) {
    intro += `${ex} ${food} ${beg}` 
    return intro 
} 

console.log(bfastOrder())
