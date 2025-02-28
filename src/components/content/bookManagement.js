import { useEffect, useState } from 'react'
import BorderedTable from '../common/table'
import Modal from '../common/modal'
import '../content/styles.css'
import { useSelector } from 'react-redux'
import { listBook } from '../../services/bookService'

const Book = () => {
  const books = useSelector((state) => state.books)
  const initialState = {
    title: '',
    author: '',
    year: '',
    genre: '',
    image: '',
  }
  const [isOpen, setIsOpen] = useState(false)
  const [state, setState] = useState(initialState)
  const columns = ['Title', 'Author', 'Year', 'Genre', 'Image']

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await listBook()

        console.log('data', data)
      } catch (error) {
        console.error('Error fetching books:', error)
      }
    }

    fetchBooks() // Call the function when component mounts
  }, [])

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (!state.title || !state.author || !state.year || !state.genre || !state.image) {
      alert('All fields are required.')
      return
    }

    // setBooks([...books, state])
    setState(initialState)
    setIsOpen(false)
  }

  return (
    <div>
      <div className="page-label">📚 Book Management</div>
      <div className='modal-button-wrapper'>
        <div className='open-button' onClick={() => setIsOpen(true)}>Add</div>
      </div>
      <BorderedTable columns={columns} data={books} />

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h3>Add a New Book</h3>
        <div className='add-form'>
          <input type="text" name="title" placeholder="Title" value={state.title} onChange={handleChange} required />
          <input type="text" name="author" placeholder="Author" value={state.author} onChange={handleChange} required />
          <input type="text" name="year" placeholder="Year" value={state.year} onChange={handleChange} required />
          <input type="text" name="genre" placeholder="Genre" value={state.genre} onChange={handleChange} required />
          <input type="text" name="image" placeholder="Image URL" value={state.image} onChange={handleChange} required />
        </div>
        <div className="button-group">
          <div className="cancel-button" onClick={() => setIsOpen(false)}>Cancel</div>
          <div className="save-button" onClick={handleSubmit}>Save</div>
        </div>
      </Modal>
    </div>
  )
}

export default Book
