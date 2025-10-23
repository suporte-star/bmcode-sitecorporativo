import { db } from "./firebaseConfig";
import { collection, addDoc, serverTimestamp, getDocs } from 'firebase/firestore';

export async function sendFeedback(data) {
    await addDoc(collection(db, "feedbacks"), {
        ...data,
        createdAt: serverTimestamp(),
    });

    return { success: true };
}
export async function getFeedbacks() {
    const snapshot = await getDocs(collection(db, 'feedbacks'));
    return snapshot.docs.map(doc => {
      const data = doc.data();

      const createdAtString = data.createdAt 
          ? data.createdAt.toDate().toISOString() 
          : null; 

      return {
        id: doc.id,
        ...data,
        createdAt: createdAtString, 
      };
    });
}