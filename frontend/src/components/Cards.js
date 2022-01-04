import React, {useState} from 'react'
import './Cards.css'
import TinderCard from 'react-tinder-card'

const Cards = () => {
  const [people, setPeople] = useState([
    {
      name: 'Justin Bieber',
      url: 'https://img.ilcdn.fi/UesL7eE2xWflBge1YqpckfXI92Q=/full-fit-in/612x0/img-s3.ilcdn.fi/5b4c24e0dfe05f1cb067c410adc9b6c435362bf5294aee35ec84ea58cfcc6d7c.jpg',
      bio: 'Popstar living life'
    },
    {
      name: 'Jeff Bezos',
      url: 'https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg',
      bio: 'Ceo of Amazon on a mission to make the world a better place'
    },
    {
      name: 'Harvey Specter',
      url: 'https://pbs.twimg.com/profile_images/1362182681761435651/S0U6WtOK_400x400.jpg',
      bio: 'Best closer in the city'
    }
  ])

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
              style={{backgroundImage: `url(${person.url})`}}
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
