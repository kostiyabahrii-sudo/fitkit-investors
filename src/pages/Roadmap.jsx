import { ROADMAP } from "../content.js";
import useTitle from "../useTitle.js";

export default function Roadmap() {
  useTitle(ROADMAP.title);
  return (
    <article>
      <section className="section screen">
        <h1 className="h1">{ROADMAP.title}</h1>

        <ol className="stages">
          {ROADMAP.stages.map((stage) => (
            <li className="stage" key={stage.label}>
              <span className="stage-label">{stage.label}</span>
              <span className="stage-rule" aria-hidden="true" />
              <p className="stage-text">{stage.items.join(", ")}</p>
            </li>
          ))}
        </ol>
      </section>
    </article>
  );
}
