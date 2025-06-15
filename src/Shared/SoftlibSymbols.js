/**
 * @file SoftlibSymbols.js
 * @description
 * Symbols para identificar los tipos especiales en el sistema de rutas de softlib.
 * Cada símbolo se utiliza como una marca única para los tipos de elementos de routing
 * (Route, Routes, Controller, Layout, View, Authorize, AllowAnonymous).
 * El uso de un namespace como 'softlib.routing' garantiza unicidad y claridad
 * en la identificación de componentes del sistema de rutas.
 *
 * Ejemplo de uso:
 *   if (element.__typeof === SOFTLIB_ROUTE_TYPE) {
 *     // Es un elemento Route definido por softlib.routing
 *   }
 */

/**
 * Symbol para marcar la clase o el componente Route.
 * @type {Symbol}
 */
export const SOFTLIB_ROUTE_TYPE = Symbol.for('softlib.routing.route');

/**
 * Symbol para marcar la clase o el componente Routes.
 * @type {Symbol}
 */
export const SOFTLIB_ROUTES_TYPE = Symbol.for('softlib.routing.routes');

/**
 * Symbol para marcar la clase o el componente Controller.
 * @type {Symbol}
 */
export const SOFTLIB_CONTROLLER_TYPE = Symbol.for('softlib.routing.controller');

/**
 * Symbol para marcar la clase o el componente Layout.
 * @type {Symbol}
 */
export const SOFTLIB_LAYOUT_TYPE = Symbol.for('softlib.routing.layout');

/**
 * Symbol para marcar la clase o el componente View.
 * @type {Symbol}
 */
export const SOFTLIB_VIEW_TYPE = Symbol.for('softlib.routing.view');

/**
 * Symbol para marcar la clase o el componente Authorize.
 * @type {Symbol}
 */
export const SOFTLIB_AUTHORIZE_TYPE = Symbol.for('softlib.routing.authorize');

/**
 * Symbol para marcar la clase o el componente AllowAnonymous.
 * @type {Symbol}
 */
export const SOFTLIB_ALLOWANONYMOUS_TYPE = Symbol.for('softlib.routing.allowanonymous');
