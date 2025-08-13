
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "TNT SACCO Introduces New Mobile Banking App",
      excerpt: "Experience seamless banking with our new mobile application featuring enhanced security and user-friendly interface.",
      date: "December 15, 2024",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400"
    },
    {
      id: 2,
      title: "Annual General Meeting 2024 - Save the Date",
      excerpt: "Join us for our AGM on January 20, 2025, as we review our achievements and outline plans for the coming year.",
      date: "December 10, 2024",
      category: "Announcements",
      image: "https://images.unsplash.com/photo-1515378791036-0648a814c963?w=400"
    },
    {
      id: 3,
      title: "New Branch Opening in Nakuru",
      excerpt: "We're expanding our reach! Our new Nakuru branch will open in January 2025, bringing our services closer to you.",
      date: "December 8, 2024",
      category: "Expansion",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400"
    },
    {
      id: 4,
      title: "Financial Literacy Workshop Series",
      excerpt: "Join our free financial literacy workshops throughout December. Learn budgeting, investment strategies, and more.",
      date: "December 5, 2024",
      category: "Education",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400"
    }
  ];

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest News & Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest developments, announcements, and financial insights from TNT SACCO.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {news.map((article) => (
            <article key={article.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-secondary/20 text-primary text-xs px-3 py-1 rounded-full font-medium">
                    {article.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {article.date}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <Button variant="ghost" className="text-primary hover:text-primary hover:bg-secondary/20 p-0">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-secondary/20">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
};
