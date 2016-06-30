/*
 * @constructor
 * @augments RoomObject
*/
var Resource = function () {}
RoomObject.prototype = Object.create(Resource.prototype);
Resource.prototype = {
    /**
     * The amount of resource units containing.
     * @type number
     */
    amount: null,

    /**
     * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
     * @type string
     */
    id: null,

    /**
     * One of the RESOURCE_* constants.
     * @type string
     */
    resourceType: null,
}