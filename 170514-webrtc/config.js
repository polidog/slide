function bg(params) {
  params = params || {}
  return Object.assign({}, {
    layout: 'bullets',
    backfaceSize: 'contain',
    backfaceFilter: 'blur(0px) opacity(.2)'
  }, params)
}


module.exports = {
  defaults: {
    attributes: {
      layout: 'bullets'
    }
  },
  pages: [
    {
      name: 'top',
      attributes: bg({
        layout: 'title',
        // invert: false,
        backface: './img/webrtc.svg',
        // backfaceFilter: 'blur(2px) brightness(1.5)'
      }),
      // note: 'ノート'
    },
    {
      name: 'cm',
      attributes: bg({
        backface: './img/symfony.png',
        // backfaceFilter: 'blur(2px) brightness(1.5)'
      }),
      // note: 'タイトルページのノート'
    },
    {
      name: 'js',
      attributes: bg({
        backface: 'img/js.jpg'
      })
    },
    {
      name: 'section',
      attributes: bg({
        layout: 'title',
        invert: true,
        // backface: './img/webrtc.svg',
        // backfaceFilter: 'blur(2px) brightness(1.5)'
      }),
    },
    {
      name: 'mediastreamdemo',
      attributes: {
        layout: 'code'
      }
    },
    {
      name: 'code',
      attributes: {
        layout: 'code'
      }
    },
    {
      name: 'html',
      type: 'html',
      attributes: 'layout'
    },
    {
      name: 'title',
      attributes: {
        layout: 'title'
      }
    }
  ],
  delimiter: /\n-----\n/, // optional {RegExp}
  dist: '.' // optional {String}
}
