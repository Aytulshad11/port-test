import { Code, Globe, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image */}
          <div className="w-full md:w-2/5">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-blue-500 dark:border-blue-400"></div>
              <img 
                src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Working at desk" 
                className="w-full h-auto rounded-md relative z-10"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="w-full md:w-3/5">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Hello! I'm a passionate front-end developer with a keen eye for design and a commitment to creating 
              engaging user experiences. I specialize in building modern web applications using React and other 
              cutting-edge technologies.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              With a background in both design and development, I bridge the gap between aesthetics and 
              functionality. I'm constantly learning and experimenting with new technologies to stay ahead 
              in this rapidly evolving field.
            </p>
            
            {/* Key points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Clean Code</h3>
                <p className="text-gray-700 dark:text-gray-300">Writing maintainable, readable, and efficient code.</p>
              </div>
              
              <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Responsive</h3>
                <p className="text-gray-700 dark:text-gray-300">Creating interfaces that work on any device size.</p>
              </div>
              
              <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Performance</h3>
                <p className="text-gray-700 dark:text-gray-300">Optimizing for speed and efficiency.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;