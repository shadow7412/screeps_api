/*
 * @constructor
 * @augments RoomObject
*/
var Mineral = function () {}
RoomObject.prototype = Object.create(Mineral.prototype);
Mineral.prototype = {
    /**
     * The remaining amount of resources.
     * @type number
     */
    mineralAmount: null,

    /**
     * The resource type, one of the RESOURCE_* constants.
     * @type number
     */
    mineralType: null,

    /**
     * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
     * @type string
     */
    id: null,

    /**
     * The remaining time after which the deposit will be refilled.
     * @type number
     */
    ticksToRegeneration: null,
}