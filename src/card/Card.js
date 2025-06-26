import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  serverTimestamp,
  query,
  orderBy
} from "firebase/firestore";
import { database } from "../config/firebase";
import "./Card.css";
import { motion, AnimatePresence } from "framer-motion";

const Card = () => {
  const [cards, setCards] = useState([]);

  // Fetch cards from Firestore
  const fetchCards = async () => {
  const cardsRef = collection(database, "cards");
  const q = query(cardsRef, orderBy("createdAt", "desc")); // Newest first
  const querySnapshot = await getDocs(q);
  const cardData = querySnapshot.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
      createdAt: data.createdAt?.toDate().toLocaleString() || "N/A"
    };
  });
  setCards(cardData);
};

  useEffect(() => {
    fetchCards();
  }, []);

  // Add a new card
  const handleAddCard = async () => {
    await addDoc(collection(database, "cards"), {
      title: "New Card",
      description: "Added via UI",
      imageUrl: "https://picsum.photos/200?random=" + Math.floor(Math.random() * 1000),
      createdAt: serverTimestamp(),
    });
    fetchCards(); // Refresh list
  };

  // Delete a card
  const handleDelete = async (id) => {
    await deleteDoc(doc(database, "cards", id));
    setCards(prev => prev.filter(card => card.id !== id));
  };

  return (
    <div>
      <button className="add-btn" onClick={handleAddCard}>➕ Add Card</button>
      <div className="card-container">
        <AnimatePresence>
          {cards.map(card => (
            <motion.div
              key={card.id}
              className="card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <img src={card.imageUrl} alt={card.title} className="card-img" />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <small className="timestamp">Created: {card.createdAt}</small>
              <button className="delete-btn" onClick={() => handleDelete(card.id)}>🗑 Delete</button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Card;