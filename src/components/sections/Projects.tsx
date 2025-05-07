import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Beauty Products Website',
    description: 'The beauty products website is a modern, easy-to-use platform for all your beauty needs. It has simple navigation, attractive product displays, and personalized recommendations.',
    image: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: 'https://www.behance.net/gallery/187006191/Beauty-Products-Website',
    categories: ['Web Design', 'UI/UX']
  },
  {
    id: 2,
    title: 'E-Restaurant Website',
    description: 'E-Restaurant website is a modern, easy-to-use platform for exploring and ordering food. It has simple navigation, attractive meal displays, and personalized recommendations.',
    image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: 'https://www.behance.net/gallery/185619199/E-Restaurant',
    categories: ['Web Design', 'UI/UX']
  },
  {
    id: 3,
    title: 'Smart Surveillance',
    description: 'Smart Surveillance is an AI-based threat detection and prevention system for organizations. Utilizing advanced AI algorithms, it monitors real-time footage to detect weapons and notify authorities.',
    image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: 'https://www.behance.net/gallery/185615853/Smart-Surveillance',
    categories: ['UI/UX', 'Product Design']
  },
  {
    id: 4,
    title: 'The World Of Travel',
    description: 'The world of travel website is a modern, user-friendly platform for discovering and booking trips. It offers straightforward navigation, beautiful destination displays, and tailored recommendations.',
    image: 'https://images.pexels.com/photos/4353813/pexels-photo-4353813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: 'https://www.behance.net/gallery/185691851/The-World-Of-Tavel',
    categories: ['Web Design', 'UI/UX']
  }
];

const categories = ['All', 'Web Design', 'UI/UX', 'Product Design'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.categories.includes(selectedCategory));

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/30">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-10">Showcase of innovative design</p>
        </div>
        
        <div className="flex flex-wrap justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 m-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative overflow-hidden group">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 mb-2 bg-primary-600 text-white text-xs rounded-full">
                        {project.categories.join(', ')}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium group"
                  >
                    View on Behance
                    <ExternalLink className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}