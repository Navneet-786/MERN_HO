const Hero = (props) => {
  const { title, imageUrl } = props;
  return (
    <>
      <div className="hero container bg-[#0F172A] text-white">
        <div className="banner">
          <h1 className="font-semibold ">{title}</h1>
          <p className="text-slate-400">
            MERN_Care Medical Institute is a state-of-the-art facility dedicated
            to providing comprehensive healthcare services with compassion and
            expertise. Our team of skilled professionals is committed to
            delivering personalized care tailored to each patient's needs. At
            MERN_Care, we prioritize your well-being, ensuring a harmonious
            journey towards optimal health and wellness.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/hero-img.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
