/*
 * @constructor
 * @augments Structure
*/
var StructureContainer = function () {}
Structure.prototype = Object.create(StructureContainer.prototype);
StructureContainer.prototype = {
    /**
     * An object with the structure contents. Each object key is one of the RESOURCE_* constants, values are resources amounts. RESOURCE_ENERGY is always defined and equals to 0 when empty, other resources are undefined when empty.
     * @type object
     */
    store: null,

    /**
     * The total amount of resources the structure can contain.
     * @type number
     */
    storeCapacity: null,

    /**
     * Transfer resource from this structure to a creep. The target has to be at adjacent square.
     * @param {Creep} target - The target object.
     * @param {string} resourceType - One of the RESOURCE_* constants.
     * @param {number} [amount] - The amount of resources to be transferred. If omitted, all the available amount is used.
     * @return {object}
     */
    transfer: function (target, resourceType, amount) {},
}