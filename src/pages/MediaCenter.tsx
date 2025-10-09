
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Play, Download, Calendar, Eye, Image as ImageIcon, Video, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MediaCenter = () => {
  // TNT SACCO YouTube Channel Videos organized by category
  // Video IDs from @tntsacco1478 YouTube channel
  const videoCategories = {
    loanProducts: [
      {
        id: "wLtV8VR_5hg",
        title: "Access an Emergency Express loan in 5 minutes",
        description: "Learn how to quickly apply for our Emergency Express loan product"
      },
      {
        id: "lrkCUQtZyuI",
        title: "Loan Products Overview",
        description: "Discover our comprehensive loan offerings"
      }
    ],
    savingsProducts: [
      {
        id: "yt9Ov6BEglk",
        title: "Savings Account Benefits",
        description: "Explore the benefits of saving with TNT SACCO"
      },
      {
        id: "rA2I_hiE8kg",
        title: "Investment Opportunities",
        description: "Learn about our savings and investment products"
      }
    ],
    educational: [
      {
        id: "9iXXd8kkwJM",
        title: "Financial Literacy Workshop",
        description: "Educational content to improve your financial knowledge"
      },
      {
        id: "xd9xmVXMwMA",
        title: "How to Use Our Services",
        description: "Step-by-step guide to TNT SACCO services"
      }
    ],
    aboutUs: [
      {
        id: "VxgD7L1iaw8",
        title: "A little about TNT SACCO",
        description: "Learn about our history, mission, and values"
      },
      {
        id: "c5iDQ21HUuE",
        title: "Welcome to our Endebess Branch",
        description: "Tour of our Endebess branch and services"
      }
    ]
  };

  // Flatten all videos for the "All Videos" view
  const allVideos = [
    ...videoCategories.loanProducts,
    ...videoCategories.savingsProducts,
    ...videoCategories.educational,
    ...videoCategories.aboutUs
  ];

  const images = [
    {
      id: 1,
      title: "Annual General Meeting 2024",
      description: "Photos from our successful AGM held in March 2024",
      thumbnail: "https://images.unsplash.com/photo-1515378791036-0648a814c963?w=600",
      date: "March 2024",
      count: "45 photos"
    },
    {
      id: 2,
      title: "Community Outreach Program",
      description: "Images from our community development initiatives",
      thumbnail: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600",
      date: "Nov 2024",
      count: "62 photos"
    },
    {
      id: 3,
      title: "Staff Training Sessions",
      description: "Professional development and training programs for our team",
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600",
      date: "Oct 2024",
      count: "28 photos"
    },
    {
      id: 4,
      title: "Technology Innovation Day",
      description: "Showcasing our latest digital banking solutions",
      thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600",
      date: "Sep 2024",
      count: "35 photos"
    }
  ];

  const documents = [
    {
      id: 1,
      title: "TNT SACCO Brochure 2025",
      description: "Comprehensive overview of our services and products",
      type: "PDF",
      size: "3.2 MB",
      date: "Jan 2025",
      downloads: "1.2K"
    },
    {
      id: 2,
      title: "Annual Report 2024",
      description: "Detailed financial performance and achievements report",
      type: "PDF",
      size: "8.5 MB",
      date: "Dec 2024",
      downloads: "2.8K"
    },
    {
      id: 3,
      title: "Press Release - New Mobile App",
      description: "Official announcement of our enhanced mobile banking platform",
      type: "PDF",
      size: "1.1 MB",
      date: "Jan 2025",
      downloads: "567"
    },
    {
      id: 4,
      title: "Community Impact Report",
      description: "Our social responsibility and community development initiatives",
      type: "PDF",
      size: "4.7 MB",
      date: "Nov 2024",
      downloads: "892"
    }
  ];

  const pressReleases = [
    {
      id: 1,
      title: "TNT SACCO Launches Revolutionary Mobile Banking App",
      excerpt: "New app features biometric security, real-time notifications, and seamless user experience",
      date: "January 15, 2025",
      author: "Communications Department"
    },
    {
      id: 2,
      title: "Record Dividend Payout Announced - 12% Return to Members",
      excerpt: "Strong financial performance in 2024 enables highest dividend payout in SACCO history",
      date: "January 5, 2025",
      author: "Finance Department"
    },
    {
      id: 3,
      title: "TNT SACCO Expands with New Nakuru Branch",
      excerpt: "Strategic expansion brings comprehensive financial services closer to Western Kenya members",
      date: "December 28, 2024",
      author: "Operations Team"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Media Center
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Access our latest videos, image galleries, press releases, and downloadable resources. 
                Stay connected with TNT SACCO's journey and milestones.
              </p>
            </div>
          </div>
        </section>

        {/* Media Content */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="videos" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-12">
                <TabsTrigger value="videos">Videos</TabsTrigger>
                <TabsTrigger value="images">Images</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="press">Press Releases</TabsTrigger>
              </TabsList>

              {/* Videos Tab */}
              <TabsContent value="videos">
                {/* Channel Intro */}
                <div className="mb-8 text-center">
                  <p className="text-gray-600 mb-4">
                    Watch our latest videos from the official TNT SACCO YouTube channel
                  </p>
                  <a
                    href="https://youtube.com/@tntsacco1478"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
                  >
                    <Video className="w-5 h-5" />
                    Visit Our YouTube Channel
                  </a>
                </div>

                {/* Video Categories Tabs */}
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
                    <TabsTrigger value="all">All Videos</TabsTrigger>
                    <TabsTrigger value="loans">🏦 Loan Products</TabsTrigger>
                    <TabsTrigger value="savings">💰 Savings</TabsTrigger>
                    <TabsTrigger value="educational">📚 Educational</TabsTrigger>
                    <TabsTrigger value="about">ℹ️ About Us</TabsTrigger>
                  </TabsList>

                  {/* All Videos */}
                  <TabsContent value="all">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {allVideos.map((video) => (
                        <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                          <div className="relative aspect-video bg-gray-100">
                            <iframe
                              src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                              title={video.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                              loading="lazy"
                              referrerPolicy="strict-origin-when-cross-origin"
                              className="w-full h-full"
                              style={{ border: 'none' }}
                            />
                          </div>
                          <CardContent className="p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                              {video.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-4">{video.description}</p>
                            <a
                              href={`https://www.youtube.com/watch?v=${video.id}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-sm text-green-600 hover:text-green-700 font-medium"
                            >
                              <Play className="w-4 h-4 mr-1" />
                              Watch on YouTube
                            </a>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  {/* Loan Products */}
                  <TabsContent value="loans">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {videoCategories.loanProducts.map((video) => (
                        <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                          <div className="relative aspect-video bg-gray-100">
                            <iframe
                              src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                              title={video.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                              loading="lazy"
                              referrerPolicy="strict-origin-when-cross-origin"
                              className="w-full h-full"
                              style={{ border: 'none' }}
                            />
                          </div>
                          <CardContent className="p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                              {video.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-4">{video.description}</p>
                            <a
                              href={`https://www.youtube.com/watch?v=${video.id}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-sm text-green-600 hover:text-green-700 font-medium"
                            >
                              <Play className="w-4 h-4 mr-1" />
                              Watch on YouTube
                            </a>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  {/* Savings Products */}
                  <TabsContent value="savings">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {videoCategories.savingsProducts.map((video) => (
                        <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                          <div className="relative aspect-video bg-gray-100">
                            <iframe
                              src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                              title={video.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                              loading="lazy"
                              referrerPolicy="strict-origin-when-cross-origin"
                              className="w-full h-full"
                              style={{ border: 'none' }}
                            />
                          </div>
                          <CardContent className="p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                              {video.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-4">{video.description}</p>
                            <a
                              href={`https://www.youtube.com/watch?v=${video.id}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-sm text-green-600 hover:text-green-700 font-medium"
                            >
                              <Play className="w-4 h-4 mr-1" />
                              Watch on YouTube
                            </a>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  {/* Educational Content */}
                  <TabsContent value="educational">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {videoCategories.educational.map((video) => (
                        <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                          <div className="relative aspect-video bg-gray-100">
                            <iframe
                              src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                              title={video.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                              loading="lazy"
                              referrerPolicy="strict-origin-when-cross-origin"
                              className="w-full h-full"
                              style={{ border: 'none' }}
                            />
                          </div>
                          <CardContent className="p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                              {video.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-4">{video.description}</p>
                            <a
                              href={`https://www.youtube.com/watch?v=${video.id}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-sm text-green-600 hover:text-green-700 font-medium"
                            >
                              <Play className="w-4 h-4 mr-1" />
                              Watch on YouTube
                            </a>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  {/* About Us */}
                  <TabsContent value="about">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {videoCategories.aboutUs.map((video) => (
                        <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                          <div className="relative aspect-video bg-gray-100">
                            <iframe
                              src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                              title={video.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                              loading="lazy"
                              referrerPolicy="strict-origin-when-cross-origin"
                              className="w-full h-full"
                              style={{ border: 'none' }}
                            />
                          </div>
                          <CardContent className="p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                              {video.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-4">{video.description}</p>
                            <a
                              href={`https://www.youtube.com/watch?v=${video.id}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-sm text-green-600 hover:text-green-700 font-medium"
                            >
                              <Play className="w-4 h-4 mr-1" />
                              Watch on YouTube
                            </a>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>

                {/* View More Link */}
                <div className="mt-12 text-center">
                  <a
                    href="https://youtube.com/@tntsacco1478/videos"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                      <Video className="w-5 h-5 mr-2" />
                      View All Videos on YouTube
                    </Button>
                  </a>
                </div>
              </TabsContent>

              {/* Images Tab */}
              <TabsContent value="images">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {images.map((image) => (
                    <Card key={image.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                      <div className="relative">
                        <img 
                          src={image.thumbnail} 
                          alt={image.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                          <ImageIcon className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {image.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {image.description}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>{image.count}</span>
                          <span>{image.date}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Documents Tab */}
              <TabsContent value="documents">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {documents.map((doc) => (
                    <Card key={doc.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <FileText className="w-8 h-8 text-green-600 mt-1" />
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                            {doc.type}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {doc.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm mb-4">
                          {doc.description}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <span>Size: {doc.size}</span>
                          <span>Downloads: {doc.downloads}</span>
                          <span>{doc.date}</span>
                        </div>
                        
                        <Button className="w-full bg-green-600 hover:bg-green-700">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Press Releases Tab */}
              <TabsContent value="press">
                <div className="space-y-6">
                  {pressReleases.map((press) => (
                    <Card key={press.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                            Press Release
                          </span>
                          <span className="text-sm text-gray-500">{press.date}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {press.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4">
                          {press.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            By {press.author}
                          </span>
                          <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                            Read Full Release
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Media Contact */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Media Inquiries
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              For media inquiries, interviews, or additional resources, please contact our 
              communications team. We're happy to provide additional information and materials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Contact Media Team
              </Button>
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                Request Interview
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MediaCenter;
