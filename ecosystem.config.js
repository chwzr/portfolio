module.exports = {
  apps : [{
    name: 'melaniescheer',
    script: 'vapid',
    args: "start .",

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    autorestart: true,
    watch: false,
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};
