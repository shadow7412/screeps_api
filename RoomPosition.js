/*
 * @constructor
*/
var RoomPosition = function () {}
RoomPosition.prototype = {
    /**
     * You can create new RoomPosition object using its constructor.
     * @param {number} x - X position in the room.
     * @param {number} y - Y position in the room.
     * @param {string} roomName - The room name.
     * @return {object}
     */
    constructor: function (x, y, roomName) {},

    /**
     * The name of the room.
     * @type string
     */
    roomName: null,

    /**
     * X position in the room.
     * @type number
     */
    x: null,

    /**
     * Y position in the room.
     * @type number
     */
    y: null,

    /**
     * Create new ConstructionSite at the specified location.
     * @param {string} structureType - One of the STRUCTURE_* constants.
     * @return {object}
     */
    createConstructionSite: function (structureType) {},

    /**
     * Create new Flag at the specified location.
     * @param {string} [name] - The name of a new flag. It should be unique, i.e. the Game.flags object should not contain another flag with the same name (hash key). If not defined, a random name will be generated.
     * @param {string} [color] - The color of a new flag. Should be one of the COLOR_* constants. The default value is COLOR_WHITE.
     * @param {string} [secondaryColor] - The secondary color of a new flag. Should be one of the COLOR_* constants. The default value is equal to color.
     * @return {object}
     */
    createFlag: function (name, color, secondaryColor) {},

    /**
     * Find an object with the shortest path from the given position. Uses A* search algorithm and Dijkstra's algorithm.
     * @param {number} type - See Room.find.
     * @param {array} objects - An array of room's objects or RoomPosition objects that the search should be executed against.
     * @param {object} [opts] - An object containing pathfinding options (see Room.findPath), or one of the following:


filter
object, function, string
Only the objects which pass the filter using the Lodash.filter method will be used.


algorithm
string
One of the following constants:

astar is faster when there are relatively few possible targets;
dijkstra is faster when there are a lot of possible targets or when the closest target is nearby.

The default value is determined automatically using heuristics.
     * @param {object, function, string} filter - Only the objects which pass the filter using the Lodash.filter method will be used.
     * @param {string} algorithm - One of the following constants:

astar is faster when there are relatively few possible targets;
dijkstra is faster when there are a lot of possible targets or when the closest target is nearby.

The default value is determined automatically using heuristics.
     * @return {object}
     */
    findClosestByPath: function (type, objects, opts, filter, algorithm) {},

    /**
     * Find an object with the shortest linear distance from the given position.
     * @param {number} type - See Room.find.
     * @param {array} objects - An array of room's objects or RoomPosition objects that the search should be executed against.
     * @param {object} [opts] - An object containing one of the following options:


filter
object, function, string
Only the objects which pass the filter using the Lodash.filter method will be used.
     * @param {object, function, string} filter - Only the objects which pass the filter using the Lodash.filter method will be used.
     * @return {object}
     */
    findClosestByRange: function (type, objects, opts, filter) {},

    /**
     * Find all objects in the specified linear range.
     * @param {number} type - See Room.find.
     * @param {array} objects - An array of room's objects or RoomPosition objects that the search should be executed against.
     * @param {number} range - The range distance.
     * @param {object} [opts] - See Room.find.
     * @return {object}
     */
    findInRange: function (type, objects, range, opts) {},

    /**
     * Find an optimal path to the specified position using A* search algorithm. This method is a shorthand for Room.findPath. If the target is in another room, then the corresponding exit will be used as a target.
     * @param {number} x - X position in the room.
     * @param {number} y - Y position in the room.
     * @param {object} target - Can be a RoomPosition object or any object containing RoomPosition.
     * @param {object} [opts] - An object containing pathfinding options flags (see Room.findPath for more details).
     * @return {object}
     */
    findPathTo: function (x, y, target, opts) {},

    /**
     * Get linear direction to the specified position.
     * @param {number} x - X position in the room.
     * @param {number} y - Y position in the room.
     * @param {object} target - Can be a RoomPosition object or any object containing RoomPosition.
     * @return {object}
     */
    getDirectionTo: function (x, y, target) {},

    /**
     * Get linear range to the specified position.
     * @param {number} x - X position in the room.
     * @param {number} y - Y position in the room.
     * @param {object} target - Can be a RoomPosition object or any object containing RoomPosition.
     * @return {object}
     */
    getRangeTo: function (x, y, target) {},

    /**
     * Check whether this position is in the given range of another position.
     * @param {number} x - X position in the same room.
     * @param {number} y - Y position in the same room.
     * @param {RoomPosition} target - The target position.
     * @param {number} range - The range distance.
     * @return {object}
     */
    inRangeTo: function (x, y, target, range) {},

    /**
     * Check whether this position is the same as the specified position.
     * @param {number} x - X position in the room.
     * @param {number} y - Y position in the room.
     * @param {object} target - Can be a RoomPosition object or any object containing RoomPosition.
     * @return {object}
     */
    isEqualTo: function (x, y, target) {},

    /**
     * Check whether this position is on the adjacent square to the specified position. The same as inRangeTo(target, 1).
     * @param {number} x - X position in the room.
     * @param {number} y - Y position in the room.
     * @param {object} target - Can be a RoomPosition object or any object containing RoomPosition.
     * @return {object}
     */
    isNearTo: function (x, y, target) {},

    /**
     * Get the list of objects at the specified room position.
     */
    look: function (x, y, target) {},

    /**
     * Get an object with the given type at the specified room position.
     * @param {string} type - One of the LOOK_* constants.
     * @return {object}
     */
    lookFor: function (type) {},
}