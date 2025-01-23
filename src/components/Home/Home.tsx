import Dropdown from '../Dropdown/Dropdown';
import {Link} from 'react-router';
import './Home.css';
//  Homepage. Website starts here and displays information about the website.
export default function Home() {    
  return (
    <>
    {/* Homepage Title and description. */}
    <header className='home-header'>
        <h1 className='header-title'>Task Management Made Easy</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Blanditiis assumenda, dolorum deserunt sequi
            voluptatem cupiditate quo exercitationem sunt labore.
        </p>
        {/* Secondary link to draw users to task page. */}
        <button className='header-link'><Link to="/tasks">Find out more!</Link></button>
    </header>

    {/* Main content area. Contains website goals and supporting statements. */}
    <main className='home-info'>
        <section className='home-container'>
            <h2 className='main-header'> Goal </h2>
            {/* Dropdown components display their children when opened. More info
            in Dropdown.tsx. */}
            <Dropdown>
                <p className='home-item'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ut ipsum quos consequuntur obcaecati soluta aspernatur aliquid est earum ad. Facilis omnis maxime quaerat quis nam reprehenderit architecto unde animi!
                A atque sapiente reiciendis nisi aperiam ducimus, ipsam veniam vitae tempora vero delectus fugiat magni quod aliquid facere quia maxime voluptatem temporibus nihil possimus sunt? Soluta deleniti quasi facilis tenetur.
                Voluptas magni non, eligendi voluptatibus voluptate aspernatur vero? Exercitationem, odit! Autem eligendi ipsa saepe voluptas ullam. Adipisci inventore autem reprehenderit deserunt repudiandae maxime labore neque! Libero beatae suscipit placeat cupiditate.</p>
            </Dropdown>
        </section>
        <section className='home-container'>
            <h2 className='main-header'> Supporting Statement</h2>
            {/* Dropdown components display their children when opened. More info
            in Dropdown.tsx. */}
            <Dropdown>
                <p className='home-item'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ut ipsum quos consequuntur obcaecati soluta aspernatur aliquid est earum ad. Facilis omnis maxime quaerat quis nam reprehenderit architecto unde animi!
                A atque sapiente reiciendis nisi aperiam ducimus, ipsam veniam vitae tempora vero delectus fugiat magni quod aliquid facere quia maxime voluptatem temporibus nihil possimus sunt? Soluta deleniti quasi facilis tenetur.
                Voluptas magni non, eligendi voluptatibus voluptate aspernatur vero? Exercitationem, odit! Autem eligendi ipsa saepe voluptas ullam. Adipisci inventore autem reprehenderit deserunt repudiandae maxime labore neque! Libero beatae suscipit placeat cupiditate.</p>
            </Dropdown>
        </section>
    </main>
  </>
)}