const component = 'base'

module.exports = [
  {
    component,
    method: 'post',
    path: `/${component}/sendMessage`,
    action: 'sendMessage'
  },
  {
    component,
    method: 'get',
    path: `/${component}/getNews`,
    action: 'getNews'
  },
  {
    component,
    method: 'get',
    path: `/${component}/getServerStatus`,
    action: 'getServerStatus'
  },
  {
    component,
    method: 'get',
    path: `/${component}/testServer`,
    action: 'testServer'
  }
]
