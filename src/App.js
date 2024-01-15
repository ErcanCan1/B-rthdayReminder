import React, { useState } from 'react'
import data from './data'
import List from './List'
function App() {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className='container'>
        <h3>{people.length} kişinin doğum günü bugün</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Sayfayı Temizle</button>
      </section>
    </main>
  )
}

export default App
