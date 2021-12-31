import './Info.css';
import photo from '../../Rectangle90.png';
import mail from '../../Mail.png';

function Info() {
    return (
      <section className="Info">
          <img className="photo" src={photo} alt="Laura Smith" />
          <h2>Laura Smith</h2>
          <h3 className="orange">Frontend Developer</h3>
          <h5>laurasmith.io</h5>
          <div className="btn-container">
              <button className="email-btn"><span><img src={mail} alt=""/></span> Email</button>
              <button className="linkedin-btn"><span><i class="fab fa-linkedin"></i></span> LinkedIn</button>
          </div>
      </section>
    );
  }
  
export default Info;
  