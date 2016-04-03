import React from 'react';
import { Input } from 'react-bootstrap';

class SearchInput extends React.Component {
  render(){
    return (
      <div>
        <Input
        type="text"
        value={this.props.query}
        placeholder="Enter Your Search Query"
        value={this.props.query}
        ref="queryInput"
        onChange={this.handleChange}/>
      </div>
    )
  }

  handleChange(){
    this.props.onUserInput(
      this.refs.queryInput.value
    );
  }
}

SearchInput.propTypes = {
  query : React.PropTypes.string
}


export default SearchInput
