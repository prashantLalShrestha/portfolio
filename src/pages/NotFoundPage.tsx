import { Link } from "react-router-dom";
export function NotFoundPage() {
  return (
    <section className="page-heading">
      <p className="eyebrow">404 / A DETOUR</p>
      <h1>A path less travelled.</h1>
      <p>This page doesn’t exist. Let’s head back to familiar ground.</p>
      <Link className="button primary" to="/">
        Back to overview →
      </Link>
    </section>
  );
}
