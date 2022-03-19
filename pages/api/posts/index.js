const username = "2320sharon"

export function getPosts() {
  return fetch(`https://dev.to/api/articles?username=${username}`)
}

export function getProfile() {
  return fetch(`https://dev.to/api/users/by_username?url=${username}`)
}