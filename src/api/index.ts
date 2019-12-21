import fetch from './simple'
const { get } = fetch
export interface IAjaxRespone {
  code: number
  data: any
}
export default {
  async getSearch (data: any): Promise<IAjaxRespone> {
    return get('search', { keywords: data })
  },
  async loginByPhone (data: any): Promise<IAjaxRespone> {
    return get('login/cellphone', data)
  },
  async login (data: any): Promise<IAjaxRespone> {
    return get('login', data)
  },
  async getUserSubcount (): Promise<IAjaxRespone> {
    return get('user/subcount')
  },
  async getPersonalized (data: any): Promise<IAjaxRespone> {
    return get('personalized', data)
  },
  async getTopAlbum (data: {}): Promise<IAjaxRespone> {
    return get('top/album', data)
  },
  async getTopList (data: any): Promise<IAjaxRespone> {
    return get('top/list', data)
  }
}
