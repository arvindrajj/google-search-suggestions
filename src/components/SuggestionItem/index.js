import './index.css'

const SuggestionItem = props => {
  const {suggestion, onSearchContent, onClickContent} = props

  const searchContent = () => {
    onSearchContent(suggestion)
  }
  const clickContent = () => {
    onClickContent(suggestion)
  }

  return (
    <li className="suggestion-item">
      <p className="suggestion" onClick={clickContent}>
        {suggestion}
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={searchContent}
      />
    </li>
  )
}

export default SuggestionItem
