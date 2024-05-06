import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 690,
    title: 'The Book Of Coding',
    description: 'Basic book to start coding',
  },
  {
    id: 'p2',
    price: 524,
    title: 'Road to JavaScript',
    description: 'Book to learn javascript',
  },
  {
    id: 'p3',
    price: 800,
    title: 'Path to Webdevelopment',
    description: 'Hints and tricks to be web developer',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;