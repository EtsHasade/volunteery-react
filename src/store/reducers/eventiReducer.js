
const initialState = {
    eventis: [],
    suggestEventis: [],
    popularestEventis: [],
    newestEventis: [],
    tags: ['Animals', 'Children', 'Food', 'Needy', 'COVID-19', 'Fun', 'Baby'],
    neededs: ['Doctors', 'Managers', 'Chefs', 'Teachers', 'Workers'],
    accommodation: ['food', 'housing'],
    tagsIcon: {
        Animals: 'fas fa-paw',
        Children: 'fas fa-child',
        Food: 'fas fa-utensils',
        Needy: 'fas fa-hand-holding-heart',
        ["COVID-19"]: 'fas fa-biohazard',
        Fun: 'far fa-smile-beam',
        Baby: 'fas fa-baby'
    },
    neededsIcon: {
        Doctors: 'fas fa-user-md',
        Managers: 'fas fa-sitemap',
        Chefs: 'fas fa-bread-slice',
        Teachers: 'fas fa-graduation-cap',
        Workers: 'fas fa-tractor'
    },
    accommodationIcon: {
        food: 'fas fa-utensils',
        housing: 'fas fa-bed',
    },
}

export function eventiReducer(state = initialState, action) {
    console.log("🚀 ~ file: eventiReducer.js ~ line 8 ~ eventiReducer ~ action", action)

    let newState = state;

    switch (action.type) {
        case 'SET_EVENTIS':
            newState = { ...state, eventis: [...action.eventis], popularestEventis: [...action.popularestEventis], newestEventis: [...action.newestEventis], suggestEventis: [...action.suggestEventis] };
            break;
        case 'UPDATE_EVENTI':
            newState = { ...state, eventis: state.eventis.map(eventi => (eventi._id === action.eventi._id) ? action.eventi : eventi) }
            break;
        case 'ADD_EVENTI':
            newState = { ...state, eventis: [...state.eventis, action.eventi] }
            break;
        case 'REMOVE_EVENTI':
            newState = { ...state, eventis: state.eventis.filter(eventi => eventi._id !== action.eventiId) }
            break;
    }
    return newState;
}
