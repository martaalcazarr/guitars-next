import Head from "next/head"

export default function Layout({children, title = '', description = ''}) {
  return (
    <>
    <Head>
        <title>{`Guitar Studio - ${title}`} </title>
        <meta name="description" content={description}></meta>
    </Head>
    <h1>layout</h1>
    {children}
    </>
  )
}