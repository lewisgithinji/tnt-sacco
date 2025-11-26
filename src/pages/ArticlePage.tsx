import { useParams, Navigate, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Tag, ExternalLink, Share2, User } from "lucide-react";
import { getArticleBySlug, getRelatedArticles } from "@/data/articles";
import DOMPurify from "dompurify";

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to="/not-found" replace />;
  }

  const article = getArticleBySlug(slug);

  if (!article) {
    return <Navigate to="/not-found" replace />;
  }

  const relatedArticles = getRelatedArticles(article, 3);

  const getCategoryColor = (category: string) => {
    const categoryColors: Record<string, string> = {
      "Economic Outlook": "bg-blue-100 text-blue-800 border-blue-200",
      "Investment Opportunities": "bg-orange-100 text-orange-800 border-orange-200",
      "Member Empowerment": "bg-green-100 text-green-800 border-green-200",
      "Innovation & Technology": "bg-purple-100 text-purple-800 border-purple-200",
      "Financial": "bg-indigo-100 text-indigo-800 border-indigo-200",
      "Community": "bg-pink-100 text-pink-800 border-pink-200",
      "Announcements": "bg-yellow-100 text-yellow-800 border-yellow-200",
    };
    return categoryColors[category] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  const shareArticle = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back navigation */}
          <div className="mb-8">
            <Link
              to="/communication-hub"
              className="inline-flex items-center gap-2 text-navy hover:text-navy/80 transition-colors font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Communication Hub
            </Link>
          </div>

          {/* Article header */}
          <header className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(article.category)}`}>
                <Tag className="h-3 w-3" />
                {article.category}
              </span>
              <button
                onClick={shareArticle}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-navy transition-colors"
                aria-label="Share article"
              >
                <Share2 className="h-4 w-4" />
                Share
              </button>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {article.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {article.readTime}
              </div>
              {article.author && (
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  By {article.author}
                </div>
              )}
            </div>
          </header>

          {/* Featured image */}
          <div className="mb-8">
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Article excerpt */}
          <div className="mb-8 p-6 bg-yellow/10 border-l-4 border-yellow rounded-r-lg">
            <p className="text-lg text-gray-700 italic leading-relaxed">
              {article.excerpt}
            </p>
          </div>

          {/* Article content */}
          <article className="prose prose-lg max-w-none mb-12">
            <div
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.fullContent) }}
            />
          </article>

          {/* CTA Section */}
          {article.cta && (
            <div className="bg-gradient-to-r from-navy/5 to-yellow/10 rounded-xl p-6 border border-yellow/30 mb-12">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-navy mb-2">💡 Take Action Today</h3>
                  <p className="text-gray-700">{article.cta}</p>
                </div>
                <Link to={article.category === "Announcements" ? "/tenders" : "/deposit-products"}>
                  <Button className="bg-navy hover:bg-navy/90 text-white px-6 py-2 rounded-lg transition-colors font-medium inline-flex items-center gap-2 whitespace-nowrap">
                    Get Started
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          )}

          {/* Share section */}
          <div className="border-t border-b border-gray-200 py-6 mb-12">
            <div className="flex items-center justify-between">
              <p className="text-gray-600 font-medium">Found this article helpful?</p>
              <button
                onClick={shareArticle}
                className="inline-flex items-center gap-2 px-6 py-2 bg-navy hover:bg-navy/90 text-white rounded-lg transition-colors font-medium"
              >
                <Share2 className="h-4 w-4" />
                Share with Others
              </button>
            </div>
          </div>

          {/* Related articles */}
          {relatedArticles.length > 0 && (
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-bold text-navy mb-6">Related Articles</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <Link
                    key={relatedArticle.slug}
                    to={`/communication-hub/${relatedArticle.slug}`}
                    className="block group"
                  >
                    <div className="rounded-lg border border-gray-200 overflow-hidden hover:border-yellow hover:shadow-lg transition-all">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={relatedArticle.image}
                          alt={relatedArticle.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <div className="mb-2">
                          <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(relatedArticle.category)}`}>
                            {relatedArticle.category}
                          </span>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-navy transition-colors">
                          {relatedArticle.title}
                        </h4>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {relatedArticle.excerpt}
                        </p>
                        <div className="mt-3 flex items-center text-xs text-gray-500">
                          <Clock className="h-3 w-3 mr-1" />
                          {relatedArticle.readTime}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back to hub CTA */}
          <div className="mt-12 text-center">
            <Link
              to="/communication-hub"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Browse All Articles
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArticlePage;
