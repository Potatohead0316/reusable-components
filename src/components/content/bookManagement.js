import { useEffect, useState } from 'react'
import BorderedTable from '../common/table'
import Modal from '../common/modal'
import '../content/styles.css'
import { addBook, deleteBook, findBook, listBook, updateBook } from '../../services/bookService'
import LoadingOverlay from '../common/loadingOverlay'
import '@fortawesome/fontawesome-free/css/all.min.css'

const Book = () => {
  const initialState = {
    book: {},
    isOpen: false,
    bookData: [],
    isReload: false,
    loading: true,
    hasFetched: false,
    bookId: null,
    tableHeader: ['Title', 'Author', 'Year', 'Genre', 'Image']
  }

  const [state, setState] = useState(initialState)

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setState((prev) => ({ ...prev, loading: true }))
        const data = await listBook()

        setState((prev) => ({
          ...prev,
          bookData: data?.success && data?.data ? data.data : [],
          hasFetched: true,
          loading: false,
          isReload: false,
        }))
      } catch (error) {
        console.error('Error fetching books:', error)
        setState((prev) => ({ ...prev, loading: false }))
      }
    }

    if (state.isReload || !state.hasFetched) {
      fetchBooks()
    }
  }, [state.isReload, state.hasFetched])

  const handleChange = (e) => {
    setState((prev) => ({
      ...prev,
      book: { ...prev.book, [e.target.name]: e.target.value },
    }))
  }

  const handleEdit = async (id) => {
    setState((prev) => ({ ...prev, isOpen: true}))
    if (id) {
      const find = await findBook(id)
      setState((prev) => ({ ...prev, book: find.data, bookId: id }))
    } else {
      setState((prev) => ({ ...prev, book: {}, bookId: null }))
    }
  }

  const handleDelete = async (id) => {
    setState((prev) => ({ ...prev, loading: true }))
    const removeBook = await deleteBook(id)
    if (!removeBook?.success) {
      alert(removeBook?.message)
    }
    setState((prev) => ({ ...prev, isReload: true }))
  }

  const handleClose = () => {
    setState((prev) => ({ ...prev, isOpen: false, bookId: null }))
  }

  const handleSubmit = async () => {
    if (!state.book.title || !state.book.author || !state.book.year || !state.book.genre || !state.book.image) {
      alert('All fields are required.')
      return
    }

    let result
    if (state.bookId) {
      result = await updateBook(state.bookId, state.book)
    } else {
      result = await addBook(state.book)
    }

    if (!result.success) {
      alert(result?.message)
    }

    setState((prev) => ({
      ...prev,
      isReload: true,
      book: initialState.book,
      isOpen: false,
      bookId: null,
    }))
  }

  const handleSearch = () => {

  }

  console.log('state', state)

  return (
    <div>
      {state.loading && <LoadingOverlay />}
      <div className="page-label">📚 Book Management</div>
      <div className='modal-button-wrapper'>
        <div className='search-field'>
          <input className='search-input' type='text' />
          <div className='search-button' onClick={() => handleSearch()}><i class="fa fa-search" aria-hidden="true"></i></div>
        </div>
        <div className='open-button' onClick={() => handleEdit()}> Add Book</div>
      </div>
      <BorderedTable columns={state.tableHeader} data={state.bookData} onEdit={handleEdit} onDelete={handleDelete} />

      <Modal isOpen={state.isOpen} onClose={handleClose}>
        <h3>{state.bookId ? 'Update Book' : 'Add New Book'}</h3>
        <div className='add-form'>
          <input type="text" name="title" placeholder="Title" value={state?.book?.title || ''} onChange={handleChange} required />
          <input type="text" name="author" placeholder="Author" value={state?.book?.author || ''} onChange={handleChange} required />
          <input type="number" name="year" placeholder="Year" value={state?.book?.year || ''} onChange={handleChange} required />
          <input type="text" name="genre" placeholder="Genre" value={state?.book?.genre || ''} onChange={handleChange} required />
          <input type="text" name="image" placeholder="Image URL" value={state?.book?.image || ''} onChange={handleChange} required />
        </div>
        <div className="button-group">
          <div className="cancel-button" onClick={handleClose}>Cancel</div>
          <div className="save-button" onClick={handleSubmit}>{state?.bookId ? 'Update' : 'Save'}</div>
        </div>
      </Modal>
    </div>
  )
}

export default Book
