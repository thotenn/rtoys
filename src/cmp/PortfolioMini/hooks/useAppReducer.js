import React from "react";

const defaultConfig = {
    theme: {
        dark_mode: true
    },
    dyn:{
        main: {
            filterActive: 'projects'
        }
    },
    sections: {
        header: {
            profile: {
                img: "img/profiles/profile1.jpg",
                name: "José Garay",
                profession: "Developer"
            },
            social: [
                { iconClass: 'fab fa-facebook', href: '#' },
                { iconClass: 'fab fa-twitter', href: '#' },
                { iconClass: 'fab fa-github', href: '#' },
            ],
            info: [
                {num: '7', line1: 'Years of', line2: 'work'},
                {num: '+123', line1: 'Completed', line2: 'projects'},
                {num: '96', line1: 'Satisfied', line2: 'customers'}
            ],
            buttons: {
                big: [
                    {href: '#', title: 'Download CV', iconClass: 'fa-solid fa-download'}
                ],
                small: [
                    {href: 'https://api.whatsapp.com/send?phone=595971163986&text=Hola', iconClass: 'fa-brands fa-whatsapp'},
                    {href: '#', iconClass: 'fa-brands fa-facebook-messenger'},
                ]
            }
        },
        main: {
            targets: ['projects', 'skills'],
            projects: {
                title: 'Proyectos',
                articles: [
                    {
                        img: 'https://images.unsplash.com/photo-1560762484-813fc97650a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
                        subtitle: 'Web',
                        title: 'Payment Site',
                        link: '#'
                    },
                    {
                        img: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
                        subtitle: 'Web',
                        title: 'Portfolio website',
                        link: '#'
                    },
                    {
                        img: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
                        subtitle: 'Movil',
                        title: 'Fast food app',
                        link: '#'
                    },
                    {
                        img: 'https://images.unsplash.com/photo-1420161900862-9a86fa1f5c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
                        subtitle: 'Design',
                        title: 'Music app design',
                        link: '#'
                    },
                ]
            },
            skills: {
                title: 'Habilidades',
                data: [
                    {
                        areaTitle: 'Frontend developer',
                        groups: [
                            [
                                { title: 'HTML', level: 'Senior' },
                                { title: 'CSS', level: 'Intermediate' },
                                { title: 'JS', level: 'Senior' }
                            ],
                            [
                                { title: 'React JS', level: 'Senior' },
                                { title: 'Bootstrap', level: 'Intermediate' },
                                { title: 'Material UI', level: 'Senior' }
                            ]
                        ]
                    },
                    {
                        areaTitle: 'Backend developer',
                        groups: [
                            [
                                { title: 'PHP', level: 'Intermediate' },
                                { title: 'PostgreSQL', level: 'Intermediate' },
                                { title: 'Firebase', level: 'Basic' }
                            ],
                            [
                                { title: 'Node JS', level: 'Intermediate' },
                                { title: 'Django', level: 'Senior' },
                            ]
                        ]
                    }
                ]
            }
        },
        footer: {
            txt: '© THB. Todos los derechos reservados.'
        }
    }
}

export const actionList = {
    DARK_MODE: '0',
    FOOTER_TXT: '1',
    DYN_MAIN_FILTERACTIVE: '2'
}

function appReducer(state, action) {
    switch(action.type) {
        case actionList.DARK_MODE:
            return {
                ...state,
                theme: {
                    ...state.theme,
                    dark_mode: !state.theme.dark_mode
                }
            }
        case actionList.FOOTER_TXT:
            return {
                ...state,
                sections: {
                    ...state.sections,
                    footer: {
                        ...state.sections.footer,
                        txt: action.payload
                    }
                }
            }
        case actionList.DYN_MAIN_FILTERACTIVE:
            return {
                ...state,
                dyn: {
                    ...state.dyn,
                    main: {
                        ...state.dyn.main,
                        filterActive: action.payload
                    }
                }
            }
    }
}

const useAppReducer = () => {
    const [state, dispatch] = React.useReducer(appReducer, [], () => defaultConfig);

    return {
        state,
        dispatch,
        actionList
    }
}

export default useAppReducer;
