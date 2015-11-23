/**
 * The document describes base classes and interfaces
 * for Control Center front-end.
 * 
 * date: 23.11.15.
 * standard compatibility: ES3.
 */

/**
 * A CustomDrawer class must implement IDrawer interface.
 *
 * @param { {
 *  container: (HTMLDivElement|jQuery)
 *  mode: string= Drawing mode; values - '2D', '3D'. Default: '3D'.
 * } } opts
 * @constructor
 * @implements { IDrawer }
 * 
 * function CustomDrawer(opts) {}
 * /

/**
 * A drawer.
 * @interface
 */
function IDrawer() {}

/**
 * Adds objects on the map.
 * @param { (string|Array<Object>) } Source url or array with coordinates.
 * @param { {
 *  format: string Coordinates format;
 *  values - 'czml', 'cartesianFixed', 'cartesianInertial', 'geo'.
 * } } opts
 */
IDrawer.prototype.addObjects = function(source, opts) {};

/**
 * Gets all visible objects.
 * @return { ?Array<Object> } Collection with visible objects.
 */
IDrawer.prototype.getVisibleObjects = function() {};

/**
 * Gets all objects given by addObjects method.
 * @return { ?Array<Object> } Collection with all objects.
 */
IDrawer.prototype.getAllObjects = function() {};

/**
 * Changes container size.
 * @param { number } newWidth
 * @param { number } newHeight
 */
IDrawer.prototype.resize = function(newWidth, newHeight) {};

/**
 * Sets resolution scale (optimization reasons).
 * @param { number } scale
 */
IDrawer.prototype.setResolutionScale = function(scale) {};

/**
 * Sets frame rate (optimization reasons).
 * @param { number } frameRate
 */
IDrawer.prototype.setFrameRate = function(frameRate) {};
