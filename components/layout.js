import Head from "next/head"
import Header from "./header"
import Footer from "./footer"

export default function Layout({children, title = '', description = ''}) {
  return (
    <>
    <Head>
        <title>{`Guitar Studio - ${title}`} </title>
        <meta name="description" content={description}></meta>
    </Head>

    <Header/>
    <h1>layout</h1>
    {children}
    <Footer/>
    </>
  )
}
