import React from 'react'
import "./cursor.scss"
import { useState } from 'react'
import { useEffect } from 'react';
import { motion } from 'framer-motion';

function Cursor() {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const mouseMove = (e) => {
            setPos({
                x: e.clientX,
                y: e.clientY
            })
        }
        window.addEventListener("mousemove", mouseMove)

        return () => {
            window.removeEventListener("mousemove", mouseMove)
        }
    },[])
    return (
        <motion.div className='cursor' animate={
            {
                x: pos.x+5,
                y: pos.y+5
            }

        }>

        </motion.div>
    )
}

export default Cursor