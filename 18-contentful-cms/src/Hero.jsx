import React from 'react'
import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className='hero'>
        <div className='hero-center'>
            <div className='hero-title'>
                <h1>Contentful CMS</h1>
                <p>I'm baby plaid small batch beard meggings, bitters try-hard brunch migas four loko cloud bread woke bushwick hoodie taiyaki yuccie. Kale chips four dollar toast locavore yes plz vexillologist, banh mi chia listicle williamsburg ascot migas cray XOXO gochujang cloud bread.</p>
            </div>
            <div className='img-container'>
                <img src={heroImg} alt='women browsing'/>
            </div>
        </div>
      
    </section>
  )
}

export default Hero
