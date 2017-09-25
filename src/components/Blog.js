import React from 'react';
import { connect } from 'react-redux';

const Blog = ({ id, name, body, complete, dispatch }) => (
  <div
    onClick={() => dispatch({ type: 'TOGGLE_BLOG', id })}
    style={ complete ? { textDecoration: 'line-through', color: 'grey' } : {} }
  >
    <h1>{name}</h1>
    <h2>{body}</h2>
  </div>
)

export default connect()(Blog)
