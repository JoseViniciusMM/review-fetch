interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface infoProdutos {
  products: number;
  total: number;
  skip: number;
  limit: number;
}
interface Produtos {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
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
  // reviews: 
  //   {
  //     rating: number;
  //     comment: string;
  //     date: string;
  //     reviewerName: string;
  //     reviewerEmail: string;
  //   }[];
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
const infoProducts: infoProdutos[] = []

async function fetchProdutos () {
  const response = await fetch('https://dummyjson.com/products');

  if (!response.ok) {
    throw new Error(`Erro ao consultar a API: ${response.status}`);
  }

  const data: Produtos[] = await response.json();
  products.push(...data);
}

async function fetchProdutos2 () {
  const response = await fetch('https://dummyjson.com/products');

  if (!response.ok) {
    throw new Error(`Erro ao consultar a API: ${response.status}`);
  }

  const data: infoProdutos[] = await response.json();
  infoProducts.push(...data);
}


function printProducts2(products: infoProdutos[]){
  products.forEach(p => {
    console.log(`${p.products} ${p.total} ${p.skip} ${p.limit}`);
  });
}

function printProducts(products: Produtos[]){
  products.forEach(p => {
    console.log(`${p.id} ${p.title} ${p.description} ${p.category} ${p.price} ${p.discountPercentage} ${p.rating} ${p.stock} ${p.tags} ${p.brand} ${p.sku} ${p.dimensions.width} ${p.dimensions.height} ${p.dimensions.depth} ${p.warrantyInformation} ${p.shippingInformation} ${p.availabilityStatus}`);
  });
}


await fetchProdutos2();
await fetchProdutos();

printProducts(products);
printProducts2(infoProducts);




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