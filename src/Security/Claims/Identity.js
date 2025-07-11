/**
 * Representa la identidad de un usuario o entidad dentro del sistema.
 * 
 * Proporciona información sobre el estado de autenticación y el nombre de la identidad.
 */
class Identity {
    /**
     * El tipo de autenticación utilizado (ej. 'Bearer', 'Cookie').
     * @type {string}
     */
    #authenticationType;

    /**
     * Indica si la identidad está autenticada.
     * @type {boolean}
     */
    #isAuthenticated;

    /**
     * El nombre asociado a la identidad (ej. nombre de usuario, ID).
     * @type {string}
     */
    #name;

    /**
     * Crea una instancia de Identity.
     * @param {string} authenticationType - El tipo de autenticación (ej. 'Bearer', 'Cookie').
     * @param {boolean} isAuthenticated - Indica si la identidad está autenticada.
     * @param {string} name - El nombre de la identidad (ej. nombre de usuario).
     */
    constructor(authenticationType, isAuthenticated, name) {
        this.#authenticationType = authenticationType;
        this.#isAuthenticated = isAuthenticated;
        this.#name = name;
    }

    /**
     * @returns {string} El tipo de autenticación utilizado para esta identidad.
     */
    get authenticationType() {
        return this.#authenticationType;
    }

    /**
     * @returns {boolean} True si la identidad está autenticada; de lo contrario, false.
     */
    get isAuthenticated() {
        return this.#isAuthenticated;
    }

    /**
     * @returns {string} El nombre de la identidad (usualmente el nombre de usuario o un identificador único).
     */
    get name() {
        return this.#name;
    }
}

export default Identity;
