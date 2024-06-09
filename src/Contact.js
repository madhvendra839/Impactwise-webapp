import NavInshorts from "./components/NavInshorts"
import './contact.css';



function Contact(){
    return(

        <>
        <NavInshorts/>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.836541842575!2d80.87886918099895!3d26.876933916509877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfe1dbeb74e67%3A0x4dbbe802d19cae6d!2sBalaganj%2C%20Lucknow%2C%20Uttar%20Pradesh%20226003!5e0!3m2!1sen!2sin!4v1717174998762!5m2!1sen!2sin" width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        
        <div className="container">
            <form action="https://formspree.io/f/xkndlozp" method="post" className="input">
                <input className="txt"  type="text" placeholder="Your Name" name="name" required autoComplete="off" />
                <input className="txt"  type="email" placeholder="Your Email" name="email" required autoComplete="off" />
                <textarea  className="txt" name="message" placeholder="Enter Your Message" cols="30" rows="10"></textarea>
                <input type="submit"  className="sub" value="SEND" />
            </form>
        </div>
        </>
    )
}
export default Contact