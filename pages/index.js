import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Narbar from '../components/Narbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Work from '../components/Work'
import Section from '../components/Section'
import Section2 from '../components/Section2'
export default function Home() {
  return (
   <>
   <Narbar/>
        <Hero/>
        <Section/>

        <Work/> 
        <Section2/>
        <Footer/>
   </>
  )
}
