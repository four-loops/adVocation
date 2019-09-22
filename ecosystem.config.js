module.exports = {
    apps: [{
      name: 'adVocation',
      script: './server.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-18-220-153-5.us-east-2.compute.amazonaws.com',
        key: '~/.ssh/FEC.pem',
        ref: 'origin/master',
        repo: 'https://github.com/four-loops/adVocation.git',
        path: '/home/ubuntu/adVocation',
        'post-deploy': 'npm install --ignore-scripts && cp ~/adVocation/current/bootstrap-theme.min.css ~/adVocation/current/node_modules/bootstrap/dist/css && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }