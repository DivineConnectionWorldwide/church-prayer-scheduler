import { useState, useEffect, useCallback } from "react";
import { translations, Language } from "./translations";
import { defaultSchedule, DaySchedule, DayKey, SlotType } from "./scheduleData";
import { bibleStudyNotes } from "./bibleStudy";
import { todaysBibleStudy } from "./completeBibleStudy";
import {
  getTodayPlan,
  getTodayDevotionals,
  shouldResetForNewDay,
  markDateSeen,
  type DailyPlan,
  type DailyDevotional,
} from "./dailyPlan";

// ── Helpers ──────────────────────────────────────────────────────────────────
const SLOT_COLORS_LIGHT: Record<SlotType, string> = {
  prayerLead: "bg-purple-100 text-purple-800 border-purple-200",
  translation: "bg-blue-100 text-blue-800 border-blue-200",
  conductService: "bg-amber-100 text-amber-800 border-amber-200",
  prayerFasting: "bg-rose-100 text-rose-800 border-rose-200",
  worshipService: "bg-emerald-100 text-emerald-800 border-emerald-200",
  bibleStudy: "bg-indigo-100 text-indigo-800 border-indigo-200",
};

const SLOT_COLORS_DARK: Record<SlotType, string> = {
  prayerLead: "bg-purple-900/60 text-purple-200 border-purple-700",
  translation: "bg-blue-900/60 text-blue-200 border-blue-700",
  conductService: "bg-amber-900/60 text-amber-200 border-amber-700",
  prayerFasting: "bg-rose-900/60 text-rose-200 border-rose-700",
  worshipService: "bg-emerald-900/60 text-emerald-200 border-emerald-700",
  bibleStudy: "bg-indigo-900/60 text-indigo-200 border-indigo-700",
};

const SLOT_ICONS: Record<SlotType, string> = {
  prayerLead: "🙏",
  translation: "🌐",
  conductService: "📖",
  prayerFasting: "⚡",
  worshipService: "🎵",
  bibleStudy: "📚",
};

const DAY_COLORS: Record<DayKey, string> = {
  monday: "from-purple-600 to-indigo-700",
  tuesday: "from-blue-600 to-cyan-700",
  wednesday: "from-teal-600 to-emerald-700",
  thursday: "from-amber-600 to-orange-700",
  friday: "from-rose-600 to-pink-700",
  saturday: "from-violet-600 to-purple-700",
  sunday: "from-indigo-600 to-blue-700",
};

const DAYS: DayKey[] = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

type Tab = "schedule" | "bible" | "devotional" | "members";

interface Member {
  id: string;
  name: string;
  role: string;
}

// ── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [lang, setLang] = useState<Language>("en");
  const [dark, setDark] = useState<boolean>(() => {
    const saved = localStorage.getItem("church_darkmode");
    return saved === "true";
  });
  const [tab, setTab] = useState<Tab>("schedule");
  const [schedule, setSchedule] = useState<DaySchedule[]>(() => {
    const saved = localStorage.getItem("church_schedule");
    return saved ? JSON.parse(saved) : defaultSchedule;
  });
  const [selectedDay, setSelectedDay] = useState<DayKey | null>(null);
  const [userName, setUserName] = useState(() => localStorage.getItem("church_username") || "");
  const [nameInput, setNameInput] = useState("");
  const [showNameModal, setShowNameModal] = useState(false);
  const [signupSlotId, setSignupSlotId] = useState<string | null>(null);
  const [members, setMembers] = useState<Member[]>(() => {
    const saved = localStorage.getItem("church_members");
    return saved ? JSON.parse(saved) : [];
  });
  const [newMemberName, setNewMemberName] = useState("");
  const [newMemberRole, setNewMemberRole] = useState("");
  const [readPassages, setReadPassages] = useState<string[]>(() => {
    const saved = localStorage.getItem("church_read_passages");
    return saved ? JSON.parse(saved) : [];
  });
  const [expandedDevotional, setExpandedDevotional] = useState<number | null>(null);
  const [expandedStudy, setExpandedStudy] = useState<string | null>(null);
  const [showCompleteStudy, setShowCompleteStudy] = useState(false);
  const [expandedStudySection, setExpandedStudySection] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  // Daily auto-update state
  const [dailyPlan, setDailyPlan] = useState<DailyPlan>(() => getTodayPlan());
  const [dailyDevotionals, setDailyDevotionals] = useState<DailyDevotional[]>(() => getTodayDevotionals());

  const t = translations[lang];
  const slotColors = dark ? SLOT_COLORS_DARK : SLOT_COLORS_LIGHT;

  // ── Auto-update: check for new day ────────────────────────────────────────
  const checkForNewDay = useCallback(() => {
    const { needsReset, currentDateKey } = shouldResetForNewDay();
    if (needsReset) {
      // New day detected — update everything
      setDailyPlan(getTodayPlan());
      setDailyDevotionals(getTodayDevotionals());
      setReadPassages([]); // reset reading checkmarks
      localStorage.setItem("church_read_passages", "[]");
      setExpandedStudy(null);
      setShowCompleteStudy(false);
      setExpandedStudySection(null);
      setExpandedDevotional(null);
      markDateSeen(currentDateKey);
    }
  }, []);

  // Check on mount
  useEffect(() => {
    checkForNewDay();
  }, [checkForNewDay]);

  // Check every 60 seconds for date change (e.g. midnight rollover)
  useEffect(() => {
    const interval = setInterval(checkForNewDay, 60_000);
    return () => clearInterval(interval);
  }, [checkForNewDay]);

  // Also check when tab/window becomes visible again
  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        checkForNewDay();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, [checkForNewDay]);

  // Persist data
  useEffect(() => {
    localStorage.setItem("church_schedule", JSON.stringify(schedule));
  }, [schedule]);

  useEffect(() => {
    localStorage.setItem("church_members", JSON.stringify(members));
  }, [members]);

  useEffect(() => {
    localStorage.setItem("church_read_passages", JSON.stringify(readPassages));
  }, [readPassages]);

  useEffect(() => {
    localStorage.setItem("church_darkmode", dark ? "true" : "false");
  }, [dark]);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  // ── Schedule Actions ────────────────────────────────────────────────────────
  const handleSignUp = (slotId: string) => {
    if (!userName) {
      setSignupSlotId(slotId);
      setShowNameModal(true);
      return;
    }
    doSignUp(slotId, userName);
  };

  const doSignUp = (slotId: string, name: string) => {
    setSchedule((prev) =>
      prev.map((day) => ({
        ...day,
        slots: day.slots.map((slot) => {
          if (slot.id === slotId) {
            if (slot.signedUp.includes(name)) return slot;
            if (slot.signedUp.length >= slot.maxSignups) return slot;
            return { ...slot, signedUp: [...slot.signedUp, name] };
          }
          return slot;
        }),
      }))
    );
    showToast("✅ Signed up successfully!");
  };

  const handleRemove = (slotId: string, name: string) => {
    setSchedule((prev) =>
      prev.map((day) => ({
        ...day,
        slots: day.slots.map((slot) => {
          if (slot.id === slotId) {
            return { ...slot, signedUp: slot.signedUp.filter((n) => n !== name) };
          }
          return slot;
        }),
      }))
    );
  };

  const confirmName = () => {
    const trimmed = nameInput.trim();
    if (!trimmed) return;
    setUserName(trimmed);
    localStorage.setItem("church_username", trimmed);
    setNameInput("");
    setShowNameModal(false);
    if (signupSlotId) {
      doSignUp(signupSlotId, trimmed);
      setSignupSlotId(null);
    }
  };

  const clearUserName = () => {
    setUserName("");
    localStorage.removeItem("church_username");
    showToast("Name cleared");
  };

  // ── Member Actions ──────────────────────────────────────────────────────────
  const addMember = () => {
    if (!newMemberName.trim()) return;
    const m: Member = {
      id: Date.now().toString(),
      name: newMemberName.trim(),
      role: newMemberRole.trim(),
    };
    setMembers((prev) => [...prev, m]);
    setNewMemberName("");
    setNewMemberRole("");
    showToast("Member added!");
  };

  const deleteMember = (id: string) => {
    setMembers((prev) => prev.filter((m) => m.id !== id));
  };

  // ── Bible Reading ───────────────────────────────────────────────────────────
  const togglePassage = (ref: string) => {
    setReadPassages((prev) =>
      prev.includes(ref) ? prev.filter((r) => r !== ref) : [...prev, ref]
    );
  };

  // ── My Bookings ─────────────────────────────────────────────────────────────
  const myBookings = schedule.flatMap((day) =>
    day.slots
      .filter((slot) => userName && slot.signedUp.includes(userName))
      .map((slot) => ({ day: day.day, slot }))
  );

  const currentDaySchedule = schedule.find((d) => d.day === selectedDay);

  // ── Dark mode helper classes ────────────────────────────────────────────────
  const bg = dark ? "bg-gray-950" : "bg-gray-50";
  const cardBg = dark ? "bg-gray-900" : "bg-white";
  const cardBorder = dark ? "border-gray-800" : "border-gray-100";
  const textPrimary = dark ? "text-gray-100" : "text-gray-800";
  const textSecondary = dark ? "text-gray-400" : "text-gray-500";
  const textMuted = dark ? "text-gray-500" : "text-gray-400";
  const inputBg = dark
    ? "bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-500"
    : "bg-white border-gray-200 text-gray-800 placeholder-gray-400";


  return (
    <div className={`flex flex-col min-h-screen ${bg} relative font-sans transition-colors duration-300`}>
      {/* Responsive centered container */}
      <div className={`w-full max-w-5xl mx-auto flex flex-col min-h-screen lg:my-4 lg:rounded-2xl lg:overflow-hidden lg:shadow-2xl lg:border ${dark ? "lg:border-gray-800" : "lg:border-gray-200"}`}>
      {/* Toast */}
      {toast && (
        <div className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 ${dark ? "bg-gray-100 text-gray-900" : "bg-gray-900 text-white"} text-sm px-4 py-2 rounded-full shadow-lg`}>
          {toast}
        </div>
      )}

      {/* Name Modal */}
      {showNameModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className={`${dark ? "bg-gray-900 border border-gray-700" : "bg-white"} rounded-2xl shadow-2xl p-6 sm:p-8 mx-4 w-full max-w-sm sm:max-w-md`}>
            <h3 className={`text-lg sm:text-xl font-bold ${textPrimary} mb-1`}>{t.yourName}</h3>
            <p className={`text-sm ${textSecondary} mb-4`}>{t.pickName}</p>
            <input
              className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4 ${inputBg}`}
              placeholder={t.pickName}
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && confirmName()}
              autoFocus
            />
            <div className="flex gap-2">
              <button
                onClick={() => { setShowNameModal(false); setSignupSlotId(null); }}
                className={`flex-1 py-2.5 rounded-xl border text-sm font-medium transition-all ${dark ? "border-gray-600 text-gray-300 hover:bg-gray-800" : "border-gray-300 text-gray-600 hover:bg-gray-50"}`}
              >
                {t.cancel}
              </button>
              <button
                onClick={confirmName}
                className="flex-1 py-2.5 rounded-xl bg-purple-600 text-white text-sm font-medium hover:bg-purple-700"
              >
                {t.confirm}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header
        className="relative overflow-hidden bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-800 text-white px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 pb-6 sm:pb-8 shadow-lg safe-top"
        style={{
          backgroundImage: `url('/images/hero-bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className={`absolute inset-0 ${dark ? "bg-gradient-to-br from-gray-950/90 via-gray-900/85 to-gray-950/90" : "bg-gradient-to-br from-purple-900/80 via-indigo-900/75 to-blue-900/80"}`} />
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-1">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">{t.appTitle}</h1>
              <p className={`text-xs sm:text-sm mt-0.5 italic ${dark ? "text-gray-400" : "text-purple-200"}`}>{t.appSubtitle}</p>
            </div>
            {/* Header Buttons */}
            <div className="flex items-center gap-1.5">
              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDark((d) => !d)}
                className="flex items-center justify-center w-9 h-9 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-base border border-white/30 transition-all"
                aria-label="Toggle dark mode"
              >
                {dark ? "☀️" : "🌙"}
              </button>
              {/* Language Toggle */}
              <button
                onClick={() => setLang((l) => (l === "en" ? "fr" : "en"))}
                className="flex items-center gap-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold border border-white/30 transition-all"
              >
                <span className="text-base">{lang === "en" ? "🇫🇷" : "🇬🇧"}</span>
                <span>{lang === "en" ? "FR" : "EN"}</span>
              </button>
            </div>
          </div>

          {/* User name strip */}
          {userName ? (
            <div className={`mt-3 flex items-center gap-2 ${dark ? "bg-white/10" : "bg-white/15"} rounded-xl px-3 py-2`}>
              <span className="text-xl">👤</span>
              <span className="text-sm font-semibold flex-1">{userName}</span>
              <button
                onClick={clearUserName}
                className={`text-xs ${dark ? "text-gray-400 hover:text-white" : "text-purple-200 hover:text-white"} underline`}
              >
                {t.clearName}
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowNameModal(true)}
              className={`mt-3 w-full flex items-center gap-2 ${dark ? "bg-white/10 hover:bg-white/20 text-gray-200" : "bg-white/15 hover:bg-white/25 text-purple-100"} rounded-xl px-3 py-2 text-sm border border-white/20 transition-all`}
            >
              <span>👤</span>
              <span>{t.setName}</span>
            </button>
          )}
        </div>
      </header>

      {/* Nav Tabs */}
      <nav className={`flex ${dark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-100"} shadow-sm border-b sticky top-0 z-30 transition-colors duration-300 px-0 sm:px-4 lg:px-8`}>
        {(["schedule", "bible", "devotional", "members"] as Tab[]).map((tabKey) => {
          const icons: Record<Tab, string> = {
            schedule: "📅",
            bible: "📖",
            devotional: "🕊️",
            members: "👥",
          };
          const labels: Record<Tab, string> = {
            schedule: t.navSchedule,
            bible: t.navBible,
            devotional: t.navDevotional,
            members: t.navMembers,
          };
          const active = tab === tabKey;
          return (
            <button
              key={tabKey}
              onClick={() => setTab(tabKey)}
              className={`flex-1 flex flex-col sm:flex-row items-center justify-center py-2.5 sm:py-3 text-xs sm:text-sm font-medium transition-all gap-0.5 sm:gap-2 ${
                active
                  ? "text-purple-500 border-b-2 border-purple-500"
                  : dark
                    ? "text-gray-500 hover:text-gray-300"
                    : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <span className="text-base sm:text-lg">{icons[tabKey]}</span>
              <span>{labels[tabKey]}</span>
            </button>
          );
        })}
      </nav>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-6 safe-bottom">

        {/* ── SCHEDULE TAB ── */}
        {tab === "schedule" && (
          <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
            <div>
              <h2 className={`text-lg sm:text-xl lg:text-2xl font-bold ${textPrimary}`}>{t.scheduleTitle}</h2>
              <p className={`text-xs sm:text-sm ${textSecondary}`}>{t.scheduleSubtitle}</p>
            </div>

            {/* My Bookings */}
            {myBookings.length > 0 && (
              <div className={`${dark ? "bg-purple-950/50 border-purple-800" : "bg-purple-50 border-purple-200"} border rounded-2xl p-4`}>
                <h3 className={`text-sm font-bold ${dark ? "text-purple-300" : "text-purple-800"} mb-2 flex items-center gap-1.5`}>
                  <span>📌</span> {t.myBookings}
                </h3>
                <div className="space-y-2">
                  {myBookings.map(({ day, slot }) => (
                    <div
                      key={slot.id}
                      className={`flex items-center justify-between ${dark ? "bg-gray-800" : "bg-white"} rounded-xl px-3 py-2 shadow-sm`}
                    >
                      <div>
                        <p className={`text-xs font-semibold ${dark ? "text-gray-200" : "text-gray-700"} capitalize`}>
                          {SLOT_ICONS[slot.type]} {t[slot.type as keyof typeof t] as string}
                        </p>
                        <p className={`text-xs ${textMuted} capitalize`}>
                          {t[day as keyof typeof t] as string} · {t[slot.timeKey as keyof typeof t] as string}
                        </p>
                      </div>
                      <button
                        onClick={() => handleRemove(slot.id, userName)}
                        className="text-xs text-rose-500 hover:text-rose-700 font-medium"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Day Selector */}
            <div>
              <p className={`text-xs font-semibold ${textSecondary} uppercase tracking-wider mb-2`}>
                {t.selectDay}
              </p>
              <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 sm:gap-3">
                {DAYS.map((day) => {
                  const hasMySlot = schedule
                    .find((d) => d.day === day)
                    ?.slots.some((s) => userName && s.signedUp.includes(userName));
                  return (
                    <button
                      key={day}
                      onClick={() => setSelectedDay(selectedDay === day ? null : day)}
                      className={`relative flex flex-col items-center py-3 rounded-2xl text-xs font-semibold transition-all shadow-sm ${
                        selectedDay === day
                          ? `bg-gradient-to-br ${DAY_COLORS[day]} text-white shadow-md scale-105`
                          : dark
                            ? "bg-gray-800 text-gray-300 border border-gray-700 hover:border-purple-500"
                            : "bg-white text-gray-600 border border-gray-200 hover:border-purple-300"
                      }`}
                    >
                      {hasMySlot && (
                        <span className={`absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 ${dark ? "border-gray-900" : "border-white"}`} />
                      )}
                      <span className="text-lg mb-0.5">
                        {day === "monday" ? "Mon" :
                         day === "tuesday" ? "Tue" :
                         day === "wednesday" ? "Wed" :
                         day === "thursday" ? "Thu" :
                         day === "friday" ? "Fri" :
                         day === "saturday" ? "Sat" : "Sun"}
                      </span>
                      <span className="text-[10px] opacity-80 capitalize">
                        {(t[day as keyof typeof t] as string).slice(0, 3)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Slot Detail */}
            {selectedDay && currentDaySchedule && (
              <div className="space-y-3 sm:space-y-4">
                {/* Day Header */}
                <div
                  className={`rounded-2xl bg-gradient-to-r ${DAY_COLORS[selectedDay]} text-white p-4 shadow-md`}
                >
                  <h3 className="text-lg font-bold capitalize">
                    {t[selectedDay as keyof typeof t] as string}
                  </h3>
                  <p className="text-xs text-white/80 mt-0.5 italic">
                    {t[currentDaySchedule.noteKey as keyof typeof t] as string}
                  </p>
                </div>

                {/* Slots */}
                {currentDaySchedule.slots.map((slot) => {
                  const isMine = userName && slot.signedUp.includes(userName);
                  const isFull = slot.signedUp.length >= slot.maxSignups;
                  return (
                    <div
                      key={slot.id}
                      className={`${cardBg} rounded-2xl shadow-sm border ${cardBorder} overflow-hidden transition-colors duration-300`}
                    >
                      <div className={`flex items-center gap-2 px-4 py-2.5 border-b ${dark ? "border-gray-800" : "border-gray-100"} ${slotColors[slot.type]}`}>
                        <span className="text-base">{SLOT_ICONS[slot.type]}</span>
                        <div className="flex-1">
                          <p className="text-sm font-bold">
                            {t[slot.type as keyof typeof t] as string}
                          </p>
                          <p className="text-xs opacity-75">
                            {t[slot.timeKey as keyof typeof t] as string}
                          </p>
                        </div>
                        <span className={`text-xs font-semibold px-2 py-0.5 ${dark ? "bg-gray-800/60" : "bg-white/60"} rounded-full`}>
                          {slot.signedUp.length}/{slot.maxSignups}
                        </span>
                      </div>

                      <div className="px-4 py-3">
                        {/* Signed up members */}
                        {slot.signedUp.length > 0 && (
                          <div className="mb-3 space-y-1">
                            {slot.signedUp.map((name) => (
                              <div
                                key={name}
                                className={`flex items-center justify-between ${dark ? "bg-gray-800" : "bg-gray-50"} rounded-xl px-3 py-2`}
                              >
                                <span className={`text-sm ${dark ? "text-gray-200" : "text-gray-700"} flex items-center gap-1.5`}>
                                  <span className={`w-5 h-5 rounded-full ${dark ? "bg-purple-900 text-purple-300" : "bg-purple-100 text-purple-700"} flex items-center justify-center text-xs font-bold`}>
                                    {name[0]?.toUpperCase()}
                                  </span>
                                  {name}
                                </span>
                                {name === userName && (
                                  <button
                                    onClick={() => handleRemove(slot.id, name)}
                                    className="text-xs text-rose-500 hover:text-rose-700"
                                  >
                                    {t.remove}
                                  </button>
                                )}
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Action Button */}
                        {isMine ? (
                          <button
                            onClick={() => handleRemove(slot.id, userName)}
                            className={`w-full py-2.5 rounded-xl border text-rose-500 text-sm font-medium transition-all ${dark ? "border-rose-800 hover:bg-rose-900/30" : "border-rose-200 hover:bg-rose-50"}`}
                          >
                            {t.remove}
                          </button>
                        ) : isFull ? (
                          <div className={`w-full py-2.5 rounded-xl ${dark ? "bg-gray-800 text-gray-500" : "bg-gray-100 text-gray-400"} text-sm text-center font-medium`}>
                            {lang === "en" ? "Slot Full" : "Complet"}
                          </div>
                        ) : (
                          <button
                            onClick={() => handleSignUp(slot.id)}
                            className={`w-full py-2.5 rounded-xl bg-gradient-to-r ${DAY_COLORS[selectedDay]} text-white text-sm font-semibold hover:opacity-90 transition-all shadow-sm`}
                          >
                            {t.signUp}
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {!selectedDay && (
              <div className={`flex flex-col items-center py-10 ${textMuted}`}>
                <span className="text-4xl mb-2">📅</span>
                <p className="text-sm">{t.selectDay}</p>
              </div>
            )}
          </div>
        )}

        {/* ── BIBLE TAB ── */}
        {tab === "bible" && (
          <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
            <div>
              <h2 className={`text-lg sm:text-xl lg:text-2xl font-bold ${textPrimary}`}>{t.bibleTitle}</h2>
              <p className={`text-xs sm:text-sm ${textSecondary}`}>{t.bibleSubtitle}</p>
            </div>

            {/* Progress */}
            <div className="bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl p-4 text-white shadow-md">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold">{t.readingProgress}</span>
                <span className="text-sm font-bold">
                  {readPassages.length} {t.of} {dailyPlan.readings.length} {t.passages}
                </span>
              </div>
              <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white rounded-full transition-all duration-500"
                  style={{
                    width: `${(readPassages.length / dailyPlan.readings.length) * 100}%`,
                  }}
                />
              </div>
              {readPassages.length === dailyPlan.readings.length && (
                <p className="text-xs text-white/90 mt-2 text-center font-medium">
                  🎉 {lang === "en" ? "All passages completed!" : "Tous les passages complétés!"}
                </p>
              )}
            </div>

            {/* Today's date & theme */}
            <div className="text-center space-y-1">
              <span className={`text-xs font-semibold ${textMuted} uppercase tracking-widest`}>
                {new Date().toLocaleDateString(lang === "en" ? "en-US" : "fr-FR", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <p className={`text-sm font-bold ${dark ? "text-purple-400" : "text-purple-700"}`}>
                🎯 {dailyPlan.theme[lang]}
              </p>
            </div>

            {/* Reading Plan Banner */}
            <div className={`${dark ? "bg-amber-950/40 border-amber-800" : "bg-amber-50 border-amber-200"} border rounded-2xl p-3 text-center`}>
              <p className={`text-xs font-bold ${dark ? "text-amber-400" : "text-amber-800"}`}>
                📋 {lang === "en" ? "Today's Reading" : "Lecture du Jour"}
              </p>
              <p className={`text-sm font-semibold ${dark ? "text-amber-300" : "text-amber-900"} mt-1`}>
                {dailyPlan.readings.map((r) => r.ref).join(" · ")}
              </p>
            </div>

            {/* Complete Bible Study Button */}
            <button
              onClick={() => setShowCompleteStudy(!showCompleteStudy)}
              className={`w-full rounded-2xl p-4 text-left transition-all shadow-md ${
                showCompleteStudy
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600"
                  : dark
                    ? "bg-gradient-to-r from-purple-900 to-indigo-900 hover:from-purple-800 hover:to-indigo-800"
                    : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500"
              } text-white`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📚</span>
                  <div>
                    <p className="text-[10px] text-white/70 font-semibold uppercase tracking-widest">
                      {lang === "en" ? "Complete Bible Study" : "Étude Biblique Complète"}
                    </p>
                    <h3 className="text-sm font-bold leading-snug">
                      {todaysBibleStudy.title[lang]}
                    </h3>
                  </div>
                </div>
                <span className="text-xl text-white/80">{showCompleteStudy ? "▲" : "▼"}</span>
              </div>
            </button>

            {/* ── COMPLETE BIBLE STUDY EXPANDED ── */}
            {showCompleteStudy && (
              <div className={`${cardBg} rounded-2xl shadow-lg border ${cardBorder} overflow-hidden`}>
                {/* Study Header */}
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-5 text-white">
                  <p className="text-[10px] text-white/70 font-semibold uppercase tracking-widest mb-1">
                    {lang === "en" ? "Daily Bible Study" : "Étude Biblique Quotidienne"}
                  </p>
                  <h2 className="text-xl font-bold leading-tight">{todaysBibleStudy.title[lang]}</h2>
                  <p className="text-xs text-white/80 mt-1">{todaysBibleStudy.subtitle[lang]}</p>
                </div>

                <div className="p-4 space-y-4">
                  {/* Introduction */}
                  <div>
                    <p className={`text-[10px] font-bold ${dark ? "text-gray-500" : "text-gray-400"} uppercase tracking-widest mb-2`}>
                      📖 {lang === "en" ? "Introduction" : "Introduction"}
                    </p>
                    <p className={`text-sm ${dark ? "text-gray-300" : "text-gray-700"} leading-relaxed`}>
                      {todaysBibleStudy.introduction[lang]}
                    </p>
                  </div>

                  {/* Unifying Theme */}
                  <div className={`${dark ? "bg-purple-950/40 border-purple-900" : "bg-purple-50 border-purple-200"} border rounded-xl p-4`}>
                    <p className={`text-[10px] font-bold ${dark ? "text-purple-400" : "text-purple-700"} uppercase tracking-widest mb-1`}>
                      🎯 {lang === "en" ? "Unifying Theme" : "Thème Unificateur"}
                    </p>
                    <h4 className={`text-base font-bold ${dark ? "text-purple-300" : "text-purple-800"} mb-2`}>
                      {todaysBibleStudy.unifyingTheme.title[lang]}
                    </h4>
                    <p className={`text-sm ${dark ? "text-purple-200" : "text-purple-900"} leading-relaxed`}>
                      {todaysBibleStudy.unifyingTheme.description[lang]}
                    </p>
                  </div>

                  {/* Passage Breakdowns - Collapsible */}
                  <div>
                    <button
                      onClick={() => setExpandedStudySection(expandedStudySection === "breakdowns" ? null : "breakdowns")}
                      className={`w-full flex items-center justify-between p-3 rounded-xl ${dark ? "bg-gray-800 hover:bg-gray-750" : "bg-gray-100 hover:bg-gray-200"} transition-all`}
                    >
                      <span className={`text-sm font-bold ${textPrimary} flex items-center gap-2`}>
                        <span>📋</span> {lang === "en" ? "Passage Breakdowns" : "Résumés des Passages"} ({todaysBibleStudy.passageBreakdowns.length})
                      </span>
                      <span className={textSecondary}>{expandedStudySection === "breakdowns" ? "▲" : "▼"}</span>
                    </button>
                    {expandedStudySection === "breakdowns" && (
                      <div className="mt-3 space-y-3">
                        {todaysBibleStudy.passageBreakdowns.map((pb, idx) => (
                          <div key={pb.ref} className={`${dark ? "bg-gray-800/50" : "bg-gray-50"} rounded-xl p-3 border-l-4 ${
                            idx === 0 ? "border-l-purple-500" : idx === 1 ? "border-l-blue-500" : idx === 2 ? "border-l-emerald-500" : "border-l-amber-500"
                          }`}>
                            <p className={`text-[10px] ${textMuted} font-semibold uppercase`}>{pb.ref}</p>
                            <h5 className={`text-sm font-bold ${textPrimary} mb-1`}>{pb.title[lang]}</h5>
                            <p className={`text-xs ${textSecondary} leading-relaxed mb-2`}>{pb.summary[lang]}</p>
                            <p className={`text-xs font-semibold ${dark ? "text-indigo-400" : "text-indigo-600"}`}>
                              💡 {pb.keyPoint[lang]}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Connections - Collapsible */}
                  <div>
                    <button
                      onClick={() => setExpandedStudySection(expandedStudySection === "connections" ? null : "connections")}
                      className={`w-full flex items-center justify-between p-3 rounded-xl ${dark ? "bg-gray-800 hover:bg-gray-750" : "bg-gray-100 hover:bg-gray-200"} transition-all`}
                    >
                      <span className={`text-sm font-bold ${textPrimary} flex items-center gap-2`}>
                        <span>🔗</span> {lang === "en" ? "How the Passages Connect" : "Comment les Passages se Connectent"}
                      </span>
                      <span className={textSecondary}>{expandedStudySection === "connections" ? "▲" : "▼"}</span>
                    </button>
                    {expandedStudySection === "connections" && (
                      <div className="mt-3 space-y-2">
                        {todaysBibleStudy.connections[lang].map((conn, idx) => (
                          <div key={idx} className={`flex gap-2 items-start ${dark ? "bg-gray-800/50" : "bg-gray-50"} rounded-xl px-3 py-2`}>
                            <span className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold ${dark ? "bg-indigo-900 text-indigo-400" : "bg-indigo-100 text-indigo-700"}`}>
                              {idx + 1}
                            </span>
                            <p className={`text-xs ${dark ? "text-gray-300" : "text-gray-700"} leading-relaxed`}>{conn}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Deeper Study - Collapsible */}
                  <div>
                    <button
                      onClick={() => setExpandedStudySection(expandedStudySection === "deeper" ? null : "deeper")}
                      className={`w-full flex items-center justify-between p-3 rounded-xl ${dark ? "bg-gray-800 hover:bg-gray-750" : "bg-gray-100 hover:bg-gray-200"} transition-all`}
                    >
                      <span className={`text-sm font-bold ${textPrimary} flex items-center gap-2`}>
                        <span>🔬</span> {todaysBibleStudy.deeperStudy.title[lang]}
                      </span>
                      <span className={textSecondary}>{expandedStudySection === "deeper" ? "▲" : "▼"}</span>
                    </button>
                    {expandedStudySection === "deeper" && (
                      <div className="mt-3 space-y-4">
                        {todaysBibleStudy.deeperStudy.sections.map((sec, idx) => (
                          <div key={idx} className={`${dark ? "bg-blue-950/30 border-blue-900" : "bg-blue-50 border-blue-200"} border rounded-xl p-3`}>
                            <h5 className={`text-sm font-bold ${dark ? "text-blue-300" : "text-blue-800"} mb-2`}>{sec.heading[lang]}</h5>
                            <p className={`text-xs ${dark ? "text-blue-200" : "text-blue-900"} leading-relaxed`}>{sec.content[lang]}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Character Study - Collapsible */}
                  <div>
                    <button
                      onClick={() => setExpandedStudySection(expandedStudySection === "character" ? null : "character")}
                      className={`w-full flex items-center justify-between p-3 rounded-xl ${dark ? "bg-gray-800 hover:bg-gray-750" : "bg-gray-100 hover:bg-gray-200"} transition-all`}
                    >
                      <span className={`text-sm font-bold ${textPrimary} flex items-center gap-2`}>
                        <span>👤</span> {lang === "en" ? "Character Study:" : "Étude de Personnage:"} {todaysBibleStudy.characterStudy.name[lang]}
                      </span>
                      <span className={textSecondary}>{expandedStudySection === "character" ? "▲" : "▼"}</span>
                    </button>
                    {expandedStudySection === "character" && (
                      <div className="mt-3">
                        <div className={`${dark ? "bg-amber-950/30 border-amber-900" : "bg-amber-50 border-amber-200"} border rounded-xl p-4`}>
                          <p className={`text-sm ${dark ? "text-amber-200" : "text-amber-900"} leading-relaxed mb-3`}>
                            {todaysBibleStudy.characterStudy.description[lang]}
                          </p>
                          <p className={`text-[10px] font-bold ${dark ? "text-amber-400" : "text-amber-700"} uppercase tracking-widest mb-2`}>
                            {lang === "en" ? "Key Lessons" : "Leçons Clés"}
                          </p>
                          <div className="space-y-1.5">
                            {todaysBibleStudy.characterStudy.lessons[lang].map((lesson, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <span className={`text-xs ${dark ? "text-amber-500" : "text-amber-600"}`}>•</span>
                                <p className={`text-xs ${dark ? "text-amber-300" : "text-amber-800"}`}>{lesson}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Word Study - Collapsible */}
                  <div>
                    <button
                      onClick={() => setExpandedStudySection(expandedStudySection === "word" ? null : "word")}
                      className={`w-full flex items-center justify-between p-3 rounded-xl ${dark ? "bg-gray-800 hover:bg-gray-750" : "bg-gray-100 hover:bg-gray-200"} transition-all`}
                    >
                      <span className={`text-sm font-bold ${textPrimary} flex items-center gap-2`}>
                        <span>📝</span> {lang === "en" ? "Word Study:" : "Étude de Mot:"} {todaysBibleStudy.wordStudy.word[lang]}
                      </span>
                      <span className={textSecondary}>{expandedStudySection === "word" ? "▲" : "▼"}</span>
                    </button>
                    {expandedStudySection === "word" && (
                      <div className="mt-3">
                        <div className={`${dark ? "bg-teal-950/30 border-teal-900" : "bg-teal-50 border-teal-200"} border rounded-xl p-4`}>
                          <p className={`text-[10px] ${dark ? "text-teal-400" : "text-teal-700"} font-mono mb-2`}>
                            {todaysBibleStudy.wordStudy.originalLanguage}
                          </p>
                          <p className={`text-sm ${dark ? "text-teal-200" : "text-teal-900"} leading-relaxed mb-3`}>
                            <span className="font-bold">{lang === "en" ? "Meaning:" : "Signification:"}</span> {todaysBibleStudy.wordStudy.meaning[lang]}
                          </p>
                          <p className={`text-sm ${dark ? "text-teal-200" : "text-teal-900"} leading-relaxed`}>
                            <span className="font-bold">{lang === "en" ? "Usage:" : "Usage:"}</span> {todaysBibleStudy.wordStudy.usage[lang]}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Cross References - Collapsible */}
                  <div>
                    <button
                      onClick={() => setExpandedStudySection(expandedStudySection === "cross" ? null : "cross")}
                      className={`w-full flex items-center justify-between p-3 rounded-xl ${dark ? "bg-gray-800 hover:bg-gray-750" : "bg-gray-100 hover:bg-gray-200"} transition-all`}
                    >
                      <span className={`text-sm font-bold ${textPrimary} flex items-center gap-2`}>
                        <span>📚</span> {lang === "en" ? "Cross References" : "Références Croisées"} ({todaysBibleStudy.crossReferences.length})
                      </span>
                      <span className={textSecondary}>{expandedStudySection === "cross" ? "▲" : "▼"}</span>
                    </button>
                    {expandedStudySection === "cross" && (
                      <div className="mt-3 space-y-2">
                        {todaysBibleStudy.crossReferences.map((ref, idx) => (
                          <div key={idx} className={`${dark ? "bg-gray-800/50" : "bg-gray-50"} rounded-xl px-3 py-2`}>
                            <p className={`text-xs font-bold ${dark ? "text-indigo-400" : "text-indigo-600"}`}>{ref.verse}</p>
                            <p className={`text-xs ${textSecondary} mt-0.5`}>{ref.connection[lang]}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Prophecy & Fulfillment */}
                  {todaysBibleStudy.prophecyAndFulfillment.enabled && (
                    <div className={`${dark ? "bg-rose-950/30 border-rose-900" : "bg-rose-50 border-rose-200"} border rounded-xl p-4`}>
                      <p className={`text-[10px] font-bold ${dark ? "text-rose-400" : "text-rose-700"} uppercase tracking-widest mb-2`}>
                        ⚔️ {lang === "en" ? "Prophecy & Fulfillment" : "Prophétie et Accomplissement"}
                      </p>
                      <p className={`text-sm ${dark ? "text-rose-200" : "text-rose-900"} leading-relaxed`}>
                        {todaysBibleStudy.prophecyAndFulfillment.content[lang]}
                      </p>
                    </div>
                  )}

                  {/* Practical Application - Collapsible */}
                  <div>
                    <button
                      onClick={() => setExpandedStudySection(expandedStudySection === "application" ? null : "application")}
                      className={`w-full flex items-center justify-between p-3 rounded-xl ${dark ? "bg-gray-800 hover:bg-gray-750" : "bg-gray-100 hover:bg-gray-200"} transition-all`}
                    >
                      <span className={`text-sm font-bold ${textPrimary} flex items-center gap-2`}>
                        <span>🎯</span> {lang === "en" ? "Practical Application" : "Application Pratique"}
                      </span>
                      <span className={textSecondary}>{expandedStudySection === "application" ? "▲" : "▼"}</span>
                    </button>
                    {expandedStudySection === "application" && (
                      <div className="mt-3 space-y-3">
                        {/* Personal */}
                        <div className={`${dark ? "bg-emerald-950/30 border-emerald-900" : "bg-emerald-50 border-emerald-200"} border rounded-xl p-3`}>
                          <p className={`text-[10px] font-bold ${dark ? "text-emerald-400" : "text-emerald-700"} uppercase tracking-widest mb-2`}>
                            👤 {lang === "en" ? "Personal" : "Personnel"}
                          </p>
                          <div className="space-y-1.5">
                            {todaysBibleStudy.practicalApplication.personal[lang].map((item, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <span className={`text-xs ${dark ? "text-emerald-500" : "text-emerald-600"}`}>•</span>
                                <p className={`text-xs ${dark ? "text-emerald-200" : "text-emerald-800"}`}>{item}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* Family */}
                        <div className={`${dark ? "bg-blue-950/30 border-blue-900" : "bg-blue-50 border-blue-200"} border rounded-xl p-3`}>
                          <p className={`text-[10px] font-bold ${dark ? "text-blue-400" : "text-blue-700"} uppercase tracking-widest mb-2`}>
                            👨‍👩‍👧‍👦 {lang === "en" ? "Family" : "Famille"}
                          </p>
                          <div className="space-y-1.5">
                            {todaysBibleStudy.practicalApplication.family[lang].map((item, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <span className={`text-xs ${dark ? "text-blue-500" : "text-blue-600"}`}>•</span>
                                <p className={`text-xs ${dark ? "text-blue-200" : "text-blue-800"}`}>{item}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* Community */}
                        <div className={`${dark ? "bg-purple-950/30 border-purple-900" : "bg-purple-50 border-purple-200"} border rounded-xl p-3`}>
                          <p className={`text-[10px] font-bold ${dark ? "text-purple-400" : "text-purple-700"} uppercase tracking-widest mb-2`}>
                            🏛️ {lang === "en" ? "Community" : "Communauté"}
                          </p>
                          <div className="space-y-1.5">
                            {todaysBibleStudy.practicalApplication.community[lang].map((item, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <span className={`text-xs ${dark ? "text-purple-500" : "text-purple-600"}`}>•</span>
                                <p className={`text-xs ${dark ? "text-purple-200" : "text-purple-800"}`}>{item}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Reflection Questions - Collapsible */}
                  <div>
                    <button
                      onClick={() => setExpandedStudySection(expandedStudySection === "reflection" ? null : "reflection")}
                      className={`w-full flex items-center justify-between p-3 rounded-xl ${dark ? "bg-gray-800 hover:bg-gray-750" : "bg-gray-100 hover:bg-gray-200"} transition-all`}
                    >
                      <span className={`text-sm font-bold ${textPrimary} flex items-center gap-2`}>
                        <span>💭</span> {lang === "en" ? "Reflection Questions" : "Questions de Réflexion"} ({todaysBibleStudy.reflectionQuestions[lang].length})
                      </span>
                      <span className={textSecondary}>{expandedStudySection === "reflection" ? "▲" : "▼"}</span>
                    </button>
                    {expandedStudySection === "reflection" && (
                      <div className="mt-3 space-y-2">
                        {todaysBibleStudy.reflectionQuestions[lang].map((q, idx) => (
                          <div key={idx} className={`flex gap-2 items-start ${dark ? "bg-gray-800/50" : "bg-gray-50"} rounded-xl px-3 py-2`}>
                            <span className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold ${dark ? "bg-amber-900 text-amber-400" : "bg-amber-100 text-amber-700"}`}>
                              {idx + 1}
                            </span>
                            <p className={`text-xs ${dark ? "text-gray-300" : "text-gray-700"} leading-relaxed`}>{q}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Group Discussion - Collapsible */}
                  <div>
                    <button
                      onClick={() => setExpandedStudySection(expandedStudySection === "group" ? null : "group")}
                      className={`w-full flex items-center justify-between p-3 rounded-xl ${dark ? "bg-gray-800 hover:bg-gray-750" : "bg-gray-100 hover:bg-gray-200"} transition-all`}
                    >
                      <span className={`text-sm font-bold ${textPrimary} flex items-center gap-2`}>
                        <span>👥</span> {lang === "en" ? "Group Discussion Guide" : "Guide de Discussion en Groupe"}
                      </span>
                      <span className={textSecondary}>{expandedStudySection === "group" ? "▲" : "▼"}</span>
                    </button>
                    {expandedStudySection === "group" && (
                      <div className="mt-3 space-y-3">
                        {/* Icebreaker */}
                        <div className={`${dark ? "bg-cyan-950/30 border-cyan-900" : "bg-cyan-50 border-cyan-200"} border rounded-xl p-3`}>
                          <p className={`text-[10px] font-bold ${dark ? "text-cyan-400" : "text-cyan-700"} uppercase tracking-widest mb-1`}>
                            🧊 {lang === "en" ? "Icebreaker" : "Brise-Glace"}
                          </p>
                          <p className={`text-sm ${dark ? "text-cyan-200" : "text-cyan-900"}`}>{todaysBibleStudy.groupDiscussion.icebreaker[lang]}</p>
                        </div>
                        {/* Discussion Questions */}
                        <div>
                          <p className={`text-[10px] font-bold ${textMuted} uppercase tracking-widest mb-2`}>
                            💬 {lang === "en" ? "Discussion Questions" : "Questions de Discussion"}
                          </p>
                          <div className="space-y-2">
                            {todaysBibleStudy.groupDiscussion.questions[lang].map((q, idx) => (
                              <div key={idx} className={`flex gap-2 items-start ${dark ? "bg-gray-800/50" : "bg-gray-50"} rounded-xl px-3 py-2`}>
                                <span className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold ${dark ? "bg-indigo-900 text-indigo-400" : "bg-indigo-100 text-indigo-700"}`}>
                                  {idx + 1}
                                </span>
                                <p className={`text-xs ${dark ? "text-gray-300" : "text-gray-700"} leading-relaxed`}>{q}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* Activity */}
                        <div className={`${dark ? "bg-orange-950/30 border-orange-900" : "bg-orange-50 border-orange-200"} border rounded-xl p-3`}>
                          <p className={`text-[10px] font-bold ${dark ? "text-orange-400" : "text-orange-700"} uppercase tracking-widest mb-1`}>
                            🎯 {lang === "en" ? "Group Activity" : "Activité de Groupe"}
                          </p>
                          <p className={`text-sm ${dark ? "text-orange-200" : "text-orange-900"}`}>{todaysBibleStudy.groupDiscussion.activity[lang]}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Prayer Points - Collapsible */}
                  <div>
                    <button
                      onClick={() => setExpandedStudySection(expandedStudySection === "prayer" ? null : "prayer")}
                      className={`w-full flex items-center justify-between p-3 rounded-xl ${dark ? "bg-gray-800 hover:bg-gray-750" : "bg-gray-100 hover:bg-gray-200"} transition-all`}
                    >
                      <span className={`text-sm font-bold ${textPrimary} flex items-center gap-2`}>
                        <span>🙏</span> {lang === "en" ? "Prayer Points" : "Points de Prière"} ({todaysBibleStudy.prayerPoints[lang].length})
                      </span>
                      <span className={textSecondary}>{expandedStudySection === "prayer" ? "▲" : "▼"}</span>
                    </button>
                    {expandedStudySection === "prayer" && (
                      <div className="mt-3 space-y-2">
                        {todaysBibleStudy.prayerPoints[lang].map((prayer, idx) => (
                          <div key={idx} className={`${dark ? "bg-purple-950/30 border-l-purple-500" : "bg-purple-50 border-l-purple-400"} rounded-lg p-3 border-l-4`}>
                            <p className={`text-xs italic ${dark ? "text-purple-200" : "text-purple-900"} leading-relaxed`}>{prayer}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Declarations - Collapsible */}
                  <div>
                    <button
                      onClick={() => setExpandedStudySection(expandedStudySection === "declare" ? null : "declare")}
                      className={`w-full flex items-center justify-between p-3 rounded-xl ${dark ? "bg-gray-800 hover:bg-gray-750" : "bg-gray-100 hover:bg-gray-200"} transition-all`}
                    >
                      <span className={`text-sm font-bold ${textPrimary} flex items-center gap-2`}>
                        <span>📢</span> {lang === "en" ? "Declarations & Confessions" : "Déclarations et Confessions"}
                      </span>
                      <span className={textSecondary}>{expandedStudySection === "declare" ? "▲" : "▼"}</span>
                    </button>
                    {expandedStudySection === "declare" && (
                      <div className="mt-3 space-y-2">
                        {todaysBibleStudy.declarationsAndConfessions[lang].map((dec, idx) => (
                          <div key={idx} className={`${dark ? "bg-indigo-950/30" : "bg-indigo-50"} rounded-xl px-3 py-2`}>
                            <p className={`text-xs font-semibold ${dark ? "text-indigo-200" : "text-indigo-800"}`}>{dec}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Memory Verse */}
                  <div className={`${dark ? "bg-gradient-to-br from-gray-900 to-indigo-950 border border-indigo-900" : "bg-gradient-to-br from-indigo-900 to-purple-900"} text-white rounded-xl p-4`}>
                    <p className="text-[10px] font-semibold text-indigo-300 uppercase tracking-widest mb-2">
                      📖 {lang === "en" ? "Memory Verse" : "Verset à Mémoriser"}
                    </p>
                    <p className="text-sm italic leading-relaxed text-white/90">
                      {todaysBibleStudy.memoryVerse.text[lang]}
                    </p>
                    <p className="text-xs text-indigo-300 mt-2 font-semibold">— {todaysBibleStudy.memoryVerse.reference}</p>
                  </div>

                  {/* Weekly Challenge */}
                  <div className={`${dark ? "bg-gradient-to-r from-rose-950/50 to-orange-950/50 border border-rose-900" : "bg-gradient-to-r from-rose-100 to-orange-100 border border-rose-200"} rounded-xl p-4`}>
                    <p className={`text-[10px] font-bold ${dark ? "text-rose-400" : "text-rose-700"} uppercase tracking-widest mb-1`}>
                      🏆 {lang === "en" ? "Weekly Challenge" : "Défi de la Semaine"}
                    </p>
                    <h4 className={`text-base font-bold ${dark ? "text-rose-300" : "text-rose-800"} mb-2`}>
                      {todaysBibleStudy.weeklyChallenge.title[lang]}
                    </h4>
                    <p className={`text-sm ${dark ? "text-rose-200" : "text-rose-900"} mb-3`}>
                      {todaysBibleStudy.weeklyChallenge.description[lang]}
                    </p>
                    <div className="space-y-1.5">
                      {todaysBibleStudy.weeklyChallenge.steps[lang].map((step, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className={`text-xs ${dark ? "text-rose-500" : "text-rose-600"} font-bold`}>→</span>
                          <p className={`text-xs ${dark ? "text-rose-300" : "text-rose-800"}`}>{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Suggested Worship */}
                  <div>
                    <p className={`text-[10px] font-bold ${textMuted} uppercase tracking-widest mb-2`}>
                      🎵 {lang === "en" ? "Suggested Worship Songs" : "Chants de Louange Suggérés"}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {todaysBibleStudy.hymnsAndWorship.suggested[lang].map((song, idx) => (
                        <span key={idx} className={`text-xs px-3 py-1.5 rounded-full ${dark ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"}`}>
                          {song}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Closing Prayer */}
                  <div className={`${dark ? "bg-purple-950/40 border-purple-900" : "bg-purple-50 border-purple-200"} border rounded-xl p-4`}>
                    <p className={`text-[10px] font-bold ${dark ? "text-purple-400" : "text-purple-700"} uppercase tracking-widest mb-2`}>
                      🙏 {lang === "en" ? "Closing Prayer" : "Prière de Clôture"}
                    </p>
                    <p className={`text-sm italic ${dark ? "text-purple-200" : "text-purple-900"} leading-relaxed`}>
                      {todaysBibleStudy.closingPrayer[lang]}
                    </p>
                  </div>

                  {/* Additional Resources */}
                  <div className={`${dark ? "bg-gray-800/50" : "bg-gray-50"} rounded-xl p-4`}>
                    <p className={`text-[10px] font-bold ${textMuted} uppercase tracking-widest mb-3`}>
                      📚 {lang === "en" ? "Additional Resources" : "Ressources Supplémentaires"}
                    </p>
                    <div className="grid grid-cols-1 gap-3">
                      <div>
                        <p className={`text-xs font-bold ${textSecondary} mb-1`}>{lang === "en" ? "Recommended Commentaries" : "Commentaires Recommandés"}</p>
                        <div className="space-y-1">
                          {todaysBibleStudy.additionalResources.commentaries.map((c, idx) => (
                            <p key={idx} className={`text-xs ${textMuted}`}>• {c}</p>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className={`text-xs font-bold ${textSecondary} mb-1`}>{lang === "en" ? "Related Passages" : "Passages Connexes"}</p>
                        <div className="space-y-1">
                          {todaysBibleStudy.additionalResources.relatedPassages.map((p, idx) => (
                            <p key={idx} className={`text-xs ${textMuted}`}>• {p}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Passage Cards with Bible Study */}
            <div className="space-y-3 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0">
              {dailyPlan.readings.map((passage, i) => {
                const isRead = readPassages.includes(passage.ref);
                const study = bibleStudyNotes[i]; // falls back gracefully
                const isStudyOpen = expandedStudy === passage.ref;
                return (
                  <div
                    key={passage.ref}
                    className={`rounded-2xl shadow-sm border overflow-hidden transition-all ${
                      isRead
                        ? dark
                          ? "bg-green-950/30 border-green-800"
                          : "bg-green-50 border-green-200"
                        : `${cardBg} ${cardBorder}`
                    }`}
                  >
                    {/* Passage Header */}
                    <div className="flex items-center gap-3 p-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${passage.color} flex items-center justify-center text-xl shadow-sm flex-shrink-0`}
                      >
                        {passage.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-bold ${textPrimary}`}>{passage.label[lang]}</p>
                        <p className={`text-xs ${textMuted} mt-0.5`}>{passage.ref}</p>
                      </div>
                      {isRead && (
                        <span className="text-green-500 text-xl flex-shrink-0">✅</span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="px-4 pb-3 flex gap-2">
                      <button
                        onClick={() => togglePassage(passage.ref)}
                        className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                          isRead
                            ? dark
                              ? "bg-green-900/50 text-green-400 hover:bg-green-900/70"
                              : "bg-green-100 text-green-700 hover:bg-green-200"
                            : `bg-gradient-to-r ${passage.color} text-white hover:opacity-90 shadow-sm`
                        }`}
                      >
                        {isRead ? t.markUnread : t.markRead}
                      </button>
                      <button
                        onClick={() => setExpandedStudy(isStudyOpen ? null : passage.ref)}
                        className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all border ${
                          isStudyOpen
                            ? dark
                              ? "bg-indigo-900/50 text-indigo-300 border-indigo-700"
                              : "bg-indigo-100 text-indigo-700 border-indigo-200"
                            : dark
                              ? "text-gray-300 border-gray-700 hover:bg-gray-800"
                              : "text-gray-600 border-gray-200 hover:bg-gray-50"
                        }`}
                      >
                        📝 {lang === "en" ? "Study" : "Étude"}
                      </button>
                    </div>

                    {/* ── Expandable Bible Study Section ── */}
                    {isStudyOpen && study && (
                      <div className={`border-t ${dark ? "border-gray-800" : "border-gray-100"}`}>
                        {/* Study Title Banner */}
                        <div className={`bg-gradient-to-r ${study.color} px-4 py-3`}>
                          <div className="flex items-center gap-2">
                            <span className="text-xl">{study.icon}</span>
                            <div>
                              <p className="text-[10px] text-white/60 font-semibold uppercase tracking-widest">
                                {lang === "en" ? "Bible Study" : "Étude Biblique"}
                              </p>
                              <h4 className="text-sm font-bold text-white leading-snug">
                                {study.title[lang]}
                              </h4>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 space-y-4">
                          {/* Summary */}
                          <div>
                            <p className={`text-[10px] font-bold ${dark ? "text-gray-500" : "text-gray-400"} uppercase tracking-widest mb-1.5`}>
                              📖 {lang === "en" ? "Passage Summary" : "Résumé du Passage"}
                            </p>
                            <p className={`text-sm ${dark ? "text-gray-300" : "text-gray-700"} leading-relaxed`}>
                              {study.summary[lang]}
                            </p>
                          </div>

                          {/* Historical Context */}
                          <div className={`${dark ? "bg-blue-950/30 border-blue-900" : "bg-blue-50 border-blue-200"} border rounded-xl p-3`}>
                            <p className={`text-[10px] font-bold ${dark ? "text-blue-400" : "text-blue-700"} uppercase tracking-widest mb-1.5`}>
                              🏛️ {lang === "en" ? "Historical Context" : "Contexte Historique"}
                            </p>
                            <p className={`text-sm ${dark ? "text-blue-200" : "text-blue-900"} leading-relaxed`}>
                              {study.context[lang]}
                            </p>
                          </div>

                          {/* Key Themes */}
                          <div>
                            <p className={`text-[10px] font-bold ${dark ? "text-gray-500" : "text-gray-400"} uppercase tracking-widest mb-2`}>
                              🔑 {lang === "en" ? "Key Themes" : "Thèmes Clés"}
                            </p>
                            <div className="space-y-1.5">
                              {study.keyThemes[lang].map((theme, ti) => (
                                <div key={ti} className={`flex gap-2 items-start ${dark ? "bg-gray-800/50" : "bg-gray-50"} rounded-xl px-3 py-2`}>
                                  <span className={`text-xs font-bold ${dark ? "text-purple-400" : "text-purple-600"} mt-0.5 flex-shrink-0`}>
                                    {ti + 1}.
                                  </span>
                                  <p className={`text-xs ${dark ? "text-gray-300" : "text-gray-700"} leading-relaxed`}>
                                    {theme}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Key Verses */}
                          <div>
                            <p className={`text-[10px] font-bold ${dark ? "text-gray-500" : "text-gray-400"} uppercase tracking-widest mb-2`}>
                              ✨ {lang === "en" ? "Key Verses" : "Versets Clés"}
                            </p>
                            <div className="space-y-2">
                              {study.keyVerses[lang].map((verse, vi) => (
                                <div
                                  key={vi}
                                  className={`${dark ? "bg-purple-950/30 border-l-purple-500" : "bg-purple-50 border-l-purple-400"} rounded-lg p-3 border-l-4`}
                                >
                                  <p className={`text-xs italic ${dark ? "text-purple-200" : "text-purple-900"} leading-relaxed`}>
                                    {verse}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Application */}
                          <div className={`${dark ? "bg-emerald-950/30 border-emerald-900" : "bg-emerald-50 border-emerald-200"} border rounded-xl p-3`}>
                            <p className={`text-[10px] font-bold ${dark ? "text-emerald-400" : "text-emerald-700"} uppercase tracking-widest mb-1.5`}>
                              🎯 {lang === "en" ? "Life Application" : "Application à la Vie"}
                            </p>
                            <p className={`text-sm ${dark ? "text-emerald-200" : "text-emerald-900"} leading-relaxed`}>
                              {study.application[lang]}
                            </p>
                          </div>

                          {/* Discussion Questions */}
                          <div className={`${dark ? "bg-amber-950/30 border-amber-900" : "bg-amber-50 border-amber-200"} border rounded-xl p-3`}>
                            <p className={`text-[10px] font-bold ${dark ? "text-amber-400" : "text-amber-700"} uppercase tracking-widest mb-2`}>
                              💬 {lang === "en" ? "Discussion Questions" : "Questions de Discussion"}
                            </p>
                            <div className="space-y-2">
                              {study.discussion[lang].map((q, qi) => (
                                <div key={qi} className="flex items-start gap-2">
                                  <span className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold ${dark ? "bg-amber-900/50 text-amber-400" : "bg-amber-200 text-amber-800"}`}>
                                    {qi + 1}
                                  </span>
                                  <p className={`text-xs ${dark ? "text-amber-200" : "text-amber-900"} leading-relaxed`}>
                                    {q}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Verse of the day */}
            <div className={`${dark ? "bg-gradient-to-br from-gray-900 to-indigo-950 border border-indigo-900" : "bg-gradient-to-br from-indigo-900 to-purple-900"} text-white rounded-2xl p-5 shadow-lg`}>
              <p className="text-xs font-semibold text-indigo-300 uppercase tracking-widest mb-2">
                {lang === "en" ? "Featured Verse" : "Verset Vedette"}
              </p>
              <p className="text-sm italic leading-relaxed text-white/90">
                {dailyPlan.featuredVerse.text[lang]}
              </p>
              <p className="text-xs text-indigo-300 mt-2 font-semibold">— {dailyPlan.featuredVerse.reference}</p>
            </div>

            {/* Today's Theme Banner */}
            <div className={`${dark ? "bg-gradient-to-r from-purple-950 to-indigo-950 border border-purple-900" : "bg-gradient-to-r from-purple-100 to-indigo-100 border border-purple-200"} rounded-2xl p-4`}>
              <p className={`text-[10px] font-bold ${dark ? "text-purple-400" : "text-purple-600"} uppercase tracking-widest mb-2`}>
                📚 {lang === "en" ? "Connecting the Readings" : "Relier les Lectures"}
              </p>
              <p className={`text-sm ${dark ? "text-gray-300" : "text-gray-700"} leading-relaxed`}>
                {dailyPlan.connectionSummary[lang]}
              </p>
            </div>
          </div>
        )}

        {/* ── DEVOTIONAL TAB ── */}
        {tab === "devotional" && (
          <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
            <div>
              <h2 className={`text-lg sm:text-xl lg:text-2xl font-bold ${textPrimary}`}>{t.devotionalTitle}</h2>
              <p className={`text-xs sm:text-sm ${textSecondary}`}>{t.devotionalSubtitle}</p>
            </div>

            {/* Pillars Overview */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {dailyDevotionals.map((dev) => (
                <div
                  key={dev.id}
                  className={`bg-gradient-to-br ${dev.color} rounded-2xl p-3 text-white text-center shadow-sm cursor-pointer hover:scale-105 transition-all`}
                  onClick={() =>
                    setExpandedDevotional(expandedDevotional === dev.id ? null : dev.id)
                  }
                >
                  <div className="text-2xl mb-1">{dev.icon}</div>
                  <p className="text-xs font-bold leading-tight">{dev.title[lang]}</p>
                </div>
              ))}
            </div>

            {/* Devotional Cards */}
            <div className="space-y-4 sm:space-y-5">
              {dailyDevotionals.map((dev) => {
                const isExpanded = expandedDevotional === dev.id;
                return (
                  <div
                    key={dev.id}
                    className={`${cardBg} rounded-2xl shadow-sm border ${cardBorder} overflow-hidden transition-colors duration-300`}
                  >
                    {/* Card Header */}
                    <div
                      className={`bg-gradient-to-r ${dev.color} p-4 cursor-pointer`}
                      onClick={() =>
                        setExpandedDevotional(isExpanded ? null : dev.id)
                      }
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{dev.icon}</span>
                          <div>
                            <p className="text-xs text-white/70 font-semibold uppercase tracking-wide">
                              {lang === "en"
                                ? `Devotional ${dev.id}`
                                : `Dévotion ${dev.id}`}
                            </p>
                            <h3 className="text-white font-bold text-base leading-tight">
                              {dev.title[lang]}
                            </h3>
                          </div>
                        </div>
                        <span className="text-white/80 text-xl">
                          {isExpanded ? "▲" : "▼"}
                        </span>
                      </div>
                    </div>

                    {/* Expandable Content */}
                    {isExpanded && (
                      <div className="p-4 space-y-4">
                        {/* Verse */}
                        <div className={`${dark ? "bg-purple-950/40 border-l-purple-500" : "bg-gray-50 border-l-purple-400"} rounded-xl p-3 border-l-4`}>
                          <p className={`text-xs font-semibold ${dark ? "text-purple-400" : "text-purple-600"} mb-1 uppercase tracking-wide`}>
                            {lang === "en" ? "Key Verse" : "Verset Clé"}
                          </p>
                          <p className={`text-sm italic ${dark ? "text-gray-300" : "text-gray-700"} leading-relaxed`}>
                            {dev.verse[lang]}
                          </p>
                        </div>

                        {/* Content */}
                        <div>
                          <p className={`text-xs font-semibold ${textSecondary} uppercase tracking-wide mb-2`}>
                            {lang === "en" ? "Message" : "Message"}
                          </p>
                          <p className={`text-sm ${dark ? "text-gray-300" : "text-gray-700"} leading-relaxed`}>
                            {dev.content[lang]}
                          </p>
                        </div>

                        {/* Reflection */}
                        <div className={`${dark ? "bg-amber-950/40 border-amber-800" : "bg-amber-50 border-amber-200"} border rounded-xl p-3`}>
                          <p className={`text-xs font-bold ${dark ? "text-amber-400" : "text-amber-700"} mb-1 uppercase tracking-wide`}>
                            💭 {lang === "en" ? "Reflection" : "Réflexion"}
                          </p>
                          <p className={`text-sm ${dark ? "text-amber-300" : "text-amber-800"} italic`}>{dev.reflection[lang]}</p>
                        </div>

                        {/* Prayer */}
                        <div className={`${dark ? "bg-indigo-950/40 border-indigo-800" : "bg-indigo-50 border-indigo-200"} border rounded-xl p-3`}>
                          <p className={`text-xs font-bold ${dark ? "text-indigo-400" : "text-indigo-700"} mb-1 uppercase tracking-wide`}>
                            🙏 {lang === "en" ? "Prayer" : "Prière"}
                          </p>
                          <p className={`text-sm ${dark ? "text-indigo-300" : "text-indigo-800"} italic`}>{dev.prayer[lang]}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── MEMBERS TAB ── */}
        {tab === "members" && (
          <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
            <div>
              <h2 className={`text-lg sm:text-xl lg:text-2xl font-bold ${textPrimary}`}>{t.membersTitle}</h2>
              <p className={`text-xs sm:text-sm ${textSecondary}`}>{t.membersSubtitle}</p>
            </div>

            {/* Add Member Form */}
            <div className={`${cardBg} rounded-2xl shadow-sm border ${cardBorder} p-4 sm:p-6 space-y-3 transition-colors duration-300`}>
              <h3 className={`text-sm sm:text-base font-bold ${dark ? "text-gray-200" : "text-gray-700"} flex items-center gap-2`}>
                <span className={`w-6 h-6 rounded-full ${dark ? "bg-purple-900 text-purple-400" : "bg-purple-100 text-purple-700"} flex items-center justify-center text-xs`}>+</span>
                {t.addMember}
              </h3>
              <div className="sm:grid sm:grid-cols-2 sm:gap-3 space-y-3 sm:space-y-0">
              <input
                className={`w-full border rounded-xl px-4 py-2.5 sm:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 ${inputBg}`}
                placeholder={t.memberName}
                value={newMemberName}
                onChange={(e) => setNewMemberName(e.target.value)}
              />
              <input
                className={`w-full border rounded-xl px-4 py-2.5 sm:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 ${inputBg}`}
                placeholder={t.memberRole}
                value={newMemberRole}
                onChange={(e) => setNewMemberRole(e.target.value)}
              />
              </div>
              <button
                onClick={addMember}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-semibold hover:opacity-90 transition-all shadow-sm"
              >
                {t.save}
              </button>
            </div>

            {/* Member List */}
            {members.length === 0 ? (
              <div className={`flex flex-col items-center py-10 ${textMuted}`}>
                <span className="text-4xl mb-2">👥</span>
                <p className="text-sm">{t.noMembers}</p>
              </div>
            ) : (
              <div className="space-y-2 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-3 sm:space-y-0">
                {members.map((m) => (
                  <div
                    key={m.id}
                    className={`${cardBg} rounded-2xl shadow-sm border ${cardBorder} flex items-center gap-3 px-4 py-3 sm:py-4 transition-colors duration-300 hover-lift`}
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white font-bold text-base flex-shrink-0">
                      {m.name[0]?.toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-semibold ${textPrimary} truncate`}>{m.name}</p>
                      {m.role && (
                        <p className={`text-xs ${textMuted} truncate`}>{m.role}</p>
                      )}
                    </div>
                    <button
                      onClick={() => deleteMember(m.id)}
                      className={`w-7 h-7 rounded-full ${dark ? "bg-rose-900/40 text-rose-400 hover:bg-rose-900/60" : "bg-rose-50 text-rose-400 hover:bg-rose-100"} flex items-center justify-center text-xs flex-shrink-0`}
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Settings Grid */}
            <div className="sm:grid sm:grid-cols-2 sm:gap-4 space-y-4 sm:space-y-0">
            {/* Language section */}
            <div className={`${cardBg} rounded-2xl shadow-sm border ${cardBorder} p-4 transition-colors duration-300`}>
              <h3 className={`text-sm font-bold ${dark ? "text-gray-200" : "text-gray-700"} mb-3 flex items-center gap-2`}>
                <span>🌐</span> {t.language}
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={() => setLang("en")}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-1.5 transition-all ${
                    lang === "en"
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-sm"
                      : dark
                        ? "border border-gray-700 text-gray-300 hover:bg-gray-800"
                        : "border border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  🇬🇧 {t.english}
                </button>
                <button
                  onClick={() => setLang("fr")}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-1.5 transition-all ${
                    lang === "fr"
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-sm"
                      : dark
                        ? "border border-gray-700 text-gray-300 hover:bg-gray-800"
                        : "border border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  🇫🇷 {t.french}
                </button>
              </div>
            </div>

            {/* Dark Mode section */}
            <div className={`${cardBg} rounded-2xl shadow-sm border ${cardBorder} p-4 transition-colors duration-300`}>
              <h3 className={`text-sm font-bold ${dark ? "text-gray-200" : "text-gray-700"} mb-3 flex items-center gap-2`}>
                <span>{dark ? "🌙" : "☀️"}</span> {lang === "en" ? "Appearance" : "Apparence"}
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={() => setDark(false)}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-1.5 transition-all ${
                    !dark
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm"
                      : "border border-gray-700 text-gray-300 hover:bg-gray-800"
                  }`}
                >
                  ☀️ {lang === "en" ? "Light" : "Clair"}
                </button>
                <button
                  onClick={() => setDark(true)}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-1.5 transition-all ${
                    dark
                      ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-sm"
                      : "border border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  🌙 {lang === "en" ? "Dark" : "Sombre"}
                </button>
              </div>
            </div>
            </div>{/* end settings grid */}
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className={`text-center py-3 sm:py-4 ${dark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-100"} border-t transition-colors duration-300 safe-bottom`}>
        <p className={`text-xs sm:text-sm ${textMuted}`}>
          {lang === "en"
            ? "© 2025 Church Prayer Scheduler · Built for His Glory"
            : "© 2025 Planificateur · Bâti pour Sa Gloire"}
        </p>
      </footer>
      </div>
    </div>
  );
}
