import React from 'react';
import Nav from '../../components/Nav';
import Header from '../../components/Header';
import TriviaGame from '../../components/TriviaGame';
import Footer from '../../components/Footer';

function Trivia() {

  return (
    <main>
      <Nav />
      <Header />
      <TriviaGame />
      <Footer />
    </main>
  )
};

export default Trivia;