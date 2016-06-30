/*
 * @constructor
*/
var Room = function () {}
Room.prototype = {
    /**
     * The Controller structure of this room, if present, otherwise undefined.
     * @type StructureController
     */
    controller: null,

    /**
     * Total amount of energy available in all spawns and extensions in the room.
     * @type number
     */
    energyAvailable: null,

    /**
     * Total amount of energyCapacity of all spawns and extensions in the room.
     * @type number
     */
    energyCapacityAvailable: null,

    /**
     * A shorthand to Memory.rooms[room.name]. You can use it for quick access the room’s specific memory data object. Learn more about memory
     * @type any
     */
    memory: null,

    /**
     * One of the following constants:
     * @type string
     */
    mode: null,

    /**
     * The name of the room.
     * @type string
     */
    name: null,

    /**
     * The Storage structure of this room, if present, otherwise undefined.
     * @type StructureStorage
     */
    storage: null,

    /**
     * The Terminal structure of this room, if present, otherwise undefined.
     * @type StructureTerminal
     */
    terminal: null,

    /**
     * Serialize a path array into a short string representation, which is suitable to store in memory.
     * @param {array} path - A path array retrieved from Room.findPath.
     * @return {object}
     */
    serializePath: function (path) {},

    /**
     * Deserialize a short string path representation into an array form.
     * @param {string} path - A serialized path string.
     * @return {object}
     */
    deserializePath: function (path) {},

    /**
     * Create new ConstructionSite at the specified location.
     * @param {number} x - The X position.
     * @param {number} y - The Y position.
     * @param {object} pos - Can be a RoomPosition object or any object containing RoomPosition.
     * @param {string} structureType - One of the STRUCTURE_* constants.
     * @return {object}
     */
    createConstructionSite: function (x, y, pos, structureType) {},

    /**
     * Create new Flag at the specified location.
     * @param {number} x - The X position.
     * @param {number} y - The Y position.
     * @param {object} pos - Can be a RoomPosition object or any object containing RoomPosition.
     * @param {string} [name] - The name of a new flag. It should be unique, i.e. the Game.flags object should not contain another flag with the same name (hash key). If not defined, a random name will be generated.
     * @param {string} [color] - The color of a new flag. Should be one of the COLOR_* constants. The default value is COLOR_WHITE.
     * @param {string} [secondaryColor] - The secondary color of a new flag. Should be one of the COLOR_* constants. The default value is equal to color.
     * @return {object}
     */
    createFlag: function (x, y, pos, name, color, secondaryColor) {},

    /**
     * Find all objects of the specified type in the room.
     * @param {number} type - One of the FIND_* constants.
     * @param {object} [opts] - An object with additional options:


filter
object, function, string
The result list will be filtered using the Lodash.filter method.
     * @param {object, function, string} filter - The result list will be filtered using the Lodash.filter method.
     * @return {object}
     */
    find: function (type, opts, filter) {},

    /**
     * Find the exit direction en route to another room.
     * @param {string, Room} room - Another room name or room object.
     * @return {object}
     */
    findExitTo: function (room) {},

    /**
     * Find an optimal path inside the room between fromPos and toPos using A* search algorithm.
     * @param {RoomPosition} fromPos - The start position.
     * @param {RoomPosition} toPos - The end position.
     * @param {object} [opts] - An object containing additonal pathfinding flags:


ignoreCreeps
boolean
Treat squares with creeps as walkable. Can be useful with too many moving creeps around or in some other cases. The default value is false.


ignoreDestructibleStructures
boolean
Treat squares with destructible structures (constructed walls, ramparts, spawns, extensions) as walkable. Use this flag when you need to move through a territory blocked by hostile structures. If a creep with an ATTACK body part steps on such a square, it automatically attacks the structure. The default value is false.


ignoreRoads
boolean
Ignore road structures. Enabling this option can speed up the search. The default value is false. This is only used when the new PathFinder is enabled.


costCallback
function(string, CostMatrix)
You can use this callback to modify a CostMatrix for any room during the search. The callback accepts two arguments, roomName and costMatrix. Use the costMatrix instance to make changes to the positions costs. If you return a new matrix from this callback, it will be used instead of the built-in cached one. This option is only used when the new PathFinder is enabled.


ignore
array
An array of the room's objects or RoomPosition objects which should be treated as walkable tiles during the search. This option cannot be used when the new PathFinder is enabled (use costCallback option instead).


avoid
array
An array of the room's objects or RoomPosition objects which should be treated as obstacles during the search. This option cannot be used when the new PathFinder is enabled (use costCallback option instead).


maxOps
number
The maximum limit of possible pathfinding operations. You can limit CPU time used for the search based on ratio 1 op ~ 0.001 CPU. The default value is 2000.


heuristicWeight
number
Weight to apply to the heuristic in the A* formula F = G + weight * H. Use this option only if you understand the underlying A* algorithm mechanics! The default value is 1.2.


serialize
boolean
If true, the result path will be serialized using Room.serializePath. The default is false.


maxRooms
number
The maximum allowed rooms to search. The default (and maximum) is 16. This is only used when the new PathFinder is enabled.
     * @param {boolean} ignoreCreeps - Treat squares with creeps as walkable. Can be useful with too many moving creeps around or in some other cases. The default value is false.
     * @param {boolean} ignoreDestructibleStructures - Treat squares with destructible structures (constructed walls, ramparts, spawns, extensions) as walkable. Use this flag when you need to move through a territory blocked by hostile structures. If a creep with an ATTACK body part steps on such a square, it automatically attacks the structure. The default value is false.
     * @param {boolean} ignoreRoads - Ignore road structures. Enabling this option can speed up the search. The default value is false. This is only used when the new PathFinder is enabled.
     * @param {function(string, CostMatrix)} costCallback - You can use this callback to modify a CostMatrix for any room during the search. The callback accepts two arguments, roomName and costMatrix. Use the costMatrix instance to make changes to the positions costs. If you return a new matrix from this callback, it will be used instead of the built-in cached one. This option is only used when the new PathFinder is enabled.
     * @param {array} ignore - An array of the room's objects or RoomPosition objects which should be treated as walkable tiles during the search. This option cannot be used when the new PathFinder is enabled (use costCallback option instead).
     * @param {array} avoid - An array of the room's objects or RoomPosition objects which should be treated as obstacles during the search. This option cannot be used when the new PathFinder is enabled (use costCallback option instead).
     * @param {number} maxOps - The maximum limit of possible pathfinding operations. You can limit CPU time used for the search based on ratio 1 op ~ 0.001 CPU. The default value is 2000.
     * @param {number} heuristicWeight - Weight to apply to the heuristic in the A* formula F = G + weight * H. Use this option only if you understand the underlying A* algorithm mechanics! The default value is 1.2.
     * @param {boolean} serialize - If true, the result path will be serialized using Room.serializePath. The default is false.
     * @param {number} maxRooms - The maximum allowed rooms to search. The default (and maximum) is 16. This is only used when the new PathFinder is enabled.
     * @return {object}
     */
    findPath: function (fromPos, toPos, opts, ignoreCreeps, ignoreDestructibleStructures, ignoreRoads, costCallback, ignore, avoid, maxOps, heuristicWeight, serialize, maxRooms) {},

    /**
     * Creates a RoomPosition object at the specified location.
     * @param {number} x - The X position.
     * @param {number} y - The Y position.
     * @return {object}
     */
    getPositionAt: function (x, y) {},

    /**
     * Get the list of objects at the specified room position.
     * @param {number} x - X position in the room.
     * @param {number} y - Y position in the room.
     * @param {object} target - Can be a RoomPosition object or any object containing RoomPosition.
     * @return {object}
     */
    lookAt: function (x, y, target) {},

    /**
     * Get the list of objects at the specified room area.
     * @param {number} top - The top Y boundary of the area.
     * @param {number} left - The left X boundary of the area.
     * @param {number} bottom - The bottom Y boundary of the area.
     * @param {number} right - The right X boundary of the area.
     * @param {boolean} [asArray] - Set to true if you want to get the result as a plain array.
     * @return {object}
     */
    lookAtArea: function (top, left, bottom, right, asArray) {},

    /**
     * Get an object with the given type at the specified room position.
     * @param {string} type - One of the LOOK_* constants.
     * @param {number} x - X position in the room.
     * @param {number} y - Y position in the room.
     * @param {object} target - Can be a RoomPosition object or any object containing RoomPosition.
     * @return {object}
     */
    lookForAt: function (type, x, y, target) {},

    /**
     * Get the list of objects with the given type at the specified room area.
     * @param {string} type - One of the LOOK_* constants.
     * @param {number} top - The top Y boundary of the area.
     * @param {number} left - The left X boundary of the area.
     * @param {number} bottom - The bottom Y boundary of the area.
     * @param {number} right - The right X boundary of the area.
     * @param {boolean} [asArray] - Set to true if you want to get the result as a plain array.
     * @return {object}
     */
    lookForAtArea: function (type, top, left, bottom, right, asArray) {},
}