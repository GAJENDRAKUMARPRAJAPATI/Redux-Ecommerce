import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import Cards from './Cards'

const LandingPage = () => {
  return (
    <div>
      <Header/>
      <Link to="/login" className="text-decoration-none">
        <Cards />
      </Link>
    </div>
  );
}

export default LandingPage
