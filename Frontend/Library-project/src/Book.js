/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import "./Main.css"

export default function Book() {

    // Declaring state variables and parameters

    let params = useParams();
    const [book, setBook] = useState({});

    // Fetching the data upon loading the component

    useEffect(() => {
        fetch("http://localhost:8080/articles/" + params.bookID).then(res => res.json()).then(json => setBook(json));
    }, []);

    return (
        <div>
            <header className="header">
                <img src="https://waylandlibrary.org/wp-content/uploads/2015/02/books30.png" className="header-img" alt="default" />
                <Link to="/"><h1 className="header-text">Online Library</h1></Link>
            </header>
            <div style={{ display: 'inline-block' }}>
                <img src={book.src} alt="default" height="600" />
            </div>
            <div style={{ display: 'inline-block', verticalAlign: 'top', marginLeft: '5%' }}>
                <h2>{book.title}</h2>
                <h2>Author: {book.author}</h2>
                <h2>Genre: {book.genre}</h2>
                <p>Ut cursus enim nibh, scelerisque ullamcorper nibh molestie at. Fusce quis congue velit. Duis ipsum sem,<br />
                    luctus et sollicitudin ut, accumsan at quam. Sed maximus nibh et ipsum consequat, vitae varius metus efficitur.<br />
                    Phasellus pharetra pharetra arcu non dapibus. In molestie dignissim tempus. Vivamus sed sagittis ex. Mauris<br />
                    convallis sem.</p>
                <br />
                {book.date !== "NULL" &&
                    <div>
                        <h3>Booked from: {book.date}</h3>
                        <h3>Until: {book.dueDate}</h3>
                        <h5>Booking is currently unavailable.</h5>
                    </div>}

                {book.date === "NULL" &&
                    <div>
                        <h3>This article is available for booking!</h3>
                        <Link to={"/book/" + book.id}><button>Book now.</button></Link>
                    </div>}
            </div>
            <footer className='footer--1'>
                <div className='footer--text'><p>© ALBANSI 2022</p></div>
                <div className='footer--contact'><p>Contact us : +355 6X XXX XXXX</p></div>
            </footer>
        </div>
    )
}