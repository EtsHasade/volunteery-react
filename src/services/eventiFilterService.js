import { utilService } from './utils/util.service.js'

export const eventiFilterService = {
    newestEventis,
    popularestEventis,
    suggestEventis,
}

function newestEventis(eventis, amount = 4) {
    eventis = utilService.getDeepCopy(eventis);
    eventis.sort((a, b) => (a.createdAt - b.createdAt));
    return eventis.slice(0, amount);
}

function popularestEventis(eventis) {
    eventis = utilService.getDeepCopy(eventis);
    eventis.sort((a, b) => (b.rate - a.rate));
    return eventis.slice(0, 4);
}

function suggestEventis(eventis, userFavorites) {
    if (!userFavorites?.length) return eventis.slice(0, 4);
    var suggestEventis = [];
    var suggestEventisArrays = [];
    eventis = utilService.getDeepCopy(eventis);
    eventis.sort((a, b) => (b.rate - a.rate));
    [...userFavorites].forEach((fav) => {
        let favEventis = [];
        [...eventis].forEach((eventi) => {
            eventi.tags.forEach((eventTag) => {
                if (eventTag === fav) {
                    favEventis.push(eventi);
                }
            });
        });
        suggestEventisArrays.push(utilService.getDeepCopy(favEventis));
    });

    const arr = [0, 1, 2, 3];
    arr.forEach((num) => {
        var myIdx = num;
        if (myIdx === suggestEventisArrays.length) myIdx = 0;
        if (myIdx - 1 === suggestEventisArrays.length) myIdx = 1;
        suggestEventis.push(suggestEventisArrays[myIdx].shift());
    });
    return suggestEventis;
}
