/**
 * Event class that mimics native DOM events.
 *
 * @class
 */
declare class InteractionEvent {
    /**
     * Whether this event will continue propagating in the tree
     *
     * @member {boolean}
     */
    stopped: boolean;
    /**
     * The object which caused this event to be dispatched.
     *
     * @member {Object3D}
     */
    target: any;
    /**
     * The object whose event listener’s callback is currently being invoked.
     *
     * @member {Object3D}
     */
    currentTarget: any;
    /**
     * Type of the event
     *
     * @member {string}
     */
    type: any;
    /**
     * InteractionData related to this event
     *
     * @member {InteractionData}
     */
    data: any;
    /**
     * ray caster detial from 3d-mesh
     *
     * @member {Intersects}
     */
    intersects: any[];
    /**
     * Prevents event from reaching any objects other than the current object.
     *
     */
    stopPropagation(): void;
    /**
     * Resets the event.
     *
     * @private
     */
    private _reset;
}
export default InteractionEvent
