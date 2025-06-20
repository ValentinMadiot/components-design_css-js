import { RiCheckLine } from "react-icons/ri";
import "./princingCard.css";
import bronzeCoin from "./public/assets/img/bronze-coin.png";
import goldCoin from "./public/assets/img/gold-coin.png";
import silverCoin from "./public/assets/img/silver-coin.png";

const pricingPlans = [
  {
    price: 0,
    title: "Basique",
    subtitle: "Offre gratuite",
    img: bronzeCoin,
    features: [
      "3 demandes utilisateur",
      "10 téléchargements par jour",
      "Mises à jour quotidiennes du contenu",
      "Fichiers entièrement modifiables",
    ],
  },
  {
    price: 19,
    title: "Professionnel",
    subtitle: "Le plus populaire",
    img: silverCoin,
    features: [
      "100 demandes utilisateur",
      "Téléchargements illimités",
      "Débloquez toutes les fonctionnalités du site",
      "Mises à jour quotidiennes du contenu",
      "Fichiers entièrement modifiables",
    ],
  },
  {
    price: 29,
    title: "Entreprise",
    subtitle: "Pour les agences",
    img: goldCoin,
    features: [
      "Demandes utilisateur illimitées",
      "Téléchargements illimités",
      "Débloquez toutes les fonctionnalités du site",
      "Mises à jour quotidiennes du contenu",
      "Fichiers entièrement modifiables",
    ],
  },
];

const PricingCards = () => {
  return (
    <div className="price__body">
      <section className="price__card container grid">
        <div className="price__container grid">
          {pricingPlans.map((plan, index) => (
            <article key={index} className="price__content grid">
              <div className="price__pricing">
                <div className="price__pricing-number">
                  {plan.price}
                  <span className="price__pricing-symbol">€</span>
                </div>
                <span className="price__pricing-month">/mois</span>
              </div>

              <header className="price__header">
                <div className="price__header-circle grid">
                  <img src={plan.img} alt="" className="price__header-img" />
                </div>
                <span className="price__header-subtitle">{plan.subtitle}</span>
                <h1 className="price__header-title">{plan.title}</h1>
              </header>

              <ul className="price__list grid">
                {plan.features.map((feature, i) => (
                  <li key={i} className="price__list-item">
                    <RiCheckLine className="price__list-icon" />
                    <p className="price__list-description">{feature}</p>
                  </li>
                ))}
              </ul>

              <button className="price__button">Choisir ce forfait</button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PricingCards;
