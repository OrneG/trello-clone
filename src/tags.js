import uuid from 'uuid/v4';

const tags = [
    {
        id: uuid(),
        name: 'Funcional',
        color: 'orangered'
    },
    {
        id: uuid(),
        name: 'Maquetado',
        color: 'darkgreen'
    },
    {
        id: uuid(),
        name: 'Desarrollo',
        color: '#0079bf'
    },
    {
        id: uuid(),
        name: 'Diseño',
        color: '#dfc534'
    },
    {
        id: uuid(),
        name: 'Bugs',
        color: 'red'
    }
]

export default tags;