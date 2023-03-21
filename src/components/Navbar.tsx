// NOTES
// const[x, y] = useState(bool) 
// x is the name of the data
// y is a function that we can call in order to change x
// and we use useState in order to make it work

// for the const dropDown we use the const[] 

import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, Providers  } from '../config/firebase';
import '../index.css';
import logo from '../assets/images/logo (2).jpg';

function Navbar() {
    const [ isVisible, setIsVisible ] = useState(false)

    const signOutOnClick = () => {
        signOut(auth)
        location.reload();
    }

    const signInOnClick = async () => {
        const response =await signInWithPopup( auth, Providers.google );
        if ( response.user ) {
            location.reload();
        }
    }

    const dropDown = () => {
        setIsVisible(!isVisible)
    }

    const clicked = () => {
        setIsVisible(false)
    }

    

    return (
        <nav className="flex items-center justify-between flex-wrap bg-azzurro p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6"
                    //  style= {{ backgroundImage: `url(${ logo })`, height: '30%' }}
                >
                <Link to = "/">
                    {/* <img
                        ref = {`${logo}`}
                        className="inline-flex px-6 py-2 rounded"
                    /> */}
                </Link>
            </div>
            <div className="block">
                <button 
                onClick= { dropDown }
                className="flex items-center px-3 py-2 text-arancione border rounded border-arancione hover:border-darkerBlue">
                  <i className="fa-solid fa-book"></i>
                </button>
            </div>
            { isVisible ? ( 
            <div className='w-full block flex-grow items-center'>
                <div className="text-sm lg:flex-grow">
                    <button className= "p-3 m-2 justify-items-center">
                        <div>
                            <Link to ="/" onClick = { clicked } className='button-52 flex place-items-center mt-4 lg:inline-block lg:mt-0
                                text-arancione hover:text-white mr-4 font-serif'>
                                Home
                            </Link>
                        </div>
                    </button>
                    <button className= "p-3 m-2 justify-items-center">
                        <div>
                            <Link to ="/about" onClick = { clicked } className='button-52 flex place-items-center mt-4 lg:inline-block lg:mt-0
                                text-arancione hover:text-white mr-4 font-serif'>
                                About
                            </Link>
                        </div>
                    </button>
                    <button className= "p-3 m-2 justify-items-center">
                        <div>
                            <Link to ="/functionality" onClick = { clicked } className='button-52 flex place-items-center mt-4 lg:inline-block lg:mt-0
                                text-arancione hover:text-white mr-4 font-serif'>
                                How it works
                            </Link>
                        </div>
                    </button>
                    <button className= "p-3 m-2 justify-items-center">
                        <div>
                            <Link to ="/dashboard" onClick = { clicked } className='button-52 flex place-items-center mt-4 lg:inline-block lg:mt-0
                                text-arancione hover:text-white mr-4 font-serif'>
                                Dashboard
                            </Link>
                        </div>
                    </button>
                        {
                            !auth.currentUser ?

                            <button className= "p-3 m-2 justify-items-center">
                                <div>
                                    <Link to = "/" onClick = { () => { signInOnClick() }} 
                                        className='button-52 flex place-items-center mt-4 lg:inline-block lg:mt-0
                                                text-arancione hover:text-white mr-4 font-serif'>
                                        Login
                                    </Link>
                                </div>
                            </button>
                            
                            :

                            <Button className= "button-52 p-3 m-2 justify-items-center">
                                <div>
                                    <Link to = "/" onClick = { () => { signOutOnClick() }} 
                                        className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                                                text-arancione hover:text-white mr-4 font-serif'>
                                        Sign out 
                                    </Link>
                                </div>
                            </Button>
                        }
                </div>
            </div>
            ) : (
            <></>
            )}
        </nav>
    )
}

export default Navbar
