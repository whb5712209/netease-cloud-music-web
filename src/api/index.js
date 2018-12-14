import fetch from './simple'
const { get } = fetch
export default {
  async getSearch (data) {
    return get('search', { keywords: data })
  },
  async login (data) {
    // const url = getPrefix() + 'login/cellphone'
    return get('login/cellphone', data)
  },
  async getUserSubcount () {
    return get('user/subcount')
  }
}
