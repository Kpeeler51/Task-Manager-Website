
export default function ContactForm() {
  return (
    <div>
        <form>
            <div>
            <input type="text" placeholder="First Name"/>
            <input type="text" placeholder="Last Name"/>
            </div>
            <div>
            <input type="email" placeholder="Email"/>
            </div>
            <div>
            <textarea placeholder="Message"></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
