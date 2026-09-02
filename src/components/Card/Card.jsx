import './Card.css';

function Card({ children, title }) {
  return (
    <article className="cl-card">
      <header className="cl-card__title">{title}</header>
      <section className="cl-card__content">{children}</section>
    </article>
  );
}

export default Card;
