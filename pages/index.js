import Link from "next/link"
import Layout from "../components/layout"

export default function Home() {
  return (
    <>
    <Layout
    title={'Index'}
    description={'Guitar Store and Blog'}>
      <h1>Holi</h1>

      <Link href="/about">About us</Link>
      </Layout>
    </>
   
  )
}