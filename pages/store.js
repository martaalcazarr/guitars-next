
import Layout from "../components/layout"
import Guitar from "../components/guitars"

export default function Store({guitars}){
    return(
        <Layout
            title={'Store'}
            description={'Store - Guitar Studio'}    
        >
            <main className="container">
                <h1 className="heading">Our collection</h1>

                
                {guitars?.map(guitar =>(
                    <Guitar
                    key={guitar.id}
                    guitar={guitar.attributes}
                    />
                ) )}
                
            </main>
        </Layout>
    )
}

// export async function getStaticProps(){
//     const response = await fetch(`${process.env.API_URL}http://localhost:1337/api/guitars?populate=imagen`)
//     const {data: guitars} = await response.json()
    
//     return{
//         props: {
//             guitars
//         }
//     }
// }

export async function getServerSideProps(){
    const response = await fetch(`${process.env.API_URL}http://localhost:1337/api/guitars?populate=imagen`)
    const {data: guitars} = await response.json()
    
    return{
        props: {
            guitars
        }
    }
}
