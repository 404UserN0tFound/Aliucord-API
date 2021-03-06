async function getItem(name) {
    return new Promise((resolve, reject) => {
        window.aliucord.storage.getItem(name).then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        });
    });
}
async function setItem(name, value) {
    return new Promise((resolve, reject) => {
        window.aliucord.storage.setItem(name, value).then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        });
    });
}
async function removeItem(name) {
    return new Promise((resolve, reject) => {
        window.aliucord.storage.removeItem(name).then(() => {
            resolve();
        }).catch((err) => {
            reject(err);
        });
    });
}
export { getItem, setItem, removeItem };
