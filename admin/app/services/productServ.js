const BASE_URL = 'https://647f229bc246f166da902447.mockapi.io/smartphone'
var productServ = {
  getList: () => {
    return axios({
      url: BASE_URL,
      method: 'GET',
    })
  },
  delete: (id) => {
    return axios({
      url: `${BASE_URL}/${id}`,
      method: 'DELETE',
    })
  },
  create: (product) => {
    return axios({
      url: BASE_URL,
      method: 'POST',
      data: product,
    })
  },
  getById: function (id) {
    return axios({
      url: `${BASE_URL}/${id}`,
      method: 'GET',
    })
  },
  update: function (id, product) {
    return axios({
      url: `${BASE_URL}/${id}`,
      method: 'PUT',
      data: product,
    })
  },
}
