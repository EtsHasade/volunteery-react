import httpService from './httpService.js'
import { utilService } from './utils/util.service.js'

const VOLUNTEER_COLECTION_KEY = 'eventi';
export const eventiService = {
    query,
    getById,
    remove,
    save,
    getEmptyEventi,
    getSortList,
    timeAgo,
    makeId
}

function getById(id) {
    return httpService.get(`${VOLUNTEER_COLECTION_KEY}/${id}`)
}

async function getSortList(sortBy) {
    const eventis = await query()
    return eventis.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : ((b[sortBy] > a[sortBy]) ? -1 : 0));
}

// function query(q = '', delay = 0) {
function query() {
    return httpService.get(VOLUNTEER_COLECTION_KEY)
}

function remove(eventiId) {
    // eventBusService.$emit(SHOW_MSG, { txt: `${eventiId} Removed Succefully`, type: 'success' });
    return httpService.delete(`${VOLUNTEER_COLECTION_KEY}/${eventiId}`)
}

function save(eventi) {
    const savedEventi = (eventi._id) ? _update(eventi) : _add(eventi)
    return savedEventi
}

function _add(eventi) {
    eventi.createdAt = Date.now()
        // eventBusService.$emit(SHOW_MSG, { txt: `${eventi.name} Added Succefully`, type: 'success' });
    return httpService.post(VOLUNTEER_COLECTION_KEY, eventi)
}

function _update(eventi) {
    eventi.updateAt = Date.now()
    return httpService.put(`${VOLUNTEER_COLECTION_KEY}/${eventi._id}`, eventi)
}

function getEmptyEventi() {
    return {
        title: '',
        desc: '',
        startAt: null,
        endAt: null,
        rate: 0,
        location: {
            lat: null,
            lng: null,
            country: '',
            address: '',
        },
        imgUrls: [],
        capacity: null,
        tags: [],
        neededs: [],
        members: [],
        reviews: [],
        byOrg: {
            _id: "5d6f6552j3kk8,2m2jh",
            name: "Save worlds",
            rate: 4,
            imgUrl: "https://images.unsplash.com/photo-1606335221768-18e3dac0e879?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        },
    }
}

function timeAgo(time) {
    return utilService.timeAgo(time)
}

function makeId(length = 5) {
    return utilService.makeId(length)
}