import me from "../img/website/me.png";
const About = () => {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="card max-w-3xl border-2">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={me} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
