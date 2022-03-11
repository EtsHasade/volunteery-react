import httpService from './httpService.js'

export const userService = {
    login,
    logout,
    signup,
    getUsers,
    getById,
    remove,
    update
}

function getUsers() {
    return httpService.get('user')
}

function getById(userId) {
    return httpService.get(`user/${userId}`)
}

function remove(userId) {
    return httpService.delete(`user/${userId}`)
}

function update(user) {
    return httpService.put(`user/${user._id}`, user)
}

async function login(userCred) {
    const user = await httpService.post('auth/login', userCred)
        // const user = {
        //     "_id": "u101",
        //     "createdAt": 1212213443493,
        //     "fullName": userCred.fullName,
        //     "isAdmin": true,
        //     "imgUrl": "https://image.shutterstock.com/image-photo/portrait-smiling-red-haired-millennial-260nw-1194497251.jpg",
        //     "skills": [
        //         "doctor",
        //         "shef"
        //     ],
        //     "favorites": [
        //         "animal",
        //         "COVID-19"
        //     ],
        //     "org": {
        //         "_id": "as124",
        //         "name": "Tno lahayot",
        //         "imgUrl": "https://image.shutterstock.com/image-photo/portrait-smiling-red-haired-millennial-260nw-1194497251.jpg"
        //     },
        //     "events": [{
        //         "_id": "ev101",
        //         "title": "Save africans kids",
        //         "imgUrl": "https://image.shutterstock.com/image-photo/portrait-smiling-red-haired-millennial-260nw-1194497251.jpg"
        //     }]
        // }
    return _handleLogin(user)
}

async function signup(userCred) {
    const user = await httpService.post('auth/signup', userCred)
    return _handleLogin(user)
}
async function logout() {
    await httpService.post('auth/logout');
    sessionStorage.clear();
}



function _handleLogin(user) {
    sessionStorage.setItem('user', JSON.stringify(user))
    return user;
}