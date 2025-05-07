import { motion } from 'framer-motion';

const tools = [
  {
    id: 1,
    name: 'Adobe Photoshop',
    category: 'Design',
    proficiency: 90,
  },
  {
    id: 2,
    name: 'Adobe illustrator',
    category: 'Design',
    proficiency: 85,
  },
  {
    id: 3,
    name: 'Adobe inDesign',
    category: 'Design',
    proficiency: 75,
  },
  {
    id: 4,
    name: 'Adobe XD',
    category: 'UX/UI',
    proficiency: 90,
  },
  {
    id: 5,
    name: 'Figma',
    category: 'UX/UI',
    proficiency: 95,
  },
  {
    id: 6,
    name: 'Canva',
    category: 'Design',
    proficiency: 90,
  },
  {
    id: 7,
    name: 'Balsamiq',
    category: 'UX/UI',
    proficiency: 85,
  },
  {
    id: 8,
    name: 'Draw.io',
    category: 'Diagrams',
    proficiency: 80,
  },
  {
    id: 9,
    name: 'Marvel',
    category: 'Prototyping',
    proficiency: 75,
  },
  {
    id: 10,
    name: 'InVision',
    category: 'Prototyping',
    proficiency: 80,
  },
  {
    id: 11,
    name: 'Google Analytics',
    category: 'Analytics',
    proficiency: 70,
  },
  {
    id: 12,
    name: 'Treejack',
    category: 'UX Research',
    proficiency: 65,
  },
  {
    id: 13,
    name: 'Concepts',
    category: 'Sketching',
    proficiency: 75,
  },
  {
    id: 14,
    name: 'MS Office',
    category: 'Productivity',
    proficiency: 85,
  },
];

export default function Tools() {
  return (
    <section id="tools" className="py-20">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tools</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12">Software and platforms I use to bring designs to life</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="mb-6"
            >
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h4 className="font-medium">{tool.name}</h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{tool.category}</span>
                </div>
                <span className="text-sm font-bold">{tool.proficiency}%</span>
              </div>
              <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tool.proficiency}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}