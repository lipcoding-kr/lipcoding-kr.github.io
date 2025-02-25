
import { useState } from "react";
import { motion } from "framer-motion";
import { Tag, Filter, Clock } from "lucide-react";

const categories = ["All", "Design", "Technology", "Innovation"];

const posts = [
  {
    id: 1,
    title: "The Future of Minimal Design",
    description: "Exploring how minimalism continues to shape modern interfaces",
    category: "Design",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Innovation in Simplicity",
    description: "Why the simplest solution is often the most innovative",
    category: "Innovation",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "The Power of White Space",
    description: "Understanding the impact of negative space in UI design",
    category: "Design",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800&q=80",
  },
];

const BlogPosts = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = posts.filter(
    (post) => selectedCategory === "All" || post.category === selectedCategory
  );

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-primary">Latest Articles</h2>
          <div className="flex gap-2 mt-4 md:mt-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-secondary text-primary-muted hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Tag size={16} className="text-primary-muted" />
                <span className="text-sm text-primary-muted">{post.category}</span>
                <Clock size={16} className="text-primary-muted ml-2" />
                <span className="text-sm text-primary-muted">{post.readTime}</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-primary/80">
                {post.title}
              </h3>
              <p className="text-primary-muted">{post.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
