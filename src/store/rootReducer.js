import { combineReducers } from 'redux'
const initialState = []
const businessDetailsState = {
    businessName: 'Henry Chen',
    ABN: '123 456 7',
    address: ['114 Walderton Avenue', 'Balga WA, 6061', 'Australia']
}
const componentState = [
    { code: 'build', name: 'Build Fee', amount: 1, cost: 85, supplier: 0 },
    { code: 'cpu', name: 'AMD Ryzen 3 3200G', amount: 1, cost: 144, supplier: 144 },
    { code: 'mobo', name: 'MSI B450-A PRO', amount: 1, cost: 155, supplier: 155 },
    { code: 'ram', name: 'DDR4 8 GB 2666 MHz', amount: 2, cost: 60, supplier: 52 },
    { code: 'ssd', name: 'Crucial BX500 120 GB SSD', amount: 1, cost: 40, supplier: 35 },
    { code: 'hdd', name: 'WD Blue 1TB', amount: 1, cost: 58, supplier: 58 },
    { code: 'gpu', name: 'Asus TUF GTX-1660 Ti', amount: 1, cost: 479, supplier: 479 },
    { code: 'psu', name: 'Cooler Master MWE500 500W PSU', amount: 1, cost: 60, supplier: 55 },
    { code: 'case', name: 'Antec DP501', amount: 1, cost: 95, supplier: 87 },
]

const notesState = []

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