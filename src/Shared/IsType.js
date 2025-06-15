/**
 * @file IsType.js
 * @description
 * Funciones guard para validar los tipos de elementos del sistema de routing de softlib.
 * Utilizan los símbolos definidos en SoftlibSymbols.js para identificar los tipos especiales de rutas.
 */

import {
    SOFTLIB_ROUTE_TYPE,
    SOFTLIB_ROUTES_TYPE,
    SOFTLIB_CONTROLLER_TYPE,
    SOFTLIB_LAYOUT_TYPE,
    SOFTLIB_VIEW_TYPE,
    SOFTLIB_AUTHORIZE_TYPE,
    SOFTLIB_ALLOWANONYMOUS_TYPE,
} from './SoftlibSymbols.js';

/**
 * Devuelve el tipo softlib.routing del objeto si existe, si no, undefined.
 * @param {object} object
 * @returns {string|undefined}
 */
export function typeOf(object) {
    const __typeof = object && object.__typeof;
    switch (__typeof) {
        case SOFTLIB_ROUTE_TYPE:
        case SOFTLIB_ROUTES_TYPE:
        case SOFTLIB_CONTROLLER_TYPE:
        case SOFTLIB_LAYOUT_TYPE:
        case SOFTLIB_VIEW_TYPE:
        case SOFTLIB_AUTHORIZE_TYPE:
        case SOFTLIB_ALLOWANONYMOUS_TYPE:
            return __typeof;
    }
    return undefined;
}

/**
 * Validar si el objeto es de tipo Route.
 * @param {object} object
 * @returns {boolean}
 */
export function isRoute(object) {
    return typeOf(object) === SOFTLIB_ROUTE_TYPE;
}

/**
 * Validar si el objeto es de tipo Routes.
 * @param {object} object
 * @returns {boolean}
 */
export function isRoutes(object) {
    return typeOf(object) === SOFTLIB_ROUTES_TYPE;
}

/**
 * Validar si el objeto es de tipo Controller.
 * @param {object} object
 * @returns {boolean}
 */
export function isController(object) {
    return typeOf(object) === SOFTLIB_CONTROLLER_TYPE;
}

/**
 * Validar si el objeto es de tipo Layout.
 * @param {object} object
 * @returns {boolean}
 */
export function isLayout(object) {
    return typeOf(object) === SOFTLIB_LAYOUT_TYPE;
}

/**
 * Validar si el objeto es de tipo View.
 * @param {object} object
 * @returns {boolean}
 */
export function isView(object) {
    return typeOf(object) === SOFTLIB_VIEW_TYPE;
}

/**
 * Validar si el objeto es de tipo Authorize.
 * @param {object} object
 * @returns {boolean}
 */
export function isAuthorize(object) {
    return typeOf(object) === SOFTLIB_AUTHORIZE_TYPE;
}

/**
 * Validar si el objeto es de tipo AllowAnonymous.
 * @param {object} object
 * @returns {boolean}
 */
export function isAllowAnonymous(object) {
    return typeOf(object) === SOFTLIB_ALLOWANONYMOUS_TYPE;
}
