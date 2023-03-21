// This will be a Object
// We are not gonna use token for this (Suggestion: use Jason Web Tokens )
// JS localstorage -> You can take a jason Token, wirte js to stash and set that value in the local storage
// as a local token when they log in and then call that with get item user token and use that to access their data

const token = '23593825f49af6b1e981c099a66aa037c4f4b6a686117400'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://destiny-glittery-aristosuchus.glitch.me/api/books`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    // data: any = {} means that we take any data from the user and assing it to a new fetch key, that will be the body
    create: async( data: any = {}) => {
        const response = await fetch(`https://destiny-glittery-aristosuchus.glitch.me/api/books`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },

    update: async ( isbn: string, data: any = {} ) => {
        const response = await fetch(`https://destiny-glittery-aristosuchus.glitch.me/api/books/${isbn}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        if (!response.ok){
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },

    delete: async ( isbn:string ) => {
        const response = await fetch(`https://destiny-glittery-aristosuchus.glitch.me/api/books/${isbn}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
        if (!response.ok){
            throw new Error('Failed to delete data')
        }
        return;
    }

};
