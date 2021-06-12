export default Interaction;
/**
 * The interaction manager deals with mouse, touch and pointer events. Any DisplayObject can be interactive
 * if its interactive parameter is set to true
 * This manager also supports multitouch.
 *
 * reference to [pixi.js](http://www.pixijs.com/) impl
 *
 * @example
 * import { Scene, PerspectiveCamera, WebGLRenderer, Mesh, BoxGeometry, MeshBasicMaterial } from 'three';
 * import { Interaction } from 'three.interaction';
 * const renderer = new WebGLRenderer({ canvas: canvasElement });
 * const scene = new Scene();
 * const camera = new PerspectiveCamera(60, width / height, 0.1, 100);
 *
 * const interaction = new Interaction(renderer, scene, camera);
 * // then you can bind every interaction event with any mesh which you had `add` into `scene` before
 * const cube = new Mesh(
 *   new BoxGeometry(1, 1, 1),
 *   new MeshBasicMaterial({ color: 0xffffff }),
 * );
 * scene.add(cube);
 * cube.on('touchstart', ev => {
 *   console.log(ev);
 * });
 *
 * cube.on('mousedown', ev => {
 *   console.log(ev);
 * });
 *
 * cube.on('pointerdown', ev => {
 *   console.log(ev);
 * });
 * // and so on ...
 *
 * // you can also listen on parent-node or any display-tree node,
 * // source event will bubble up along with display-tree.
 * // you can stop the bubble-up by invoke ev.stopPropagation function.
 * scene.on('touchstart', ev => {
 *   console.log(ev);
 * })
 *
 * @class
 * @extends InteractionManager
 */
declare class Interaction extends InteractionManager {
    /**
     * a ticker
     *
     * @private
     * @member {Ticker}
     */
    private ticker;
}
import InteractionManager from "./InteractionManager";
