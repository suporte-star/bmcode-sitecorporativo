import styles from './Feedbacks.module.css'
import FeedbacksClient from './FeedbacksClient'
import Title from '../utils/Title/Title'
import { getFeedbacks } from '@/backend/feedbackService'
import AddFeedback from './AddFeedback/AddFeedback'
export default async  function Feedbacks() {
    const feedbacks = await getFeedbacks()
 
    
    return (
            <section className={styles.Feedbacks} id='customer'>
                <Title title='Avaliações de Clientes'/>
                {feedbacks.length > 0 ? (
                    <FeedbacksClient feedbacks={feedbacks} />
                    
                ) : (
                    <p className={styles.noFeedback}>Nenhum feedback disponível ainda.</p>
                    
                )}
                <AddFeedback/>
            </section>
            
    )
}
