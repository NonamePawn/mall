import axios from "axios"

export function request(config) {

  const instance = axios.create({
    baseURL: "http://www.demotp6.com/",
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })

  instance.interceptors.response.use( res => {
    return JSON.parse(res.data)
  }, err => {
    console.log(err);
  })

  return instance(config)
}