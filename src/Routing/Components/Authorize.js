import { SOFTLIB_AUTHORIZE_TYPE } from "../../Shared/SoftlibSymbols.js";

/**
 * Componente Authorize:
 * Marcador declarativo para rutas que requieren authorización.
 */
class Authorize extends React.Component {
    /**
    * Propiedad estática para identificar este componente como un tipo de authorización
    * dentro del sistema de enrutamiento (ej. para props.element en Route).
    * @returns {Symbol} Un símbolo único que representa el tipo de componente de authorización.
    */
    static get __typeof() {
        return SOFTLIB_AUTHORIZE_TYPE;
    }

    render() {
        // No renderiza nada (estructura declarativa solamente)
        return null;
    }
}

export default Authorize;
