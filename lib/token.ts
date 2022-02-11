function getToken(): string {
  return window.aliucord.token.getToken();
}

function setToken(token: string): string {
  return window.aliucord.token.setToken(token);
}

function hideToken(): void {
  window.aliucord.token.hideToken();
}

function showToken(): void {
  window.aliucord.token.showToken();
}

function removeToken(): void {
  window.aliucord.token.removeToken();
}

export {
  getToken,
  setToken,
  hideToken,
  showToken,
  removeToken
};