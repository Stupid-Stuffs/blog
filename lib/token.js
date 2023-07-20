export function setTokenToLocalStorage(token) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('token', token)
  }
}

export function getTokenFromLocalStorage() {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token')
  }
}
