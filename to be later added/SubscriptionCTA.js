import React, { useState } from "react";
import styles from "./SubscriptionCTA.module.css";

const SubscriptionCTA = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() !== "") {
      alert(`Subscribed with ${email}`);
      setEmail("");
    }
  };

  return (
    <div className={styles.subscriptionBox}>
      <h2>Deliciousness to your inbox</h2>
      <p>Enjoy weekly hand-picked recipes delivered to your inbox.</p>
      <form onSubmit={handleSubscribe} className={styles.form}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Subscribe</button>
      </form>
    </div>
  );
};

export default SubscriptionCTA;