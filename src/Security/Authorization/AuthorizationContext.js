/**
 * Contexto para acceder a los datos de autorización.
 *
 * @type {React.Context<AuthorizationContextValue>}
 * @param {AuthorizationContextValue} value - Objeto que contiene el estado y funciones relacionadas con la autenticación.
 * @description
 * Permite a los componentes acceder y modificar el estado de autenticación de manera global.
 * @remark Todos los consumidores que sean descendientes del `AuthorizationContext.Provider`
 * volverán a renderizar cada vez que cambie el `value` del contexto.
 */
const AuthorizationContext = React.createContext(null);

export default AuthorizationContext;
