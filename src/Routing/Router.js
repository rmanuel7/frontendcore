/**
 * @typedef {object} RouterProps - Las propiedades del componente.
 * @property {strng} [basePath] - Ruta de acceso base de la solicitud. La base de ruta de acceso no debe terminar con una barra diagonal final.
 * @property {React.ReactNode} children - Componente <Routes> Contenedor para la definición de rutas anidadas.
 */

/**
 * @typedef {Object} RouterState - Valor del estado del componente.
 * @property {RequestContextValue} req - Información de la solicitud HTTP actual.
 */


import { createReactElement as h} from '../Shared/ReactFunctions.js';
import RouterContext from './RouterContext.js';
import RequestContext from './RequestContext.js';
import RequestContextValue from './RequestContextValue.js';
import RouterContextValue from './RouterContextValue.js';
import normalizePath from './normalizePath.js';


/**
 * Componente Router que gestiona el enrutamiento de la aplicación.
 * 
 * @description Utiliza el historial del navegador para manejar las rutas y proporciona
 * un contexto para la navegación y los datos de la ruta actual.
 */
export default class Router extends React.Component {

    // =========================================================================
    //                            MOUNTING SECTION
    // =========================================================================

    /**
     * Método de clase, crea una istancia del componente {@link Router}.
     * 
     * - Es llamado cuando una instancia del componente esta ciendo creada e insertada en el DOM.
     * - En este método se inicializa el estado y se enlazan los metodos a la instancia del componente.
     * @constructor
     * @description Este método hace parte del ciclo de vida de React.
     * @param {RouterProps} props - Las propiedades que se pasan al componente.
     */
    constructor(props) {
        super(props);
        console.info('[Router] constructor.');

        /** @type {RouterProps} */
        this.props; // Para que el IDE reconozca las props

        // Aseguramos que el basePath siempre empiece con '/' y no termine con '/' (a menos que sea solo '/')
        this.basePath = normalizePath(this.props.basePath);
        if (this.basePath === '/') {
            this.basePath = ''; // Para que / + /path = /path
        }

        /** @type {RouterState} */
        this.state = {
            req: RequestContextValue.fromWindowLocation({
                pathBase: this.pathBase,
                path: this.#getRelativePath(fullPath),
            })
        };

        this.handlePopState = this.handlePopState.bind(this);
        this.navigate = this.navigate.bind(this);
        this.replace = this.replace.bind(this);
        this.updateLocation = this.updateLocation.bind(this);
    }

    /**
     * Método del siclo de vida de React.
     * 
     * Se ejecuta cada vez que el estado o las propiedades del componente cambian, o cuando se fuerza una actualización.
     * @method
     * @name render
     * @description Renderiza el componente.
     * @returns {React.ReactElement} - El elemento React que representa el componente en el DOM. 
     */
    render() {
        console.info('[Router] render');
        const { children } = this.props;

        // Instanciamos RouterContextValue aquí, pasándole las funciones bindeadas correctamente
        // que manipulan window.history y luego actualizan el estado del router.
        const locationInstance = new RouterContextValue({
            pushStateFn: this.navigate,
            replaceStateFn: this.replace
        });

        return h({
            type: RouterContext.Provider,
            // El valor de RouterContext.Provider es un objeto que contiene la instancia de RouterContextValue
            props: { value: { location: locationInstance } },
            children: [
                h({
                    type: RequestContext.Provider,
                    // El valor de RequestContext.Provider es directamente la instancia de RequestContextValue
                    props: { value: this.state.req }, // this.state.req ya es una instancia de RequestContextValue
                    children: children
                })
            ]
        });
    }

    /**
     * Método del ciclo de vida de React
     *
     * Ideal para realizar llamadas a la API para obtener datos iniciales, suscribirse a eventos del DOM o configurar suscripciones.
     * @method
     * @name componentDidMount
     * @description Se ejecuta inmediatamente después de que el componente es montado (insertado) en el DOM.
     * @returns {void}
     */
    componentDidMount() {
        console.info('[Router] componentDidMount');
        this.updateLocation();
        window.addEventListener('popstate', this.handlePopState);
    }


    // =========================================================================
    //                            UNMOUNTING SECTION
    // =========================================================================

    /**
     * Método del ciclo de vida de React.
     * 
     * Este método es crucial para realizar cualquier **limpieza** necesaria justo antes de que el componente sea retirado del DOM.
     * @method 
     * @name componentWillUnmount
     * @description Se ejecuta justo antes de que el componente se desmonte y se elimine del DOM.
     * @returns {void}
     */
    componentWillUnmount() {
        console.info('[Router] componentWillUnmount');
        window.removeEventListener('popstate', this.handlePopState);
    }



    // =========================================================================
    //                            ACTION SECTION
    // =========================================================================

    /**
     * Maneja el evento `popstate` del navegador.
     * 
     * Este evento se dispara cuando el usuario navega usando los botones de retroceso o avance del navegador.
     * @method
     * @name handlePopState
     * @description Actualiza la ubicación interna del componente para reflejar el historial.
     * @returns {void}
     */
    handlePopState() {
        console.log('Popstate event triggered. Current history state:', window.history.state);
        this.updateLocation();
    }

    /**
     * Actualiza el estado interno del componente según la URL actual del navegador.
     *
     * @method
     * @name updateLocation
     * @description Extrae la ruta (`pathname`), los parámetros de consulta (`query`) y el estado (`history.state`) para mantener sincronizado el estado.
     * @returns {void}
     */
    updateLocation() {
        const stateDataInfo = window.history.state;

        const currentRequestContext = RequestContextValue.fromWindowLocation({
            pathBase: this.pathBase,
            // El `relativePath` específicamente, puedes derivarlo del `.path`.
            path: this.#getRelativePath(fullPath),
            contentLength: stateDataInfo?.contentLength,
            contentType: stateDataInfo?.contentType,
            hasFormContentType: stateDataInfo?.hasFormContentType,
            form: stateDataInfo?.form,
        });

        this.setState({
            req: currentRequestContext
        });
    }

    /**
     * Navega programáticamente a una nueva ruta utilizando `pushState`.
     *
     * @method
     * @name navigate
     * @description Agrega una nueva entrada al historial del navegador y actualiza el estado interno.
     * @param {string} relativePath - Ruta a la que se desea navegar (relativa a tu aplicación).
     * @param {object} [state={}] - Objeto de estado asociado a la nueva ruta.
     * @returns {void}
     */
    navigate(relativePath, state = {}) {
        const fullPath = this.#getFullPath(relativePath);
        window.history.pushState(state, null, fullPath);
        console.log(`Navigating to: ${fullPath} with state:`, state);
        this.updateLocation();
    }

    /**
     * Reemplaza la entrada actual del historial con una nueva ruta utilizando `replaceState`.
     * 
     * @method
     * @name replace
     * @description No agrega una nueva entrada al historial. Útil para redirecciones.
     * @param {string} relativePath - Ruta que reemplazará a la actual (relativa a tu aplicación).
     * @param {object} [state={}] - Objeto de estado asociado a la nueva ruta.
     * @returns {void}
     */
    replace(relativePath, state = {}) {
        const fullPath = this.#getFullPath(relativePath);
        window.history.replaceState(state, null, fullPath);
        console.log(`Replacing current history entry with: ${fullPath} with state:`, state);
        this.updateLocation();
    }

    /**
     * Obtiene la ruta relativa al basePath.
     * @private
     * @param {string} fullPath - La ruta completa del navegador.
     * @returns {string} La ruta relativa.
     */
    #getRelativePath(fullPath) {
        if (this.basePath && fullPath.startsWith(this.basePath)) {
            // Eliminar el basePath y asegurar que siempre empiece con '/'
            let relative = fullPath.substring(this.basePath.length);
            return relative.startsWith('/') ? relative : `/${relative}`;
        }
        return fullPath; // Si no hay basePath o no coincide, devuelve la ruta tal cual
    }

    /**
     * Obtiene la ruta completa prefijada con el basePath.
     * @private
     * @param {string} relativePath - La ruta relativa a tu aplicación.
     * @returns {string} La ruta completa para el navegador.
     */
    #getFullPath(relativePath) {
        // Asegurarse de que relativePath no tenga doble barra si ya empieza con '/'
        const cleanRelativePath = relativePath.startsWith('/') ? relativePath.substring(1) : relativePath;
        return normalizePath(`${this.basePath}/${cleanRelativePath}`);
    }
}
