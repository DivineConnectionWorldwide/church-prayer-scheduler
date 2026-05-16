// ── Daily Bible Reading Plan Engine ──────────────────────────────────────────
// Uses the One Year Bible 365-day plan for readings.
// Themes, verses, and connections rotate from a curated bank.

import { oneYearBiblePlan } from "./oneYearBible";

export interface DailyReading {
  ref: string;
  label: { en: string; fr: string };
  icon: string;
  color: string;
}

export interface DailyVerse {
  text: { en: string; fr: string };
  reference: string;
}

export interface DailyDevotional {
  id: number;
  title: { en: string; fr: string };
  icon: string;
  color: string;
  verse: { en: string; fr: string };
  content: { en: string; fr: string };
  reflection: { en: string; fr: string };
  prayer: { en: string; fr: string };
}

export interface DailyPlan {
  dayIndex: number;
  dateKey: string;
  readings: DailyReading[];
  featuredVerse: DailyVerse;
  theme: { en: string; fr: string };
  connectionSummary: { en: string; fr: string };
}

// ── Rotating Themes & Verses Bank ───────────────────────────────────────────
const themeBank: { verse: DailyVerse; theme: { en: string; fr: string }; connection: { en: string; fr: string } }[] = [
  { verse: { text: { en: "\"You come against me with sword and spear and javelin, but I come against you in the name of the LORD Almighty.\"", fr: "\"Tu marches contre moi avec l'épée, la lance et le javelot; moi, je marche contre toi au nom de l'Éternel des armées.\"" }, reference: "1 Samuel 17:45" }, theme: { en: "The Battle Belongs to the Lord", fr: "Le Combat Appartient à l'Éternel" }, connection: { en: "Today's readings call us to bold faith, divine identity, wholehearted worship, and transparent living before the all-seeing God.", fr: "Les lectures d'aujourd'hui nous appellent à une foi audacieuse, une adoration de tout cœur et une vie transparente devant Dieu." } },
  { verse: { text: { en: "\"In the beginning God created the heavens and the earth.\"", fr: "\"Au commencement, Dieu créa les cieux et la terre.\"" }, reference: "Genesis 1:1" }, theme: { en: "In the Beginning — New Starts with God", fr: "Au Commencement — Nouveaux Départs avec Dieu" }, connection: { en: "Every great work starts with God. Today, invite God to begin something new in your heart.", fr: "Chaque grande œuvre commence avec Dieu. Invitez Dieu à commencer quelque chose de nouveau dans votre cœur." } },
  { verse: { text: { en: "\"I will put enmity between you and the woman, and between your offspring and hers.\"", fr: "\"Je mettrai inimitié entre toi et la femme, entre ta postérité et sa postérité.\"" }, reference: "Genesis 3:15" }, theme: { en: "The Fall and the Promise of Redemption", fr: "La Chute et la Promesse de Rédemption" }, connection: { en: "Even in our failures, God's redemptive plan cannot be stopped. His promise of restoration stands forever.", fr: "Même dans nos échecs, le plan rédempteur de Dieu ne peut être arrêté. Sa promesse de restauration subsiste." } },
  { verse: { text: { en: "\"Noah found favor in the eyes of the LORD.\"", fr: "\"Noé trouva grâce aux yeux de l'Éternel.\"" }, reference: "Genesis 6:8" }, theme: { en: "Righteousness in a Corrupt World", fr: "La Justice dans un Monde Corrompu" }, connection: { en: "God always preserves a remnant and raises a voice for truth. Stand righteous even when the world around you is corrupt.", fr: "Dieu préserve toujours un reste et élève une voix pour la vérité. Restez justes même quand le monde est corrompu." } },
  { verse: { text: { en: "\"I will make you into a great nation, and I will bless you.\"", fr: "\"Je ferai de toi une grande nation, et je te bénirai.\"" }, reference: "Genesis 12:2" }, theme: { en: "Called to Go — Obedience Unlocks Destiny", fr: "Appelé à Partir — L'Obéissance Ouvre la Destinée" }, connection: { en: "Every great destiny begins with a step of obedience. God calls; will you go?", fr: "Chaque grande destinée commence par un pas d'obéissance. Dieu appelle; irez-vous?" } },
  { verse: { text: { en: "\"Do not be afraid, Abram. I am your shield, your very great reward.\"", fr: "\"Ne crains point, Abram; je suis ton bouclier, et ta récompense sera très grande.\"" }, reference: "Genesis 15:1" }, theme: { en: "God's Covenant — Promises That Never Fail", fr: "L'Alliance de Dieu — Promesses Infaillibles" }, connection: { en: "God's covenants anchor our faith across every generation. What He promises, He performs.", fr: "Les alliances de Dieu ancrent notre foi à travers les générations. Ce qu'Il promet, Il l'accomplit." } },
  { verse: { text: { en: "\"Is anything too hard for the LORD?\"", fr: "\"Y a-t-il rien qui soit étonnant de la part de l'Éternel?\"" }, reference: "Genesis 18:14" }, theme: { en: "Nothing Is Impossible with God", fr: "Rien n'Est Impossible à Dieu" }, connection: { en: "When life seems impossible, God specializes in the miraculous. Trust Him with the impossible.", fr: "Quand la vie semble impossible, Dieu se spécialise dans le miraculeux. Faites-Lui confiance." } },
  { verse: { text: { en: "\"Trust in the LORD with all your heart and lean not on your own understanding.\"", fr: "\"Confie-toi en l'Éternel de tout ton cœur, et ne t'appuie pas sur ta sagesse.\"" }, reference: "Proverbs 3:5" }, theme: { en: "Total Surrender — Trusting God with Everything", fr: "Abandon Total — Faire Confiance à Dieu en Tout" }, connection: { en: "When we release control, God provides. Lean not on your understanding but on His wisdom.", fr: "Quand nous relâchons le contrôle, Dieu pourvoit. Appuyez-vous sur Sa sagesse, pas la vôtre." } },
  { verse: { text: { en: "\"Do not worry about tomorrow, for tomorrow will worry about itself.\"", fr: "\"Ne vous inquiétez donc pas du lendemain.\"" }, reference: "Matthew 6:34" }, theme: { en: "Do Not Worry — God's Provision Is Sufficient", fr: "Ne Vous Inquiétez Pas — La Provision de Dieu Suffit" }, connection: { en: "Anxiety is cured by trusting God's sovereign plan. He knows what you need before you ask.", fr: "L'anxiété est guérie en faisant confiance au plan souverain de Dieu. Il sait ce dont vous avez besoin." } },
  { verse: { text: { en: "\"I will not let you go unless you bless me.\"", fr: "\"Je ne te laisserai point aller, que tu ne m'aies béni.\"" }, reference: "Genesis 32:26" }, theme: { en: "Wrestling with God — Transformation Through Struggle", fr: "Lutter avec Dieu — Transformation par le Combat" }, connection: { en: "Our greatest breakthroughs often come through our deepest struggles. Don't let go until God blesses you.", fr: "Nos plus grandes percées viennent souvent de nos luttes les plus profondes. Ne lâchez pas." } },
  { verse: { text: { en: "\"He took up our infirmities and bore our diseases.\"", fr: "\"Il a pris nos infirmités, et il s'est chargé de nos maladies.\"" }, reference: "Matthew 8:17" }, theme: { en: "Purpose Through Pain — God's Hidden Plan", fr: "Le But à Travers la Douleur — Le Plan Caché de Dieu" }, connection: { en: "What looks like destruction is often divine construction. God is at work even when you cannot see it.", fr: "Ce qui ressemble à la destruction est souvent une construction divine. Dieu agit même quand vous ne voyez rien." } },
  { verse: { text: { en: "\"The LORD was with Joseph so that he prospered.\"", fr: "\"L'Éternel fut avec Joseph, et la prospérité l'accompagna.\"" }, reference: "Genesis 39:2" }, theme: { en: "Faithfulness in the Valley", fr: "La Fidélité dans la Vallée" }, connection: { en: "Faithfulness in the valley prepares us for the palace. God is with you in every season.", fr: "La fidélité dans la vallée nous prépare pour le palais. Dieu est avec vous en chaque saison." } },
  { verse: { text: { en: "\"It is not the healthy who need a doctor, but the sick.\"", fr: "\"Ce ne sont pas ceux qui se portent bien qui ont besoin de médecin, mais les malades.\"" }, reference: "Matthew 9:12" }, theme: { en: "God Hears the Cry of the Oppressed", fr: "Dieu Entend le Cri des Opprimés" }, connection: { en: "God always responds to genuine cries for help — never too late, never too far.", fr: "Dieu répond toujours aux cris sincères — jamais trop tard, jamais trop loin." } },
  { verse: { text: { en: "\"I AM WHO I AM. This is what you are to say: 'I AM has sent me to you.'\"", fr: "\"JE SUIS CELUI QUI SUIS.\"" }, reference: "Exodus 3:14" }, theme: { en: "The God Who Calls the Unlikely", fr: "Le Dieu Qui Appelle l'Improbable" }, connection: { en: "God doesn't call the qualified; He qualifies the called. Step out in faith.", fr: "Dieu ne choisit pas les qualifiés; Il qualifie les appelés. Avancez dans la foi." } },
  { verse: { text: { en: "\"The LORD will fight for you; you need only to be still.\"", fr: "\"L'Éternel combattra pour vous; et vous, gardez le silence.\"" }, reference: "Exodus 14:14" }, theme: { en: "Stand Still and See God's Salvation", fr: "Tenez-Vous Tranquilles et Voyez le Salut de Dieu" }, connection: { en: "When you're trapped, be still — God is about to part the sea.", fr: "Quand vous êtes piégés, tenez-vous tranquilles — Dieu va séparer les eaux." } },
  { verse: { text: { en: "\"Be strong and courageous. The LORD your God will be with you wherever you go.\"", fr: "\"Fortifie-toi et prends courage! L'Éternel, ton Dieu, est avec toi partout où tu iras.\"" }, reference: "Joshua 1:9" }, theme: { en: "Be Strong and Courageous", fr: "Fortifie-Toi et Prends Courage" }, connection: { en: "Courage is not the absence of fear — it's trusting the God who is with you.", fr: "Le courage n'est pas l'absence de peur — c'est faire confiance au Dieu qui est avec vous." } },
  { verse: { text: { en: "\"Come to me, all you who are weary and burdened, and I will give you rest.\"", fr: "\"Venez à moi, vous tous qui êtes fatigués et chargés, et je vous donnerai du repos.\"" }, reference: "Matthew 11:28" }, theme: { en: "Walls Fall Down — Victory Through Worship", fr: "Les Murs Tombent — Victoire par l'Adoration" }, connection: { en: "God's battle plans often look foolish to the world — but they always work. Rest in Him.", fr: "Les plans de Dieu semblent souvent insensés au monde — mais ils fonctionnent toujours." } },
  { verse: { text: { en: "\"Where you go I will go, and where you stay I will stay.\"", fr: "\"Où tu iras j'irai, où tu demeureras je demeurerai.\"" }, reference: "Ruth 1:16" }, theme: { en: "Loyalty, Love, and Divine Providence", fr: "Loyauté, Amour et Providence Divine" }, connection: { en: "God rewards covenant loyalty with extraordinary blessing.", fr: "Dieu récompense la loyauté d'alliance par des bénédictions extraordinaires." } },
  { verse: { text: { en: "\"Speak, LORD, for your servant is listening.\"", fr: "\"Parle, Éternel, car ton serviteur écoute.\"" }, reference: "1 Samuel 3:9" }, theme: { en: "Hearing God's Voice", fr: "Entendre la Voix de Dieu" }, connection: { en: "Are you positioned to hear when God speaks? Quiet your soul and listen.", fr: "Êtes-vous positionné pour entendre quand Dieu parle? Calmez votre âme et écoutez." } },
  { verse: { text: { en: "\"The heavens declare the glory of God; the skies proclaim the work of his hands.\"", fr: "\"Les cieux racontent la gloire de Dieu, et l'étendue manifeste l'œuvre de ses mains.\"" }, reference: "Psalm 19:1" }, theme: { en: "The Kingdom of Heaven — Treasure Worth Everything", fr: "Le Royaume des Cieux — Un Trésor Qui Vaut Tout" }, connection: { en: "The kingdom is worth more than every earthly crown. Seek it above all else.", fr: "Le royaume vaut plus que toute couronne terrestre. Cherchez-le par-dessus tout." } },
  { verse: { text: { en: "\"The LORD does not look at the things people look at. The LORD looks at the heart.\"", fr: "\"L'Éternel regarde au cœur.\"" }, reference: "1 Samuel 16:7" }, theme: { en: "God Looks at the Heart", fr: "Dieu Regarde au Cœur" }, connection: { en: "God's criteria for leadership is radically different from the world's. Guard your heart.", fr: "Les critères de Dieu sont radicalement différents de ceux du monde. Gardez votre cœur." } },
  { verse: { text: { en: "\"Take courage! It is I. Don't be afraid.\"", fr: "\"Rassurez-vous, c'est moi; n'ayez pas peur!\"" }, reference: "Matthew 14:27" }, theme: { en: "Persecution and Protection — God Is Near", fr: "Persécution et Protection — Dieu Est Proche" }, connection: { en: "When persecution increases, God's protection intensifies. He is in the storm with you.", fr: "Quand la persécution augmente, la protection de Dieu s'intensifie. Il est dans la tempête avec vous." } },
  { verse: { text: { en: "\"My God, my God, why have you forsaken me?\"", fr: "\"Mon Dieu, mon Dieu, pourquoi m'as-tu abandonné?\"" }, reference: "Psalm 22:1" }, theme: { en: "Mercy over Vengeance — The Way of the Cross", fr: "La Miséricorde sur la Vengeance — Le Chemin de la Croix" }, connection: { en: "The way of the cross is always the way of mercy. Choose mercy today.", fr: "Le chemin de la croix est toujours celui de la miséricorde. Choisissez la miséricorde." } },
  { verse: { text: { en: "\"Your throne will be established forever.\"", fr: "\"Ton trône sera affermi pour toujours.\"" }, reference: "2 Samuel 7:16" }, theme: { en: "The Everlasting Covenant — God's Eternal Kingdom", fr: "L'Alliance Éternelle — Le Royaume Éternel de Dieu" }, connection: { en: "God's promises span generations — what He starts, He finishes.", fr: "Les promesses de Dieu traversent les générations — ce qu'Il commence, Il l'achève." } },
  { verse: { text: { en: "\"The LORD is my shepherd, I lack nothing.\"", fr: "\"L'Éternel est mon berger: je ne manquerai de rien.\"" }, reference: "Psalm 23:1" }, theme: { en: "Sin, Repentance, and Restoration", fr: "Péché, Repentance et Restauration" }, connection: { en: "Even our worst failures cannot outrun God's restoring grace. His mercy is new every morning.", fr: "Même nos pires échecs ne peuvent dépasser la grâce restauratrice de Dieu. Sa miséricorde est nouvelle chaque matin." } },
  { verse: { text: { en: "\"Create in me a pure heart, O God, and renew a steadfast spirit within me.\"", fr: "\"O Dieu, crée en moi un cœur pur, renouvelle en moi un esprit bien disposé.\"" }, reference: "Psalm 51:10" }, theme: { en: "A Clean Heart — The Prayer of Renewal", fr: "Un Cœur Pur — La Prière du Renouveau" }, connection: { en: "Purity begins with honest confession. Let God renew you from the inside out.", fr: "La pureté commence par la confession honnête. Laissez Dieu vous renouveler de l'intérieur." } },
  { verse: { text: { en: "\"I am the LORD your God, who brought you out of Egypt.\"", fr: "\"Je suis l'Éternel, ton Dieu, qui t'ai fait sortir du pays d'Égypte.\"" }, reference: "Exodus 20:2" }, theme: { en: "The Law of Love — God's Standard of Holiness", fr: "La Loi d'Amour — Le Standard de Sainteté de Dieu" }, connection: { en: "God's law is not restriction — it is the roadmap to abundant life.", fr: "La loi de Dieu n'est pas une restriction — c'est la carte vers la vie abondante." } },
  { verse: { text: { en: "\"The LORD brings death and makes alive; he brings down to the grave and raises up.\"", fr: "\"L'Éternel fait mourir et il fait vivre.\"" }, reference: "1 Samuel 2:6" }, theme: { en: "Prayer Changes Everything", fr: "La Prière Change Tout" }, connection: { en: "Desperate prayer is powerful prayer — it moves the heart of God.", fr: "La prière désespérée est puissante — elle touche le cœur de Dieu." } },
  { verse: { text: { en: "\"The fear of the LORD is the beginning of wisdom.\"", fr: "\"La crainte de l'Éternel est le commencement de la sagesse.\"" }, reference: "Psalm 111:10" }, theme: { en: "Wisdom Begins with Reverence", fr: "La Sagesse Commence par la Révérence" }, connection: { en: "True wisdom doesn't start with education — it starts with reverence for God.", fr: "La vraie sagesse ne commence pas par l'éducation — elle commence par la révérence envers Dieu." } },
  { verse: { text: { en: "\"For I know the plans I have for you, declares the LORD.\"", fr: "\"Car je connais les projets que j'ai formés sur vous, dit l'Éternel.\"" }, reference: "Jeremiah 29:11" }, theme: { en: "God's Plans Are Good", fr: "Les Plans de Dieu Sont Bons" }, connection: { en: "Even in exile, God has plans for your welfare and future. Trust His timeline.", fr: "Même dans l'exil, Dieu a des plans pour votre bien et votre avenir. Faites confiance à Son calendrier." } },
];

// ── Date Utility ────────────────────────────────────────────────────────────
export function getDateKey(date?: Date): string {
  const d = date || new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function getDayOfYear(date?: Date): number {
  const d = date || new Date();
  const start = new Date(d.getFullYear(), 0, 0);
  const diff = d.getTime() - start.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

export function getTodayPlan(date?: Date): DailyPlan {
  const d = date || new Date();
  const dayOfYear = getDayOfYear(d);

  // One Year Bible: 365 days, 0-indexed (dayOfYear is 1-based)
  const bibleIndex = ((dayOfYear - 1) % oneYearBiblePlan.length + oneYearBiblePlan.length) % oneYearBiblePlan.length;
  const todayReadings = oneYearBiblePlan[bibleIndex];

  // Rotating theme/verse/connection
  const themeIndex = dayOfYear % themeBank.length;
  const themePlan = themeBank[themeIndex];

  const iconsList = ["📜", "✝️", "🎵", "💡"];
  const labelPrefixes = {
    en: ["Old Testament", "New Testament", "Psalms", "Proverbs"],
    fr: ["Ancien Testament", "Nouveau Testament", "Psaumes", "Proverbes"],
  };
  const colorsList = [
    "from-purple-400 to-indigo-500",
    "from-blue-400 to-cyan-500",
    "from-emerald-400 to-teal-500",
    "from-amber-400 to-orange-500",
  ];

  return {
    dayIndex: bibleIndex,
    dateKey: getDateKey(d),
    readings: todayReadings.map((ref, i) => ({
      ref,
      label: {
        en: `${labelPrefixes.en[i]}: ${ref}`,
        fr: `${labelPrefixes.fr[i]}: ${ref}`,
      },
      icon: iconsList[i],
      color: colorsList[i],
    })),
    featuredVerse: themePlan.verse,
    theme: themePlan.theme,
    connectionSummary: themePlan.connection,
  };
}

// ── Devotional Rotation ─────────────────────────────────────────────────────
const devotionalBank: { title: { en: string; fr: string }; icon: string; color: string; verse: { en: string; fr: string }; content: { en: string; fr: string }; reflection: { en: string; fr: string }; prayer: { en: string; fr: string } }[][] = [
  [
    { title: { en: "Grace to Overcome", fr: "La Grâce pour Surmonter" }, icon: "✝️", color: "from-purple-500 to-indigo-600", verse: { en: "\"My grace is sufficient for you, for my power is made perfect in weakness.\" — 2 Cor 12:9", fr: "\"Ma grâce te suffit, car ma puissance s'accomplit dans la faiblesse.\" — 2 Cor 12:9" }, content: { en: "Every challenge you face today is an opportunity for God's grace to be displayed through you. Grace is not merely unmerited favor — it is divine empowerment. When you feel overwhelmed, remember that the same grace that raised Christ from the dead lives in you. Stand firm, for in your weakness His strength is perfected.", fr: "Chaque défi que vous rencontrez aujourd'hui est une occasion pour la grâce de Dieu de se manifester en vous. La grâce n'est pas simplement une faveur imméritée — c'est une habilitation divine." }, reflection: { en: "Where do you need God's grace to overcome today?", fr: "Où avez-vous besoin de la grâce de Dieu pour surmonter aujourd'hui?" }, prayer: { en: "Lord, let Your grace be my strength today. In every weakness, reveal Your power. Amen.", fr: "Seigneur, que Ta grâce soit ma force aujourd'hui. Amen." } },
    { title: { en: "Covenant to Build", fr: "L'Alliance pour Bâtir" }, icon: "🏛️", color: "from-amber-500 to-orange-600", verse: { en: "\"Unless the LORD builds the house, the builders labor in vain.\" — Psalm 127:1", fr: "\"Si l'Éternel ne bâtit la maison, ceux qui la bâtissent travaillent en vain.\" — Psaume 127:1" }, content: { en: "God is a covenant-keeping God. He does not abandon what He has commissioned. You are called not just to attend church but to build it — brick by brick through prayer, service, sacrifice, and love.", fr: "Dieu est un Dieu fidèle à Ses alliances. Vous êtes appelé non seulement à fréquenter l'église mais à la bâtir — pierre par pierre à travers la prière et le service." }, reflection: { en: "How are you actively contributing to building God's covenant community?", fr: "Comment contribuez-vous activement à bâtir la communauté d'alliance de Dieu?" }, prayer: { en: "Father, use my hands, voice, and time to build what You have ordained. Amen.", fr: "Père, utilise mes mains, ma voix et mon temps pour bâtir ce que Tu as ordonné. Amen." } },
    { title: { en: "Faith to Advance", fr: "La Foi pour Avancer" }, icon: "⚔️", color: "from-emerald-500 to-teal-600", verse: { en: "\"The righteous will live by faith.\" — Romans 1:17", fr: "\"Le juste vivra par la foi.\" — Romains 1:17" }, content: { en: "Faith is not passive — it is the engine of Kingdom advancement. David did not wait for Goliath to charge; he ran toward the battle line. This week, God is calling you to advance — in prayer, in boldness, in service. Step forward!", fr: "La foi n'est pas passive — c'est le moteur de l'avancement du Royaume. David n'a pas attendu que Goliath charge; il a couru. Avancez!" }, reflection: { en: "What bold step of faith is God calling you to take this week?", fr: "Quel pas de foi audacieux Dieu vous appelle-t-il à faire cette semaine?" }, prayer: { en: "Lord, give me the faith to advance — to run toward every giant in my life. Amen.", fr: "Seigneur, donne-moi la foi pour avancer. Amen." } },
  ],
  [
    { title: { en: "Hope That Anchors", fr: "L'Espérance Qui Ancre" }, icon: "⚓", color: "from-blue-500 to-indigo-600", verse: { en: "\"We have this hope as an anchor for the soul, firm and secure.\" — Hebrews 6:19", fr: "\"Cette espérance, nous la possédons comme une ancre de l'âme, sûre et solide.\" — Hébreux 6:19" }, content: { en: "In a world of constant change, hope in God is the one anchor that never shifts. Biblical hope is not wishful thinking — it is confident expectation based on God's character and promises.", fr: "Dans un monde de changement constant, l'espérance en Dieu est la seule ancre qui ne bouge jamais. L'espérance biblique est une attente confiante basée sur les promesses de Dieu." }, reflection: { en: "What situation requires you to anchor your hope in God today?", fr: "Quelle situation nécessite que vous ancriez votre espérance en Dieu aujourd'hui?" }, prayer: { en: "Lord, be the anchor of my soul today. Let my hope rest in You alone. Amen.", fr: "Seigneur, sois l'ancre de mon âme aujourd'hui. Amen." } },
    { title: { en: "A Lifestyle of Praise", fr: "Un Mode de Vie de Louange" }, icon: "🎵", color: "from-pink-500 to-rose-600", verse: { en: "\"I will praise the LORD at all times; his praise will always be on my lips.\" — Psalm 34:1", fr: "\"Je bénirai l'Éternel en tout temps; sa louange sera toujours dans ma bouche.\" — Psaume 34:1" }, content: { en: "Praise is not reserved for good days — it is a weapon for every day. When you praise God in the valley, you declare that He is greater than your circumstances. Praise shifts your atmosphere and invites God's presence.", fr: "La louange n'est pas réservée aux bons jours — c'est une arme pour chaque jour. Quand vous louez Dieu dans la vallée, vous déclarez qu'Il est plus grand que vos circonstances." }, reflection: { en: "Can you praise God in the middle of your current challenge?", fr: "Pouvez-vous louer Dieu au milieu de votre défi actuel?" }, prayer: { en: "Father, I choose to praise You no matter what I face. Amen.", fr: "Père, je choisis de Te louer quoi que j'affronte. Amen." } },
    { title: { en: "The Power of Obedience", fr: "La Puissance de l'Obéissance" }, icon: "🔥", color: "from-orange-500 to-red-600", verse: { en: "\"To obey is better than sacrifice.\" — 1 Samuel 15:22", fr: "\"L'obéissance vaut mieux que les sacrifices.\" — 1 Samuel 15:22" }, content: { en: "Obedience is the currency of the Kingdom. God does not need our religious activities — He wants our hearts aligned with His will. The difference between destiny and disaster is often one act of obedience.", fr: "L'obéissance est la monnaie du Royaume. Dieu veut nos cœurs alignés avec Sa volonté. La différence entre la destinée et le désastre est souvent un acte d'obéissance." }, reflection: { en: "Is there an area where God has spoken and you have delayed obeying?", fr: "Y a-t-il un domaine où Dieu a parlé et vous avez tardé à obéir?" }, prayer: { en: "Lord, give me a heart of immediate and complete obedience. Amen.", fr: "Seigneur, donne-moi un cœur d'obéissance immédiate et complète. Amen." } },
  ],
];

export function getTodayDevotionals(date?: Date): DailyDevotional[] {
  const d = date || new Date();
  const dayOfYear = getDayOfYear(d);
  const setIndex = dayOfYear % devotionalBank.length;
  return devotionalBank[setIndex].map((dev, i) => ({ id: i + 1, ...dev }));
}

// ── Schedule Reset Helper ───────────────────────────────────────────────────
export function shouldResetForNewDay(): { needsReset: boolean; currentDateKey: string } {
  const currentDateKey = getDateKey();
  const lastDate = localStorage.getItem("church_last_date");
  return { needsReset: lastDate !== currentDateKey, currentDateKey };
}

export function markDateSeen(dateKey: string) {
  localStorage.setItem("church_last_date", dateKey);
}
