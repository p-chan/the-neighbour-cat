'use strict'

module.exports = (bot, scheduler) => {
  scheduler.scheduleJob('0 0 8 * * *', require('./nyarn')(bot))
}
