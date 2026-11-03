export interface ProgramItemType {
  id: string;
  title: string;
  time: string;
  iconType: 'kalasam' | 'door' | 'ganesha' | 'lamp' | 'meal' | string;
  note: string;
  iconImg: string;
}

export interface InviteConfig {
  coupleNames: string;
  displayNames: string;
  subTitle: string;
  tagline: string;
  subTagline: string;
  closingMessage: string;
  invocation: {
    prefix: string;
    title: string;
    body: string;
  };
  event: {
    dateDisplay: string;
    dateShort: string;
    timeDisplay: string;
    timeSubtitle: string;
    city: string;
    venueName: string;
    venueAddress: string;
    mapLink: string;
    blessingsOnlyNote: string;
    calendarEvent: {
      title: string;
      description: string;
      location: string;
      startDate: string;
      endDate: string;
    };
  };
  program: ProgramItemType[];
  music: {
    audioUrl: string;
    localAudio: string;
    title: string;
  };
  images: {
    door: string;
    floor: string;
    ganeshaAlcove: string;
    coupleSmall: string;
    coupleFull: string;
    doorVideo?: string;
  };
}

// Read from .env environment variables (VITE_*) with resilient defaults
const env = import.meta.env;

const coupleNames = env.VITE_COUPLE_NAMES || "Ramya & Rishi";
const displayNames = env.VITE_DISPLAY_NAMES || "Ramya & Rishi";
const subTitle = env.VITE_FAMILY_SUBTITLE || "Together with their parents & families";
const tagline = env.VITE_TAGLINE || "A New Home, A New Beginning.";
const subTagline = env.VITE_SUB_TAGLINE || "Blessed with Love & Happiness.";
const closingMessage = env.VITE_CLOSING_MESSAGE || "May our new home be filled with happiness, health, prosperity and divine blessings today and always.";
const invitationPrefix = env.VITE_INVITATION_PREFIX || "|| Shri Ganeshaya Namah ||";
const invitationBody = env.VITE_INVITATION_BODY || "With divine blessings and your loving presence, we step into our new home and a new chapter of our lives. Your presence will make this day even more special.";

const dateDisplay = env.VITE_EVENT_DATE_DISPLAY || "11th November 2026";
const dateShort = env.VITE_EVENT_DATE_SHORT || "11TH NOVEMBER '26";
const timeDisplay = env.VITE_EVENT_TIME_DISPLAY || "10:00 AM";
const timeSubtitle = env.VITE_EVENT_TIME_SUBTITLE || "Followed by lunch";

const city = env.VITE_EVENT_CITY || "BANGALORE";
const venueName = env.VITE_VENUE_NAME || "104, HSR Layout, Bangalore";
const venueAddress = env.VITE_VENUE_ADDRESS || "Sector 2, HSR Layout, Bangalore, Karnataka - 560102";
const mapLink = env.VITE_MAP_LINK || "https://maps.google.com/?q=HSR+Layout+Bangalore";
const blessingsOnlyNote = env.VITE_BLESSINGS_NOTE || "Your blessings are our greatest gift";

const doorVideo = env.VITE_DOOR_VIDEO || "/f1.mp4";
const couplePhoto = env.VITE_COUPLE_PHOTO || "/assets/Elegant Indian Housewarming Invitation.png";
const audioUrl = env.VITE_AUDIO_URL || "/nadaswaram.mp3";


// Default program timeline items
const defaultProgram: ProgramItemType[] = [
  {
    id: "punyahavachanam",
    title: env.VITE_PROGRAM_1_TITLE || "PUNYAHAVACHANAM",
    time: env.VITE_PROGRAM_1_TIME || "09:15 AM",
    iconType: "kalasam",
    note: env.VITE_PROGRAM_1_NOTE || "Purification prayers invoking divine serenity",
    iconImg: "/assets/icon-kalasam.png"
  },
  {
    id: "griha-pravesham",
    title: env.VITE_PROGRAM_2_TITLE || "GRIHA PRAVESHAM",
    time: env.VITE_PROGRAM_2_TIME || "10:00 AM",
    iconType: "door",
    note: env.VITE_PROGRAM_2_NOTE || "Auspicious first entry of the family bearing the holy lamp",
    iconImg: "/assets/icon-door.png"
  },
  {
    id: "ganapathi-homam",
    title: env.VITE_PROGRAM_3_TITLE || "GANAPATHI HOMAM",
    time: env.VITE_PROGRAM_3_TIME || "10:45 AM",
    iconType: "ganesha",
    note: env.VITE_PROGRAM_3_NOTE || "Invoking Lord Ganesha for peace, prosperity and wisdom",
    iconImg: "/assets/icon-ganesha.png"
  },
  {
    id: "satyanarayana-puja",
    title: env.VITE_PROGRAM_4_TITLE || "SATYANARAYANA PUJA",
    time: env.VITE_PROGRAM_4_TIME || "11:30 AM",
    iconType: "lamp",
    note: env.VITE_PROGRAM_4_NOTE || "Sacred prayers for health, joy and lifelong abundance",
    iconImg: "/assets/icon-lamp.png"
  },
  {
    id: "lunch-blessings",
    title: env.VITE_PROGRAM_5_TITLE || "LUNCH & BLESSINGS",
    time: env.VITE_PROGRAM_5_TIME || "Followed by lunch",
    iconType: "meal",
    note: env.VITE_PROGRAM_5_NOTE || "Traditional South Indian feast served on plantain leaves",
    iconImg: "/assets/icon-meal.png"
  }
];

function getProgramItems(): ProgramItemType[] {
  if (env.VITE_PROGRAM_ITEMS_JSON) {
    try {
      const parsed = JSON.parse(env.VITE_PROGRAM_ITEMS_JSON);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    } catch (e) {
      console.warn("Failed to parse VITE_PROGRAM_ITEMS_JSON:", e);
    }
  }

  // If specific program 1 title is set in env, build dynamically based on set programs
  if (env.VITE_PROGRAM_1_TITLE) {
    const items: ProgramItemType[] = [];
    const iconMap: Record<number, { type: string; img: string }> = {
      1: { type: "ganesha", img: "/assets/icon-ganesha.png" },
      2: { type: "door", img: "/assets/icon-door.png" },
      3: { type: "meal", img: "/assets/icon-meal.png" },
      4: { type: "lamp", img: "/assets/icon-lamp.png" },
      5: { type: "kalasam", img: "/assets/icon-kalasam.png" },
    };

    const count = 5;
    for (let i = 1; i <= count; i++) {
      const title = (env as Record<string, string | undefined>)[`VITE_PROGRAM_${i}_TITLE`];
      const time = (env as Record<string, string | undefined>)[`VITE_PROGRAM_${i}_TIME`];
      const note = (env as Record<string, string | undefined>)[`VITE_PROGRAM_${i}_NOTE`];

      if (title) {
        const lowerTitle = title.toLowerCase();
        let iconType = iconMap[i]?.type || "door";
        let iconImg = iconMap[i]?.img || "/assets/icon-door.png";

        if (lowerTitle.includes("ganapath") || lowerTitle.includes("homam") || lowerTitle.includes("ganesha")) {
          iconType = "ganesha";
          iconImg = "/assets/icon-ganesha.png";
        } else if (lowerTitle.includes("griha") || lowerTitle.includes("pravesh") || lowerTitle.includes("door")) {
          iconType = "door";
          iconImg = "/assets/icon-door.png";
        } else if (lowerTitle.includes("breakfast") || lowerTitle.includes("lunch") || lowerTitle.includes("feast") || lowerTitle.includes("dinner")) {
          iconType = "meal";
          iconImg = "/assets/icon-meal.png";
        } else if (lowerTitle.includes("puja") || lowerTitle.includes("satyanarayana") || lowerTitle.includes("lamp")) {
          iconType = "lamp";
          iconImg = "/assets/icon-lamp.png";
        } else if (lowerTitle.includes("punyaha") || lowerTitle.includes("kalasam")) {
          iconType = "kalasam";
          iconImg = "/assets/icon-kalasam.png";
        }

        items.push({
          id: `program-${i}-${lowerTitle.replace(/[^a-z0-9]/g, "-")}`,
          title,
          time: time || "",
          iconType,
          note: note || "",
          iconImg
        });
      }
    }

    if (items.length > 0) {
      return items;
    }
  }

  return defaultProgram;
}

export const inviteData: InviteConfig = {
  coupleNames,
  displayNames,
  subTitle,
  tagline,
  subTagline,
  closingMessage,

  invocation: {
    prefix: invitationPrefix,
    title: "Griha Pravesha",
    body: invitationBody,
  },

  event: {
    dateDisplay,
    dateShort,
    timeDisplay,
    timeSubtitle,
    city,
    venueName,
    venueAddress,
    mapLink,
    blessingsOnlyNote,
    calendarEvent: {
      title: `${coupleNames}'s Griha Pravesha`,
      description: `Auspicious Housewarming ceremony of ${coupleNames} at ${city}.`,
      location: `${venueName}, ${city}`,
      startDate: "20261111T100000",
      endDate: "20261111T150000"
    }
  },

  program: getProgramItems(),

  music: {
    audioUrl,
    localAudio: "/assets/aarti.mp3",
    title: "Divine Shehnai & Flute Instrumental"
  },

  images: {
    door: "/assets/door.jpg",
    floor: "/assets/floor.jpg",
    ganeshaAlcove: "/assets/ganesha-gold.jpg",
    coupleSmall: couplePhoto,
    coupleFull: couplePhoto,
    doorVideo,
  }
};
