'use strict'

const Botkit = require('botkit')
const dotenv = require('dotenv')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const controller = Botkit.slackbot({
  debug: false
})

const bot = controller
  .spawn({
    token: process.env.SLACK_TOKEN
  })
  .startRTM()

controller.hears('ping', 'direct_mention', (bot, message) => {
  bot.reply(message, 'pong')
})
