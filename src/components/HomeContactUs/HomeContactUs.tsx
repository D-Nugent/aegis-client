import './HomeContactUs.scss';

export default function HomeContactUs() {
  return (
        <div className="contact-us__wrapper">
          <div className="contact-us__summary">
            <h2 className="contact-us__title">Contact Us</h2>
            <p className="contact-us__msg">
              Still have some questions that our <a href="#faq-intro" className="contact-us__faq-link">FAQ's</a> didn't answer?
              Or are you just wanting to talk? either way submit your query below and we will respond within two business days.
            </p>
            <p className="contact-us__msg --expanded">
              If you are looking for an update on a lost item please enter your reference number above or alternatively
              contact the hotel directly.
            </p>
          </div>
          <form className="contact-form">
            <label htmlFor="contactName" className="contact-form__name">
              Name
            </label>
            <input 
              type="text" 
              name="contactName" 
              id="contactName" 
              className="contact-form__name-field" 
              placeholder="Enter your name here"
            />
            <label htmlFor="contactEmail" className="contact-form__email">
              Email
            </label>
            <input 
              type="email" 
              name="contactEmail" 
              id="contactEmail" 
              className="contact-form__email-field" 
              placeholder="Enter your email here"
            />
            <label htmlFor="contactSubject" className="contact-form__subject">
              Subject
            </label>
            <input 
              type="text" 
              name="contactSubject" 
              id="contactSubject" 
              className="contact-form__subject-field" 
              placeholder="What is your message regarding?"
            />
            <label htmlFor="contactMessage" className="contact-form__message">
              Message
            </label>
            <textarea 
              name="contactMessage" 
              id="contactMessage" 
              className="contact-form__message-field"
              placeholder="Please provide a detailed message so that we may determine how best to assist you"
            >
            </textarea>
            <button type="submit" className="contact-form__submit button--primary">Submit</button>
          </form>
        </div>
  )
}
