import { Mail, Phone, Linkedin, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Esha Raheel</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              UI/UX, Graphic & Web Designer based in Mannheim, Germany. Creating beautiful digital experiences.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/esharaheel/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.behance.net/esharaheel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500 transition-colors"
                aria-label="Behance"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-4">
              <a 
                href="mailto:esharaheel11@gmail.com" 
                className="flex items-center text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                <span>esharaheel11@gmail.com</span>
              </a>
              <a 
                href="tel:+4915254546889" 
                className="flex items-center text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span>+49 152 54546889</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Esha Raheel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
