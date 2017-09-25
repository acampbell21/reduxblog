import React, { Component } from 'react';
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList';
import Footer from './components/Footer';

class App extends Component {
 render() {
 return (
   <div className="App">
     <BlogForm />
     <BlogList />
     <Footer />
    </div>
   );
  }
}

export default App;
