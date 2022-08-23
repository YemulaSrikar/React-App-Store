// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTabDetails, clickToDisplay, isActive} = props
  const {displayText, tabId} = eachTabDetails

  const onClickTxt = () => {
    clickToDisplay(tabId)
  }

  const underlineForTab = isActive ? 'add-border' : 'click-btn'

  return (
    <li className="lists">
      <button className={underlineForTab} type="button" onClick={onClickTxt}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
