export interface Social {
  id: string;
  platform: string;
  username: string;
  url: string;
  icon: string;
  selected: boolean;
}

export interface SocialsSection {
  socials: Social[];
}

export interface SocialsSectionProps {
  onDataChange: (data: SocialsSection) => void;
}
