import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import "./Main.css";

export default function Booking() {

    const [form, setForm] = useState({ "id": 0, "uid": undefined, "startDate": "", "endDate": "" });
    const [book, setBook] = useState({});
    const [len, setLen] = useState(0);
    const params = useParams();

    useEffect(() => {
        fetch("http://localhost:8080/articles/" + params.bookID).then(res => res.json()).then(json => setBook(json));
        fetch("http://localhost:8080/booking").then(res => res.json()).then(json => setLen(json.length));
    }, [params.bookID]);

    useEffect(() => {
        setForm({ ...form, id: len + 1 });
    }, [form, len])

    return (
        <div>
            <header className="header">
                <img src="https://waylandlibrary.org/wp-content/uploads/2015/02/books30.png" className="header-img"
                    alt="default" />
                <Link to="/"><h1 className="header-text">Online Library</h1></Link>
            </header>
            <div style={{ padding: '10px', margin: '10px' }}>
                <h2>Create a reservation</h2>
                <img src={book.src} alt="default" height="250px" />
                <h3>{book.title} by {book.author}</h3>
                <form width="300px">
                    <label>UID </label>
                    <input type="number" onChange={(e) =>
                        setForm({
                            ...form, uid: parseInt(e.target.value)
                        })}
                        value={form.uid} style={{ position: 'absolute', right: '65%' }}></input>
                    <br />
                    <label>Starting date (in String format) </label>
                    <input onChange={(e) => {
                        setForm({ ...form, startDate: e.target.value })
                        setBook({ ...book, date: e.target.value })
                    }}
                        value={form.startDate}
                        style={{ position: 'absolute', right: '65%' }}></input>
                    <br />
                    <label>Ending date (in String format) </label>
                    <input onChange={(e) => {
                        setForm({ ...form, endDate: e.target.value })
                        setBook({ ...book, dueDate: e.target.value })
                    }} 
                        value={form.endDate}
                        style={{ position: 'absolute', right: '65%' }}></input>
                    <br />
                    <br />
                    <input onClick={() => console.log(book)} type="button" name="button" value="test"></input>
                    <input onClick={() => {
                        if (form.uid === undefined || form.startDate === "" || form.endDate === "") {
                            alert("One of the required fields is empty!");
                        } else {
                            fetch("http://localhost:8080/booking", {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify(form)
                            })
                                .then((prevState) => setBook({...book, availability: !prevState}))
                                .then(alert("Reservation has been made!"));
                            fetch("http://localhost:8080/articles/" + params.bookID, {
                                method: 'PUT',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify(book)  
                            })
                                .then(console.log("why yes, it actually works"));
                        }
                    }} type="button" value="Create reservation"></input>
                </form>
            </div>
            <footer className='footer--1'>
                <div className='footer--text'><p>©ALBANSI 2022</p></div>
                <div className='footer--contact'><p>Contact us : +355 6X XXX XXXX</p></div>
            </footer>
        </div>
    )
}