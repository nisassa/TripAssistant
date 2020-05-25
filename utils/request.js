import { API_URL } from '../config'

let defaultHeaders = {
  'accept': 'application/json',
  'content-type': 'application/json'
}

export default function request (path, args = {}) {
  const url = `${API_URL}/${path}`

  const options = {
    headers: defaultHeaders,
    method: args.method || 'POST'
  }

  if (args.data && !args.isFormData) {
    options.body = JSON.stringify(args.data)
    options.headers['content-type'] = 'application/json'
  }

  if (args.isFormData) {
    delete options.headers['content-type']
    options.body = args.data
  }

  return fetch(url, options)
  .then( (res) => {
    if (res.status === 500) {
      const error = new Error(res.statusText)
      error.res = res
      throw error
    }
    return res;
  })
  .then( (res) => {
    return res
    .json()
    .then((body) => [body, res])
    .then(([ body ]) => body)
  })
  .catch((error) => {
    console.log("an error occured: ", error)
    return error;
  });
}
