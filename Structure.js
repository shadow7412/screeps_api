/*
 * @constructor
 * @augments RoomObject
*/
var Structure = function () {}
RoomObject.prototype = Object.create(Structure.prototype);
Structure.prototype = {
    /**
     * The current amount of hit points of the structure.
     * @type number
     */
    hits: null,

    /**
     * The total amount of hit points of the structure.
     * @type number
     */
    hitsMax: null,

    /**
     * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
     * @type string
     */
    id: null,

    /**
     * One of the STRUCTURE_* constants.
     * @type string
     */
    structureType: null,

    /**
     * Destroy this structure immediately.
     */
    destroy: null,

    /**
     * Check whether this structure can be used. If the room controller level is not enough, then this method will return false, and the structure will be highlighted with red in the game.
     */
    isActive: null,

    /**
     * Toggle auto notification when the structure is under attack. The notification will be sent to your account email. Turned on by default.
     * @param {boolean} enabled - Whether to enable notification or disable.
     * @return {object}
     */
    notifyWhenAttacked: function (enabled) {},
}