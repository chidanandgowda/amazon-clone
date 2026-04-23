import './AboutItem.css';

function AboutItem({ features }) {
  return (
    <div className="about-item" id="about-this-item">
      <h2 className="about-item__title">About this item</h2>
      <ul className="about-item__list">
        {features.map((feature, index) => (
          <li key={index} className="about-item__feature">
            <strong>{feature.title}:</strong> {feature.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AboutItem;
