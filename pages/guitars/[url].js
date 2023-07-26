
export default function Product({guitar}) {

  return (
    <div>
      [url]
    </div>
  )
}

export async function getStaticPaths(){
  const response = await fetch(`${process.env.API_URL}/guitars`)
  const {data} = await response.json()

  const paths = data.map(guitar => ({
    params: {
      url: guitar.attributes.url
    }
  }))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params: {url}}){
  const response = await fetch(`${process.env.API_URL}/guitars?filters[url]={url}&populate=imagen`)
  const {data: guitar} = await response.json()
  console.log(data)
  return {
    props: {
      guitar
    }
  }
}

// export async function getServerSideProps({query: {url}}){
//   const response = await fetch(`${process.env.API_URL}/guitars?filters[url]={url}&populate=imagen`)
//   const {data: guitar} = await response.json()
//   console.log(data)
//   return {
//     props: {
//       guitar
//     }
//   }
// }