import React from 'react'
import styles from '../../styles/blog.module.css'
import { useRouter} from 'next/router'
const slug = () => {
     const router = useRouter()
     const {slug} = router.query;
  return  <div className={styles.container}>
    <div className={styles.main}>
    <h1>
    Title of the Page {slug}</h1>
    <br/>
    <div>
    Access the most comprehensive library of 
    K-8 resources for learning at school and at home.
     Bring learning to life with worksheets, games, 
     lesson plans, and more from Education.com. Free. 
     Remote Learning Resources. Differentiated 
     Resources. Detailed Progress Reports. 
     kidSAFE Approved. Fun & Engaging. 
     Weekly Recommendations. 
     Available on Web & Apps. 
     Ad Free & Kid-Safe.
    </div>
     </div>
     </div>
    
};

export default slug