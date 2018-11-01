import * as React from 'react';
import { Component } from 'react';
import Footer from './Footer'
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

class App extends Component {
  public state = {
    post: '',
    response: '',
    responseToPost: '',
  };

  public componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  public callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }

    return body;
  };

  public handleSubmit = async (e: any) => {
    e.preventDefault();

    const response = await fetch('/api/world', {
      body: JSON.stringify({ post: this.state.post }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const body = await response.text();
    this.setState({ responseToPost: body });
  };

  public handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      post: e.target.value,
    });
  };

  public render() {
    return (
      <div className="App">
        <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={this.handleOnChange}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
