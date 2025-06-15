# Convenciones y Guía de Contribución

¡Gracias por tu interés en contribuir a este proyecto!

---

## Estructura y Nomenclatura

- **Carpetas**: Usa PascalCase para nombres de carpetas principales en `src/` (ej: `Routing`, `Auth`, `Components`, `Core`, `Shared`).
- **Archivos**: Usa PascalCase para archivos de clases/componentes principales (ej: `MyComponent.js`). Para utilidades compartidas, sigue la convención del repositorio, por ejemplo `ReactFunctions.js`.
- **Funciones y variables**: Usa camelCase (ej: `createReactElement`, `renderReactRoot`).
- **Clases y Componentes**: Usa PascalCase (ej: `AuthProvider`, `MyComponent`).

---

## Estilo de Código

- **React sin JSX**: Todo el código de React debe escribirse usando ES6 clases y sin JSX.
- **ReactFunctions.js**: Utiliza siempre las funciones de `ReactFunctions.js` (ubicado en `src/Shared/`) como wrapper para crear componentes y elementos. Es obligatorio emplear parámetros nombrados.

### Ejemplo

```js
// Correcto
import { createReactElement as h } from './Shared/ReactFunctions.js';

const MyComponent = class extends React.Component {
    render() {
        return h({
            type: 'div',
            props: {},
            children: [
                h({
                    type: 'h1',
                    props: { style: { color: 'blue' } },
                    children: ['Título']
                })
            ]
        });
    }
};
```

- **Prohibido usar JSX**: No se permite utilizar sintaxis JSX bajo ninguna circunstancia.

```js
// Incorrecto
const MyComponent = () => (
    <div>
        <h1>Título</h1>
    </div>
);
```

### Estructura de Componentes

- Los componentes deben ser clases derivadas de `React.Component`.
- Los archivos de componentes deben coincidir con el nombre del componente.
- Agrupa componentes relacionados en carpetas.

---

## Commits

Se debe seguir la convención **Conventional Commits** para los mensajes de commit. Esto ayuda a automatizar changelogs, releases y mantener un historial claro.

**Formato:**

```
<tipo>[alcance opcional]: <descripción breve>
```

**Tipos principales:**
- `feat`: Nueva característica o funcionalidad (incluye creación de archivos/componentes).
- `fix`: Corrección de bug.
- `docs`: Cambios en la documentación.
- `style`: Cambios de formato (espacios, punto y coma, etc.).
- `refactor`: Refactorización (ni fix ni feat).
- `test`: Añadir o corregir tests.
- `chore`: Cambios en herramientas, build, dependencias, etc.

**Ejemplos:**
- `feat(shared): add ReactFunctions helpers for React wrappers`
- `feat(routing): initial routing module structure`
- `fix(auth): resolve token refresh bug`
- `docs(reactFunctions): add usage examples`
- `test(auth): add tests for AuthProvider`
- `chore: update dependencies`

**Footer para cierre automático de issues:**
- `fix(routing): correct edge-case in path parsing\n\nCloses #45`

**Cuando creas algo nuevo (archivos, módulos, funciones, etc.):**
- Usa siempre `feat`.

---

## Ramas

- Usa nombres descriptivos en inglés, en minúsculas y separados por guiones (`-`).
- Para features: `feature/<nombre-breve>`
- Para bugs/fixes: `fix/<nombre-breve>`
- Para mejoras/refactor: `refactor/<nombre-breve>`
- Para documentación: `docs/<nombre-breve>`

**Ejemplos:**
- `feature/auth-provider`
- `fix/routing-bug`
- `refactor/service-structure`
- `docs/usage-examples`

---

## Flujo de ramas y merges

- La rama `main` debe mantenerse como rama estable y solo recibir cambios por Pull Request (PR).
- Trabaja sobre ramas tipo `feature/`, `fix/`, etc. y realiza Pull Requests hacia `main`.
- Si el desarrollo crece, puedes crear una rama `develop` o `dev` y hacer merges a `main` solo para releases.
- **Nunca hagas merge directo a main**: usa siempre Pull Request aunque seas el único colaborador.
- Prefiere la estrategia **Squash & Merge** para mantener el historial de `main` limpio. El mensaje del squash commit debe seguir Conventional Commits.
- El título y descripción del PR deben ser descriptivos y explicar el “qué” y el “por qué” del cambio.

---

## Otras Reglas Generales

- Sigue la estructura y convenciones de este archivo para cualquier nuevo archivo o carpeta.
- Documenta cualquier función o clase pública con JSDoc.
- Añade ejemplos de uso siempre que sea posible.
- La carpeta `src/Shared/` es el lugar adecuado para helpers y utilidades compartidas (como `ReactFunctions.js`).
- Si tienes dudas, consulta con los mantenedores antes de hacer un PR.

---
