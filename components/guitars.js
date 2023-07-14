import Image from "next/image"
import Link from "next/link"

export default function Guitar({guitar}) {

  const {description, imagen, name, price, url} = guitar
  return (
    <div>
      <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`Image of ${name}`} />

      <div>
        <h1>{name}</h1>
        <p>{description}</p>
        <p>{price} CLP</p>
        <Link href={`/guitars/${url}`}>
        <a>See product</a>
        </Link>
      </div>
    </div>
  )
}
