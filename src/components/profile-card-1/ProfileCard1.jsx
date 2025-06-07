import { useRef } from "react";
import profileImage from "./assets/img/profile-card-1.png";
import "./ProfileCard1.css";

const ProfileCard1 = () => {
  const socialRef = useRef(null);

  const handleToggle = () => {
    const social = socialRef.current;

    if (social.classList.contains("animation")) {
      social.classList.remove("animation");
      social.classList.add("down-animation");
      setTimeout(() => {
        social.classList.remove("down-animation");
      }, 1000);
    } else {
      social.classList.add("animation");
    }
  };

  return (
    <div className="card1__container">
      <div className="card1__card">
        <div className="card1__border">
          <img src={profileImage} alt="user profil" className="card1__img" />
        </div>

        <h3 className="card1__name">Emily Jules</h3>
        <span className="card1__profession">UI/UX Designer</span>

        <div className="card1__social" ref={socialRef}>
          <div className="card1__social-control">
            <div className="card1__social-toggle" onClick={handleToggle}>
              <i className="ri-add-line"></i>
            </div>

            <span className="card1__social-text">My social networks</span>

            <ul className="card1__social-list">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="card1__social-link">
                <i className="ri-facebook-line"></i>
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="card1__social-link">
                <i className="ri-instagram-line"></i>
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="card1__social-link">
                <i className="ri-twitter-line"></i>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard1;
