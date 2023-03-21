import whiteroom from '../assets/images/white_room.jpg';

function Home() {
  return (
    <div
      style= {{ backgroundImage: `url(${ whiteroom })`, height: '100%' }}
      className = 'flex flex-row justify-center mx-auto bg-cover'
      >
        <div className="flex place-items-center h-screen">
          <h1 className='text-3xl text-arancione p-5 bg-azzurro bg-opacity-25 rounded'>WELCOME TO YOUR DIGITAL LIBRARY</h1>
        </div>
    </div>
  )
}

export default Home
