/*
 * @constructor
*/
var RoomObject = function () {}
RoomObject.prototype = {
    /**
     * An object representing the position of this object in the room.
     * @type RoomPosition
     */
    pos: null,

    /**
     * The link to the Room object. May be undefined in case if an object is a flag or a construction site and is placed in a room that is not visible to you.
     * @type Room
     */
    room: null,
}