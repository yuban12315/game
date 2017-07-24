"use strict"

class Rooms{
    constructor(){
        this.roomsNumber=0
    }

    getFreeID(){
        return this.roomsNumber+1
    }



}

module.exports=new Rooms()