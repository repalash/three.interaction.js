export default InteractionData;
/**
 * Holds all information related to an Interaction event
 *
 * @class
 */
export declare class InteractionData {
    /**
     * This point stores the global coords of where the touch/mouse event happened
     *
     * @member {Vector2}
     */
    global: Vector2;
    /**
     * The target DisplayObject that was interacted with
     *
     * @member {Object3D}
     */
    target: any;
    /**
     * When passed to an event handler, this will be the original DOM Event that was captured
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
     * @see https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent
     * @member {MouseEvent|TouchEvent|PointerEvent}
     */
    originalEvent: any;
    /**
     * Unique identifier for this interaction
     *
     * @member {number}
     */
    identifier: any;
    /**
     * Indicates whether or not the pointer device that created the event is the primary pointer.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/isPrimary
     * @type {Boolean}
     */
    isPrimary: boolean;
    /**
     * Indicates which button was pressed on the mouse or pointer device to trigger the event.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button
     * @type {number}
     */
    button: number;
    /**
     * Indicates which buttons are pressed on the mouse or pointer device when the event is triggered.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/buttons
     * @type {number}
     */
    buttons: number;
    /**
     * The width of the pointer's contact along the x-axis, measured in CSS pixels.
     * radiusX of TouchEvents will be represented by this value.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/width
     * @type {number}
     */
    width: number;
    /**
     * The height of the pointer's contact along the y-axis, measured in CSS pixels.
     * radiusY of TouchEvents will be represented by this value.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/height
     * @type {number}
     */
    height: number;
    /**
     * The angle, in degrees, between the pointer device and the screen.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/tiltX
     * @type {number}
     */
    tiltX: number;
    /**
     * The angle, in degrees, between the pointer device and the screen.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/tiltY
     * @type {number}
     */
    tiltY: number;
    /**
     * The type of pointer that triggered the event.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pointerType
     * @type {string}
     */
    pointerType: string;
    /**
     * Pressure applied by the pointing device during the event. A Touch's force property
     * will be represented by this value.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pressure
     * @type {number}
     */
    pressure: number;
    /**
     * From TouchEvents (not PointerEvents triggered by touches), the rotationAngle of the Touch.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Touch/rotationAngle
     * @type {number}
     */
    rotationAngle: number;
    /**
     * Twist of a stylus pointer.
     * @see https://w3c.github.io/pointerevents/#pointerevent-interface
     * @type {number}
     */
    twist: number;
    /**
     * Barrel pressure on a stylus pointer.
     * @see https://w3c.github.io/pointerevents/#pointerevent-interface
     * @type {number}
     */
    tangentialPressure: number;
    /**
     * The unique identifier of the pointer. It will be the same as `identifier`.
     * @readonly
     * @member {number}
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pointerId
     */
    get pointerId(): any;
    /**
     * Copies properties from normalized event data.
     *
     * @param {Touch|MouseEvent|PointerEvent} event The normalized event data
     * @private
     */
    private _copyEvent;
    /**
     * Resets the data for pooling.
     *
     * @private
     */
    private _reset;
}
import { Vector2 } from "three/src/math/Vector2";
