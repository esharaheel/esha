import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About ME</h2>
        </div>
        
        <div ref={ref} className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="w-full md:w-2/5"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-primary-200 dark:bg-primary-900/40 rounded-xl"></div>
              <img 
                src="https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Esha Raheel" 
                className="relative z-10 w-full h-auto rounded-xl"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-200 dark:bg-accent-900/40 rounded-full"></div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-3/5"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-2">Esha Raheel</h3>
            <p className="text-lg text-primary-600 dark:text-primary-400 mb-4">UI/UX, Graphic & Web Designer</p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm UI/UX, Graphic & Web Designer with expertise in Adobe Illustrator, Photoshop, Canva, Figma, and Balsamiq. My creative approach and attention to detail allow me to design visually captivating graphics and craft intuitive user experiences. Let's collaborate on bringing your ideas to life!
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex flex-col">
                <span className="font-medium text-gray-900 dark:text-white">Location</span>
                <span className="text-gray-600 dark:text-gray-400">Mannheim, Germany</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-gray-900 dark:text-white">Email</span>
                <a 
                  href="mailto:esharaheel11@gmail.com"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  esharaheel11@gmail.com
                </a>
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-gray-900 dark:text-white">Phone</span>
                <a 
                  href="tel:+4915254546889"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  +49 152 54546889
                </a>
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-gray-900 dark:text-white">Behance</span>
                <a 
                  href="https://behance.net/esharaheel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  behance.net/esharaheel
                </a>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="btn btn-primary"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
