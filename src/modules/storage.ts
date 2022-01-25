/**
 * Get an item from storage
 */
async function getItem(name: string): Promise<string | null> {
  return window.aliucord.storage.getItem(name);
}

/**
 * Set an item in storage
 */
 async function setItem(name: string, value: string): Promise<void> {
  return window.aliucord.storage.setItem(name, value);
}

/**
 * Remove an item from storage
 */
async function removeItem(name: string): Promise<void> {
  return window.aliucord.storage.removeItem(name);
}

export {
  getItem,
  setItem,
  removeItem
}