import React from "react";
import styles from '../../styles/Home.module.css'
import Image from 'next/image'


const Footer = () =>{
     return (
 
<footer className={styles.footer}>
{/* <a
  href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  target="_blank"
  rel="noopener noreferrer"
>
     </a> */}
 Powered by {'Oishi Chowdhury'}
  <span className={styles.logo}>
    <Image src="/images (1).jpg" alt="Vercel Logo" width={30} height={16} />
  </span>
{/* </a> */}
</footer>
)}

     export default Footer;