import { ArrowUpRight } from "lucide-react";
import { articles } from "../../data/articles";
export function ArticleList() {
  return (
    <div className="article-list">
      {articles.map((article) => (
        <article className="article-card" key={article.url}>
          <div className="article-meta">
            <span>ESSENT IT</span>
            <time dateTime={article.published}>{article.dateLabel}</time>
            <span>{article.readingTime}</span>
          </div>
          <h3>
            <a href={article.url} target="_blank" rel="noreferrer">
              {article.title}
              <ArrowUpRight size={22} />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </h3>
          <p>{article.summary}</p>
          <div className="tags">
            {article.topics.map((topic) => (
              <span key={topic}>{topic}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
