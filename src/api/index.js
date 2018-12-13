import fetch from './simple'
const { get } = fetch
export default {
  async getSearch (data) {
    return get('search', { keywords: data })
  }
  // async login (data) {
  //   // const url = getPrefix() + 'login/cellphone'
  //   return webAxios({ method: 'get', url: 'login/cellphone', data: { ...data } })
  // },
  // async getUserSubcount () {
  //   // const url = getPrefix() + 'user/subcount'
  //   return webAxios({ method: 'get', url: 'user/subcount' })
  // }
}
