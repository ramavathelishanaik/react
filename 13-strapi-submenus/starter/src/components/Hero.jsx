import useGlobalContext from "../useGlobalContext";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <div className="hero-container" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <h1 className="bg-red-400">
          Manage Any Content <br /> Anywhere
        </h1>
        <p>
          Strapi is the leading open-source headless CMS. It’s 100% JavaScript
          and fully customizable.
        </p>
      </div>
    </div>
  );
};
export default Hero;
