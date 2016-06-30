/*
 * @constructor
 * @augments OwnedStructure
*/
var StructureRampart = function () {}
OwnedStructure.prototype = Object.create(StructureRampart.prototype);
StructureRampart.prototype = {
    /**
     * If false (default), only your creeps can step on the same square. If true, any hostile creeps can pass through.
     * @type boolean
     */
    isPublic: null,

    /**
     * The amount of game ticks when this rampart will lose some hit points.
     * @type number
     */
    ticksToDecay: null,

    /**
     * Make this rampart public to allow other players' creeps to pass through.
     * @param {boolean} isPublic - Whether this rampart should be public or non-public.
     * @return {object}
     */
    setPublic: function (isPublic) {},
}