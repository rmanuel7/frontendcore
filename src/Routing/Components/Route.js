import { SOFTLIB_ROUTE_TYPE } from '../../Shared/SoftlibSymbols.js';

/**
 * Componente Route:
 * Marcador declarativo para describir una ruta
 * 
 * Componente Route que define una ruta específica y el componente
 * (tu 'Vista' o 'Controlador') a renderizar cuando esa ruta coincide.
 *
 * @description Este componente no renderiza nada por sí mismo en el DOM. 
 * Es un 'descriptor' de las props que el componente Routes.js leerá.
 * Por lo tanto, su método render siempre devuelve null.
 */
class Route extends React.Component {
    static get __typeof() {
        return SOFTLIB_ROUTE_TYPE;
    }

    render() {
        // No renderiza nada (estructura declarativa solamente)
        return null;
    }
}

export default Route;
