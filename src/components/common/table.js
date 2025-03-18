import '../common/styles.css'

const BorderedTable = ({ columns = [], data = [], onEdit, onDelete }) => {
  return (
    <div className="table-container">
      <table className="bordered-table">
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((col, colIndex) => (
                  <td key={colIndex}>{row[col.toLowerCase()]}</td>
                ))}
                <td>
                  <button
                    className="edit-button"
                    onClick={() => onEdit && onEdit(row._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => onDelete && onDelete(row._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length + 1} className="no-data">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default BorderedTable
