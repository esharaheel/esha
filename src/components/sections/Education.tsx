import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    id: 1,
    degree: 'Master\'s degree, Business Informatics',
    institution: 'University of Mannheim, Germany',
    period: 'Jan 2024 - Present',
    description: 'Focusing on the intersection of business management and information technology, developing expertise in digital transformation and user-centered design.'
  },
  {
    id: 2,
    degree: 'UI / UX Design Specialization',
    institution: 'California Institute of the Arts (Coursera.org)',
    period: 'Nov 2023 - Mar 2024',
    description: 'Comprehensive specialization focusing on all aspects of UI/UX design including visual design principles, wireframing, prototyping, and usability testing.'
  },
  {
    id: 3,
    degree: 'Bachelor in Software Engineering',
    institution: 'COMSATS University Islamabad',
    period: '2019 - 2023',
    description: 'Comprehensive education in software engineering principles, programming, and system design with focus on building user-friendly applications.'
  },
  {
    id: 4,
    degree: 'Intermediate in Computer Science',
    institution: 'Punjab Group Of Colleges',
    period: '2016 - 2018',
    description: 'Foundation studies in computer science, programming, and digital systems design.'
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12">Academic and professional education</p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>
          
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`md:flex items-center mb-16 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12'}`}>
                <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-1">{item.institution}</p>
                <div className={`flex items-center mb-3 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                  <Calendar className="w-4 h-4 text-primary-600 dark:text-primary-400 mr-1" />
                  <span className="text-sm">{item.period}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
              </div>
              
              <div className="hidden md:flex md:w-14 justify-center">
                <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 shadow-md z-10">
                  <GraduationCap className="w-6 h-6" />
                </div>
              </div>
              
              <div className="md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}