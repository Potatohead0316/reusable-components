import { useEffect, useState } from 'react'
import BorderedTable from '../common/table'
import Modal from '../common/modal'
import '../content/styles.css'
import { addBook, deleteBook, findBook, listBook, updateBook } from '../../services/bookService'
import LoadingOverlay from '../common/loadingOverlay'

const Book = () => {
  const initialState = {
    title: '',
    author: '',
    year: '',
    genre: '',
    image: '',
  }
  const columns = ['Title', 'Author', 'Year', 'Genre', 'Image', 'Actions']
  const [state, setState] = useState(initialState)
  const [isOpen, setIsOpen] = useState(false)
  const [bookData, setBookData] = useState([])
  const [isReload, setIsReload] = useState(false)
  const [bookId, setBookId] = useState(null)
  const [loading, setLoading] = useState(true)
  const [hasFetched, setHasFetched] = useState(false)

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true)
        const data = await listBook()

        if (data?.success && data?.data) {
          setBookData(data.data)
        } else {
          setBookData([])
        }
        setHasFetched(true)
      } catch (error) {
        console.error('Error fetching books:', error)
      }
      setLoading(false)
      setIsReload(false)
    }

    if ((isReload || !hasFetched)) {
      fetchBooks()
    }
  }, [isReload, hasFetched])

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleEdit = async (id) => {
    setIsOpen(true)
    setBookId(id)
    const find = await findBook(id)
    setState(find.data)
  }

  const handleDelete = async (id) => {
    const removeBook = await deleteBook(id)

    if (!removeBook?.success) {
      alert(removeBook?.message)
    }

    setIsReload(true)
  }

  const handleSubmit = async () => {
    if (!state.title || !state.author || !state.year || !state.genre || !state.image) {
      alert('All fields are required.')
      return
    }

    let result;

    if (bookId) {
      result = await updateBook(bookId, state)
    } else {
      result = await addBook(state)
    }

    if (!result.success) {
      alert(result?.message)
    }

    setIsReload(true)
    setState(initialState)
    setIsOpen(false)
    setBookId(null)
  }

  return (
    <div>
      {loading && <LoadingOverlay />}
      <div className="page-label">📚 Book Management</div>
      <div className='modal-button-wrapper'>
        <div className='open-button' onClick={() => setIsOpen(true)}>Add</div>
      </div>
      <BorderedTable columns={columns} data={bookData} onEdit={handleEdit} onDelete={handleDelete} />

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h3>{bookId ? 'Update Book' : 'Add New Book'}</h3>
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
