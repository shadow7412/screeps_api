/*
 * @constructor
 * @augments Structure
*/
var StructureWall = function () {}
Structure.prototype = Object.create(StructureWall.prototype);
StructureWall.prototype = {
    /**
     * The amount of game ticks when the wall will disappear (only for automatically placed border walls at the start of the game).
     * @type number
     */
    ticksToLive: null,
}