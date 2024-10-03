import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <header>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/features">Features</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/login">Login</Link></li>
            <li><Link href="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Create Your Own Personalized Website</h1>
          <p>Build, manage, and monetize your content with our powerful B2B2C platform</p>
          <Link href="/signup" className="cta-button">Get Started</Link>
        </section>

        <section className="features">
          <h2>Key Features</h2>
          <ul>
            <li>Choose from a variety of website templates</li>
            <li>Manage different types of content</li>
            <li>Engage with your audience through comments and ratings</li>
            <li>Sell products with integrated e-commerce</li>
            <li>Track performance with an analytics dashboard</li>
          </ul>
        </section>

        <section className="for-creators">
          <h2>For Creators</h2>
          <p>Build your brand, grow your audience, and monetize your content all in one place.</p>
        </section>

        <section className="for-fans">
          <h2>For Fans</h2>
          <p>Discover and support your favorite creators with free and paid subscriptions.</p>
        </section>

        <section className="cta">
          <h2>Ready to get started?</h2>
          <Link href="/signup" className="cta-button">Create Your Website</Link>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Your Platform Name. All rights reserved.</p>
      </footer>
    </div>
  )
}