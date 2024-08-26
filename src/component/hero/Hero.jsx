import React from 'react'
import "./hero.scss"
import {  motion } from 'framer-motion'

const textVariants = {
    initial: {
        x: -500,
        opacity: 1,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChilren: 0.1,
        }
    },
    scrollBtn: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }

}
const sliderVariants = {
    initial: {
        x: 0,

    },
    animate: {
        x: "-220%",
        transition: {
            duration: 20,
            repeat: Infinity,
            repeatType:"mirror"
        }
    },


}

function Hero() {
    return (
        <div className='hero'>
            <div className='wrapper'>
                <motion.div className='textContainer' variants={textVariants} initial='initial' animate="animate">
                    <motion.h2 variants={textVariants}>Shavez Ahmed</motion.h2>
                    <motion.h1 variants={textVariants}>Java Full Stack Developer</motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <motion.button variants={textVariants}> <a href='#Portfolio'>  See my Latest Works</a></motion.button>
                        <motion.button variants={textVariants}> <a href="#Contact">Contact Me</a></motion.button>
                    </motion.div>
                    <motion.img src='/scroll.png' alt='scroll' variants={textVariants} animate="scrollBtn" />
                </motion.div>
            </div>
            <motion.div className="slidingTxtContainer" variants={sliderVariants} initial="initial" animate="animate">
                Writer Content Creator Influencer
            </motion.div>
            <div className="imgContainer">
                <img src='/hero.png' alt='heroImage' />
            </div>
        </div>
    )
}

export default Hero