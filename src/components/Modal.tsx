// We don't need to call onClose as a anonymus function cause 
// we already declared that is a function in the props

// (e) is a function to prevent that a onclick function is gonna bubble 
// over the whole code. We need to stop the propagation of the previous function
import React from 'react';
import BookForm from "./BookForm";

type Props = {
    isbn?: string[];
    open: boolean;
    onClose: () => void;
}

const Modal = ( props: Props ) => {
    if ( !props.open ) return (<></>);
    return (
        <div 
            onClick={ props.onClose } 
            className='fixed w-full h-full flex z-1 
            justify-center align-center'
        >
            <div
                className='max-w-600px w-2/5 fixed flex z-1 my-36 bg-white shadow-xl rounded'
                onClick={(e) => {
                    e.stopPropagation()
                }}    
            >
                <div className="modal-body">
                    <div className="flex flex-row space-apart">
                        <p className="flex justify-center m-3 p-2 rounded hover:bg-white text-arancione"
                        onClick={props.onClose}>
                            X
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center mt-3 p-2">
                        <BookForm isbn={ props.isbn }/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
