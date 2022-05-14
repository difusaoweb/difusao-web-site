import * as React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import { HeaderBar } from '../components/ecosystems/Header'
import { Hero } from '../components/ecosystems/Hero'
import Services from '../components/ecosystems/Services'
import Budget from '../components/ecosystems/Budget'
import Cases from '../components/ecosystems/Cases'
import Clients from '../components/ecosystems/Clients'
import About from '../components/ecosystems/About'
import Contact from '../components/ecosystems/Contact'
import Footer from '../components/ecosystems/Footer'
import FloatButton from '../components/atoms/FloatButton'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Difusão Web – Criação e Aprimoramento de Aplicações Mobile e Web
        </title>
        <meta
          name="description"
          content="⚛️ Criação e Aprimoramento de Aplicações Mobile e Web. 👇 Invista em sua ferramenta👇"
        />
      </Head>
      <HeaderBar />
      <main>
        <Hero />
        <Services />
        <Budget />
        <Cases />
        <Clients />
        <Budget />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatButton />
    </>
  )
}

export default Home
