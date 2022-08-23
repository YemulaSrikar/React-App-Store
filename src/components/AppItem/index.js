// Write your code here

import './index.css'

const AppItem = props => {
  const {eachAppDetails} = props
  const {imageUrl, appName} = eachAppDetails
  return (
    <li className="apps-lists">
      <img src={imageUrl} className="apps-imgs" alt={appName} />
      <p className="imag-desc">{appName}</p>
    </li>
  )
}

export default AppItem
