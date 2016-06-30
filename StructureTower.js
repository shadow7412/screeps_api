/*
 * @constructor
 * @augments OwnedStructure
*/
var StructureTower = function () {}
OwnedStructure.prototype = Object.create(StructureTower.prototype);
StructureTower.prototype = {
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
     * Remotely attack any creep in the room.
     * @param {Creep} target - The target creep.
     * @return {object}
     */
    attack: function (target) {},

    /**
     * Remotely heal any creep in the room.
     * @param {Creep} target - The target creep.
     * @return {object}
     */
    heal: function (target) {},

    /**
     * Remotely repair any structure in the room.
     * @param {Spawn, Structure} target - The target structure.
     * @return {object}
     */
    repair: function (target) {},

    /**
     * Transfer energy from the structure to a creep. You can transfer resources to your creeps from hostile structures as well.
     * @param {Creep} target - The creep object which energy should be transferred to.
     * @param {number} [amount] - The amount of energy to be transferred. If omitted, all the remaining amount of energy will be used.
     * @return {object}
     */
    transferEnergy: function (target, amount (optional)) {},
}