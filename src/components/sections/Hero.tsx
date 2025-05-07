import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 lg:pr-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block px-4 py-2 mb-6 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-700 dark:text-primary-300 font-medium text-sm">
                Available for work
              </div>
            </motion.div>
            
            <motion.h1 
              className="mb-6 font-serif"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Hello! I'm <span className="animated-gradient-text">Esha</span> 👏
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl">
                Real Things. Experienced Designer.
              </span>
            </motion.h1>
            
            <motion.p 
              className="mb-8 text-lg text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Mannheim, Germany
            </motion.p>
            
            <motion.p 
              className="mb-12 text-gray-700 dark:text-gray-300 text-lg max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              I'm UI/UX, Graphic & Web Designer with expertise in Adobe Illustrator, Photoshop, Canva, Figma, and Balsamiq. My creative approach and attention to detail allow me to design visually captivating graphics and craft intuitive user experiences.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a 
                href="#contact" 
                className="btn btn-primary group"
              >
                Get in touch
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#projects" 
                className="btn btn-secondary"
              >
                View my work
              </a>
            </motion.div>
          </div>
          
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {/* Design elements */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary-300/30 dark:bg-primary-700/20 rounded-full filter blur-xl animate-float"></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-secondary-300/40 dark:bg-secondary-700/20 rounded-full filter blur-xl animation-delay-2000 animate-float"></div>
              
              {/* Designer illustration/image */}
              <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Designer workspace with digital tablet and design tools" 
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-white text-lg font-medium">
                    Creating beautiful experiences
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}