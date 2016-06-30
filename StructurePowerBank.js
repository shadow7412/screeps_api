/*
 * @constructor
 * @augments OwnedStructure
*/
var StructurePowerBank = function () {}
OwnedStructure.prototype = Object.create(StructurePowerBank.prototype);
StructurePowerBank.prototype = {
    /**
     * The amount of power containing.
     * @type number
     */
    power: null,

    /**
     * The amount of game ticks when this structure will disappear.
     * @type number
     */
    ticksToDecay: null,
}