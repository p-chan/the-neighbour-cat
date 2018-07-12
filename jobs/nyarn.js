'use strict'

module.exports = (bot) => {
  return () => {
    bot.say({
      text: 'にゃ〜ん',
      channel: 'random'
    })
  }
}
