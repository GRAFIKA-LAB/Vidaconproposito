export interface ServiceSchedule {
  id: string;
  day: string;
  time: string;
  title: string;
  description: string;
  tag: string;
  location: string;
}

export interface Ministry {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  schedule: string;
  leader: string;
  ageGroup: string;
  iconName: string;
  accentColor: string;
}

export interface Sermon {
  id: string;
  title: string;
  speaker: string;
  date: string;
  passage: string;
  series: string;
  duration: string;
  summary: string;
  keyPoints: string[];
  audioUrl?: string;
  videoPlaceholderId?: string;
}

export interface PrayerRequest {
  id: string;
  name: string;
  isAnonymous: boolean;
  category: 'salud' | 'familia' | 'finanzas' | 'espiritual' | 'gratitud' | 'otro';
  request: string;
  date: string;
  prayingCount: number;
  hasUserPrayed?: boolean;
}

export interface ChurchConfig {
  name: string;
  affiliation: string;
  motto: string;
  verse: {
    text: string;
    reference: string;
  };
  pastors: string;
  address: string;
  city: string;
  phone: string;
  whatsapp: string;
  email: string;
  youtubeChannel: string;
  facebookPage: string;
  instagram: string;
  donationMethods: {
    accountName: string;
    bankName: string;
    accountNumber: string;
    routingOrIban: string;
    zelleOrBizum: string;
    notes: string;
  };
}
