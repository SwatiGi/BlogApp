import React, { useState } from 'react'

const App = () => {
  let initialState = { image: "", title: "", description: "" }
  let [values, setValues] = useState(initialState);
  let [display,setDispley]=useState([])
  let handleSubmit = (event) => {
    event.preventDefault();

   setDispley((pre)=>[...pre,values])
  setValues(initialState)
  }
  let handleChange = (e) => {
    
    let { name, value } = e.target;
    // console.log(name,value)
    setValues((pre)=>({...pre,[name]:value}))
  }
  return (
    <div>
      <h1>Your Blog</h1>
      <h1>Total Blog :{display.length} </h1>
      <form  onSubmit={handleSubmit} className='form'>
        <div>
          <label htmlFor="image">Image Url:</label>
          <input
            type="text"
            name="image"
            id='image'
            value={values.image}
            onChange={handleChange} />
        </div>
        <br />
         <div>
          <label htmlFor="title">Title:</label>
          <input
            id='title'
            type="text"
            name="title"
            value={values.title}
            onChange={handleChange} />
        </div>
        <br />
        
         <div>
          <label htmlFor="description">Blog Description:</label>
          <input
            id='description'
            type="text"
            name="description"
            value={values.description}
            onChange={handleChange} />
        </div>
        <br />
        
        <button>POST BLOG</button>
        
      </form>
    
      <hr />
      <h1>Blog Data</h1>
      <div className='container'>{display.length > 0 && display.map((el,i) => {
        return <div key={i} className='image'>
        <h2>{el.title}</h2>
        <img src={el.image} alt="" />
        <p>{el.description}</p>
        </div>
      })}</div>
    </div>
  )
}

export default App