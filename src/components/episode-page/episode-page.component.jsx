import React, { Component } from 'react';
import { CardList } from "../card-list/card-list.component";
import { SearchBox } from "../search-box/search-box.component";


class EpisodeList extends Component {
  constructor() {
    super();

    this.state = {
      episodes: [],
      searchField: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  fetchUsers() {
    fetch(`https://rickandmortyapi.com/api/episode/`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          episodes: data.results,
          isLoading: false,
        })
        )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchUsers();
  }
  
    
  handleChange(e) {
    this.setState({ searchField: e.target.value })
  };
  
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }

  render() {
    const {episodes, searchField} = this.state;
    const filteredEpisodes = episodes.filter(episode => 
      episode.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className='App'>
        <SearchBox 
          placeholder='Search Episodes'
          handleChange ={this.handleChange}
        />
        <CardList episodes={filteredEpisodes} />
      </div>
    );
  }
}

export default EpisodeList;