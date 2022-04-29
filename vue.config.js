module.exports = {
    configureWebpack: {        
      devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*', // Allows Cross Origin
            'X-Content-Type-Options': 'nosniff', // Blocks SVG
            // 'Content-Security-Policy': "default-src 'self'", // Blocks inline used Javascript
            'X-Frame-Options': 'DENY', // blocks Iframes from being used
            'X-XSS-Protection': "1; mode=block", // blocks cyber attacks
            'cache-control': 'max-age=120' // stored cache to GET anytime you want
            // 'Strict-Transport-Security': "max-age=63072000; includeSubDomains"  
            // That last one creates an local https        
        }
      }
    },
  }