import Head from 'next/head';
import { DemoButton } from '../components/DemoButton';

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | CIBU$ Fidelidade</title>
      </Head>

      {/* PRIMEIRA SEÇÃO */}

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
          <br />

          <DemoButton />
        </section>

        <img src='/images/cellphones.png' alt='Cellphones' />
      </main>

      {/* SEGUNDA SEÇÃO */}

      <main className={styles.secondSection}>
        <section className={styles.secondSectionText}>
          <h1>
            O seu <span>acelerador de vendas</span> no posto
          </h1>

          <p>
            Com o CIBUS você acelera as vendas do posto e multiplica as chances
            do seu cliente voltar ao oferecer cashback instantâneo. Ou seja,
            parte do valor gasto no abastecimento é revertido na compra de novos
            produtos da loja de conveniência, serviços, futuros abastecimentos
            no posto ou em produtos de lojas parceiras.
          </p>
        </section>
      </main>

      {/* TERCEIRA SEÇÃO */}

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <h1>
            Seu App com a cara da
            <h1>
              <span>sua empresa</span>
            </h1>
          </h1>

          <p>
            Tenha seu próprio app de cashback ao personalizar o Cibus com a logo
            e as cores do seu posto.
          </p>
          <br />
          <p>
            O app é um “white-label”, ou seja, um produto de marca branca que é
            desenvolvido por nós, mas que você pode inserir a sua marca, como se
            fosse uma tecnologia sua, do seu posto.
          </p>

          <br />
        </section>

        <h1>
          Personalize <span>VOCÊ</span> mesmo!
        </h1>
      </main>
    </>
  );
}
