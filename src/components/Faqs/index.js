// Write your code here.

import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="app-container">
      <div className="faqs-card">
        <h1 className="faqs-title">FAQs</h1>
        <ul className="faqs-list">
          {faqsList.map(eachFaq => (
            <FaqItem eachFaq={eachFaq} key={eachFaq.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
