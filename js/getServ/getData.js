export const getData = async () => {
    const response = await fetch('../../config.json')
        .then(data => data.json())
    return response;
}