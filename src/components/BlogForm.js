import React from 'react';
import { connect } from 'react-redux';

class BlogForm extends React.Component {
  state = { name: '', body: '' }

  handleSubmit = (e) => {
    const { name, body } = this.state;
    const { dispatch, nextId } = this.props;
    e.preventDefault();
    dispatch({
      type: 'ADD_BlOG',
      blog: { name, body, id: this.props.nextId }
    });
    dispatch({ type: 'INC_ID' })
    this.setState({ name: '', body: '' })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    let input;
    const { dispatch, nextId } = this.props;
    return (
      <div>
      <h3>Add A Blog</h3>
      <form onSubmit={this.handleSubmit}>
        <label>Name</label>
        <input
          name='name'
          value={this.state.name}
          placeholder='Name'
          onChange={this.handleChange}
        />

        <label>Body</label>
        <input
          name='body'
          value={this.state.body}
          placeholder='Body'
          onChange={this.handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return { nextId: state.nextId }
}

export default connect(mapStateToProps)(BlogForm);
