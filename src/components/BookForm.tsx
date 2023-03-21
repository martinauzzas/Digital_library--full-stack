// this is similiar to use state, but this time we have handle submit function
// and when we use that handle submit is gonna use the form data and apply useForm to the whole form


// Use form hooks to have access to my inputs and all the data tha is inside them
// and be able to pass that information as props all the way into input.tsx 
// so its gonna be able to use that ref and take that register infos and pull it back and send in
// to onsubmit function that is connected to the useForm Hook

// REDUX is gonna help us to access the data as one entity so we can use it in different
// components easily
// We add some data (ACTION), that get send as a (STATE), and we ended up seeing it (VIEW)


import Input from "./Input";

import { useForm } from 'react-hook-form';
import { server_calls } from "../api/server";
import { useDispatch, useStore } from "react-redux";
import { chooseIsbn, chooseTitle, chooseAuthor, chooseLength, chooseGenre, chooseYear } from "../redux/slices/RootSlice";

interface BookFormProps {
  isbn?: string[]
}


const BookForm = ( props: BookFormProps ) => {

  const { register, handleSubmit } = useForm( {} )
  const dispatch = useDispatch(); // this will be the function that we can use our slices
  const store = useStore();

  const onSubmit = ( data: any, event: any) => {
    console.log(`ISBN: ${props.isbn}`);
    console.log(props.isbn)
    console.log(data)
    if (props.isbn && props.isbn.length > 0 ) {
      server_calls.update(props.isbn[0], data)
      console.log(`Updated: ${ data.name } ${ props.isbn }`) //CHANGED {data} to {data.name}
      setTimeout(() => { window.location.reload()}, 10000);
      event.target.reset()

    } else {
      // use dispatch to update our state in our store
      dispatch( chooseIsbn(data.isbn));
      dispatch( chooseTitle(data.title));
      dispatch( chooseAuthor(data.author));
      dispatch( chooseLength(data.length));
      dispatch( chooseGenre(data.genre));
      dispatch( chooseYear(data.year));

      server_calls.create(store.getState())
      setTimeout(() => {window.location.reload()}, 10000);
    }
}

  return (
    <div>
        <form onSubmit={ handleSubmit(onSubmit) }>
          <div>
            <label htmlFor="isbn">Book ISBN</label>
            <Input {...register('isbn') } name='ISBN' placeholder= "Book ISBN" />
          </div>
          <div>
            <label htmlFor="title">Book Title</label>
            <Input {...register('title') } name='Book Title' placeholder= "Book Title" />
          </div>
          <div>
            <label htmlFor="author">Book Author</label>
            <Input {...register('author') } name='Author' placeholder= "Author" />
          </div>
          <div>
            <label htmlFor="length">Book Length</label>
            <Input {...register('length') } name='Length' placeholder= "Length" />
          </div>
          <div>
            <label htmlFor="genre">Book Genre</label>
            <Input {...register('genre') } name='Genre' placeholder= "Genre" />
          </div>
          <div>
            <label htmlFor="year">Book Year</label>
            <Input {...register('year') } name='Year' placeholder= "Year" />
          </div>
          <div className="flex p-1">
            <button
              className = "button-52 flex justify-start m-3  text-arancione hover:text-white mr-4 font-serif "
            >
              Submit
            </button>
          </div>
        </form>
    </div>
  )
}

export default BookForm

