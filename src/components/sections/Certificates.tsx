import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certificates = [
  {
    id: 1,
    title: 'UI / UX Design Specialization',
    issuer: 'Coursera',
    date: 'March 2024',
    link: 'https://www.coursera.org/account/accomplishments/specialization/UK2CBSGMF7KM'
  },
  {
    id: 2,
    title: 'Visual Elements of User Interface Design',
    issuer: 'California Institute of the Arts',
    date: 'January 2024',
    link: 'https://www.coursera.org/account/accomplishments/verify/5ZETFAEQNF7J'
  },
  {
    id: 3,
    title: 'UX Design Fundamentals',
    issuer: 'California Institute of the Arts',
    date: 'February 2024',
    link: 'https://www.coursera.org/account/accomplishments/verify/MPBG7MVTRA6K'
  },
  {
    id: 4,
    title: 'Web Design: Strategy and Information Architecture',
    issuer: 'California Institute of the Arts',
    date: 'February 2024',
    link: 'https://www.coursera.org/account/accomplishments/verify/2ZR9NSJQHTQG'
  },
  {
    id: 5,
    title: 'Web Design: Wireframes to Prototypes',
    issuer: 'California Institute of the Arts',
    date: 'March 2024',
    link: 'https://www.coursera.org/account/accomplishments/verify/2D8RMHP73CBP'
  }
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-800/30">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certificates</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12">Professional certifications and credentials</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-6"
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <div className="hidden sm:block flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400">
                      <Award className="w-6 h-6" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-1">{certificate.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {certificate.issuer} • {certificate.date}
                    </p>
                    <a 
                      href={certificate.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium group"
                    >
                      View Certificate
                      <ExternalLink className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}