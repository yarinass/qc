import React from 'react';
import ReactDOM from 'react-dom';
import {Input} from 'react-bootstrap';

class SearchBar extends React.Component {
  constructor(){
    super();
    this.handleUserInput = this.handleUserInput.bind(this);
  }
  render(){

    return (
      <div>
        <form>
          <Input
          type="text"
          placeholder="Enter Your Search Query"
          ref="queryInput"
          onChange={this.handleUserInput}/>

          <div className="col-sm-4">
            <div className="input-group">
              <label className="checkbox-inline"><Input type="checkbox" label="Customers" checked={this.props.customers} /></label>
              <label className="checkbox-inline"><Input type="checkbox" label="Accounts" checked={this.props.accounts} /></label>
              <label className="checkbox-inline"><Input type="checkbox" label="Partners" checked={this.props.partners} /></label>
              <label className="checkbox-inline"><Input type="checkbox" label="Users" checked={this.props.users} /></label>
            </div>
          </div>

        </form>
      </div>
    )
  }
  handleUserInput(e){
		var searchQuery = React.findDOMNode(this.refs.queryInput.refs.input).value;

    //if the search query is empty do nothing
		if (!searchQuery) {
			return;
		}
    searchQuery = searchQuery.trim();

    //create the query object for parent server side handling and state pushing
    var filters = {
      customers : true,
      accounts : true,
      partners : false,
      users : true
    }

		this.props.handleUserInput(searchQuery, filters);
		return;
  }
}

export default SearchBar
