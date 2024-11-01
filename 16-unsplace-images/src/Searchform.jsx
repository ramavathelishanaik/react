import React from 'react'
import { useGlobalContext } from './context';

const Searchform = () => {
    const {setSearchquery}=useGlobalContext()

    const handleSubmit=(e)=>{
        e.preventDefault();
        const SearchValue = e.target.elements.search.value;
        if(!SearchValue)return;
        setSearchquery(e.target.elements.search.value)
      
    }
  return (
    <section>
      <h1 className='title'>Unsplash Images</h1>
      <form className='search-form' onSubmit={handleSubmit}>
        <input type='text' name='search' placeholder='cat' className='form-input search-input'/>
        <button type='submit' className='btn'>search</button>

      </form>
    </section>
  )
}

export default Searchform
