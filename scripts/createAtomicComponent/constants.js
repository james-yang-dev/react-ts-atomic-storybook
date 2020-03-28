/**
 * atomic short cut mapper for cli argv
 */
module.exports.ATOMIC_TYPE_MAPPER = {
  A: 'atoms',
  M: 'molecules',
  O: 'organisms',
  T: 'templates',
  P: 'pages'
}

/**
 * Escape sequences dealing only with colors and styles are also known as 
 * ANSI escape code and are standardized, so therefore they (should) work on any platform.
 * https://en.wikipedia.org/wiki/ANSI_escape_code#Colors
 */
module.exports.ANSI_FONT_BLACK = '\x1b[30m'
module.exports.ANSI_FONT_RED = '\x1b[31m'
module.exports.ANSI_FONT_GREEN = '\x1b[32m'
module.exports.ANSI_FONT_YELLOW = '\x1b[33m'
module.exports.ANSI_FONT_BLUE = '\x1b[34m'
module.exports.ANSI_FONT_MAGENTA = '\x1b[35m'
module.exports.ANSI_FONT_CYAN = '\x1b[36m'
module.exports.ANSI_FONT_WHITE = '\x1b[37m'
module.exports.ANSI_BG_BLACK = '\x1b[40m'
module.exports.ANSI_BG_RED = '\x1b[41m'
module.exports.ANSI_BG_GREEN = '\x1b[42m'
module.exports.ANSI_BG_YELLOW = '\x1b[43m'
module.exports.ANSI_BG_BLUE = '\x1b[44m'
module.exports.ANSI_BG_MAGENTA = '\x1b[45m'
module.exports.ANSI_BG_CYAN = '\x1b[46m'
module.exports.ANSI_BG_WHITE = '\x1b[47m'
