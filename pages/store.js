
import Layout from "../components/layout"
import Guitar from "../components/guitars"
import styles from '../styles/guitars.module.css'


export default function Store({guitars}){
    console.log(guitars)
    return(
        <Layout
            title={'Store'}
            description={'Store - Guitar Studio'}    
        >
            <main className="container">
                <h1 className="heading">Our collection</h1>

                <div className={styles.guitarsgrid}>
                    {guitars?.map(guitar =>(
                        <Guitar
                        key={guitar.id}
                        guitar={guitar.attributes}
                        />
                    ) )}
                </div>
            </main>
        </Layout>
    )
}

// export async function getStaticProps(){
//     const response = await fetch(`${process.env.API_URL}/guitars?populate=imagen`)
//     const {data: guitars} = await response.json()
    
//     return{
//         props: {
//             guitars
//         }
//     }
// }

// export async function getServerSideProps(){
//     const response = await fetch(`http://localhost:1337/api/guitars?populate=imagen`);
//     console.log(response)
//     const {data: guitars} = await response.json()
    
//     return{
//         props: {
//             guitars
//         }
//     }
// }

export async function getServerSideProps() {
  try {
    const response = await fetch(`http://127.0.0.1:1337/api/guitars?populate=imagen`);
    console.log(response); // Verificar la respuesta completa
    const { data: guitars } = await response.json();
    console.log(guitars)
    return {
      props: {
        guitars
      }
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        guitars: []
      }
    };
  }
}
