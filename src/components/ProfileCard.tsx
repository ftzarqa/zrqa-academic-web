import React from 'react';

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

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  const initials = getInitials(profile.name);

  return (
    <div className="profile-card" aria-label={`Profil ${profile.name}`}>
      {/* Top accent line */}
      <div className="profile-top-line" aria-hidden="true" />

      {/* Avatar */}
      <div className="profile-avatar" aria-label={`Inisial: ${initials}`}>
        <span className="profile-avatar-text">{initials}</span>
        <span className="profile-avatar-ring" aria-hidden="true" />
      </div>

      {/* Info */}
      <div className="profile-info">
        <p className="profile-name">{profile.name}</p>
        <p className="profile-nim">{profile.nim}</p>
        <span className="profile-role-badge">{profile.role}</span>
      </div>
    </div>
  );
};

export default ProfileCard;
