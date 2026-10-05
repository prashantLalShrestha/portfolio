import { ArticleList } from "../features/articles/ArticleList";
export function ArticlesPage() {
  return (
    <>
      <section className="page-heading">
        <p className="eyebrow">NOTES FROM WORK</p>
        <h1>
          Learning things.
          <br />
          <em>Writing them down.</em>
        </h1>
        <p>
          Sometimes I step away from the code to write about what we’ve been
          working on. These stories are published on Essent IT.
        </p>
      </section>
      <ArticleList />
      <p className="work-note">
        Written by Prashant Shrestha. Published on Essent IT. Articles open on
        the publisher’s website.
      </p>
    </>
  );
}
