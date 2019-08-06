import uuid from 'uuid/v4';

const columns = [
    {
        id: uuid(),
        title: 'Para hacer',
        cards: [
            {
                id: uuid(),
                title: 'Terminar el proyecto',
                text: 'asdasd',
                tags: [
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
                        name: 'Diseño',
                        color: '#dfc534'
                    }
                ]
            },
            {
                id: uuid(),
                title: 'Practicar React',
                text: 'asdasdasdasd',
                tags: [
                    {
                        id: uuid(),
                        name: 'Desarrollo',
                        color: '#0079bf'
                    }
                ]
            }
        ]
    },
    {
        id: uuid(),
        title: 'Procesando',
        cards: [
            {
                id: uuid(),
                title: 'Entender React',
                text: 'asdasd',
                tags: [
                    {
                        id: uuid(),
                        name: 'Desarrollo',
                        color: '#0079bf'
                    }
                ]
            },
            {
                id: uuid(),
                title: 'Tomarlo con calma',
                text: 'asdasdasdasd',
                tags: [
                    {
                        id: uuid(),
                        name: 'Bugs',
                        color: 'red'
                    }
                ]
            }
        ]
    },
    {
        id: uuid(),
        title: 'Listos',
        cards: [
            {
                id: uuid(),
                title: 'Hacer ejercicios',
                text: 'asdasd',
                tags: [
                    {
                        id: uuid(),
                        name: 'Funcional',
                        color: 'orangered'
                    },
                    {
                        id: uuid(),
                        name: 'Maquetado',
                        color: 'darkgreen'
                    }
                ]
            },
            {
                id: uuid(),
                title: 'Hacer componentes con map',
                text: 'asdasdasdasd',
                tags: [
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
                    }
                ]
            }
        ]
    }
]

export default columns;