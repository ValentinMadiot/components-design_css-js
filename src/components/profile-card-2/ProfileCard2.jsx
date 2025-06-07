import profileImage from "./assets/img/profile-card-2.png";
import "./profileCard2.css";

const ProfileCard2 = () => {
  return (
    <div className="card2__container">
      <div className="card2__card">
        <div className="card2__border">
          <div className="card2__profil">
            <img src={profileImage} alt="user profil" className="card2__img" />
          </div>
        </div>

        <h3 className="card2__name">Mynton Moore</h3>
        <span className="card2__profession">Frontend Developer</span>

        <div className="card2__info">
          <div className="card2__info-icon">
            <i className="ri-information-line"></i>
          </div>

          <div className="card2__info-border">
            <div className="card2__info-profil">
              <img
                src={profileImage}
                alt="user profil"
                className="card2__img2"
              />
            </div>
          </div>

          <div className="card2__info-data">
            <h3 className="card2__info-name">Jules Moore Mynton</h3>
            <span className="card2__info-profession">
              Master in Frontend Developer
            </span>
            <span className="card2__info-location">Lima - Perú</span>
          </div>

          <div className="card2__info-social">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="card2__social-link"
              rel="noreferrer">
              <span className="card2__social-icon">
                <i className="ri-linkedin-box-line"></i>
              </span>
            </a>

            <a
              href="https://dribbble.com/"
              target="_blank"
              className="card2__social-link"
              rel="noreferrer">
              <span className="card2__social-icon">
                <i className="ri-dribbble-fill"></i>
              </span>
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              className="card2__social-link"
              rel="noreferrer">
              <span className="card2__social-icon">
                <i className="ri-github-fill"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard2;
