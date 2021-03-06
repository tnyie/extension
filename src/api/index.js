const API_DOMAIN = "https://tny.ie/api"

export const APIReq = async (path, method, body) => {

    const apiKey = localStorage.getItem("token")
    let request
    if (apiKey === null) {
        request = await fetch(API_DOMAIN + path, {
            method: method,
            mode: 'cors',
            headers: {
                'Content-Type': (body != {}) ? 'application/json':'text/plain',
            },
            body: (method === 'GET') ? null:(!body) ? null:JSON.stringify(body)
        })
    } else {
        request = await fetch(API_DOMAIN + path, {
            method: method,
            mode: 'cors',
            headers: {
                'Content-Type': (body != {}) ? 'application/json':'text/plain',
                'Authorization': apiKey
            },
            body: (method === 'GET') ? null:(!body) ? null:JSON.stringify(body)
        })
    }

    return request.json()
}

export * from './login'
export * from './links'