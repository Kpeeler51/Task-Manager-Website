import Dropdown from '../Dropdown/Dropdown'

export default function Home() {    
  return (
    <>
    <header>
        <h1>Task Management Made Easy</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Blanditiis assumenda, dolorum deserunt sequi
            voluptatem cupiditate quo exercitationem sunt labore.
        </p>
    </header>

    <main>
        <section>
            <h2> Goal </h2>
            <Dropdown>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ut ipsum quos consequuntur obcaecati soluta aspernatur aliquid est earum ad. Facilis omnis maxime quaerat quis nam reprehenderit architecto unde animi!
                A atque sapiente reiciendis nisi aperiam ducimus, ipsam veniam vitae tempora vero delectus fugiat magni quod aliquid facere quia maxime voluptatem temporibus nihil possimus sunt? Soluta deleniti quasi facilis tenetur.
                Voluptas magni non, eligendi voluptatibus voluptate aspernatur vero? Exercitationem, odit! Autem eligendi ipsa saepe voluptas ullam. Adipisci inventore autem reprehenderit deserunt repudiandae maxime labore neque! Libero beatae suscipit placeat cupiditate.</p>
            </Dropdown>
        </section>
        <section>
            <h2> Supporting Statement</h2>
            <Dropdown>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ut ipsum quos consequuntur obcaecati soluta aspernatur aliquid est earum ad. Facilis omnis maxime quaerat quis nam reprehenderit architecto unde animi!
                A atque sapiente reiciendis nisi aperiam ducimus, ipsam veniam vitae tempora vero delectus fugiat magni quod aliquid facere quia maxime voluptatem temporibus nihil possimus sunt? Soluta deleniti quasi facilis tenetur.
                Voluptas magni non, eligendi voluptatibus voluptate aspernatur vero? Exercitationem, odit! Autem eligendi ipsa saepe voluptas ullam. Adipisci inventore autem reprehenderit deserunt repudiandae maxime labore neque! Libero beatae suscipit placeat cupiditate.</p>
            </Dropdown>
        </section>
    </main>
  </>
)}