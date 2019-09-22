module.exports = {
    apps: [{
      name: 'adVocation',
      script: './server.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-3-15-162-152.us-east-2.compute.amazonaws.com',
        key: '~/.ssh/FEC.pem',
        ref: 'origin/master',
        repo: 'https://github.com/four-loops/adVocation.git',
        path: '/home/ubuntu/adVocation',
        'post-deploy': 'npm install && mv bootstrap-theme.min.css node_modules/bootstrap/dist/css && npm run compile && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }