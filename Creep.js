/*
 * @constructor
 * @augments RoomObject
*/
var Creep = function () {}
RoomObject.prototype = Object.create(Creep.prototype);
Creep.prototype = {
    /**
     * An array describing the creep’s body. Each element contains the following properties:
     * @type array<object>
     */
    body: null,

    /**
     * An object with the creep's cargo contents. Each object key is one of the RESOURCE_* constants, values are resources amounts. Use lodash.sum to get the total amount of contents:
     * @type object
     */
    carry: null,

    /**
     * The total amount of resources the creep can carry.
     * @type number
     */
    carryCapacity: null,

    /**
     * The movement fatigue indicator. If it is greater than zero, the creep cannot move.
     * @type number
     */
    fatigue: null,

    /**
     * The current amount of hit points of the creep.
     * @type number
     */
    hits: null,

    /**
     * The maximum amount of hit points of the creep.
     * @type number
     */
    hitsMax: null,

    /**
     * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
     * @type string
     */
    id: null,

    /**
     * A shorthand to Memory.creeps[creep.name]. You can use it for quick access the creep’s specific memory data object. Learn more about memory
     * @type any
     */
    memory: null,

    /**
     * Whether it is your creep or foe.
     * @type boolean
     */
    my: null,

    /**
     * Creep’s name. You can choose the name while creating a new creep, and it cannot be changed later. This name is a hash key to access the creep via the Game.creeps object.
     * @type string
     */
    name: null,

    /**
     * An object with the creep’s owner info containing the following properties:
     * @type object
     */
    owner: null,

    /**
     * Whether this creep is still being spawned.
     * @type boolean
     */
    spawning: null,

    /**
     * The remaining amount of game ticks after which the creep will die.
     * @type number
     */
    ticksToLive: null,

    /**
     * Attack another creep or structure in a short-ranged attack. Requires the ATTACK body part. If the target is inside a rampart, then the rampart is attacked instead. The target has to be at adjacent square to the creep. If the target is a creep with ATTACK body parts and is not inside a rampart, it will automatically hit back at the attacker.
     * @param {Creep, Spawn, Structure} target - The target object to be attacked.
     * @return {object}
     */
    attack: function (target) {},

    /**
     * Decreases the controller's downgrade or reservation timer for 1 tick per every 5 CLAIM body parts (so the creep must have at least 5xCLAIM). The controller under attack cannot be upgraded for the next 1,000 ticks. The target has to be at adjacent square to the creep.
     * @param {Structure} target - The target controller object.
     * @return {object}
     */
    attackController: function (target) {},

    /**
     * Build a structure at the target construction site using carried energy. Requires WORK and CARRY body parts. The target has to be within 3 squares range of the creep.
     * @param {ConstructionSite} target - The target construction site to be built.
     * @return {object}
     */
    build: function (target) {},

    /**
     * Cancel the order given during the current game tick.
     * @param {string} methodName - The name of a creep's method to be cancelled.
     * @return {object}
     */
    cancelOrder: function (methodName) {},

    /**
     * Claims a neutral controller under your control. Requires the CLAIM body part. The target has to be at adjacent square to the creep.
     * @param {Structure} target - The target controller object.
     * @return {object}
     */
    claimController: function (target) {},

    /**
     * Dismantles any (even hostile) structure returning 50% of the energy spent on its repair. Requires the WORK body part. If the creep has an empty CARRY body part, the energy is put into it; otherwise it is dropped on the ground. The target has to be at adjacent square to the creep.
     * @param {Spawn, Structure} target - The target structure.
     * @return {object}
     */
    dismantle: function (target) {},

    /**
     * Drop this resource on the ground.
     * @param {string} resourceType - One of the RESOURCE_* constants.
     * @param {number} [amount] - The amount of resource units to be dropped. If omitted, all the available carried amount is used.
     * @return {object}
     */
    drop: function (resourceType, amount) {},

    /**
     * Get the quantity of live body parts of the given type. Fully damaged parts do not count.
     * @param {string} type - A body part type, one of the following body part constants:

MOVE
WORK
CARRY
ATTACK
RANGED_ATTACK
HEAL
TOUGH
     * @return {object}
     */
    getActiveBodyparts: function (type) {},

    /**
     * Harvest energy from the source or minerals from the mineral deposit. Requires the WORK body part. If the creep has an empty CARRY body part, the harvested resource is put into it; otherwise it is dropped on the ground. The target has to be at an adjacent square to the creep.
     * @param {Source, Mineral} target - The object to be harvested.
     * @return {object}
     */
    harvest: function (target) {},

    /**
     * Heal self or another creep. It will restore the target creep’s damaged body parts function and increase the hits counter. Requires the HEAL body part. The target has to be at adjacent square to the creep.
     * @param {Creep} target - The target creep object.
     * @return {object}
     */
    heal: function (target) {},

    /**
     * Move the creep one square in the specified direction. Requires the MOVE body part.
     * @param {number} direction - One of the following constants:

TOP
TOP_RIGHT
RIGHT
BOTTOM_RIGHT
BOTTOM
BOTTOM_LEFT
LEFT
TOP_LEFT
     * @return {object}
     */
    move: function (direction) {},

    /**
     * Move the creep using the specified predefined path. Requires the MOVE body part.
     * @param {array|string} path - A path value as returned from Room.findPath, RoomPosition.findPathTo, or PathFinder.search methods. Both array form and serialized string form are accepted.
     * @return {object}
     */
    moveByPath: function (path) {},

    /**
     * Find the optimal path to the target within the same room and move to it. A shorthand to consequent calls of pos.findPathTo() and move() methods. If the target is in another room, then the corresponding exit will be used as a target. Requires the MOVE body part.
     * @param {number} x - X position of the target in the same room.
     * @param {number} y - Y position of the target in the same room.
     * @param {object} target - Can be a RoomPosition object or any object containing RoomPosition. The position doesn't have to be in the same room with the creep.
     * @param {object} [opts] - An object containing additional options:


reusePath
number
This option enables reusing the path found along multiple game ticks. It allows to save CPU time, but can result in a slightly slower creep reaction behavior. The path is stored into the creep's memory to the _move property. The reusePath value defines the amount of ticks which the path should be reused for. The default value is 5. Increase the amount to save more CPU, decrease to make the movement more consistent. Set to 0 if you want to disable path reusing.


serializeMemory
boolean
If reusePath is enabled and this option is set to true, the path will be stored in memory in the short serialized form using Room.serializePath. The default value is true.


noPathFinding
boolean
If this option is set to true, moveTo method will return ERR_NOT_FOUND if there is no memorized path to reuse. This can significantly save CPU time in some cases. The default value is false.

Any options supported by Room.findPath method.
     * @param {number} reusePath - This option enables reusing the path found along multiple game ticks. It allows to save CPU time, but can result in a slightly slower creep reaction behavior. The path is stored into the creep's memory to the _move property. The reusePath value defines the amount of ticks which the path should be reused for. The default value is 5. Increase the amount to save more CPU, decrease to make the movement more consistent. Set to 0 if you want to disable path reusing.
     * @param {boolean} serializeMemory - If reusePath is enabled and this option is set to true, the path will be stored in memory in the short serialized form using Room.serializePath. The default value is true.
     * @param {boolean} noPathFinding - If this option is set to true, moveTo method will return ERR_NOT_FOUND if there is no memorized path to reuse. This can significantly save CPU time in some cases. The default value is false.
     * @return {object}
     */
    moveTo: function (x, y, target, opts, reusePath, serializeMemory, noPathFinding) {},

    /**
     * Toggle auto notification when the creep is under attack. The notification will be sent to your account email. Turned on by default.
     * @param {boolean} enabled - Whether to enable notification or disable.
     * @return {object}
     */
    notifyWhenAttacked: function (enabled) {},

    /**
     * Pick up an item (a dropped piece of energy). Requires the CARRY body part. The target has to be at adjacent square to the creep or at the same square.
     * @param {Resource} target - The target object to be picked up.
     * @return {object}
     */
    pickup: function (target) {},

    /**
     * A ranged attack against another creep or structure. Requires the RANGED_ATTACK body part. If the target is inside a rampart, the rampart is attacked instead. The target has to be within 3 squares range of the creep.
     * @param {Creep, Spawn, Structure} target - The target object to be attacked.
     * @return {object}
     */
    rangedAttack: function (target) {},

    /**
     * Heal another creep at a distance. It will restore the target creep’s damaged body parts function and increase the hits counter. Requires the HEAL body part. The target has to be within 3 squares range of the creep.
     * @param {Creep} target - The target creep object.
     * @return {object}
     */
    rangedHeal: function (target) {},

    /**
     * A ranged attack against all hostile creeps or structures within 3 squares range. Requires the RANGED_ATTACK body part. The attack power depends on the range to each target. Friendly units are not affected.
     */
    rangedMassAttack: function (target) {},

    /**
     * Repair a damaged structure using carried energy. Requires the WORK and CARRY body parts. The target has to be within 3 squares range of the creep.
     * @param {Spawn, Structure} target - The target structure to be repaired.
     * @return {object}
     */
    repair: function (target) {},

    /**
     * Temporarily block a neutral controller from claiming by other players. Each tick, this command increases the counter of the period during which the controller is unavailable by 1 tick per each CLAIM body part. The maximum reservation period to maintain is 5,000 ticks. The target has to be at adjacent square to the creep.
     * @param {Structure} target - The target controller object to be reserved.
     * @return {object}
     */
    reserveController: function (target) {},

    /**
     * Display a visual speech balloon above the creep with the specified message. The message will disappear after a few seconds. Useful for debugging purposes. Only the creep's owner can see the speech message.
     * @param {string} message - The message to be displayed. Maximum length is 10 characters.
     * @return {object}
     */
    say: function (message) {},

    /**
     * Kill the creep immediately.
     */
    suicide: function (message) {},

    /**
     * Transfer resource from the creep to another object. The target has to be at adjacent square to the creep.
     * @param {Creep, Spawn, Structure} target - The target object.
     * @param {string} resourceType - One of the RESOURCE_* constants.
     * @param {number} [amount] - The amount of resources to be transferred. If omitted, all the available carried amount is used.
     * @return {object}
     */
    transfer: function (target, resourceType, amount) {},

    /**
     * Upgrade your controller to the next level using carried energy. Upgrading controllers raises your Global Control Level in parallel. Requires WORK and CARRY body parts. The target has to be within 3 squares range of the creep. A fully upgraded level 8 controller can't be upgraded with the power over 15 energy units per tick regardless of creeps power. The cumulative effect of all the creeps performing upgradeController in the current tick is taken into account. The effect can be boosted by ghodium mineral compounds (including limit increase).
     * @param {Structure} target - The target controller object to be upgraded.
     * @return {object}
     */
    upgradeController: function (target) {},
}