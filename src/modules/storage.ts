import { getModule } from "./module";

const storageModule = getModule(m => m.getItem);

/**
 * Get an item from storage
 */
async function getItem(name: string): Promise<string | null> {
  return new Promise((resolve, reject) => {
    storageModule.getItem(name).then((data: string | null) => {
      resolve(data);
    }).catch((err: any) => {
      reject(err);
    });
  });
}

/**
 * Set an item in storage
 */
 async function setItem(name: string, value: string): Promise<void> {
  return new Promise((resolve, reject) => {
    storageModule.setItem(name, value).then(() => {
      resolve();
    }).catch((err: any) => {
      reject(err);
    });
  });
}

/**
 * Remove an item from storage
 */
async function removeItem(name: string): Promise<void> {
  return new Promise((resolve, reject) => {
    storageModule.removeItem(name).then(() => {
      resolve();
    }).catch((err: any) => {
      reject(err);
    });
  });
}

export {
  getItem,
  setItem,
  removeItem
}