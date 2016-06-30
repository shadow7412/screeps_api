/*
 * @constructor
 * @augments RoomObject
*/
var Flag = function () {}
RoomObject.prototype = Object.create(Flag.prototype);
Flag.prototype = {
    /**
     * Flag primary color. One of the COLOR_* constants.
     * @type string
     */
    color: null,

    /**
     * A shorthand to Memory.flags[flag.name]. You can use it for quick access the flag's specific memory data object.
     * @type any
     */
    memory: null,

    /**
     * Flag’s name. You can choose the name while creating a new flag, and it cannot be changed later. This name is a hash key to access the spawn via the Game.flags object.
     * @type string
     */
    name: null,

    /**
     * Flag secondary color. One of the COLOR_* constants.
     * @type string
     */
    secondaryColor: null,

    /**
     * Remove the flag.
     */
    remove: null,

    /**
     * Set new color of the flag.
     * @param {string} color - Primary color of the flag. One of the COLOR_* constants.
     * @param {string} [secondaryColor] - Secondary color of the flag. One of the COLOR_* constants.
     * @return {object}
     */
    setColor: function (color, secondaryColor) {},

    /**
     * Set new position of the flag.
     * @param {number} x - The X position in the room.
     * @param {number} y - The Y position in the room.
     * @param {object} pos - Can be a RoomPosition object or any object containing RoomPosition.
     * @return {object}
     */
    setPosition: function (x, y, pos) {},
}