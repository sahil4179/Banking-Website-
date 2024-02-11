import styles from './style';

import {navs , stats , feed ,foot , hero ,bill ,buss ,button ,test,card,client,cta} from './components';



export default function App() {
  return (
    
    <div className="bg-primary w-full overflow-hidden">
     <div className={`${styles.paddingX} ${styles.flexCenter}`}> 
        <div className={`${styles.boxWidth}`}> 
        
        </div>
     </div>

      <div className={`${styles.flexStart} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          min box
        </div>
      </div>

      <div className={`${styles.flexStart} ${styles.paddingX} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
           Stats
          bussiness
          billing
          classdeals
          testimonials
          clients
          cta
          footer
        </div>
      </div>












      
    </div>


    
  )
}
