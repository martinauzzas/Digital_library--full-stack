import bookGround from '../assets/images/book_ground.jpg';
import bookShelf from '../assets/images/book_shelf.jpg';
import bookWindow from '../assets/images/book_window.jpg';
import bookDark from '../assets/images/book_dark.jpg';
import bookIsbn from '../assets/images/book_isbn.jpg';
import bookLights from '../assets/images/book_lights.jpg';
import bookFlowers from '../assets/images/book_flowers.jpg';
import bookGrass from '../assets/images/book_grass.jpg';
import whiteroom from '../assets/images/white_room.jpg';
import bookBed from '../assets/images/book_bed.jpg';

function About() {
  return (
    <div className = 'bg-azzurro bg-cover'>
      <div className="flex justify-center mb-5">
          <h1 className='text-3xl text-arancione p-5 bg-azzurro bg-opacity-25 rounded'>All your favorite books in one place</h1>
      </div>
    
      <div>
          <div className="flex flex-row justify-center">
            <img src= {`${bookFlowers}`} className= "w-80 h-96 mx-3"/>
            <img src= {`${bookGrass}`} className= "w-96 h-80 mx-3"/>
            <img src= {`${bookBed}`} className= "w-80 h-96 mx-3"/>
        </div>
        <hr className='m-5 text-arancione' />
        <div className='flex justify-center mt-5'>
          <h4 className='flex items-center text-3xl text-arancione p-5 bg-opacity-25 rounded'>Keep track of your books and all the infos about them</h4>
          <img src= {`${bookIsbn}`} className= "w-96 h-72"/>
        </div>
        <hr className='m-5 text-arancione' />
        <div className='flex justify-center mx-5 mb-5'>
          <img src= {`${bookDark}`} className= "w-96"/>
          <p  className='flex items-center text-3xl text-arancione p-5 bg-opacity-25'>View, Create, Update or Delete the books from the your own database</p>
          <img src= {`${bookLights}`} className= "w-1/2 mx-3"/>
        </div>
      </div>
    </div>
  )
}

export default About
