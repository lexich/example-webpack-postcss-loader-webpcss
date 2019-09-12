const webpcss = require('webpcss').default;
module.exports = {
    plugins: [
        webpcss({
            webpClass: 'html.webp',
            noWebpClass: '',
            replace_from: /.(png|jpg|jpeg)$/i,
        })
    ]
}
