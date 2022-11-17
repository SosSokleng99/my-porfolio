import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import profileIMG from '../img/Profile.jpg'
import { FacebookOutlined, GitHub, Instagram, LinkedIn, SimCardDownload } from '@mui/icons-material';
import Tooltip from '@mui/material/Tooltip';

import { style } from '@mui/system';

import { Link } from 'react-scroll'





export default function Home() {
  return (

    <>
      <div className={styles.area} >
        <ul className={styles.circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div >

      <div className={styles.navigate_links}>
        <div><a href="#"> <Link to="about" spy={true} smooth={true}>About</Link></a></div>
        <div><a href="#"><Link to="stacks" spy={true} smooth={true}>Stacks</Link></a></div>
        <div><a href="#"><Link to="works" spy={true} smooth={true}>Works</Link></a></div>
        <div><a href="#"><Link to="contact" spy={true} smooth={true}>Contact</Link></a></div>
      </div>

      <div className={styles.bg_blend}>
      </div>
      <div className={styles.context}>
        <div className={styles.intro_container}>
          <div className={styles.profile_circle}>
            <Image src={profileIMG} objectFit="contain" layout='fill' alt='Profile' />
          </div>

          <div className={styles.hello}>Hello, I'm</div>
          <div className={styles.name}> {`<Sos Sokleng />`}</div>
          <div className={styles.role}>Digital Maketing Specialist & Front-End Developer</div>
          <div className={styles.links_container}>

            <Tooltip title='Facebook'>
              <button className={styles.link_btn}>
                <a href="https://www.facebook.com/sossokleng">
                  <FacebookOutlined fontSize='large' />
                </a>
              </button>
            </Tooltip>

            <Tooltip title='Instagram'>
              <button className={styles.link_btn}>
                <a href="https://www.instagram.com/soklengsos">
                  <Instagram fontSize='large' />
                </a>
              </button>
            </Tooltip>

            <Tooltip title='GitHub'>
              <button className={styles.link_btn}>
                <a href="https://github.com/SosSokleng99">
                  <GitHub fontSize='large' />
                </a>
              </button>
            </Tooltip>

            <Tooltip title='Linkedin'>
              <button className={styles.link_btn}>
                <a href="https://www.linkedin.com/in/sokleng-sos-0346a4152">
                  <LinkedIn fontSize='large' />
                </a>
              </button>
            </Tooltip>

            <Tooltip title='Download my CV'>
              <button className={styles.link_btn}>
                <a href="https://firebasestorage.googleapis.com/v0/b/instagram-firebase-25884.appspot.com/o/SOS%20SOKLENG%20CV%20-%20November%202022.pdf?alt=media&token=2576e8a8-15d0-42bd-aabc-436e68c6f7d4">
                  <SimCardDownload fontSize='large' />
                </a>
              </button>
            </Tooltip>

          </div>


          <Link to="about" spy={true} smooth={true}>
            <Tooltip title='More about me'>
            <div className={styles.hover_arrow_bg}>
               <div className={styles.arrow_cta}></div>
            </div>

            </Tooltip>
          </Link>
        </div>
        {/* <h2>Digital Maketing Specialist & Front-End Developer</h2> */}

        <div className={styles.context_contents}>

          <div id='about' className={styles.about_container}>
            <h2>About</h2>
            <p>
              A hard working, self-driven and fast learner individual. Able to work independently and part of a team. Experinced in Digital Marketing, Wordpress, SEO, extensive knowledge
              in UI/UX prototyping, and Website Front-End Develpment.
            </p>

          </div>
          <div id='stacks' className={styles.stacks_container}>
            <h2>Stacks</h2>
            <div className={styles.stacks_wrapper}>
              <div className={styles.stacks_card}><span>Html, Css</span></div>
              <div className={styles.stacks_card}><span>TailwindCss, Bootstrap</span></div>
              <div className={styles.stacks_card}><span>JavaScript, TypeScript, Node JS</span></div>
              <div className={styles.stacks_card}><span>Vue JS, Vuex</span></div>
              <div className={styles.stacks_card}><span>React JS, Next JS</span></div>
              <div className={styles.stacks_card}><span>Firebase, Supabase</span></div>
              <div className={styles.stacks_card}><span>Wordpress</span></div>
              <div className={styles.stacks_card}><span>SEO</span></div>
            </div>
          </div>

          <div id='works' className={styles.works_container}>
            <h2>Works</h2>

            <div className={styles.line_break}></div>

            <div className={styles.work_card}>
              <strong>Building Movie Trailer Web Application | Personal Project</strong>
              <p className={styles.p_ws}>October 2022 </p>
              <p>Genuinely interested in Next JS Framework and would like equip my skill in Front-end technologies</p>
              <ul>
                <li>Design and Building an aesthetic, user-friendly and fully responsiveness user interface Movie Trailer Web application</li>
                <li>Technology employed were HTML5, Pure CSS3 and Nextjs with TypeScript</li>
                <li><span>Check out the UI/UX Design:</span> <a href="https://www.figma.com/file/r1wXRoUxq0OzQ3HssO5BLI/HULU-CLONE?node-id=0%3A1&t=8apkiPLCrBoAZStW-1">Figma</a></li>
                <li><span>Check out my Demo:</span> <a href="">https://huluc2.vercel.app/</a></li>
              </ul>

            </div>

            <div className={styles.line_break}></div>

            <div className={styles.work_card}>
              <strong>Digital Marketing Specialist | vKirirom Pine Resort  </strong>
              <p className={styles.p_ws}>January 2021 - Present</p>
              <p>Work as an assisant to Business Development Manager of the resort responsible for managing resort’s Wordpress Website works, digital marketing and other digital related works.</p>
              <ul>
                <li>Responsible for Wordpress works such as customize theme and using plugins</li>
                <li>Organized resort’s website SEO  campaigns on a locale and global scale.</li>
              </ul>
            </div>

            <div className={styles.line_break}></div>

            <div className={styles.work_card}>
              <strong>Front-end Development Internship | vKirirom Pine Resort</strong>
              <p className={styles.p_ws}>January 2019 - August 2019</p>
              <p>Worked as a part of the team in internship Project building Hotel Booking Website for vKirirom Pine Resort.</p>
              <ul>
                <li>Building User Interface Component for the Website</li>
                <li>Technology employed Vue JS,  Bootstrap and Vuex for state management</li>
                <li>Used Source Code Control Tool Github</li>
              </ul>

            </div>

            {/* <div className={styles.line_break}></div> */}


          </div>

          <div id='contact' className={styles.contact_container}>
            <h2>Contact</h2>
            <div className={styles.contact_list}>
              <div className={styles.stacks_card}><span>+855 86 322 200</span></div>
              {/* <div className={styles.stacks_card}><span>Html, Css</span></div> */}
              <div className={styles.stacks_card}><span>sos.sokleng@gmail.com</span></div>
            </div>

          </div>

          <div className={styles.copyright_container}>
            <div>@Copyright ©2022 Sos Sokleng</div>
          </div>

        </div>

      </div>
    </>
  )
}
