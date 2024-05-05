'use client'

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import Image1 from "@/app/assets/1.jpg"
import Image2 from "@/app/assets/2.jpg"
import Image3 from "@/app/assets/3.jpg"
import Image4 from "@/app/assets/4.jpg"
import Image5 from "@/app/assets/5.jpg"
import Image6 from "@/app/assets/6.jpg"
import Image7 from "@/app/assets/7.jpg"

export default function ZooParallax() {

   const containerRef = useRef(null)

   const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ['start start', 'end end']
   })

   const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
   const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
   const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
   const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8])
   const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9])

   const pictures = [
      {
         src: Image1,
         scale: scale4,
         style: 'w-[25vw] h-[25vh]'
      }, {
         src: Image2,
         scale: scale5,
         style: 'top-[-30vh] left-[5vw] w-[35vw] h-[30vh]'
      }, {
         src: Image3,
         scale: scale6,
         style: 'top-[-10vh] left-[-25vw] w-[20vw] h-[45vh]'
      }, {
         src: Image4,
         scale: scale5,
         style: 'left-[27.5vw] w-[25vw] h-[25vh]'
      }, {
         src: Image5,
         scale: scale6,
         style: 'top-[27.5vh] left-[5vw] w-[20vw] h-[25vh]'
      }, {
         src: Image6,
         scale: scale8,
         style: 'top-[27.5vh] left-[-22.5vw] w-[30vw] h-[25vh]'
      }, {
         src: Image7,
         scale: scale9,
         style: 'top-[22.5vh] left-[25vw] w-[15vw] h-[15vh]'
      }
   ]

   return (
      <div className="pt-[50vh] pb-[100vh] bg-black">
         <section ref={containerRef} className="h-[300vh] relative">
            <div className="sticky top-0 h-screen overflow-hidden">
               {
                  pictures.map(({ src, scale, style }, index) => {
                     return (
                        <motion.div
                           key={index}
                           style={{ scale }}
                           className="w-full h-full absolute top-0 flex items-center justify-center"
                        >
                           <div className={`${style} relative`}>
                              <Image
                                 alt="Image"
                                 src={src}
                                 fill
                                 placeholder="blur"
                                 className="object-cover"
                              />
                           </div>
                        </motion.div>
                     )
                  })
               }
            </div>
         </section>
      </div>
   )
}