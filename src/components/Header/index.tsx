import styles from './header.module.css';

function Header() {
  return (
    <header className={ styles.headerContainer }>
      <h1>TRYBE NEWS</h1>
    </header>
  );
}

export default Header;