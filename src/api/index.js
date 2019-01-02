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
  },
  async getPersonalized (data) {
    return get('personalized', data)
  },
  async getTopAlbum (data) {
    return get('top/album', data)
  },
  async getTopList (data) {
    return get('top/list', data)
  }
}
