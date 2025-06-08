import { useState } from "react";
import imgArticle from "./assets/img/tabs-hide-article.jpg";
import "./tabsHideArticle.css";

const tabsData = [
  {
    id: "foret",
    title: "Forêt",
    content: (
      <p>
        Les forêts abritent une biodiversité incroyable et jouent un rôle
        essentiel dans le maintien de l'équilibre climatique. Elles fournissent
        de l’oxygène, abritent de nombreuses espèces et filtrent l’air que nous
        respirons.
      </p>
    ),
  },
  {
    id: "oceans",
    title: "Océans",
    content: (
      <>
        <p>
          Les océans couvrent plus de 70 % de la surface terrestre. Ils régulent
          le climat, abritent des écosystèmes riches et produisent une grande
          partie de l'oxygène que nous respirons.
        </p>
        <ul>
          <li>Préservation des récifs coralliens</li>
          <li>Réduction de la pollution plastique</li>
          <li>Protection des espèces marines</li>
        </ul>
      </>
    ),
  },
  {
    id: "montagnes",
    title: "Montagnes",
    content: (
      <p>
        Les montagnes offrent des paysages spectaculaires et sont essentielles
        pour l’approvisionnement en eau douce. Elles abritent également des
        communautés uniques et une faune adaptée aux altitudes élevées.
      </p>
    ),
  },
];

const TabsHideArticle = () => {
  // const [activeTab, setActiveTab] = useState("oceans");
  //* ===
  const [activeTab, setActiveTab] = useState(tabsData[1].id);

  return (
    <section className="tabs__section">
      <div className="tabs__title">
        <h2>À la découverte de la nature</h2>
        <p>
          Explorez les merveilles de notre planète : forêts luxuriantes, océans
          profonds et montagnes majestueuses. Chaque environnement joue un rôle
          unique dans l’équilibre écologique de la Terre.
        </p>
      </div>

      <div className="tabs__about-center tabs__section-center">
        <article className="tabs__about-img">
          <img src={imgArticle} alt="" />
        </article>
        <article className="tabs__about">
          <div className="tabs__about-btn">
            {tabsData.map((tab) => (
              <button
                key={tab.id}
                className={`tabs__tab-btn ${
                  activeTab === tab.id ? "active" : ""
                }`}
                data-id={tab.id}
                onClick={() => setActiveTab(tab.id)}>
                {tab.title}
              </button>
            ))}
          </div>

          <div className="tabs__about-content">
            {tabsData.map((tab) => (
              <div
                key={tab.id}
                className={`tabs__content ${
                  activeTab === tab.id ? "active" : ""
                }`}
                id={tab.id}>
                {/* <h4>{tab.title}</h4> */}
                {tab.content}
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default TabsHideArticle;
