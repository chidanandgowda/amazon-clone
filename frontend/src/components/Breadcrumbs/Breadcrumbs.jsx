import './Breadcrumbs.css';

function Breadcrumbs({ items }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb" id="breadcrumbs">
      {items.map((item, index) => (
        <span key={item.label} className="breadcrumbs__item">
          {index < items.length - 1 ? (
            <>
              <a className="breadcrumbs__link" href={item.href || '#'}>
                {item.label}
              </a>
              <span className="material-symbols-outlined breadcrumbs__separator">
                chevron_right
              </span>
            </>
          ) : (
            <span className="breadcrumbs__current">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

export default Breadcrumbs;
