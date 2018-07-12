'use strict'

module.exports = (controller) => {
  controller.hears('ping', 'direct_mention', (bot, message) => {
    bot.reply(message, 'pong')
  })
}
