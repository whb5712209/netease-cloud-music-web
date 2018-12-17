import fetch from './simple'
const { get } = fetch
export default {
  async getSearch (data) {
    return get('search', { keywords: data })
  },
  async loginByPhone (data) {
    return get('login/cellphone', data)
  },
  async login (data) {
    return get('login', data)
  },
  async getUserSubcount () {
    return get('user/subcount')
  }
}
