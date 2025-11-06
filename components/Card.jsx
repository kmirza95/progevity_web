// components/Card.jsx
export default function Card({ eyebrow, title, children, action }) {
  return (
    <article className="card">
      {eyebrow && <div className="card-eyebrow">{eyebrow}</div>}
      {title && <h3 className="card-title">{title}</h3>}
      <div className="card-body">{children}</div>
      {action && <div className="card-action">{action}</div>}
    </article>
  );
}
