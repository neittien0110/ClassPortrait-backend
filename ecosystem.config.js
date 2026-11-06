module.exports = {
  apps: [{
    name: "So anh - ClassPortrait-backend",
    script: "npm run start:prod",
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: "1G",
  }]
}
