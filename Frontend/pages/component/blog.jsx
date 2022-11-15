import React from "react";
import styles from '../../styles/blog.module.css'
import Link from 'next/link'

const Blog = () =>{
     return (
 
     <div className={styles.container}>
     <div className={styles.main}>
         <h2>Leatest Blog</h2>

          <div className={styles.blogItemh1}>
               <Link href={'/blogpost/learn-Javascript'}>
            <h3>How to learn javascript in 2022</h3></Link>
            <p> javascript is the language used to design logic for the server site</p>
          </div>

          <div className={styles.blogItemh1}>
            <h3>How to learn ReactJs in 2022</h3>
            <p> javascript is the language used to design logic for the client site</p>
          </div>

          <div className={styles.blogItemh1}>
            <h3>How to learn NodeJs in 2022</h3>
            <p> javascript is the language used to design logic for the server site</p>
          </div>
</div>
</div>
     )

}

export default Blog;