import { useState } from "react"
import "../styles/NewsletterSignup.css"

const NewsletterSignup = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // newsletter signup logic (to be added)
    console.log("Submitted email:", email)
    setEmail("")
  }

  return (
    <div className="newsletter-signup">
      <h2 className="newsletter-title">Deliciousness to your inbox</h2>
      <p className="newsletter-description">Enjoy weekly hand-picked recipes and recommendations</p>
      <form onSubmit={handleSubmit} className="newsletter-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          className="newsletter-input"
          required
        />
        <button type="submit" className="newsletter-button">
          Join
        </button>
      </form>
    </div>
  )
}

export default NewsletterSignup