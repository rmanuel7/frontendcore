import { SOFTLIB_ALLOWANONYMOUS_TYPE } from '../../Shared/SoftlibSymbols.js';

/**
 * Componente AllowAnonymous:
 * Marcador para desabilitar la authorización de una ruta.
 */
class AllowAnonymous extends React.Component {
    /**
    * Propiedad estática para identificar este componente como un tipo de authorización
    * dentro del sistema de enrutamiento (ej. para props.element en Route).
    * @returns {Symbol} Un símbolo único que representa el tipo de componente de authorización.
    */
    static get __typeof() {
        return SOFTLIB_ALLOWANONYMOUS_TYPE;
    }

    render() {
        // No renderiza nada (estructura declarativa solamente)
        return null;
    }
}

export default AllowAnonymous;
