interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Produtos {
  id: number;
  title: string;
  description: string;
  category: string;
  prince: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: 
    {
      rating: number;
      comment: string;
      date: string;
      reviewerName: string;
      reviewerEmail: string;
    }[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  }
  images: string[];
  thumbnail: string;
}

const products: Produtos[] = []

async function fetchProdutos () {
  const response = await fetch('https://dummyjson.com/products');

  if (!response.ok) {
    throw new Error(`Erro ao consultar a API: ${response.status}`);
  }

  const data: Produtos[] = await response.json();
  products.push(...data);
}

function printProducts(products: Produtos[]){
  products.forEach(p => {
    console.log(`${p.id} ${p.title} ${p.description} ${p.category} ${p.prince} ${p.discountPercentage} ${p.rating} ${p.stock} ${p.tags} ${p.brand} ${p.sku} ${p.dimensions.width} ${p.dimensions.height} ${p.dimensions.depth} ${p.warrantyInformation} ${p.shippingInformation} ${p.availabilityStatus} ${p.reviews[0].rating} ${p.reviews[0].comment} ${p.reviews[0].date} ${p.reviews[0].reviewerName} ${p.reviews[0].reviewerEmail}`);
  });
}


await fetchProdutos();
printProducts(products);




/* 
const posts: Post[] = [];

async function fetchPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!response.ok) {
    throw new Error(`Erro ao consultar a API: ${response.status}`);
  }

  const data: Post[] = await response.json();
  posts.push(...data);
} 

function printPosts(posts: Post[]) {
  posts.forEach(p => {
    console.log(`${p.id} - ${p.body}`);
  });
}

await fetchPosts();
printPosts(posts);

*/