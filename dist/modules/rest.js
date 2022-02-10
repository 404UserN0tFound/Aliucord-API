async function get(data) {
    return new Promise((resolve, reject) => {
        window.aliucord.rest.get(data).then((response) => {
            resolve(response);
        }).catch((err) => {
            reject(err);
        });
    });
}
async function post(data) {
    return new Promise((resolve, reject) => {
        window.aliucord.rest.post(data).then((response) => {
            resolve(response);
        }).catch((err) => {
            reject(err);
        });
    });
}
async function put(data) {
    return new Promise((resolve, reject) => {
        window.aliucord.rest.put(data).then((response) => {
            resolve(response);
        }).catch((err) => {
            reject(err);
        });
    });
}
async function patch(data) {
    return new Promise((resolve, reject) => {
        window.aliucord.rest.patch(data).then((response) => {
            resolve(response);
        }).catch((err) => {
            reject(err);
        });
    });
}
async function _delete(data) {
    return new Promise((resolve, reject) => {
        window.aliucord.rest.delete(data).then((response) => {
            resolve(response);
        }).catch((err) => {
            reject(err);
        });
    });
}
async function getAPIBaseURL() {
    return window.aliucord.rest.getAPIBaseURL();
}
export { get, post, put, patch, _delete as delete, getAPIBaseURL };
