/*
 * @constructor
 * @augments OwnedStructure
*/
var StructureNuker = function () {}
OwnedStructure.prototype = Object.create(StructureNuker.prototype);
StructureNuker.prototype = {
    /**
     * The amount of energy containing in this structure.
     * @type number
     */
    energy: null,

    /**
     * The total amount of energy this structure can contain.
     * @type number
     */
    energyCapacity: null,

    /**
     * The amount of ghodium containing in this structure.
     * @type number
     */
    ghodium: null,

    /**
     * The total amount of ghodium this structure can contain.
     * @type number
     */
    ghodiumCapacity: null,

    /**
     * The amount of game ticks until the next launch is possible.
     * @type number
     */
    cooldown: null,

    /**
     * Launch a nuke to the specified position.
     * @param {RoomPosition} pos - The target room position.
     * @return {object}
     */
    launchNuke: function () {},
}