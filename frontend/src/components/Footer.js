import '../styles/footer.css'
function Footer() {
  return (
    <footer id="footer" >
       <div className='colFoot'>
           <h2>What we do!</h2>
           <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, </span>
           {/* <span>perheaing</span>
           <span>perheaing</span> */}
       </div>
       <div className='colFoot'>
           <h2>Contact</h2>
           <span>Career</span>
           <span>Contact Us</span>
           <span>Advise</span>
       </div>
       <div className='colFoot'>
           <h2>Explore</h2>
           <span>Sitemap </span>
           <span>Testimonials</span>
           <span>Feedback</span>
       </div>
    </footer>
  )
}

export default Footer