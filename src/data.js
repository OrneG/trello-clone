import uuid from 'uuid/v4'


const columns = [
    {
        id: uuid(),
        title: 'Para hacer',
        cards: [
            {
                id: uuid(),
                title: 'Hacer componentes con map',
                text: 'lalala',
                tags: [{
                    id: uuid(),
                    name: 'Maquetado',
                    color: 'darkgreen'
                },
                {
                    id: uuid(),
                    name: 'Desarrollo',
                    color: 'darkorange'
                }]
            }
        ]
    },
    {
        id: uuid(),
        title: 'Listos',
        cards: [
            {
                id: uuid(),
                title: 'Practicar React',
                text: 'lalala',
                tags: []
            },
            {
                id: uuid(),
                title: 'Hacer componentes con map',
                text: 'lalala',
                tags: []
            },
            {
                id: uuid(),
                title: 'Prueba',
                text: 'asdasd',
                tags: []
            }
        ]
    }
]

export default columns;