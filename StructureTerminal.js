/*
 * @constructor
 * @augments OwnedStructure
*/
var StructureTerminal = function () {}
OwnedStructure.prototype = Object.create(StructureTerminal.prototype);
StructureTerminal.prototype = {
    /**
     * An object with the storage contents. Each object key is one of the RESOURCE_* constants, values are resources amounts. RESOURCE_ENERGY is always defined and equals to 0 when empty, other resources are undefined when empty.
     * @type object
     */
    store: null,

    /**
     * The total amount of resources the storage can contain.
     * @type number
     */
    storeCapacity: null,

    /**
     * Sends resource to a Terminal in another room with the specified name.
     * @param {string} resourceType - One of the RESOURCE_* constants.
     * @param {number} amount - The amount of resources to be sent. The minimum amount is 100.
     * @param {string} destination - The name of the target room. You don't have to gain visibility in this room.
     * @param {string} [description] - The description of the transaction. It is visible to the recipient. The maximum length is 100 characters.
     * @return {object}
     */
    send: function (resourceType, amount, destination, description (optional)) {},

    /**
     * Transfer resource from this terminal to a creep. The target has to be at adjacent square. You can transfer resources to your creeps from hostile structures as well.
     * @param {Creep} target - The target object.
     * @param {string} resourceType - One of the RESOURCE_* constants.
     * @param {number} [amount] - The amount of resources to be transferred. If omitted, all the available amount is used.
     * @return {object}
     */
    transfer: function (target, resourceType, amount (optional)) {},
}