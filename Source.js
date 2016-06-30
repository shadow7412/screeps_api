/*
 * @constructor
 * @augments RoomObject
*/
var Source = function () {}
RoomObject.prototype = Object.create(Source.prototype);
Source.prototype = {
    /**
     * The remaining amount of energy.
     * @type number
     */
    energy: null,

    /**
     * The total amount of energy in the source.
     * @type number
     */
    energyCapacity: null,

    /**
     * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
     * @type string
     */
    id: null,

    /**
     * The remaining time after which the source will be refilled.
     * @type number
     */
    ticksToRegeneration: null,
}