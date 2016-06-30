/*
 * @constructor
 * @augments Structure
*/
var StructurePortal = function () {}
Structure.prototype = Object.create(StructurePortal.prototype);
StructurePortal.prototype = {
    /**
     * The position object in the destination room.
     * @type RoomPosition
     */
    destination: null,

    /**
     * The amount of game ticks when the portal disappears, or undefined when the portal is stable.
     * @type number
     */
    ticksToDecay: null,
}