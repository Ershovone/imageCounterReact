import React, { Component } from 'react';
import '../App.css';
import Image from './Image'

class App extends Component {
  constructor() {
    super();
    this.state = {
      urls: [],
      count: 0
    }
    this.addImage = this.addImage.bind(this)
    this.removeImage = this.removeImage.bind(this)
  }

  addImage() {
    fetch('https://picsum.photos/75/?random')
      .then(response => response.url)
      .then(url => {
        this.setState({
          urls: [...this.state.urls, url],
          count: this.state.count + 1
        })
      })
      .catch(error => console.warn(error))
  }

  removeImage() {
    if (this.state.count == 0) {
      return
    } else {
      this.setState({
        urls: this.state.urls.slice(0,-1),
        count: this.state.count - 1
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div className="image-container">
           {this.state.urls.map((url, i) => <Image key={i} dist={url} />)}
        </div>
        <div className="count">{this.state.count}</div>
        <div className="button button-plus" onClick={this.addImage}></div>
        <div className="button button-minus" onClick={this.removeImage}></div>
      </div>
    );
  }
}

export default App;
