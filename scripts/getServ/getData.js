export const getData = async () => {
    const response = await fetch('../../config.json');
    return response.data
}