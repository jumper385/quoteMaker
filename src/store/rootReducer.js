import { combineReducers } from 'redux'
const initialState = []
const businessDetailsState = {
    businessName: 'fracture',
    ABN: '123 456 7',
    address: ['35 Stirling Hwy', 'Crawley 6009', 'WA, Australia'],
    email:'henrychen385@gmail.com'
}
const componentState = [
    { code: 'build', name: 'Build Fee', amount: 1, cost: 85, supplier: 0 },
    { code: 'cpu', name: 'Intel Core i5-9400F', amount: 1, cost: 255, supplier: 235 },
    { code: 'mobo', name: 'Asus Prime B365M-K', amount: 1, cost: 119, supplier: 119 },
    { code: 'ram', name: 'G.Skill Trident Z 16 GB 3200 MHz ', amount: 1, cost: 210, supplier: 179 },
    { code: 'ssd', name: 'Western Digital Blue NVMe 250 GB', amount: 1, cost: 80, supplier: 75 },
    { code: 'hdd', name: 'Western Digital Blue HDD 1 TB', amount: 1, cost: 53, supplier: 53 },
    { code: 'gpu', name: 'ASUS GeForce GTX-1660 TUF OC', amount: 1, cost: 410, supplier: 399 },
    { code: 'psu', name: 'Cooler Master MWE500 500W', amount: 1, cost: 80, supplier: 80 },
    { code: 'case', name: 'Antec DP301M', amount: 1, cost: 90, supplier: 69 },
]

const notesState = [
    {note:'Standard Mid-Budget Gaming Build'}
]

const businessDetailsReducer = (state = businessDetailsState, action) => {
    return state
}

const notesReducer = (state = notesState, action) => {
    return state
}

const componentReducer = (state=componentState, action) => {
    return state
}

const globalStateReducer = (state = initialState, action) => {
    return state
}

const rootReducer = combineReducers({
    components: componentReducer,
    globals: globalStateReducer,
    businessDetails:businessDetailsReducer,
    notes: notesReducer
})

export default rootReducer