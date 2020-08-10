import React, { Component } from 'react';
import { CardList } from "../card-list/card-list.component";
import { SearchBox } from "../search-box/search-box.component";
import { Pagination } from 'semantic-ui-react';


class EpisodeList extends Component {
  constructor() {
    super();

    this.state = {
      episodes: [],
      searchField: "",
      pageNo: 1,
      totalPages: null
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.loadEpisodes();
  }

  loadEpisodes = () => {
    const { pageNo } = this.state;
    const url = `https://rickandmortyapi.com/api/episode/?page=${pageNo}`;

    fetch(url)
      .then((response) => response.json())
      .then((json) =>
        this.setState({
          episodes: [...json.results],
          totalPages: json.info.pages,
        })
      );
  };
    
  handleChange(e) {
    this.setState({ searchField: e.target.value })
  };


  render() {
    const {episodes, searchField, pageNo, totalPages} = this.state;
    const filteredEpisodes = episodes.filter(episode => 
      episode.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className='App'>
        <SearchBox 
          placeholder='Search Episodes'
          handleChange ={this.handleChange}
        />
        <CardList episodes={filteredEpisodes} />
        <Pagination
          onPageChange={(event, data) =>
            this.setState({ pageNo: data.activePage }, this.loadEpisodes)
          }
          defaultActivePage={1}
          activePage={pageNo}
          siblingRange={1}
          totalPages={totalPages}
        />
      </div>
    );
  }
}

export default EpisodeList;