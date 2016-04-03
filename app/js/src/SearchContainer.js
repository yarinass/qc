import React from 'react';
import { PageHeader } from 'react-bootstrap';
import SearchBar from './SearchBar';
import ResultTable from './ResultTable';

class SearchContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      query : '',
      results : []
    }
    this.handleUserInput = this.handleUserInput.bind(this);

  }
  handleUserInput(searchQuery, filters){
    this.setState({
      query : searchQuery,
      results : this.props.data
    })
  }
  render(){
    return (
      <div>
        <PageHeader>Query Center Search</PageHeader>
        <SearchBar query={this.state.query} handleUserInput={this.handleUserInput}/>
        <ResultTable data={this.state.results}/>
      </div>
    )
  }
}

export default SearchContainer
