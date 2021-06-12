/**
 * DisplayObjects with the `trackedPointers` property use this class to track interactions
 *
 * @class
 * @private
 */
declare class InteractionTrackingData {
    /**
     * @param {number} pointerId - Unique pointer id of the event
     */
    constructor(pointerId: number);
    _pointerId: number;
    _flags: number;
    /**
     *
     * @private
     * @param {number} flag - The interaction flag to set
     * @param {boolean} yn - Should the flag be set or unset
     */
    private _doSet;
    /**
     * Unique pointer id of the event
     *
     * @readonly
     * @member {number}
     */
    get pointerId(): number;
    /**
     * Set the flags for the tracking data
     *
     * @param {number} flags - Flags to set
     */
    set flags(arg: number);
    /**
     * State of the tracking data, expressed as bit flags
     *
     * @member {number}
     */
    get flags(): number;
    /**
     * Is the tracked event inactive (not over or down)?
     *
     * @member {number}
     */
    get none(): boolean;
    /**
     * Set the over flag
     *
     * @param {boolean} yn - Is the event over?
     */
    set over(arg: boolean);
    /**
     * Is the tracked event over the DisplayObject?
     *
     * @member {boolean}
     */
    get over(): boolean;
    /**
     * Set the right down flag
     *
     * @param {boolean} yn - Is the right mouse button down?
     */
    set rightDown(arg: boolean);
    /**
     * Did the right mouse button come down in the DisplayObject?
     *
     * @member {boolean}
     */
    get rightDown(): boolean;
    /**
     * Set the left down flag
     *
     * @param {boolean} yn - Is the left mouse button down?
     */
    set leftDown(arg: boolean);
    /**
     * Did the left mouse button come down in the DisplayObject?
     *
     * @member {boolean}
     */
    get leftDown(): boolean;
}
declare namespace InteractionTrackingData {
    const FLAGS: Readonly<{
        NONE: number;
        OVER: number;
        LEFT_DOWN: number;
        RIGHT_DOWN: number;
    }>;
}
export default InteractionTrackingData;
