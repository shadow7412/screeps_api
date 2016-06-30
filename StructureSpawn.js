/*
 * @constructor
 * @augments OwnedStructure
*/
var StructureSpawn = function () {}
OwnedStructure.prototype = Object.create(StructureSpawn.prototype);
StructureSpawn.prototype = {
    /**
     * The amount of energy containing in the spawn.
     * @type number
     */
    energy: null,

    /**
     * The total amount of energy the spawn can contain
     * @type number
     */
    energyCapacity: null,

    /**
     * A shorthand to Memory.spawns[spawn.name]. You can use it for quick access the spawn’s specific memory data object. Learn more about memory
     * @type any
     */
    memory: null,

    /**
     * Spawn’s name. You choose the name upon creating a new spawn, and it cannot be changed later. This name is a hash key to access the spawn via the Game.spawns object.
     * @type string
     */
    name: null,

    /**
     * If the spawn is in process of spawning a new creep, this object will contain the new creep’s information, or null otherwise.
     * @type object, null
     */
    spawning: null,

    /**
     * Check if a creep can be created.
     * @param {array<string>} body - An array describing the new creep’s body. Should contain 1 to 50 elements with one of these constants:

WORK
MOVE
CARRY
ATTACK
RANGED_ATTACK
HEAL
TOUGH
CLAIM
     * @param {string} [name] - The name of a new creep. It should be unique creep name, i.e. the Game.creeps object should not contain another creep with the same name (hash key). If not defined, a random name will be generated.
     * @return {object}
     */
    canCreateCreep: function (body, name (optional)) {},

    /**
     * Start the creep spawning process.
     * @param {array<string>} body - An array describing the new creep’s body. Should contain 1 to 50 elements with one of these constants:

WORK
MOVE
CARRY
ATTACK
RANGED_ATTACK
HEAL
TOUGH
     * @param {string} [name] - The name of a new creep. It should be unique creep name, i.e. the Game.creeps object should not contain another creep with the same name (hash key). If not defined, a random name will be generated.
     * @param {any} [memory] - The memory of a new creep. If provided, it will be immediately stored into Memory.creeps[name].
     * @return {object}
     */
    createCreep: function (body, name (optional), memory (optional)) {},

    /**
     * Kill the creep and drop up to 100% of resources spent on its spawning and boosting depending on remaining life time. The target should be at adjacent square.
     * @param {Creep} target - The target creep object.
     * @return {object}
     */
    recycleCreep: function (target) {},

    /**
     * Increase the remaining time to live of the target creep. The target should be at adjacent square. The spawn should not be busy with the spawning process. Each execution increases the creep's timer by amount of ticks according to this formula: floor(600/body_size). Energy required for each execution is determined using this formula: ceil(creep_cost/2.5/body_size). Renewing a creep removes all of its boosts.
     * @param {Creep} target - The target creep object.
     * @return {object}
     */
    renewCreep: function (target) {},

    /**
     * Transfer the energy from the spawn to a creep.
     * @param {Creep} target - The creep object which energy should be transferred to.
     * @param {number} [amount] - The amount of energy to be transferred. If omitted, all the remaining amount of energy will be used.
     * @return {object}
     */
    transferEnergy: function (target, amount (optional)) {},
}