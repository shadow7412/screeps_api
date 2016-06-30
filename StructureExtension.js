/*
 * @constructor
 * @augments OwnedStructure
*/
var StructureExtension = function () {}
OwnedStructure.prototype = Object.create(StructureExtension.prototype);
StructureExtension.prototype = {
    /**
     * The amount of energy containing in the extension.
     * @type number
     */
    energy: null,

    /**
     * The total amount of energy the extension can contain.
     * @type number
     */
    energyCapacity: null,

    /**
     * Transfer the energy from the extension to a creep. You can transfer resources to your creeps from hostile structures as well.
     * @param {Creep} target - The creep object which energy should be transferred to.
     * @param {number} [amount] - The amount of energy to be transferred. If omitted, all the remaining amount of energy will be used.
     * @return {object}
     */
    transferEnergy: function () {},
}