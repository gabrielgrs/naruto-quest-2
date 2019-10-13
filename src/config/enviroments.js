const getServerUrl = () => {
  const pathIncludes = path => window.location.href.includes(path)
  const port = process.env.PORT || 3003

  if (pathIncludes('localhost')) {
    console.log('Running local environment')
    return `http://localhost:${port}`
  }

  if (pathIncludes('dev')) {
    console.log('Running homolog environment')
    return 'https://narutoquest-dev.herokuapp.com'
  } else if (pathIncludes('narutoquest.com') || pathIncludes('narutoquest')) {
    console.log('Running prod environment')
    return 'https://narutoquest.herokuapp.com'
  }

  throw new Error('Unknown Environment')
}

export const serverUrl = getServerUrl()
