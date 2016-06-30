/*
 * @constructor
 * @augments RoomObject
*/
var Nuke = function () {}
RoomObject.prototype = Object.create(Nuke.prototype);
Nuke.prototype = {
    /**
     * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
     * @type string
     */
    id: null,

    /**
     * The name of the room where this nuke has been launched from.
     * @type string
     */
    launchRoomName: null,

    /**
     * The remaining landing time.
     * @type number
     */
    timeToLand: null,
}