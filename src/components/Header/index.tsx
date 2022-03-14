import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src='/images/Logo2.png' alt='cibusWeb' />
        <nav>
          <a>Início</a>
          <a>Sobre o Cibus</a>
          <a>App Personalizado</a>
          <a>Funcionalidades</a>
          <a>Solicitar Demonstração</a>
          <a>Contato</a>
        </nav>
      </div>
    </header>
  );
}
