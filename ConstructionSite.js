/*
 * @constructor
 * @augments RoomObject
*/
var ConstructionSite = function () {}
RoomObject.prototype = Object.create(ConstructionSite.prototype);
ConstructionSite.prototype = {
    /**
     * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
     * @type string
     */
    id: null,

    /**
     * Whether this is your own construction site.
     * @type boolean
     */
    my: null,

    /**
     * An object with the structure’s owner info containing the following properties:
     * @type object
     */
    owner: null,

    /**
     * The current construction progress.
     * @type number
     */
    progress: null,

    /**
     * The total construction progress needed for the structure to be built.
     * @type number
     */
    progressTotal: null,

    /**
     * One of the STRUCTURE_* constants.
     * @type string
     */
    structureType: null,

    /**
     * Remove the construction site.
     */
    remove: function () {},
}