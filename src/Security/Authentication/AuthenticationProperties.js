/**
 * Representa las propiedades o metadatos asociados a un ticket de autenticación.
 * 
 * Estas propiedades pueden incluir información como la fecha de emisión, la fecha de expiración,
 * si la sesión debe ser persistente (ej. "recuérdame"), o el tipo de autenticación utilizado.
 */
class AuthenticationProperties {
    /**
     * La fecha y hora en que se emitió el ticket de autenticación.
     * @type {Date | null}
     */
    #issuedUtc = null;

    /**
     * La fecha y hora en que expirará el ticket de autenticación.
     * @type {Date | null}
     */
    #expiresUtc = null;

    /**
     * Indica si la sesión de autenticación debe persistir a través de múltiples sesiones de navegador (ej. "recuérdame").
     * @type {boolean}
     */
    #isPersistent = false;

    /**
     * El esquema o tipo de autenticación asociado a este ticket (ej. 'Cookies', 'Bearer').
     * @type {string | null}
     */
    #authenticationScheme = null;

    /**
     * Crea una nueva instancia de AuthenticationProperties.
     * @param {object} [options] - Opciones para inicializar las propiedades.
     * @param {Date | null} [options.issuedUtc=null] - Fecha y hora de emisión del ticket.
     * @param {Date | null} [options.expiresUtc=null] - Fecha y hora de expiración del ticket.
     * @param {boolean} [options.isPersistent=false] - Indica si la sesión es persistente.
     * @param {string | null} [options.authenticationScheme=null] - El esquema de autenticación.
     */
    constructor({ issuedUtc = null, expiresUtc = null, isPersistent = false, authenticationScheme = null } = {}) {
        this.#issuedUtc = issuedUtc;
        this.#expiresUtc = expiresUtc;
        this.#isPersistent = isPersistent;
        this.#authenticationScheme = authenticationScheme;
    }

    /**
     * Obtiene la fecha y hora de emisión del ticket.
     * @returns {Date | null}
     */
    get issuedUtc() {
        return this.#issuedUtc;
    }

    /**
     * Obtiene la fecha y hora de expiración del ticket.
     * @returns {Date | null}
     */
    get expiresUtc() {
        return this.#expiresUtc;
    }

    /**
     * Indica si la sesión de autenticación es persistente.
     * @returns {boolean}
     */
    get isPersistent() {
        return this.#isPersistent;
    }

    /**
     * Obtiene el esquema de autenticación asociado a este ticket.
     * @returns {string | null}
     */
    get authenticationScheme() {
        return this.#authenticationScheme;
    }
}

export default AuthenticationProperties;
