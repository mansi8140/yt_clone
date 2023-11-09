import React, { useState } from 'react'
import './_categoriesBar.scss'

const categories = [
  'All',
  'Dramedy',
  'Music',
  'Live',
  'Garba',
  'Style',
  'Abhi and Niyu',
  'Jethalal',
  'React',
  'Projects',
  'God',
  'Maditation',
  'Mantras',
  'TMKOC',
  'Mixes',
  'Food',
  'India',
  'Hindi Music',
  'Watched',
  'Criket',
  'Recently uploads'
]
const CategoriesBar = () => {
  

  const [activeCategory, setActiveCategory] = useState('All')
  const handleClick = value => {
    setActiveCategory(value)
  }
  return (
    <div className='categoriesBar'>
      {categories.map((value, i) => (
        <span 
          onClick={() => handleClick(value)}
          className={activeCategory === value ? 'active' : ''}
          key={i}>
          {value}
        </span>
      ))}
    </div>
  )
}

export default CategoriesBar
