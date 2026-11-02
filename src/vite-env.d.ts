/// <reference types="vite/client" />

declare module '*.css';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.mp4';
declare module '*.mp3';

interface ImportMetaEnv {
  readonly VITE_COUPLE_NAMES?: string;
  readonly VITE_DISPLAY_NAMES?: string;
  readonly VITE_FAMILY_SUBTITLE?: string;
  readonly VITE_TAGLINE?: string;
  readonly VITE_SUB_TAGLINE?: string;
  readonly VITE_INVITATION_PREFIX?: string;
  readonly VITE_INVITATION_BODY?: string;
  readonly VITE_CLOSING_MESSAGE?: string;
  readonly VITE_EVENT_DATE_DISPLAY?: string;
  readonly VITE_EVENT_DATE_SHORT?: string;
  readonly VITE_EVENT_TIME_DISPLAY?: string;
  readonly VITE_EVENT_TIME_SUBTITLE?: string;
  readonly VITE_EVENT_CITY?: string;
  readonly VITE_VENUE_NAME?: string;
  readonly VITE_VENUE_ADDRESS?: string;
  readonly VITE_MAP_LINK?: string;
  readonly VITE_BLESSINGS_NOTE?: string;
  readonly VITE_DOOR_VIDEO?: string;
  readonly VITE_COUPLE_PHOTO?: string;
  readonly VITE_AUDIO_URL?: string;

  // Auspicious Program Schedule (Timeline)
  readonly VITE_PROGRAM_1_TITLE?: string;
  readonly VITE_PROGRAM_1_TIME?: string;
  readonly VITE_PROGRAM_1_NOTE?: string;
  readonly VITE_PROGRAM_2_TITLE?: string;
  readonly VITE_PROGRAM_2_TIME?: string;
  readonly VITE_PROGRAM_2_NOTE?: string;
  readonly VITE_PROGRAM_3_TITLE?: string;
  readonly VITE_PROGRAM_3_TIME?: string;
  readonly VITE_PROGRAM_3_NOTE?: string;
  readonly VITE_PROGRAM_4_TITLE?: string;
  readonly VITE_PROGRAM_4_TIME?: string;
  readonly VITE_PROGRAM_4_NOTE?: string;
  readonly VITE_PROGRAM_5_TITLE?: string;
  readonly VITE_PROGRAM_5_TIME?: string;
  readonly VITE_PROGRAM_5_NOTE?: string;
  readonly VITE_PROGRAM_ITEMS_JSON?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
