type Method = "GET" | "POST" | "PUT" | "DELETE"

const returnCorretRequest = (
    method: Method,
    data: unknown = {}
): RequestInit => {
    if (method === "GET") {
        return ({
            method: method,
            headers: {
                "Content-Type": "application/json"
            }
        })
    } else {
        return ({
            method: method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    }
}

export const sendApiRequest = async <T>(
    url: string,
    method: Method,
    data: unknown = {}
): Promise<T> => {
    const response = await fetch(url, returnCorretRequest(method, data))
    if (!response.ok) {
        throw new Error(`An Error has occured" §{response.status}`)
    }


    return response.json()
}

