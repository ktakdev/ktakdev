import lottie from 'lottie-web'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useRef } from 'react'
import LinkIcons from '@components/LinkIcons'
import styles from '@styles/Home.module.css'
import reactLogo from '@animations/logo.json'

const Home: NextPage = () => {
  // react 18 work around.
  // without this, useEffect is called twice in dev mode.
  const mounted = useRef(false)
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
      lottie.loadAnimation({
        container: document.getElementById(styles.logo) as Element,
        animationData: reactLogo,
        loop: false,
      })
    }
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>K Tak&apos;s website</title>
        <meta name="description" content="K Tak's website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/kcq1iry.css" />
      </Head>

      <main className={styles.main}>
        <div className={styles.overlay}></div>
        <div
          id={styles.logo}
          style={{ width: '100%', maxWidth: '400px' }}
        ></div>
        <div className={styles.about}>
          <h2>About</h2>
          <div>
            I&apos;m a software engineer, started my career in 2015. I have
            serious passion for UI/UX, front-end technology, and so on.
          </div>
          <LinkIcons></LinkIcons>
        </div>
      </main>
    </div>
  )
}

export default Home
