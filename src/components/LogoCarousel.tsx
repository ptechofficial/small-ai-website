
import React from 'react';

// Array of tools to display in the carousel
const tools = [
  { name: 'N8N', logo: 'https://n8n.io/favicon.ico' },
  { name: 'Gumloop', logo: 'https://storage.googleapis.com/aston-website-bucket/client-images/gumloop.jpg' },
  { name: 'LinkedIn', logo: 'https://static.licdn.com/aero-v1/sc/h/9ogy8bw6zgkc8dwjdu7w5dqts' },
  { name: 'Make.com', logo: 'https://www.make.com/_nuxt/img/favicon.37a6740.ico' },
  { name: 'Zapier', logo: 'https://cdn.zapier.com/zapier/images/favicon.ico' },
  { name: 'Slack', logo: 'https://a.slack-edge.com/80588/marketing/img/meta/favicon-32.png' },
  { name: 'Airtable', logo: 'https://www.airtable.com/favicon.ico' },
  { name: 'Google Drive', logo: 'https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png' },
  { name: 'Gmail', logo: 'https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico' },
  { name: 'Discord', logo: 'https://discord.com/assets/847541504914fd33810e70a0ea73177e.ico' },
  { name: 'ChatGPT', logo: 'https://chat.openai.com/favicon.ico' },
  { name: 'DeepSeek', logo: 'https://www.deepseek.com/images/favicon.ico' },
  { name: 'Claude', logo: 'https://claude.ai/favicon.svg' },
  { name: 'Perplexity', logo: 'https://www.perplexity.ai/favicon.ico' },
  { name: 'Meta Ads', logo: 'https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico' },
];

const LogoCarousel = () => {
  return (
    <section className="py-12 bg-black dark:bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-sm uppercase tracking-wider text-smallai-purple mb-3 font-medium animate-reveal-from-top">Connect Your Tools</h2>
          <p className="text-gray-300 max-w-3xl mx-auto animate-reveal-from-top text-balance">
            Integrate AI into your app ecosystem. Connect and automate your favorite tools with AI-powered workflows.
          </p>
        </div>
        
        <div className="relative">
          {/* First carousel - moving right */}
          <div className="flex space-x-8 animate-carousel">
            <div className="flex space-x-8 animate-move-right">
              {tools.map((tool, i) => (
                <div 
                  key={`right-${i}`} 
                  className="w-16 h-16 shrink-0 rounded-full bg-gray-800 bg-opacity-30 flex items-center justify-center p-2 backdrop-blur-sm border border-gray-700"
                >
                  <img 
                    src={tool.logo} 
                    alt={tool.name} 
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
            
            {/* Duplicate set for infinite loop */}
            <div className="flex space-x-8 animate-move-right">
              {tools.map((tool, i) => (
                <div 
                  key={`right-dup-${i}`} 
                  className="w-16 h-16 shrink-0 rounded-full bg-gray-800 bg-opacity-30 flex items-center justify-center p-2 backdrop-blur-sm border border-gray-700"
                >
                  <img 
                    src={tool.logo} 
                    alt={tool.name} 
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Second carousel - moving left (reversed) */}
          <div className="flex space-x-8 mt-8 animate-carousel">
            <div className="flex space-x-8 animate-move-left">
              {[...tools].reverse().map((tool, i) => (
                <div 
                  key={`left-${i}`} 
                  className="w-16 h-16 shrink-0 rounded-full bg-gray-800 bg-opacity-30 flex items-center justify-center p-2 backdrop-blur-sm border border-gray-700"
                >
                  <img 
                    src={tool.logo} 
                    alt={tool.name} 
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
            
            {/* Duplicate set for infinite loop */}
            <div className="flex space-x-8 animate-move-left">
              {[...tools].reverse().map((tool, i) => (
                <div 
                  key={`left-dup-${i}`} 
                  className="w-16 h-16 shrink-0 rounded-full bg-gray-800 bg-opacity-30 flex items-center justify-center p-2 backdrop-blur-sm border border-gray-700"
                >
                  <img 
                    src={tool.logo} 
                    alt={tool.name} 
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
