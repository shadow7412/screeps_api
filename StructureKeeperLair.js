/*
 * @constructor
 * @augments OwnedStructure
*/
var StructureKeeperLair = function () {}
OwnedStructure.prototype = Object.create(StructureKeeperLair.prototype);
StructureKeeperLair.prototype = {
    /**
     * Time to spawning of the next Source Keeper.
     * @type number
     */
    ticksToSpawn: null,
}