const getColors = require('get-image-colors')

getColors('./public/logo.jpg').then(colors => {
  console.log(colors.map(color => color.hex()))
}).catch(err => console.error(err))
