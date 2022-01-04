import React, {useState, useEffect} from 'react'
import './Cards.css'
import TinderCard from 'react-tinder-card'
import axios from '../axios'

const Cards = () => {
  const [people, setPeople] = useState([])

  useEffect(() => {
    const getData = async () => {
      const request = await axios.get('/cards')
      setPeople(request.data)
    }
    getData()
  }, [])

  const swiped = (direction, personToDelete) => {
    console.log('removing: ' + personToDelete)
  }

  const outOfFrame = (name) => {
    console.log(name + 'left the frame')
  }

  return (
    <div className='cards'>
      <div className='cards_cardContainer'>
        {people.map(person => 
          <TinderCard 
            className='swipe' 
            key={person.name} 
            preventSwipe={['up', 'down']} 
            onSwipe={(dir) => swiped(dir, person.name)} 
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div 
              style={{backgroundImage: `url(${person.imgUrl})`}}
              className='card'
            >
              <h2>{person.name}</h2>
              <h4>{person.bio}</h4>
            </div>
          </TinderCard>
        )}
      </div>
    </div>
  )
}

export default Cards
