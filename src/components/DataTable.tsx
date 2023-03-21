import { useState } from 'react';
import { server_calls } from '../api/server';
import Modal from "./Modal";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetData } from '../custom-hooks/FetchData';
import "../index.css";

const columns: GridColDef[] = [
    { field: 'isbn', headerName: "ISBN", width: 90 },
    { field: 'title', headerName: "Title", flex: 1},
    { field: 'author', headerName: "Author", flex: 1},
    { field: 'length', headerName: "Length", flex: 1},
    { field: 'genre', headerName: "Genre", flex: 1},
    { field: 'year', headerName: "Year", flex: 1},
];



function DataTable( ) {
    const [ open, setOpen ] = useState(false);
    const { bookData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])
    // TODO: write usegetdata hook and selection model state change content

    const handleOpen = () =>{
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => { window.location.reload() }, 10000)
    }

  return (
    <div className='bg-azzurro bg-cover'>
        {/* CHANGED, ADDED isbn... */}
        <Modal 
            isbn={ selectionModel }
            open = { open }
            onClose = { handleClose }
        />
        <div className="flex flex-row">
            <div>
                <button
                    className="button-52 p-3 m-5 bg-azzurro-400 justify-items-center text-arancione font-serif"
                    onClick = { () => handleOpen() }
                >
                    Add New Book
                </button>
                <button
                    className="button-52 p-3 m-5 bg-azzurro-400 justify-items-center text-arancione font-serif"
                    onClick = { handleOpen }
                >
                    Update Book
                </button>
                <button
                    className="button-52 p-3 m-5 bg-azzurro-400 justify-items-center text-arancione font-serif"
                    onClick= { deleteData }
                >
                    Delete Book
                </button>
            </div>
        </div>
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
            style = {{ height: 400, width: '110%' }}
        >
            <h2 className="p-3 flex justify-center text-arancione my-2 rounded">MY BOOKS</h2>
            <DataGrid rows = { bookData } columns = { columns } rowsPerPageOptions={[5]}
            checkboxSelection = { true } 
            getRowId={( row ) => row.isbn}
            onSelectionModelChange = {( item: any) => {
                setSelectionModel(item)
            }}
            className = "bg-arancione ml-90"
            />
        </div>
    </div>
  )
}

export default DataTable
