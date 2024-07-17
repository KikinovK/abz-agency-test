import { useState } from 'react';

import Header from 'src/components/Header';
import Hero from 'src/components/Hero';
import Working from 'src/components/Working';
import SignUp from 'src/components/SignUp';
const App = () => {
  const [isUpload, setIsUpload] = useState(false);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Working isUpload={isUpload}/>
        <SignUp onUpload={() => {setIsUpload(true)}}/>
      </main>
    </>
  )
}

export default App
