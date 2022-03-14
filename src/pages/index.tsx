import Head from 'next/head';
import { DemoButton } from '../components/DemoButton';

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | CIBU$ Fidelidade</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <h1>
            Aumente suas venda com
            <h1>CASHBACK</h1>
          </h1>

          <p>
            Da atração ao aumento do ticket médio: uma solução completa para
            engajar clientes, motivar atendentes e acelerar vendas.
            <br />
            <br />
            <span>Simples e 100% personalizável.</span>
          </p>

          <DemoButton />
        </section>

        <img src='/images/cellphones.png' alt='Cellphones' />
      </main>
    </>
  );
}
