export default async (res) => {
  if (res.status === 200) {
    return res.json()
  } else {
    return error(res)
  }
}

export const error = async (res) => {
  return Promise.reject(res)
}
