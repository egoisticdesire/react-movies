import React from 'react';

class Search extends React.Component {
   state = {
      search: '',
      type: 'all',
   };

   handleFilter = (event) => {
      this.setState(
         () => ({ type: event.target.dataset.type }),
         () => {
            this.props.searchMovie(this.state.search, this.state.type);
         }
      );
   };

   handleKey = (event) => {
      if (event.key === 'Enter') {
         this.props.searchMovie(this.state.search, this.state.type);
      }
   };

   render() {
      return (
         <div className='row'>
            <div className='col s12'>
               <div className='input-field'>
                  <input
                     className='validate'
                     id='Search_inline'
                     type='search'
                     value={this.state.search}
                     onChange={(e) => this.setState({ search: e.target.value })}
                     onKeyDown={this.handleKey}
                  />
                  <label for='Search_inline'>Search</label>
                  <button
                     className='btn search-btn'
                     onClick={() =>
                        this.props.searchMovie(
                           this.state.search,
                           this.state.type
                        )
                     }
                  >
                     Search
                  </button>
               </div>
               <div>
                  <label>
                     <input
                        className='with-gap'
                        name='type'
                        type='radio'
                        data-type='all'
                        onChange={this.handleFilter}
                        checked={this.state.type === 'all'}
                     />
                     <span>All</span>
                  </label>
                  <label>
                     <input
                        className='with-gap'
                        name='type'
                        type='radio'
                        data-type='movie'
                        onChange={this.handleFilter}
                        checked={this.state.type === 'movie'}
                     />
                     <span>Movies</span>
                  </label>
                  <label>
                     <input
                        className='with-gap'
                        name='type'
                        type='radio'
                        data-type='series'
                        onChange={this.handleFilter}
                        checked={this.state.type === 'series'}
                     />
                     <span>Series</span>
                  </label>
               </div>
            </div>
         </div>
      );
   }
}
export { Search };
