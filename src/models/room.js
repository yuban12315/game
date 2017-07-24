"use strict"
let rooms=require('./rooms')

class Room {
    //创建房间
    constructor(type,presist) {
        this.type=type
        this.presist=presist
        this.id=new room.getFreeID()
        //this.game=

        //配置
        //this.max
    }

    setConfig(code) {
        this.code = code
    }

    getRoomData(){
        let rData={}

        rData.id = this.id
        //rData.user=room.game.users
        rData.type=this.type

        return rData
    }

}
let room = Room()
module.exports = room
