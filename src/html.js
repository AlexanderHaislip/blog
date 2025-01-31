import React from "react"
import PropTypes from "prop-types"
import Footer from "./components/Footer";

export default class HTML extends React.Component {
    render() {
        return (
            <html {...this.props.htmlAttributes}>
            <head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta name="robots" content="index, follow"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <base target="_blank"/>
                {this.props.headComponents}
                <script src={'/scripts/nojaf-head.min.js'}></script>
            </head>
            <body {...this.props.bodyAttributes}>
            {this.props.preBodyComponents}
            <div
                key={`body`}
                id="___gatsby"
                dangerouslySetInnerHTML={{__html: this.props.body}}
            />
            {this.props.postBodyComponents}
            <Footer/>
            </body>
            </html>
        )
    }
}

HTML.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array,
}
