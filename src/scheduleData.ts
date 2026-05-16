export type DayKey =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export type SlotType =
  | "prayerLead"
  | "translation"
  | "conductService"
  | "prayerFasting"
  | "worshipService"
  | "bibleStudy";

export interface Slot {
  id: string;
  type: SlotType;
  timeKey: string; // key into translations
  signedUp: string[]; // list of member names
  maxSignups: number;
}

export interface DaySchedule {
  day: DayKey;
  noteKey: string;
  slots: Slot[];
}

export const defaultSchedule: DaySchedule[] = [
  {
    day: "monday",
    noteKey: "weekdayNote",
    slots: [
      {
        id: "mon-prayer",
        type: "prayerLead",
        timeKey: "morningSlot",
        signedUp: [],
        maxSignups: 2,
      },
      {
        id: "mon-translation",
        type: "translation",
        timeKey: "morningSlot",
        signedUp: [],
        maxSignups: 1,
      },
      {
        id: "mon-conduct",
        type: "conductService",
        timeKey: "morningSlot",
        signedUp: [],
        maxSignups: 1,
      },
    ],
  },
  {
    day: "tuesday",
    noteKey: "weekdayNote",
    slots: [
      {
        id: "tue-prayer",
        type: "prayerLead",
        timeKey: "morningSlot",
        signedUp: [],
        maxSignups: 2,
      },
      {
        id: "tue-translation",
        type: "translation",
        timeKey: "morningSlot",
        signedUp: [],
        maxSignups: 1,
      },
      {
        id: "tue-conduct",
        type: "conductService",
        timeKey: "morningSlot",
        signedUp: [],
        maxSignups: 1,
      },
    ],
  },
  {
    day: "wednesday",
    noteKey: "weekdayNote",
    slots: [
      {
        id: "wed-prayer",
        type: "prayerLead",
        timeKey: "morningSlot",
        signedUp: [],
        maxSignups: 2,
      },
      {
        id: "wed-translation",
        type: "translation",
        timeKey: "morningSlot",
        signedUp: [],
        maxSignups: 1,
      },
      {
        id: "wed-conduct",
        type: "conductService",
        timeKey: "morningSlot",
        signedUp: [],
        maxSignups: 1,
      },
    ],
  },
  {
    day: "thursday",
    noteKey: "weekdayNote",
    slots: [
      {
        id: "thu-prayer",
        type: "prayerLead",
        timeKey: "morningSlot",
        signedUp: [],
        maxSignups: 2,
      },
      {
        id: "thu-translation",
        type: "translation",
        timeKey: "morningSlot",
        signedUp: [],
        maxSignups: 1,
      },
      {
        id: "thu-conduct",
        type: "conductService",
        timeKey: "morningSlot",
        signedUp: [],
        maxSignups: 1,
      },
    ],
  },
  {
    day: "friday",
    noteKey: "fridayNote",
    slots: [
      {
        id: "fri-pf-day",
        type: "prayerFasting",
        timeKey: "midnightSlot",
        signedUp: [],
        maxSignups: 5,
      },
      {
        id: "fri-translation-day",
        type: "translation",
        timeKey: "midnightSlot",
        signedUp: [],
        maxSignups: 1,
      },
      {
        id: "fri-pf-night",
        type: "prayerFasting",
        timeKey: "eveningSlot",
        signedUp: [],
        maxSignups: 5,
      },
      {
        id: "fri-translation-night",
        type: "translation",
        timeKey: "eveningSlot",
        signedUp: [],
        maxSignups: 1,
      },
    ],
  },
  {
    day: "saturday",
    noteKey: "saturdayNote",
    slots: [
      {
        id: "sat-worship",
        type: "worshipService",
        timeKey: "worshipSlot",
        signedUp: [],
        maxSignups: 3,
      },
      {
        id: "sat-prayer",
        type: "prayerLead",
        timeKey: "worshipSlot",
        signedUp: [],
        maxSignups: 2,
      },
      {
        id: "sat-translation",
        type: "translation",
        timeKey: "worshipSlot",
        signedUp: [],
        maxSignups: 1,
      },
      {
        id: "sat-conduct",
        type: "conductService",
        timeKey: "worshipSlot",
        signedUp: [],
        maxSignups: 1,
      },
    ],
  },
  {
    day: "sunday",
    noteKey: "sundayNote",
    slots: [
      {
        id: "sun-bible",
        type: "bibleStudy",
        timeKey: "bibleSlot",
        signedUp: [],
        maxSignups: 3,
      },
      {
        id: "sun-prayer",
        type: "prayerLead",
        timeKey: "bibleSlot",
        signedUp: [],
        maxSignups: 2,
      },
      {
        id: "sun-translation",
        type: "translation",
        timeKey: "bibleSlot",
        signedUp: [],
        maxSignups: 1,
      },
    ],
  },
];
