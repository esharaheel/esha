import { motion } from 'framer-motion';
import { 
  Palette, 
  Globe, 
  User, 
  Monitor, 
  FileText, 
  Activity, 
  BarChart, 
  Database, 
  FileCode, 
  List 
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Graphic Design',
    description: 'Creating visually stunning graphics for various digital and print mediums.',
    icon: <Palette className="w-10 h-10" />
  },
  {
    id: 2,
    title: 'Web Design',
    description: 'Designing beautiful and functional websites that leave a lasting impression.',
    icon: <Globe className="w-10 h-10" />
  },
  {
    id: 3,
    title: 'User Experience Design',
    description: 'Crafting seamless user journeys and experiences that delight customers.',
    icon: <User className="w-10 h-10" />
  },
  {
    id: 4,
    title: 'User Interface Design',
    description: 'Creating intuitive and aesthetically pleasing user interfaces.',
    icon: <Monitor className="w-10 h-10" />
  },
  {
    id: 5,
    title: 'Wireframing',
    description: 'Building the structural blueprint of digital products and websites.',
    icon: <FileText className="w-10 h-10" />
  },
  {
    id: 6,
    title: 'Low & High-Fidelity Prototypes',
    description: 'Developing interactive prototypes to visualize and test concepts.',
    icon: <Activity className="w-10 h-10" />
  },
  {
    id: 7,
    title: 'Analytics Analysis',
    description: 'Interpreting user data to inform design decisions and improvements.',
    icon: <BarChart className="w-10 h-10" />
  },
  {
    id: 8,
    title: 'Data Annotation',
    description: 'Preparing and labeling data for machine learning applications.',
    icon: <Database className="w-10 h-10" />
  },
  {
    id: 9,
    title: 'UML Documentation',
    description: 'Creating comprehensive UML diagrams for system visualization.',
    icon: <FileCode className="w-10 h-10" />
  },
  {
    id: 10,
    title: 'Storyboarding',
    description: 'Visual storytelling to map out user scenarios and experiences.',
    icon: <List className="w-10 h-10" />
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800/30">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12">Professional design services tailored to your needs</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full group">
                <div className="mb-5 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}