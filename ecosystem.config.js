module.exports = {
  apps: [
    {
      name: 'app',
      script: './server',
      instances: 'max',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
