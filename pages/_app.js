import React from 'react';
import App from 'next/app';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <html lang="en">
        <head>
          {/* ...existing code... */}
        </head>
        <body suppressHydrationWarning={true}>
          <Component {...pageProps} />
        </body>
      </html>
    );
  }
}

export default MyApp;
