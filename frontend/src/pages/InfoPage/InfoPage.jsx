import './InfoPage.css';

function InfoPage({ title, subtitle, body, ctaLabel, ctaHref }) {
  return (
    <main className="info-page" id="info-page">
      <div className="info-page__header">
        <h1 className="info-page__title">{title}</h1>
        {subtitle && <p className="info-page__subtitle">{subtitle}</p>}
      </div>
      <div className="info-page__content">
        {body && <p className="info-page__body">{body}</p>}
        {ctaLabel && ctaHref && (
          <a className="info-page__cta" href={ctaHref}>
            {ctaLabel}
          </a>
        )}
      </div>
    </main>
  );
}

export default InfoPage;
