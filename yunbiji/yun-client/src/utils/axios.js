import axios from 'axios'
import { Notification } from 'element-ui'
import router from '../router'

const baseURL = '/api/admin'

const instance = axios.create({
  baseURL,
  timeout:10000
})

const xhr = {
  get (url, data, config) {
    return new Promise((resolve,reject) => {
      instance.get(url, {params: data}, config).then(res=>{
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  post (url, data, config, method = 'post') {
    return new Promise((resolve,reject) => {
      instance[method](url, data, config).then(res=>{
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  put (url, data, config) {
    return this.post(url,data,config,'put')
  },
  delete (url, data, config) {
    return this.post(url, data, config, 'delete')
  }
}

Vue.prototype.$axios = xhr;


