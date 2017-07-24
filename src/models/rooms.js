"use strict"
let Room=require('./room')
global.roomID=0

class Rooms{
    constructor(){
        this.rooms = []
    }

    getFreeID(){
        return this.roomsNumber+1
    }

    createRoom(type,presist){
        let room=new Room(type,presist)
        this.roomsNumber++
        this.rooms.push(room)
    }

    getRoomData(){
        for (let room of this.rooms){
            console.log(room.getRoomData())
        }
    }

}

module.exports=new Rooms()