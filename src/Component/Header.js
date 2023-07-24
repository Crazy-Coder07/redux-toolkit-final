import React from 'react'
import { useSelector} from 'react-redux';

const Header = () => {
  const count = useSelector((state) => state.counter.value);
  return (
    <div className='header'>
      <h4>This is my Navbar/header</h4>
      <h4>We Have Two Component one is Header and other is body</h4>
      <h4>So when i changes somthing in Body then it will also reflect in header</h4>
     <h1><b>MyCart({count})</b> </h1>
    </div>
  )
}

export default Header