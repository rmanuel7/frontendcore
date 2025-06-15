/**
 * @typedef {object} AuthenticationOptionsConfig
 * @property {string} loginPath - La ruta para la página de inicio de sesión.
 * @property {string} accessDeniedPath - La ruta para la página de acceso denegado.
 * @property {string} logoutPath - La ruta para la página de cierre de sesión.
 * @property {string} validatePath - La ruta para la validación de token.
 * @property {string} refreshPath - La ruta para la actualización de token.
 */

/**
 * @type {AuthenticationOptionsConfig}
 * @description Configuración predeterminada para las opciones de autenticación.
 */
const defaultAuthenticationOptions = {
    loginPath: '/account/login',
    accessDeniedPath: '/account/unauthorize',
    logoutPath: '/account/logout',
    validatePath: '/account/validate',
    refreshPath: '/account/refresh',
};

/**
 * @class AuthenticationOptions
 * @description Representa las opciones de configuración para la autenticación.
 * Proporciona acceso de solo lectura a las rutas de autenticación.
 */
class AuthenticationOptions {
    /**
     * Ruta para la página de inicio de sesión.
     * @type {string}
     */
    #loginPath;

    /**
     * Ruta para la página de acceso denegado.
     * @type {string}
     */
    #accessDeniedPath;

    /**
     * Ruta para la página de cierre de sesión.
     * @type {string}
     */
    #logoutPath;

    /**
     * Ruta para la validación de token.
     * @type {string}
     */
    #validatePath;

    /**
     * Ruta para la actualización de token.
     * @type {string}
     */
    #refreshPath;

    /**
     * Crea una instancia de AuthenticationOptions.
     * @param {AuthenticationOptionsConfig} [options=defaultAuthenticationOptions] - Las opciones de autenticación.
     */
    constructor(options = defaultAuthenticationOptions) {
        this.#loginPath = options.loginPath;
        this.#accessDeniedPath = options.accessDeniedPath;
        this.#logoutPath = options.logoutPath;
        this.#validatePath = options.validatePath;
        this.#refreshPath = options.refreshPath;
    }

    /**
     * Obtiene la ruta para la página de inicio de sesión.
     * @returns {string} La ruta de inicio de sesión.
     */
    get loginPath() {
        return this.#loginPath;
    }

    /**
     * Obtiene la ruta para la página de acceso denegado.
     * @returns {string} La ruta de acceso denegado.
     */
    get accessDeniedPath() {
        return this.#accessDeniedPath;
    }

    /**
     * Obtiene la ruta para la página de cierre de sesión.
     * @returns {string} La ruta de cierre de sesión.
     */
    get logoutPath() {
        return this.#logoutPath;
    }

    /**
     * Obtiene la ruta para la validación de token.
     * @returns {string} La ruta de validación de token.
     */
    get validatePath() {
        return this.#validatePath;
    }

    /**
     * Obtiene la ruta para la actualización de token.
     * @returns {string} La ruta de actualización de token.
     */
    get refreshPath() {
        return this.#refreshPath;
    }
}

export default AuthenticationOptions;
