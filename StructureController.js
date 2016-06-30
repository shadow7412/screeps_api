/*
 * @constructor
 * @augments OwnedStructure
*/
var StructureController = function () {}
OwnedStructure.prototype = Object.create(StructureController.prototype);
StructureController.prototype = {
    /**
     * Current controller level, from 0 to 8.
     * @type number
     */
    level: null,

    /**
     * The current progress of upgrading the controller to the next level.
     * @type number
     */
    progress: null,

    /**
     * The progress needed to reach the next level.
     * @type number
     */
    progressTotal: null,

    /**
     * An object with the controller reservation info if present:
     * @type object
     */
    reservation: null,

    /**
     * The amount of game ticks when this controller will lose one level. This timer can be reset by using Creep.upgradeController.
     * @type number
     */
    ticksToDowngrade: null,

    /**
     * The amount of game ticks while this controller cannot be upgraded due to attack.
     * @type number
     */
    upgradeBlocked: null,

    /**
     * Make your claimed controller neutral again.
     */
    unclaim: function () {},
}