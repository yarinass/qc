import React from 'react';
import SearchContainer from './SearchContainer'

class App extends React.Component {
  render(){
      return (
        <div>
          <SearchContainer data={this.props.data}></SearchContainer>
        </div>
      )
  }
}

export default App
