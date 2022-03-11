import httpService from './httpService.js'
import { utilService } from './utils/util.service.js'

const ORGANIZATION_COLECTION_KEY = 'org';
export const orgService = {
    query,
    getById,
    remove,
    save,
    getEmptyOrg,
    getSortList,
    timeAgo,
    makeId
}

function getById(id) {
    return httpService.get(`${ORGANIZATION_COLECTION_KEY}/${id}`)
}

async function getSortList(sortBy) {
    const orgs = await query()
    return orgs.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : ((b[sortBy] > a[sortBy]) ? -1 : 0));
}

// function query(q = '', delay = 0) {
function query() {
    return httpService.get(ORGANIZATION_COLECTION_KEY)
}

function remove(orgId) {
    // eventBusService.$emit(SHOW_MSG, { txt: `${orgId} Removed Succefully`, type: 'success' });
    return httpService.delete(`${ORGANIZATION_COLECTION_KEY}/${orgId}`)
}

function save(org) {
    const savedOrg = (org._id) ? _update(org) : _add(org)
    return savedOrg
}

function _add(org) {
    org.createdAt = Date.now()
        // eventBusService.$emit(SHOW_MSG, { txt: `${org.name} Added Succefully`, type: 'success' });
    return httpService.post(ORGANIZATION_COLECTION_KEY, org)
}

function _update(org) {
    org.updateAt = Date.now()
    return httpService.put(`${ORGANIZATION_COLECTION_KEY}/${org._id}`, org)
}

function getEmptyOrg() {
    return {
        name: '',
        country: '',
        desc: '',
        rate: 0,
        imgUrls: [],
        admin: {},
        reviews: []
    }
}

function timeAgo(time) {
    return utilService.timeAgo(time)
}

function makeId(length = 5) {
    return utilService.makeId(length)
}