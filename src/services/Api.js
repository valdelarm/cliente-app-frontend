import {ACCESS_TOKEN, API_BASE_URL} from '../pages/common/Constantes'

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    
    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response => 
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
};

export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/auth/login",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function saveCliente(clienteRequest) {
    return request({
        url: API_BASE_URL + "/clientes",
        method: 'POST',
        body: JSON.stringify(clienteRequest)
    });
}


export function getClientes() {
    return request({
        url: API_BASE_URL + "/clientes",
        method: 'GET',
    });
}

export function deleteClientePorId(id) {
    return request({
        url: API_BASE_URL + "/clientes/" + id,
        method: 'DELETE',
    });
}