import React, { useRef } from 'react'
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const items = [
    {
        
        id: 1,
        title: "OCHI website clone",
        img: "./ochi.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eligendi quasi iste vel perspiciatis voluptas quod dolorum odit pariatur perferendis",
        link : "https://imsavagee.github.io/OCHI/",

    },
    {
        id: 2,
        title: "Car Rental App",
        img: "https://img.freepik.com/free-vector/car-rental-concept-illustration_114360-9267.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eligendi quasi iste vel perspiciatis voluptas quod dolorum odit pariatur perferendis",
        link : "https://github.com/imsavagee/Car-rental-App-Using-Spring-Boot-",

    },
    {
        id: 3,
        title: "Note Taker App",
        img: "./noteTaking.jpeg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eligendi quasi iste vel perspiciatis voluptas quod dolorum odit pariatur perferendis",
        link : "https://github.com/imsavagee/Note-Taker-App",
    },
]

const Single = ({ item }) => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start","end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300,300])

    return (
        <section >
            <div className='container' >
                <div className="wrapper">
                    <div className="imgContainer" ref={ref}>

                        <img src={item.img} alt='work' />
                    </div>
                    <motion.div className="txtContainer" 
                    style={{ y }}
                    >
                        <h2 >{item.title}</h2>
                        <p>{item.desc} </p>
                        <button> <a href={item.link} target='_blank'>See Demo</a></button>
                    </motion.div>
                </div>
            </div>

        </section>
    )
}

function Portfolio() {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,

    })

    return (
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div className="progressBar" style={{ scaleX: scaleX }}></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio