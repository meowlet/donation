export default function Footer() {
    return (
      <footer className="bg-surface dark:bg-dark-surface border-t border-outline-variant/15 dark:border-dark-outline-variant/15">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-on-surface/70 dark:text-dark-on-surface/70">
                © 2024 Google-chan Bot. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6">
              <a 
                href="https://discord.com/api/oauth2/authorize?client_id=909654785156853800&permissions=414568537408&scope=bot" 
                className="text-sm hover:text-primary dark:hover:text-dark-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Invite
              </a>
              <a 
                href="https://discord.gg/GEfD4JKtJF" 
                className="text-sm hover:text-primary dark:hover:text-dark-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord
              </a>
              <a 
                href="https://top.gg/bot/909654785156853800" 
                className="text-sm hover:text-primary dark:hover:text-dark-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vote
              </a>
              <a 
                href="https://github.com/meowlet" 
                className="text-sm hover:text-primary dark:hover:text-dark-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }