const URL_BASE = 'https://647f229bc246f166da902447.mockapi.io/'
const AxiosInstance = axios.create({
  baseURL: URL_BASE,
  headers: {
    Accept: 'application/vnd.GitHub.v3+json',
  },
})

const productSmartPhone = {
  getProducts: () => {
    return AxiosInstance.get('smartphone')
  },
}
