/* eslint-disable array-callback-return */
import './App.css';
import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
      books: [],
      booksFound: [],
      filterType: "title"
    };

    this.handleChange = this.handleChange.bind(this);
    this.getData = this.getData.bind(this);
    this.filterData = this.filterData.bind(this);
  }

  handleChange(e) {
    this.setState({filter: e.target.value});
    this.filterData();
  }

  componentDidMount() {
    this.getData();
  }

  filterData() {
    const arr = [...this.state.books];
    const filteredArr = []

    switch(this.state.filterType) {
      case "title":arr.map(book => {
        if(book.title.toLowerCase().includes(this.state.filter.toLowerCase()))
          filteredArr.push(book);
      }); break;
      case "author":arr.map(book => {
        if(book.author.toLowerCase().includes(this.state.filter.toLowerCase()))
          filteredArr.push(book);
      }); break;
      case "genre":arr.map(book => {
        if(book.genre.toLowerCase().includes(this.state.filter.toLowerCase()))
          filteredArr.push(book);
      }); break;
      case "type":arr.map(book => {
        if(book.type.toLowerCase().includes(this.state.filter.toLowerCase()))
          filteredArr.push(book);
      }); break;
      case "availability":arr.map(book => {
        if(book.availability.toString().toLowerCase().includes(this.state.filter.toLowerCase()))
          filteredArr.push(book);
      }); break;
       default: console.log("bruh")
      }
      arr.map(book => {
      if(book.toLowerCase().includes(this.state.filter.toLowerCase()))
        filteredArr.push(book);
    })

    this.setState({booksFound: filteredArr});
  }

  async getData() {
    const response = await fetch("http://localhost:8080/articles");
    try {
      const json = await response.json();
      this.setState({books: json, booksFound: json});
      return console.log(this.state.books);
    } catch(error) {
      console.log('Error happened here!')
      console.error(error)
    }
  }


  render() {
    return(
    <div>
      <h1>Library application</h1>
      <input type="text" value={this.state.filter} onChange={this.handleChange}></input>
      <select onChange={(event) => {
        this.setState({filterType: event.target.value})
      }} name="filterType">
        <option value="title">Filter by title</option>
        <option value="author">Filter by author</option>
        <option value="genre">Filter by genre</option>
        <option value="type">Filter by type</option>
        {/* <option value="availability">Filter by availability</option> */}
      </select>
      <button onClick={() => {
        console.log(this.state.filterType)
      }}>test</button>
      <ul>
        {this.state.booksFound.map(book => <li key={book.id}>{book.title}</li>)}
      </ul>
    </div>
    )
  }
}