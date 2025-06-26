import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../config/firebase";
import "./Card.css";

const Card = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const querySnapshot = await getDocs(collection(database, "cards"));
        const cardData = querySnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
            createdAt: data.createdAt?.toDate().toLocaleString() || "N/A"
          };
        });
        setCards(cardData);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, []);

  return (
    <div className="card-container">
      {cards.map(card => (
        <div key={card.id} className="card">
          <img src={card.imageUrl} alt={card.title} className="card-img" />
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          <small className="timestamp">Created: {card.createdAt}</small>
        </div>
      ))}
    </div>
  );
};

export default Card;