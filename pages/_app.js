import MyPWAHead from "../components/MyPWAHead";


export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <MyPWAHead/>
      <Component {...pageProps} />
    </>
  )
}
