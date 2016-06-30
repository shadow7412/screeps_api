/*
 * @constructor
 * @augments OwnedStructure
*/
var StructureObserver = function () {}
OwnedStructure.prototype = Object.create(StructureObserver.prototype);
StructureObserver.prototype = {
    /**
     * Provide visibility into a distant room from your script. The target room object will be available on the next tick.
     * @param {string} roomName - The name of the target room.
     * @return {object}
     */
    observeRoom: function () {},
}