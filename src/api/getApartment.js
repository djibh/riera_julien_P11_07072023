import data from '../data/apartements.json'

let getApartment = (id) => {
    const selectedApartments = data.find((apartment) => apartment.id === id);
    return selectedApartments;
}

export default getApartment