import { createReactElement as h } from '../../Shared/ReactFunctions.js';

/**
 * Componente `NotFound` que muestra un mensaje de página no encontrada (Error 404).
 */
class NotFound extends React.Component{
    render() {
        return h({
            type: 'div', props: { className: 'd-flex flex-column justify-content-center align-items-center vh-100 bg-light' },
            children: [
                h({
                    type: 'div', props: { className: 'text-center' },
                    children: [
                        h({ type: 'i', props: { className: 'bi bi-exclamation-triangle display-1 text-danger' }, children: [ ] }),
                        h({ type: 'h1', props: { className: 'mt-4' }, children: [ 'Página no encontrda'] }),
                        h({ type: 'p', props: { className: 'lead' }, children: ['No pudimos encontrar la página que buscabas.'] }),
                    ]
                })
            ]
        })
    }
}

export default NotFound;
