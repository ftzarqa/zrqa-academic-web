import React from 'react';
import { motion } from 'framer-motion';

const SPRING_SNAPPY = { type: "spring" as const, stiffness: 400, damping: 25 };
const SPRING_HOVER = { type: "spring" as const, stiffness: 500, damping: 30 };

export interface StudentData {
  id:   number;
  name: string;
  nim:  string;
  role: string;
}

interface ProfileCardProps {
  profile: StudentData;
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map(w => w[0])
    .join('');
}

const infoContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.25 },
  },
};

const infoItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: SPRING_SNAPPY,
  },
};

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  const initials = getInitials(profile.name);

  return (
    <motion.div
      className="profile-card"
      aria-label={`Profil ${profile.name}`}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={SPRING_SNAPPY}
      whileHover={{ y: -4, transition: SPRING_HOVER }}
    >
      {/* Top accent line */}
      <div className="profile-top-line" aria-hidden="true" />

      {/* Avatar */}
      <motion.div
        className="profile-avatar"
        aria-label={`Inisial: ${initials}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ...SPRING_SNAPPY, delay: 0.15 }}
      >
        <span className="profile-avatar-text">{initials}</span>
        <span className="profile-avatar-ring" aria-hidden="true" />
      </motion.div>

      {/* Info */}
      <motion.div
        className="profile-info"
        variants={infoContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="profile-name" variants={infoItemVariants}>
          {profile.name}
        </motion.p>
        <motion.p className="profile-nim" variants={infoItemVariants}>
          {profile.nim}
        </motion.p>
        <motion.span className="profile-role-badge" variants={infoItemVariants}>
          {profile.role}
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default ProfileCard;
