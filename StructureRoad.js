/*
 * @constructor
 * @augments Structure
*/
var StructureRoad = function () {}
Structure.prototype = Object.create(StructureRoad.prototype);
StructureRoad.prototype = {
    /**
     * The amount of game ticks when this road will lose some hit points.
     * @type number
     */
    ticksToDecay: null,
}