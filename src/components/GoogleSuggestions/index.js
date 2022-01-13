import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeInputElement = event => {
    this.setState({searchInput: event.target.value})
  }

  onSearchContent = suggestionItem => {
    this.setState({searchInput: suggestionItem})
  }

  onClickContent = suggestionString => {
    this.setState({searchInput: suggestionString})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchedSuggestionsList = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput),
    )

    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-icon"
        />
        <div className="search-container">
          <div className="search-bar">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              value={searchInput}
              className="input"
              onChange={this.onChangeInputElement}
            />
          </div>
          <ul className="suggestion-items-container">
            {searchedSuggestionsList.map(each => (
              <SuggestionItem
                suggestion={each.suggestion}
                key={each.id}
                onSearchContent={this.onSearchContent}
                onClickContent={this.onClickContent}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
