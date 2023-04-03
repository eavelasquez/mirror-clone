import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mirror Clone</title>
        <meta
          name='description'
          content={
            "Mirror's robust publishing platform pushes the boundaries of writing online—whether it's the next big white paper or a weekly community update."
          }
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <div className={styles.description}>
            <h1>Mirror Clone</h1>
          </div>
        </div>
      </main>
    </>
  )
}
