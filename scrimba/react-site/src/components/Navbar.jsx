import logo from '../images/reactjs-icon.png'
const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <img src={logo} alt="react icon logo" width={29} height={29} className='navbar--logo' />
        <h2 className='navbar--logo-text'>React Facts</h2>
        <h3 className='navbar--title'>React Course - Project 1</h3>
      </nav>
    </>
  )
}

export default Navbar