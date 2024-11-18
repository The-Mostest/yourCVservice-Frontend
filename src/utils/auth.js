// Set Tokens - getItem, setItem

const tokenName = "AUTH_TOKEN"

export const setToken = (token) => {
    localStorage.setItem(tokenName, token)
}

export const getToken = () => {
    localStorage.getItem(tokenName)
}

export const removeToken = () => {
    localStorage.removeItem(tokenName)
}

export const getUser = () => {
    const token = getToken() 
    if (!token) return null

    const payload = JSON.parse(atob(token.split(".")[1]))
    return payload
}

