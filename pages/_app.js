import "/styles/globals.css";
// its a global css file, so it will be applied to all pages

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
