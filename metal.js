import data from './metal.json'

const bands = data.map((item, index) => {
    return {
        name: item.band_name,
        origin: item.origin,
        fans: item.fans,
        formed: item.formed,
        "split": item.split,
        "style": item.style,
    }
})

export { bands }