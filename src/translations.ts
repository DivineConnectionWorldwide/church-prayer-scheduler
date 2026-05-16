export type Language = "en" | "fr";

export const translations = {
  en: {
    appTitle: "Church Scheduler",
    appSubtitle: "The Lord Before Whom I Stand",
    navSchedule: "Schedule",
    navBible: "Bible",
    navDevotional: "Devotional",
    navMembers: "Members",

    // Schedule
    scheduleTitle: "Weekly Schedule",
    scheduleSubtitle: "Sign up to serve in a slot",
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    sunday: "Sunday",
    prayerLead: "Lead Prayer",
    translation: "Translation",
    conductService: "Conduct Service",
    prayerFasting: "Prayer & Fasting",
    worshipService: "Worship Service",
    bibleStudy: "Bible Study",
    signUp: "Sign Up",
    signedUp: "Signed Up ✓",
    remove: "Remove",
    timeSlot: "Time",
    role: "Role",
    member: "Member",
    available: "Available",
    pickName: "Enter your name",
    confirm: "Confirm",
    cancel: "Cancel",
    noSlots: "No slots available",
    slotsFor: "Slots for",
    weekdayNote: "The Lord Before Whom I Stand",
    fridayNote: "Prayer & Fasting Day",
    saturdayNote: "Worship Service",
    sundayNote: "Bible Study",
    midnightSlot: "Midnight – 6:00 PM",
    eveningSlot: "11:00 PM – 1:00 AM",
    worshipSlot: "12:00 PM – 2:00 PM",
    bibleSlot: "1:00 PM – 3:00 PM",
    morningSlot: "8:00 AM – 9:30 AM",
    selectDay: "Select a day to view slots",
    myBookings: "My Bookings",
    noBookings: "No bookings yet",
    clearName: "Clear Name",
    yourName: "Your Name",
    setName: "Set Name",
    nameSet: "Name saved!",

    // Bible Reading
    bibleTitle: "Daily Bible Reading",
    bibleSubtitle: "Today's Reading Plan",
    bibleReferences: [
      { ref: "1 Sam 17:1–18:4", label: "1 Samuel 17:1 – 18:4" },
      { ref: "John 8:21–30", label: "John 8:21–30" },
      { ref: "Ps 111:1–10", label: "Psalm 111:1–10" },
      { ref: "Pr 15:11", label: "Proverbs 15:11" },
    ],
    markRead: "Mark as Read",
    markUnread: "Mark Unread",
    readingProgress: "Reading Progress",
    completed: "Completed",
    of: "of",
    passages: "passages",

    // Devotional
    devotionalTitle: "Daily Devotionals",
    devotionalSubtitle: "Three Pillars of Faith",
    devotionals: [
      {
        id: 1,
        title: "Grace to Overcome",
        icon: "✝️",
        color: "from-purple-500 to-indigo-600",
        verse: '"My grace is sufficient for you, for my power is made perfect in weakness." — 2 Cor 12:9',
        content:
          "Every challenge you face today is an opportunity for God's grace to be displayed through you. Grace is not merely unmerited favor — it is divine empowerment. When you feel overwhelmed, remember that the same grace that raised Christ from the dead lives in you. Stand firm, for in your weakness His strength is perfected. Today, surrender every burden and watch His grace turn your limitations into testimonies of His glory.",
        reflection: "Where do you need God's grace to overcome today?",
        prayer:
          "Lord, let Your grace be my strength today. In every weakness, reveal Your power. Amen.",
      },
      {
        id: 2,
        title: "Covenant to Build",
        icon: "🏛️",
        color: "from-amber-500 to-orange-600",
        verse:
          '"Unless the LORD builds the house, the builders labor in vain." — Psalm 127:1',
        content:
          "God is a covenant-keeping God. He does not abandon what He has commissioned. You are called not just to attend church but to build it — brick by brick through prayer, service, sacrifice, and love. The covenant He made with His people is everlasting. As you serve in your role this week, know that you are not just filling a slot — you are co-laboring with God to build His eternal house.",
        reflection:
          "How are you actively contributing to building God's covenant community?",
        prayer:
          "Father, use my hands, voice, and time to build what You have ordained. Let my service be an act of covenant. Amen.",
      },
      {
        id: 3,
        title: "Faith to Advance",
        icon: "⚔️",
        color: "from-emerald-500 to-teal-600",
        verse: '"The righteous will live by faith." — Romans 1:17',
        content:
          "Faith is not passive — it is the engine of Kingdom advancement. David did not wait for Goliath to charge; he ran toward the battle line (1 Sam 17:48). This week, God is calling you to advance — in prayer, in boldness, in generosity, in service. Every time you show up to lead, translate, or conduct a service, you are taking ground for the Kingdom. Faith that does not advance is faith that retreats. Step forward!",
        reflection: "What bold step of faith is God calling you to take this week?",
        prayer:
          "Lord, give me the faith to advance — to run toward every giant in my life and community in Your name. Amen.",
      },
    ],

    // Members
    membersTitle: "Members",
    membersSubtitle: "Registered members",
    addMember: "Add Member",
    memberName: "Member Name",
    memberRole: "Role / Department",
    save: "Save",
    delete: "Delete",
    noMembers: "No members added yet",
    language: "Language",
    english: "English",
    french: "French",
  },

  fr: {
    appTitle: "Planificateur d'Église",
    appSubtitle: "Le Seigneur Devant Qui Je Me Tiens",
    navSchedule: "Programme",
    navBible: "Bible",
    navDevotional: "Dévotion",
    navMembers: "Membres",

    // Schedule
    scheduleTitle: "Programme Hebdomadaire",
    scheduleSubtitle: "Inscrivez-vous pour servir",
    monday: "Lundi",
    tuesday: "Mardi",
    wednesday: "Mercredi",
    thursday: "Jeudi",
    friday: "Vendredi",
    saturday: "Samedi",
    sunday: "Dimanche",
    prayerLead: "Diriger la Prière",
    translation: "Traduction",
    conductService: "Conduire le Culte",
    prayerFasting: "Prière et Jeûne",
    worshipService: "Culte de Louange",
    bibleStudy: "Étude Biblique",
    signUp: "S'inscrire",
    signedUp: "Inscrit ✓",
    remove: "Retirer",
    timeSlot: "Heure",
    role: "Rôle",
    member: "Membre",
    available: "Disponible",
    pickName: "Entrez votre nom",
    confirm: "Confirmer",
    cancel: "Annuler",
    noSlots: "Aucun créneau disponible",
    slotsFor: "Créneaux pour",
    weekdayNote: "Le Seigneur Devant Qui Je Me Tiens",
    fridayNote: "Journée de Prière et de Jeûne",
    saturdayNote: "Culte de Louange",
    sundayNote: "Étude Biblique",
    midnightSlot: "Minuit – 18h00",
    eveningSlot: "23h00 – 1h00",
    worshipSlot: "12h00 – 14h00",
    bibleSlot: "13h00 – 15h00",
    morningSlot: "8h00 – 9h30",
    selectDay: "Sélectionnez un jour pour voir les créneaux",
    myBookings: "Mes Réservations",
    noBookings: "Aucune réservation",
    clearName: "Effacer le Nom",
    yourName: "Votre Nom",
    setName: "Enregistrer",
    nameSet: "Nom enregistré!",

    // Bible Reading
    bibleTitle: "Lecture Biblique Quotidienne",
    bibleSubtitle: "Plan de Lecture du Jour",
    bibleReferences: [
      { ref: "1 Sam 17:1–18:4", label: "1 Samuel 17:1 – 18:4" },
      { ref: "Jean 8:21–30", label: "Jean 8:21–30" },
      { ref: "Ps 111:1–10", label: "Psaume 111:1–10" },
      { ref: "Pr 15:11", label: "Proverbes 15:11" },
    ],
    markRead: "Marquer comme Lu",
    markUnread: "Marquer non Lu",
    readingProgress: "Progression de Lecture",
    completed: "Complété",
    of: "sur",
    passages: "passages",

    // Devotional
    devotionalTitle: "Dévotions Quotidiennes",
    devotionalSubtitle: "Trois Piliers de la Foi",
    devotionals: [
      {
        id: 1,
        title: "La Grâce pour Surmonter",
        icon: "✝️",
        color: "from-purple-500 to-indigo-600",
        verse:
          '"Ma grâce te suffit, car ma puissance s\'accomplit dans la faiblesse." — 2 Cor 12:9',
        content:
          "Chaque défi que vous rencontrez aujourd'hui est une occasion pour la grâce de Dieu de se manifester en vous. La grâce n'est pas simplement une faveur imméritée — c'est une habilitation divine. Lorsque vous vous sentez dépassé, rappelez-vous que la même grâce qui a ressuscité Christ des morts vit en vous. Tenez ferme, car dans votre faiblesse Sa force est perfectionnée. Abandonnez chaque fardeau et regardez Sa grâce transformer vos limitations en témoignages de Sa gloire.",
        reflection: "Où avez-vous besoin de la grâce de Dieu pour surmonter aujourd'hui?",
        prayer:
          "Seigneur, que Ta grâce soit ma force aujourd'hui. Dans chaque faiblesse, révèle Ta puissance. Amen.",
      },
      {
        id: 2,
        title: "L'Alliance pour Bâtir",
        icon: "🏛️",
        color: "from-amber-500 to-orange-600",
        verse:
          '"Si l\'Éternel ne bâtit la maison, ceux qui la bâtissent travaillent en vain." — Psaume 127:1',
        content:
          "Dieu est un Dieu fidèle à Ses alliances. Il n'abandonne pas ce qu'Il a mandaté. Vous êtes appelé non seulement à fréquenter l'église mais à la bâtir — pierre par pierre à travers la prière, le service, le sacrifice et l'amour. L'alliance qu'Il a faite avec Son peuple est éternelle. En servant dans votre rôle cette semaine, sachez que vous ne remplissez pas simplement un créneau — vous co-labourez avec Dieu pour bâtir Sa maison éternelle.",
        reflection:
          "Comment contribuez-vous activement à bâtir la communauté d'alliance de Dieu?",
        prayer:
          "Père, utilise mes mains, ma voix et mon temps pour bâtir ce que Tu as ordonné. Que mon service soit un acte d'alliance. Amen.",
      },
      {
        id: 3,
        title: "La Foi pour Avancer",
        icon: "⚔️",
        color: "from-emerald-500 to-teal-600",
        verse: '"Le juste vivra par la foi." — Romains 1:17',
        content:
          "La foi n'est pas passive — c'est le moteur de l'avancement du Royaume. David n'a pas attendu que Goliath charge; il a couru vers la ligne de bataille (1 Sam 17:48). Cette semaine, Dieu vous appelle à avancer — dans la prière, dans l'audace, dans la générosité, dans le service. Chaque fois que vous vous présentez pour diriger, traduire ou conduire un culte, vous prenez du terrain pour le Royaume. La foi qui n'avance pas est la foi qui recule. Faites un pas en avant!",
        reflection:
          "Quel pas de foi audacieux Dieu vous appelle-t-il à faire cette semaine?",
        prayer:
          "Seigneur, donne-moi la foi pour avancer — pour courir vers chaque géant dans ma vie et ma communauté en Ton nom. Amen.",
      },
    ],

    // Members
    membersTitle: "Membres",
    membersSubtitle: "Membres enregistrés",
    addMember: "Ajouter un Membre",
    memberName: "Nom du Membre",
    memberRole: "Rôle / Département",
    save: "Enregistrer",
    delete: "Supprimer",
    noMembers: "Aucun membre ajouté",
    language: "Langue",
    english: "Anglais",
    french: "Français",
  },
};
