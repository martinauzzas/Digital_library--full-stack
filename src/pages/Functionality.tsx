import bookIsbn from '../assets/images/book_isbn.jpg';
import bookLights from '../assets/images/book_lights.jpg';
import bookFlowers from '../assets/images/book_flowers.jpg';
import bookGrass from '../assets/images/book_grass.jpg';
import whiteRoom from '../assets/images/white_room.jpg';
import signin from '../assets/images/sign_in.png'

const Functionality = () => {
  return (
    <div className='bg-azzurro'>
        <div className="flex justify-center mb-5">
          <h1 className='text-3xl text-arancione p-5 bg-azzurro bg-opacity-25 rounded'>HOW IT WORKS</h1>
      </div>
        <hr />
        <div className='m-5'>
            <p className='flex justify-center text-xl text-arancione'>1. Create an Account</p>
            <i className="flex justify-center m-5 fa-solid fa-arrow-down fa-2xl text-arancione"></i>
            <img src= {`${signin}`} alt="" className= "flex items-center justify-center w-2/3 mx-44"/>
        </div>
        <hr />
        <div className='flex flex-row justify-center m-5'>
            <p className="flex items-center text-xl text-arancione p-1 bg-opacity-25 rounded">2. Check out the database and add your favorites book to it</p>
            <i className="flex justify-center items-center m-5 fa-solid fa-arrows-up-to-line fa-2xl text-arancione"></i>
            <img src={`${bookGrass}`} alt="" className= "w-80 h-96 mx-3" />
        </div>
        <hr />
        <div className='flex flex-row justify-center m-5'>
            <img src={`${bookIsbn}`} alt="" className= "w-80 h-96 mx-3" />
            <i className="flex justify-center items-center m-5 fa-solid fa-arrows-turn-to-dots fa-2xl text-arancione"></i>
            <p className='flex items-center text-xl text-arancione '>3. Update infos about the book</p>
        </div>
        <hr />
        <div className='flex m-5'>
            <p className='flex items-center text-xl text-arancione'>4. Delete the books that you want</p>
            <i className="flex justify-center items-center m-5 fa-solid fa-square-minus fa-2xl text-arancione"></i>
            <img src={`${bookLights}`} alt="" className= "w-80 h-96 mx-3" />
        </div>
    </div>
  )
}

export default Functionality