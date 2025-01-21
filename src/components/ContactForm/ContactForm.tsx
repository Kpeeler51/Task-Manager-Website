
export default function ContactForm() {
  return (
    <div>
        <form>
            <div className="nameform">
            <input type="text" placeholder="First Name"/>
            <input type="text" placeholder="Last Name"/>
            </div>
            <div className="mailform">
            <input type="email" placeholder="Email"/>
            </div>
            <div className="messageform">
            <textarea placeholder="Message"></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
