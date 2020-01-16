import axios from 'axios'

export function request(config) {
    return new Promise((resolve,reject) => {
        const instance1 = axios.create({
            baseURL: 'http://123.207.23.23:8000',
            timeout: 5000
        })

        instance1(config)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}