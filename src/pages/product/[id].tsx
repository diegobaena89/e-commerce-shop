import { useRouter } from 'next/router';
import { ImageContainer, ProductContainer, ProductDetails } from '../product';

export default function Product() {
  const { query } = useRouter();
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quisquam
          fugiat suscipit voluptatibus quis, rerum repellat, sed odio tenetur
          illo doloribus fuga unde nisi veritatis facilis rem sit eveniet
          laborum.
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
