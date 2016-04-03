import React from 'react';
import { Input } from 'react-bootstrap';

class SearchFilters extends Input {
  render(){
    return (
      <div class="col-sm-4">
        <div class="input-group">
          <label class="checkbox-inline"><Input type="checkbox" label="Customers" checked={this.props.customers} /></label>
          <label class="checkbox-inline"><Input type="checkbox" label="Accounts" checked={this.props.accounts} /></label>
          <label class="checkbox-inline"><Input type="checkbox" label="Partners" checked={this.props.partners} /></label>
          <label class="checkbox-inline"><Input type="checkbox" label="Users" checked={this.props.users} /></label>
        </div>
      </div>
    )
  }
}

SearchFilters.defaultProps = {
  customers : true,
  accounts : true,
  partners : false,
  users : true
}

SearchFilters.propTypes = {
  customers : React.PropTypes.boolean,
  accounts : React.PropTypes.boolean,
  partners : React.PropTypes.boolean,
  users : React.PropTypes.boolean
}

export default SearchFilters
