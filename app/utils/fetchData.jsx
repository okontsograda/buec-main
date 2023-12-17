// Fetch data from backend
const baseURL = process.env.BASE_URL

async function fetchQuery(path, params = null) {
    let url
    if (params !== null) {
        url = `${baseURL}/${path}/${params}`
    } else {
        url = `${baseURL}/${path}`
    }
    
    const response = await fetch(`${url}`)
    const data = await response.json()
    return data
}

export { baseURL, fetchQuery }