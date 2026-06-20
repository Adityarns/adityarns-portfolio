export type Language = 'en' | 'id';

export interface Project {
  id: string;
  title: {
    en: string;
    id: string;
  };
  description: {
    en: string;
    id: string;
  };
  tags: string[];
  category: 'web' | 'mobile' | 'ai' | 'hardware';
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  keyHighlights: {
    en: string[];
    id: string[];
  };
}

export interface BlogPost {
  id: string;
  title: {
    en: string;
    id: string;
  };
  excerpt: {
    en: string;
    id: string;
  };
  content: {
    en: string;
    id: string;
  };
  date: string;
  readTime: string;
  tags: string[];
  author: string;
}

export interface AnalyticsStats {
  viewsCount: number;
  uniqueClicks: number;
  bounceRate: number;
  durationAvg: number;
  pagePerformance: { path: string; count: number; name: { en: string; id: string } }[];
  visitorOrigins: { country: string; flag: string; count: number; ratio: number }[];
  liveStatus: 'SYNCING' | 'IDLE' | 'ACTIVE';
}

export interface PushNotificationItem {
  id: string;
  title: {
    en: string;
    id: string;
  };
  body: {
    en: string;
    id: string;
  };
  category: 'content' | 'project' | 'status';
  timestamp: string;
  isRead: boolean;
}

export interface Translation {
  nav: {
    home: string;
    about: string;
    projects: string;
    blog: string;
    contact: string;
    analytics: string;
  };
  hero: {
    welcome: string;
    sub: string;
    cta: string;
    terminalLabel: string;
    terminalPrompt: string;
  };
  about: {
    title: string;
    subtitle: string;
    p1: string;
    p2: string;
    techStack: string;
    experience: string;
    years: string;
    cvBtn: string;
  };
  projects: {
    title: string;
    subtitle: string;
    all: string;
    viewCode: string;
    viewLive: string;
    highlights: string;
  };
  blog: {
    title: string;
    subtitle: string;
    readMore: string;
    searchPlaceholder: string;
    emptySearch: string;
    backBtn: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    placeholderName: string;
    placeholderEmail: string;
    placeholderMessage: string;
  };
  analytics: {
    title: string;
    subtitle: string;
    realTime: string;
    activeUsers: string;
    uniqueVisitors: string;
    bounceRate: string;
    avgTime: string;
    pageViews: string;
    origins: string;
    trackingId: string;
    trackingActive: string;
    terminalLogs: string;
  };
  notifications: {
    title: string;
    subtitle: string;
    allow: string;
    allowed: string;
    notAllowed: string;
    triggerBtn: string;
    latestTitle: string;
    emptyList: string;
    statusActive: string;
  };
}
