import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes.header}>
      <h1>𝑅𝑒𝑑𝑢𝑥 𝐵𝑜𝑜𝑘 𝑆𝑡𝑜𝑟𝑒..</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;