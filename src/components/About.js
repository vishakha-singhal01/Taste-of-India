import image from "../assets/aboutUs.svg";

const About = () => {
  return (
    <div className="h-full w-auto flex flex-wrap justify-center my-10 mx-auto">
      <div>
        <img className="h-[74.6vh]" src={image} alt="About Us" />
      </div>
    </div>
  );
};

export default About;
