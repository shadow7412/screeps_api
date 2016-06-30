/*
 * @constructor
 * @augments Structure
*/
var OwnedStructure = function () {}
Structure.prototype = Object.create(OwnedStructure.prototype);
OwnedStructure.prototype = {
    /**
     * Whether this is your own structure.
     * @type boolean
     */
    my: null,

    /**
     * An object with the structure’s owner info containing the following properties:
     * @type object
     */
    owner: null,
}