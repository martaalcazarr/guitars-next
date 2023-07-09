import Image from 'next/image'
import Layout from "../components/layout"
import styles from "../styles/about.module.css"

export default function About(){
    return(
        <Layout
            title={'About us'}
            description={'About us - Guitar Studio'}    
        >
            <main className="container">
                <h2 className="heading">About us</h2>
                <div className={styles.content}>
                    <Image src="/img/nosotros.jpg" width={1000} height={800} alt="about us"/>
                    <div>
                    <p>Welcome to our guitar and guitar lessons store ! We are a passionate team of musicians and guitar enthusiasts dedicated to providing our customers with the best musical experience possible. Whether you are looking for your first guitar or wanting to enhance your guitar skills, we are here to assist you every step of the way.</p>
                    </div>
                </div>
            </main>

            
        </Layout>
    )
}
