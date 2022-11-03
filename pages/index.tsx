import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import profileIMG from '../img/Profile.jpg'
import { FacebookOutlined, GitHub, Instagram, LinkedIn, SimCardDownload } from '@mui/icons-material';
import { style } from '@mui/system';




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
        <div><a href="#">About</a></div>
        <div><a href="#">Qualifications</a></div>
        <div><a href="#">Tech Stack</a></div>
        <div><a href="#">Works</a></div>
        <div><a href="#">Contact</a></div>
      </div>

      <div className={styles.bg_blend}>
      </div>
      <div className={styles.context}>
        <div className={styles.intro_container}>
          <div className={styles.profile_circle}>
            <Image src={profileIMG} objectFit="contain" layout='fill' alt='Profile' />
            {/* <span>S12</span> */}
          </div>

          <div className={styles.hello}>Hello, I'm</div>
          <div className={styles.name}> {`<Sos Sokleng />`}</div>
          <div className={styles.role}>Digital Maketing Specialist & Front-End Developer</div>
          <div className={styles.links_container}>
            <button className={styles.link_btn}>
              <a href="https://www.facebook.com/sossokleng">
                <FacebookOutlined fontSize='large' />
              </a>
            </button>

            <button className={styles.link_btn}>
              <a href="https://www.instagram.com/soklengsos">
                <Instagram fontSize='large' />
              </a>
            </button>

            <button className={styles.link_btn}>
              <a href="https://github.com/SosSokleng99">
                <GitHub fontSize='large' />
              </a>
            </button>
            <button className={styles.link_btn}>
              <a href="https://www.linkedin.com/in/sokleng-sos-0346a4152">
                <LinkedIn fontSize='large' />
              </a>
            </button>
            <button className={styles.link_btn}>
              <a href="https://www.facebook.com/sossokleng">
                <SimCardDownload fontSize='large' />
              </a>
            </button>
          </div>
          <div className={styles.arrow_cta}></div>
        </div>
        {/* <h2>Digital Maketing Specialist & Front-End Developer</h2> */}

        <div className={styles.context_contents}>

          <div className={styles.about_container}>
            <h2>About</h2>
            <p>
              A hard working, self-driven and fast learner individual. Able to work independently and part of a team. Experinced in Digital Marketing, Wordpress, SEO, extensive knowledge
              in UI/UX prototyping, and Website Front-End Develpment.
            </p>

          </div>
          <div className={styles.stacks_container}>
            <h2>Tech Stack</h2>
            <div className={styles.stacks_wrapper}>
              <div className={styles.stacks_card}><span>Html, Css</span></div>
              <div className={styles.stacks_card}><span>JavaScript, TypeScript, Node JS</span></div>
              <div className={styles.stacks_card}><span>React JS, Next JS</span></div>
              <div className={styles.stacks_card}><span>Firebase, Supabase</span></div>
              <div className={styles.stacks_card}><span>Wordpress</span></div>
              <div className={styles.stacks_card}><span>SEO</span></div>
            </div>
          </div>

          <div className={styles.works_container}>
            <h2>Works</h2>

            <div className={styles.line_break}></div>

            <div className={styles.work_card}>
              <strong>Building Hulu Clone Web App</strong>
              <p className={styles.p_ws}> 2022 </p>
              <p>Personal Learning Project</p>
              <ul>
                <li>Working to create an aesthetic, user-friendly and fully responsiveness Movie Website inspired by Hulu.com</li>
                <li>Technology employed were HTML5, Pure CSS3 and Nextjs</li>
                <li><span>Check out my Demo:</span> <a href="">https://huluc2.vercel.app/</a></li>
              </ul>

            </div>

            <div className={styles.line_break}></div>

            <div className={styles.work_card}>
              <strong>Digital Marketing Specialist | vKirirom Pine Resort  </strong>
              <p className={styles.p_ws}>2021 - Present</p>
              <p>Started a digital agency building websites and marketing for
                local businesses. Mostly Wordpress sites with small modifications to
                themes.</p>
              <ul>
                <li>Leading and training internship students for producing marketing materials for the resort.</li>
                <li>Worked a Video Creator, Photographer, Graphic Designer, and Writer for producing marketing materials for the resort Social Media Presences</li>
                <li>Responsible for update contents, organized SEO for Local and Global Scale and Wordpress works such as customize theme and using plugins</li>
                <li>Responsible for resort Online Travel Agents  presence like Agoda, Booking.com, and Trip.com</li>
                <li>Preparing weekly social media marketing campagin reports</li>
                <li>Running Meta paid advertisment for the resort using Meta Ads Manager on the locale scale</li>
              </ul>
            </div>

            <div className={styles.line_break}></div>

            <div className={styles.work_card}>
              <strong>Social Marketing Intern | Kirirom Institute of Technology</strong>
              <p className={styles.p_ws}>2018 - 2020</p>
              <p>Worked as an Team leader in interntership under my institute internship program focused on running their Facebook marketing to promote institute Sponsorship Program to Locale students in order to register and join the their Extrance Exam.</p>
              <ul>
                <li>Being a leader, motivator, planner and step foot in to help the team to producing marketing materials such as Video, Poster, Photograph and Written word.</li>
                <li>Prepare weekly and quarter Facebook marketing KPI Reports and present it to Internship Coordinator.</li>
              </ul>

            </div>

            {/* <div className={styles.line_break}></div> */}


          </div>

          <div className={styles.contact_container}>
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
