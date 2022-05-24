export const getData = async () => {
    const response = await fetch('../../data/config.json')
        .then(data => data.json())
    return response;
}