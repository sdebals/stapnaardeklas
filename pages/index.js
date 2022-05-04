import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image';
import gsap from 'gsap'
import {useRef, useEffect} from 'react'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)


export default function Home() {

  const imgRef= useRef(null);
  useEffect(() => {
    const el = imgRef.current;
    gsap.fromTo(el, {rotation: 0 } ,{rotation: 180, duration:3, scrollTrigger: {
      trigger: el
    } })
  }, [])
  /** function will run once with [] */

  return (
    <>
      <Head>
        <title>Stap naar de klas | home </title>
      </Head>
      <div className="text-base">
        <h1>Lesgeven? Test even!</h1>
        <p className="font-bold mb-4">Maak potentiële zij-instromers warm voor een carrièreswitch naar het onderwijs door een realistisch beeld te geven van de job als leerkracht</p>
        
        <p>Twijfel je over een job in het onderwijs? Kies een Gentse school en kom een lesuur van dichtbij meevolgen!</p>
        <div className="my-8"><Image src="/images/stapklas01.jpg" width={744} height={465} layout="responsive" ></Image></div>
        <p>Heb je al wat werkervaring en overweeg je de stap naar het onderwijs? Dankzij het project ‘Stap naar de klas’ kan je nu een lesuur van dichtbij meevolgen. Twijfel je erna nog steeds? Sommige scholen ontvangen je graag opnieuw.</p>
        <div className="my-8" ref={imgRef}><Image src="/images/stapklas01.jpg" width={744} height={465} layout="responsive" ></Image></div>
        <h2>Hoe werkt het?</h2>
        <p>
Geïnteresseerden kunnen, voor een uurtje of een halve dag, een echte les
meevolgen in een Gentse klas via een testmoment. Zo kun je al een eerste
indruk opdoen van hoe een les er anno 2022 uit ziet, hoe de leerkracht het
aanpakt en wat de uitdagingen zijn. </p><p>Bekijk hieronder het aanbod van scholen die je graag ontvangen en schrijf je in. Zo weet je meteen of een job in het onderwijs iets voor jou is.</p>

        <Link href="/evenementen"><a className="bg-sky-700 text-white p-4 rounded-lg inline-block mt-4">Bekijk alle scholen</a></Link>
      </div>
    </>
  )
}