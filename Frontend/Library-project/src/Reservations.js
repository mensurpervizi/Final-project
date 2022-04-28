/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Main.css'

export default function Reservations() {
    const [input, setInput] = useState();
    const [user, setUser] = useState([]);
    const [reservations, setReservations] = useState([]);
    const [books, setBooks] = useState([]);
    const [book, setBook] = useState({});

    let userReservations = [];

    reservations.forEach(el => {
        books.map(book => {
            if (book.date === el.startDate && book.dueDate === el.endDate) {
                book.id = el.id;
                userReservations.push(book);
            }
        })
    })

    useEffect(() => {
        fetch("http://localhost:8080/articles").then(res => res.json()).then(json => setBooks(json));

    }, []);

    useEffect(() => {
        fetch("http://localhost:8080/articles/" + book.id, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...book, availability: true, date: "NULL", dueDate: "NULL" })
        });
    }, [book]);

    const getData = () => {
        fetch("http://localhost:8080/users/" + input).then(res => res.json()).then(json => setUser(json));
        fetch("http://localhost:8080/booking/" + input).then(res => res.json()).then(json => setReservations(json));
    };

    return (
        <div>
            <header className="header">
                <img src="https://i.pinimg.com/originals/5f/fb/de/5ffbdeceb84323decd76084b2efca958.png" className="header-img" alt="default" />
                <Link to="/"><h1 className="header-text">LIBRARY APPLICATION</h1></Link>
            </header>
            <div style={{ padding: '20px' }}>
                <h1>Check your reservations</h1>
                <label>Enter your user ID</label>
                <br />
                <input type="number" onChange={(e) => setInput(e.target.value)}></input>
                <button style={{ margin: '20px', width: '150px' }} onClick={getData}>Get reservations</button>
                <button onClick={() => console.log(book)}>test</button>
                {user.length > 0 &&
                    <div>
                        <h2>Hello, {user[0].name}!</h2>
                        <h3>Your current reservations are: </h3>
                        <ul>
                            {userReservations.map(el => <div key={el.id}><li key={el.id}>{el.title}, {el.id}<button onClick={() => {
                                books.map(elem => {
                                    if (elem.title === el.title) {
                                        setBook(elem);
                                        console.log(elem);
                                    }
                                });

                                fetch("http://localhost:8080/booking/" + el.id, { method: 'DELETE' });
                            }} style={{ width: '1.5%', height: '3%', position: 'absolute', left: '25%' }}>x</button></li></div>)}
                        </ul>
                    </div>
                }
            </div>
            <footer className='footer--1'>
                <div className='footer--text'><p>©All rights reserved ALBANSI 2022</p></div>
                <div className='footer--contact'><p>Contact us : +355 6X XXX XXXX</p></div>
            </footer>
        </div>
    )
}