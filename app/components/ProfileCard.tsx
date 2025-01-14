import Image from 'next/image';

interface ProfileCardProps {
  username: string;
  bio: string;
  avatar: string;
  cover: string;
  stats: {
    servers: string;
    users: string;
    commands: string;
  };
}

export default function ProfileCard({
  username,
  bio,
  avatar,
  cover,
  stats,
}: ProfileCardProps) {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden bg-white/50 dark:bg-dark-secondary/5 border border-secondary/10 dark:border-dark-secondary/10 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-xl animate-fadeIn">
        {/* Cover Image */}
        <div className="relative h-40 sm:h-48 w-full">
          <Image
            src={cover}
            alt="Cover"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
        
        {/* Profile Content */}
        <div className="relative px-4 sm:px-6 pb-6">
          {/* Avatar */}
          <div className="absolute -top-16 left-4 sm:left-6">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-surface dark:border-dark-surface overflow-hidden shadow-lg">
              <Image
                src={avatar}
                alt={username}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="pt-12 sm:pt-20">
            <h2 className="text-xl sm:text-2xl font-bold text-primary dark:text-dark-primary mb-2">
              {username}
            </h2>
            <p className="text-sm sm:text-base text-secondary-50/90 dark:text-dark-secondary/80 mb-6">
              {bio}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 p-3 sm:p-4 rounded-xl bg-secondary-95/50 dark:bg-dark-secondary/10">
              <div className="text-center">
                <div className="text-lg sm:text-xl font-bold text-secondary dark:text-dark-secondary">
                  {stats.servers}
                </div>
                <div className="text-xs sm:text-sm text-secondary-50 dark:text-dark-secondary/70">
                  Servers
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl font-bold text-secondary dark:text-dark-secondary">
                  {stats.users}
                </div>
                <div className="text-xs sm:text-sm text-secondary-50 dark:text-dark-secondary/70">
                  Users
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl font-bold text-secondary dark:text-dark-secondary">
                  {stats.commands}
                </div>
                <div className="text-xs sm:text-sm text-secondary-50 dark:text-dark-secondary/70">
                  Commands
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 