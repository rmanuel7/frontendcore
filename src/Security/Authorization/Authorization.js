import { createReactElement as h } from '../../Shared/ReactFunctions.js';
import AuthorizationContext from './AuthorizationContext.js';
import Forbidden from './Components/Forbidden.js';
import Unauthorized from './Components/Unauthorized.js';

/**
 * Componente `Authorization` que actúa como proveedor del contexto de autorización.
 * 
 * Este componente permite configurar:
 * - El componente de fallback para acceso no autorizado (401)
 * - El componente de fallback para acceso denegado (403)
 * - Políticas de autorización personalizadas
 * 
 * Internamente, expone estos valores a través del `AuthorizationContext.Provider`.
 * 
 * Es equivalente al uso de `services.AddAuthorization(...)` en ASP.NET Core.
 *
 * @class
 * @extends React.Component
 * 
 * @example
 * // Ejemplo de uso básico con una política personalizada
 * const policies = {
 *   AtLeast21: (user) => user?.age >= 21,
 *   IsAdmin: (user) => user?.isInRole('admin'),
 * };
 * 
 * return h({
 *   type: Authorization,
 *   props: {
 *     policies,
 *     forbiddenFallback: Custom403Page,
 *     unauthorizedFallback: Custom401Page
 *   },
 *   children: App
 * });
 */
class Authorization extends React.Component {
    render() {
        const {
            // Componente para mostrar cuando el usuario no está autenticado (401)
            unauthorizedFallback = Unauthorized,
            // Componente para mostrar cuando el usuario no tiene permisos (403)
            forbiddenFallback = Forbidden,
            // Objeto de políticas: { [policyName]: (user) => boolean }
            policies = {},
            // Contenido hijo al que se le aplicará el contexto
            children
        } = this.props;

        // Valores que estarán disponibles mediante React.useContext(AuthorizationContext)
        const contextValues = {
            forbiddenFallback,
            unauthorizedFallback,
            policies
        };

        return h({
            type: AuthorizationContext.Provider,
            props: { value: contextValues },
            children: [children]
        });
    }
}

export default Authorization;
