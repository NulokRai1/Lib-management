import bookPic from '../assets/pic1.jpg'

function BookCard({ book, borrowBook }) {
    return (
      <div className="book-card">
        <div className='image-container'>
        <img src={bookPic} height={100} width={100}/>
        </div>
        <div className='book-info'>
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Genre: {book.genre}</p>
          {/* <p>Status: {book.isAvailable ? "Available" : "Borrowed"}</p>
          {book.isAvailable && <button onClick={() => borrowBook(book.id)}>Borrow</button>} */}
        </div>
        
      </div>
    );
  }
  
  export default BookCard;
  