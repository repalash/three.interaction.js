export default Ticker;
/**
 * @extends EventDispatcher
 */
declare class Ticker extends EventDispatcher {
    timer: any;
    started: boolean;
    /**
     * pre-time cache
     *
     * @member {Number}
     * @private
     */
    private pt;
    /**
     * how long the time through, at this tick
     *
     * @member {Number}
     * @private
     */
    private snippet;
    /**
     * start tick loop
     */
    start(): void;
    /**
     * stop tick loop
     */
    stop(): void;
    /**
     * get timeline snippet
     *
     * @private
     */
    private timeline;
}
import { EventDispatcher } from "three/src/core/EventDispatcher";
