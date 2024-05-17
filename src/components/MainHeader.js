import styles from "./MainHeader.module.css";
import Navigation from "./Navigation";

function MainHeader(props) {
  return (
    <header className={styles["main-header"]}>
      <h1>I am header</h1>
      {props.isLoggedIn && <Navigation onLogout={props.onLogout} />}
    </header>
  );
}

export default MainHeader;
