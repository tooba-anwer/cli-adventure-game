#! /usr/bin/env node

import inquirer from "inquirer";

class Player{
    name:string;
    fuel:number = 100;
    constructor(name:string){
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
}

class Opponent{
    name:string;
    fuel:number = 100;
    constructor(name:string){
        this.name = name;
    }
}

let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Please Enter your Name: "
    }
])

let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Select your Opponent",
        choices:["Skeleton","Alien","Zombie"]
    }
])

let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);

do{
    // Skeleton
    if(opponent.select == "Skeleton") {
    }

    // Alien
    if(opponent.select == "Alien") {
    }

    // Zombie
    if(opponent.select == "Zombie") {
    }
}
while(true); 