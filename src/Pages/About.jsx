import me from "../img/website/me.png";
const About = () => {
  return (
    <div className="flex justify-center h-96  m-24">
      <div className="card max-w-3xl w-full border-2 relative">
        <div className="avatar">
          <div className="w-24 rounded-full absolute mx-auto right-0 left-0 -top-12">
            <img src={me} />
          </div>
        </div>
        <div className="text-container absolute  top-20">
          <div className="text-area text-center px-20">
            <h3 className="">Selim Reza</h3>
            <h3>Web Developer, Volunteer, and Fitness Instructor in Dhaka</h3>
            <p className="my-4">
              Greetings, I’m Selim. I’m a web developer living in Dhaka. I am a
              fan of fitness, cycling, and running. I’m also interested in web
              development and programming.My Goal is to live in peace. To
              achieve it, I must work hard through continuous learning and
              improvement, Collaborate, Network, Seek Feedback and Mentorship,
              and a lot of practice. You can hire me with a click on the button
              down.
            </p>
            <button className="btn btn-info">Hire Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
