import Contact from "../components/Contact";
import "../index.css";

function Donation() {
  return (
    <div className="donation-container">
      <h2 className="home-title">Donation!</h2>
      <p>Feel free to donate so we can keep this site on forever!:</p>
      <button className="donation-button">Donate</button>
    </div>
  );
}

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome!</h1>
      <div className="home-content">
        <p>
          Welcome to our innovative event management platform, designed to revolutionize the way you plan and execute memorable occasions. Crafted with a passion for seamless experiences, our platform was meticulously created to address the intricate challenges often faced in event planning.
        </p>
        <p>
          By harnessing cutting-edge technology, our platform simplifies the entire event management process, enabling users to navigate effortlessly through each stage. From concept inception to post-event analysis, every aspect of event planning is elegantly streamlined within our ecosystem.
        </p>
        <p>
          Empowering users with intuitive tools, our platform facilitates swift decision-making. With a user-friendly interface, attendees can quickly devise meticulous plans, securing venues, coordinating vendors, and organizing schedules with unparalleled ease. We believe that your creative vision should not be hindered by technical complexities, and thus, our platform ensures a fluid and efficient planning journey.
        </p>
        <p>
          What sets us apart is our commitment to precision. Leveraging advanced algorithms, our system ensures that plans are not just made, but perfectly aligned with your preferences and timelines. Our mission is to eliminate uncertainties and make the execution of your plans as seamless as the blueprint itself.
        </p>
        <p>
          Join us on this transformative journey, where innovation meets your imagination, and event management is elevated to an art form. Experience the future of event planning – efficient, collaborative, and visionary. Your occasions deserve nothing less.
        </p>
      </div>
      <div className="container">
        <Contact />
        <Donation />
      </div>
    </div>
  );
};

export default Home;

