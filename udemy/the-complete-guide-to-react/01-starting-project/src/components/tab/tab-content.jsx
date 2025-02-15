import './tab-content.css'
import { EXAMPLES } from '../../data'

const TabContent = ({ tabContent }) => {
  return (
    <div id="tab-content">
      { !tabContent && <p>Please select a topic.</p>}
      { tabContent && (
        <div>
          <h3>{EXAMPLES[tabContent].title}</h3>
          <p>{EXAMPLES[tabContent].description}</p>
          <pre>
            <code>
              {EXAMPLES[tabContent].code}
            </code>
          </pre>
        </div>
      )}
    </div>
  )
}

export default TabContent
