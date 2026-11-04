import { Link } from "react-router-dom";
import { ABOUT, FAQ } from "../content.js";
import useTitle from "../useTitle.js";

export default function About() {
  useTitle(null);
  return (
    <article>
      <section className="section narrow screen">
        <h1 className="h1">{ABOUT.title}</h1>
        <p className="lead">{ABOUT.lead}</p>
        {ABOUT.paragraphs.map((text, i) => (
          <p className={i <= 1 ? "lead" : "body"} key={i}>
            {text}
          </p>
        ))}
        <nav className="next" aria-label="Continue">
          <Link to="/roadmap">Roadmap →</Link>
          <Link to="/products">Products →</Link>
        </nav>

        <a className="hint" href="#faq">
          {FAQ.title} <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="section narrow faq" id="faq">
        <h2 className="h1">{FAQ.title}</h2>
        <div className="faq-list">
          {FAQ.items.map((item, i) => (
            <details className="faq-item" key={i}>
              <summary>
                <span>{item.q}</span>
                <span className="faq-sign" aria-hidden="true" />
              </summary>
              <p className="body">
                {(typeof item.a === "string" ? [item.a] : item.a).map(
                  (part, j) =>
                    typeof part === "string" ? (
                      part
                    ) : (
                      <Link to={part.to} key={j}>
                        {part.text}
                      </Link>
                    ),
                )}
              </p>
            </details>
          ))}
        </div>
      </section>
    </article>
  );
}
