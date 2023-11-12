import styles from './loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loading}>
      <img src="src/assets/loading.gif" />
    </div>
  );
};

export default Loader;
