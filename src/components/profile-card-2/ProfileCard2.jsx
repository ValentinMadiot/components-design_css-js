import "./ProfileCard2.css";
import profileImage from "./img/profile-card-2.png";

const ProfileCard2 = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card__border">
          <div className="card__perfil">
            <img src={profileImage} alt="user profil" className="card__img" />
          </div>
        </div>

        <h3 className="card__name">Mynton Moore</h3>
        <span className="card__profession">Frontend Developer</span>

        <div className="info">
          <div className="info__icon">
            <i className="ri-information-line"></i>
          </div>

          <div className="info__border">
            <div className="info__perfil">
              <img src={profileImage} alt="user profil" className="card__img" />
            </div>
          </div>

          <div className="info__data">
            <h3 className="info__name">Jules Moore Mynton</h3>
            <span className="info__profession">
              Master in Frontend Developer
            </span>
            <span className="info__location">Lima - Perú</span>
          </div>

          <div className="info__social">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="info__social-link"
              rel="noreferrer">
              <span className="info__social-icon">
                <i className="ri-linkedin-box-line"></i>
              </span>
            </a>

            <a
              href="https://dribbble.com/"
              target="_blank"
              className="info__social-link"
              rel="noreferrer">
              <span className="info__social-icon">
                <i className="ri-dribbble-fill"></i>
              </span>
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              className="info__social-link"
              rel="noreferrer">
              <span className="info__social-icon">
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
