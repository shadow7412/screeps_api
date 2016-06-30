/*
 * @constructor
 * @augments OwnedStructure
*/
var StructureLink = function () {}
OwnedStructure.prototype = Object.create(StructureLink.prototype);
StructureLink.prototype = {
    /**
     * The amount of game ticks the link has to wait until the next transfer is possible.
     * @type number
     */
    cooldown: null,

    /**
     * The amount of energy containing in the link.
     * @type number
     */
    energy: null,

    /**
     * The total amount of energy the link can contain.
     * @type number
     */
    energyCapacity: null,

    /**
     * Transfer energy from the link to another link or a creep. If the target is a creep, it has to be at adjacent square to the link. If the target is a link, it can be at any location in the same room.
     * @param {Creep, Structure (link)} target - The target object.
     * @param {number} [amount] - The amount of energy to be transferred. If omitted, all the available energy is used.
     * @return {object}
     */
    transferEnergy: function (target, amount) {},
}