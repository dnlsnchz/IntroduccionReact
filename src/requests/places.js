import config from '../config/secrets'
function getPlaces() {
    return fetch(config.url + "/places").then(data => {
        return data.json();
    }).catch(console.log);
}
function getPlace(slug) {
    return fetch(config.url + "/places/" + slug).then(data => {
        return data.json();
    }).catch(console.log);
}

function createPlace(data, jwt) {
    let formData = new FormData();
    for (let field in data) {
        formData.append(field,data[field]);
    }
    return fetch(config.url + "/places", {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'applications/json',
            'Authorization' : 'Bearer ' + jwt
        }
    }).then(data => {
        return data.json();
    })
}

export { getPlaces, getPlace, createPlace };

export default {
    places: [
        {
            imageUrl: '/images/place-3.jpg',
            title: 'Desayunos el rey',
            description: 'Starbucks Corporation is an American coffee company and coffeehouse chain.',
            address: 'Santa Anita'
        },
        {
            imageUrl: '/images/place-1.jpeg',
            title: 'Starbucks Norte',
            description: 'Starbucks Corporation is an American coffee company and coffeehouse chain.',
            address: 'Jose Olaya'
        },
        {
            imageUrl: '/images/place-2.jpg',
            title: 'Pizza de amor',
            description: 'Starbucks Corporation is an American coffee company and coffeehouse chain.',
            address: 'Centro de Lima'
        }
    ]
}
