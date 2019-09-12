const React = require('react');

module.exports = function Body({children}) {
    return (
        <html>
        <head>
            <meta charSet="utf-8"/>
            <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>
            <title>App</title>
            <style>{`
                .body {
                width: 100%;
                height: 100vh;
            }`}
            </style>
        </head>
        <body>
        {children}
        </body>
        </html>
    )
}
