import React, { useRef } from 'react'
import "./services.scss"
import { motion,useInView } from 'framer-motion'

const variants={
    initial:{
        x:-500,
        y:100,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:2,
            staggerChildren:0.1
        }
    }
}

function Services() {


    // const ref = useRef();
    // const isInView = useInView(ref,{margin:"-100px"})

  return (
    <motion.div 
    className='services' 
    variants={variants} 
    initial="initial" 
    // whileInView="animate" 
    // ref={ref}
    animate={"animate"}
    >
        <motion.div className="txtContainer" variants={variants}>
            <p>I focus on helping your brand grow<br/> and move forward</p>
            <hr/>
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src='./people.webp' alt='' />
                <h1> <motion.b whileHover={{color:"orange"}}>Unique </motion.b>Ideas </h1>
            </div>
            <div className="title">
                <h1> <motion.b whileHover={{color:"orange"}}>For Your </motion.b>Business.</h1>
                <button>WHAT I DO?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            
            <motion.div className="box" whileHover={{backgroundColor:"lightgray" , color:"black"}}>
                <h2>Frontend Development</h2>
                <p>
                As a Frontend Developer, I specialize in creating dynamic, responsive, and user-friendly web interfaces using React. With a strong foundation in HTML, CSS, and JavaScript.


                </p>
                <button>GO</button>
            </motion.div>
            <motion.div className="box" whileHover={{backgroundColor:"lightgray" , color:"black"}}>
                <h2>Backend Development</h2>
                <p>
                As a Backend Developer, I focus on building robust, scalable, and efficient server-side applications using Java. My expertise lies in utilizing powerful Java frameworks such as Spring Boot, Hibernate, and Spring MVC 


                </p>
                <button>GO</button>
            </motion.div>
            <motion.div className="box" whileHover={{backgroundColor:"lightgray" , color:"black"}}>
                <h2>Full Stack Development</h2>
                <p>
                    As a Full Stack Developer, I create end-to-end web applications by combining the power of React for frontend development and Java with Spring Boot for backend services. 
                </p>
                <button>GO</button>
            </motion.div>
        </motion.div>

    </motion.div>
  )
}

export default Services