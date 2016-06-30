/*
 * @constructor
 * @augments OwnedStructure
*/
var StructurePowerSpawn = function () {}
OwnedStructure.prototype = Object.create(StructurePowerSpawn.prototype);
StructurePowerSpawn.prototype = {
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
     * The amount of power containing in this structure.
     * @type number
     */
    power: null,

    /**
     * The total amount of power this structure can contain.
     * @type number
     */
    powerCapacity: null,

    /**
     * Create a power creep. This method is under development.
     * @param {string} roomName - The name of the power creep.
     * @return {object}
     */
    createPowerCreep: function (roomName) {},

    /**
     * Register power resource units into your account. Registered power allows to develop power creeps skills.
     */
    processPower: function (roomName) {},

    /**
     * Transfer the energy from this structure to a creep. You can transfer resources to your creeps from hostile structures as well.
     * @param {Creep} target - The creep object which energy should be transferred to.
     * @param {number} [amount] - The amount of energy to be transferred. If omitted, all the remaining amount of energy will be used.
     * @return {object}
     */
    transferEnergy: function (target, amount) {},
}