'use strict'

const Botkit = require('botkit')
const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')
const scheduler = require('node-schedule')

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

const controller = Botkit.slackbot({
  debug: false
})

const bot = controller // eslint-disable-line
  .spawn({
    token: process.env.SLACK_TOKEN
  })
  .startRTM()

const skillsPath = path.resolve(__dirname, 'skills')

fs.readdir(skillsPath, (err, list) => {
  if (err) {
    process.on('exit', () => {
      process.exit(1)
    })
  }

  for (const file of list) {
    const skillPath = path.resolve(skillsPath, file)
    require(skillPath)(controller)
  }
})

require('./jobs')(bot, scheduler)
