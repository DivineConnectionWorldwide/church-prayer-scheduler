export interface CompleteBibleStudy {
  date: string;
  title: { en: string; fr: string };
  subtitle: { en: string; fr: string };
  passages: string[];
  introduction: { en: string; fr: string };
  unifyingTheme: {
    title: { en: string; fr: string };
    description: { en: string; fr: string };
  };
  passageBreakdowns: {
    ref: string;
    title: { en: string; fr: string };
    summary: { en: string; fr: string };
    keyPoint: { en: string; fr: string };
  }[];
  connections: { en: string[]; fr: string[] };
  deeperStudy: {
    title: { en: string; fr: string };
    sections: {
      heading: { en: string; fr: string };
      content: { en: string; fr: string };
    }[];
  };
  characterStudy: {
    name: { en: string; fr: string };
    description: { en: string; fr: string };
    lessons: { en: string[]; fr: string[] };
  };
  wordStudy: {
    word: { en: string; fr: string };
    originalLanguage: string;
    meaning: { en: string; fr: string };
    usage: { en: string; fr: string };
  };
  crossReferences: {
    verse: string;
    connection: { en: string; fr: string };
  }[];
  prophecyAndFulfillment: {
    enabled: boolean;
    content: { en: string; fr: string };
  };
  practicalApplication: {
    personal: { en: string[]; fr: string[] };
    family: { en: string[]; fr: string[] };
    community: { en: string[]; fr: string[] };
  };
  reflectionQuestions: { en: string[]; fr: string[] };
  groupDiscussion: {
    icebreaker: { en: string; fr: string };
    questions: { en: string[]; fr: string[] };
    activity: { en: string; fr: string };
  };
  prayerPoints: { en: string[]; fr: string[] };
  declarationsAndConfessions: { en: string[]; fr: string[] };
  memoryVerse: {
    text: { en: string; fr: string };
    reference: string;
  };
  weeklyChallenge: {
    title: { en: string; fr: string };
    description: { en: string; fr: string };
    steps: { en: string[]; fr: string[] };
  };
  hymnsAndWorship: {
    suggested: { en: string[]; fr: string[] };
  };
  closingPrayer: { en: string; fr: string };
  additionalResources: {
    commentaries: string[];
    relatedPassages: string[];
  };
}

export const todaysBibleStudy: CompleteBibleStudy = {
  date: new Date().toISOString().split("T")[0],
  title: {
    en: "Faith That Conquers: Standing Before Giants",
    fr: "La Foi Qui Conquiert: Se Tenir Devant les Géants",
  },
  subtitle: {
    en: "A Complete Study on 1 Sam 17:1–18:4, John 8:21–30, Psalm 111:1–10, Proverbs 15:11",
    fr: "Une Étude Complète sur 1 Sam 17:1–18:4, Jean 8:21–30, Psaume 111:1–10, Proverbes 15:11",
  },
  passages: [
    "1 Samuel 17:1–18:4",
    "John 8:21–30",
    "Psalm 111:1–10",
    "Proverbs 15:11",
  ],
  introduction: {
    en: "Today's readings form a powerful tapestry of faith, identity, worship, and divine omniscience. We journey from the Valley of Elah where a shepherd boy faces a giant, to the Temple courts where Jesus declares His divine identity, to a hymn of wholehearted praise, and finally to a proverb that reminds us nothing is hidden from God. The thread binding them all? The God before whom we stand sees everything, fights for His people, and calls us to bold, reverent faith. As you study today, ask the Holy Spirit to reveal how these ancient words speak directly into your current battles, your worship, and your walk with Christ.",
    fr: "Les lectures d'aujourd'hui forment une tapisserie puissante de foi, d'identité, d'adoration et d'omniscience divine. Nous voyageons de la Vallée d'Éla où un jeune berger affronte un géant, aux parvis du Temple où Jésus déclare Son identité divine, à un hymne de louange de tout cœur, et enfin à un proverbe qui nous rappelle que rien n'est caché à Dieu. Le fil qui les relie tous? Le Dieu devant qui nous nous tenons voit tout, combat pour Son peuple et nous appelle à une foi audacieuse et révérencieuse. En étudiant aujourd'hui, demandez au Saint-Esprit de révéler comment ces paroles anciennes parlent directement dans vos combats actuels, votre adoration et votre marche avec Christ.",
  },
  unifyingTheme: {
    title: {
      en: "The Lord Before Whom I Stand",
      fr: "Le Seigneur Devant Qui Je Me Tiens",
    },
    description: {
      en: "Each passage today centers on standing before God with complete awareness of His presence. David stood before Goliath knowing the Lord of hosts stood with him. Jesus stood before His accusers fully conscious of His divine origin and the Father's constant presence. The Psalmist stood in the assembly offering wholehearted praise. And Proverbs reminds us that even death and destruction stand exposed before God—how much more our hearts! This is the posture of the believer: standing in faith, standing in truth, standing in worship, standing in transparency before the all-seeing, all-powerful, covenant-keeping God.",
      fr: "Chaque passage aujourd'hui se centre sur le fait de se tenir devant Dieu avec une conscience complète de Sa présence. David s'est tenu devant Goliath sachant que l'Éternel des armées se tenait avec lui. Jésus s'est tenu devant Ses accusateurs pleinement conscient de Son origine divine et de la présence constante du Père. Le Psalmiste s'est tenu dans l'assemblée offrant une louange de tout cœur. Et les Proverbes nous rappellent que même la mort et la destruction sont exposées devant Dieu—combien plus nos cœurs! C'est la posture du croyant: se tenir dans la foi, se tenir dans la vérité, se tenir dans l'adoration, se tenir dans la transparence devant le Dieu qui voit tout, tout-puissant, fidèle à Son alliance.",
    },
  },
  passageBreakdowns: [
    {
      ref: "1 Samuel 17:1–18:4",
      title: { en: "David vs. Goliath", fr: "David contre Goliath" },
      summary: {
        en: "The Philistine champion Goliath challenges Israel for 40 days. Young David, delivering supplies, is outraged by the giant's blasphemy against the living God. Refusing Saul's armor, David faces Goliath with a sling, five stones, and unshakeable faith. He declares the battle belongs to the Lord and strikes down the giant with a single stone. The chapter closes with Jonathan's covenant of friendship with David, symbolically transferring royal garments and weapons.",
        fr: "Le champion philistin Goliath défie Israël pendant 40 jours. Le jeune David, livrant des provisions, est indigné par le blasphème du géant contre le Dieu vivant. Refusant l'armure de Saül, David affronte Goliath avec une fronde, cinq pierres et une foi inébranlable. Il déclare que le combat appartient à l'Éternel et abat le géant d'une seule pierre. Le chapitre se termine par l'alliance d'amitié de Jonathan avec David, transférant symboliquement les vêtements royaux et les armes.",
      },
      keyPoint: {
        en: "The battle is the Lord's—our weapons are faith, not flesh.",
        fr: "Le combat appartient à l'Éternel—nos armes sont la foi, pas la chair.",
      },
    },
    {
      ref: "John 8:21–30",
      title: { en: "Jesus' Divine Identity", fr: "L'Identité Divine de Jésus" },
      summary: {
        en: "Jesus declares He is going where His opponents cannot follow and that they will die in their sins unless they believe He is 'I AM'—the covenant name of God. He points them to the cross ('when you lift up the Son of Man') as the moment His identity will be fully revealed. Jesus emphasizes His perfect obedience to the Father and His constant fellowship with Him. Many who heard believed.",
        fr: "Jésus déclare qu'Il va là où Ses opposants ne peuvent suivre et qu'ils mourront dans leurs péchés à moins de croire qu'Il est 'JE SUIS'—le nom d'alliance de Dieu. Il les dirige vers la croix ('quand vous aurez élevé le Fils de l'homme') comme le moment où Son identité sera pleinement révélée. Jésus souligne Son obéissance parfaite au Père et Sa communion constante avec Lui. Beaucoup de ceux qui L'entendirent crurent.",
      },
      keyPoint: {
        en: "Jesus is the eternal I AM—belief in Him is the only escape from sin's judgment.",
        fr: "Jésus est le JE SUIS éternel—la foi en Lui est la seule échappatoire au jugement du péché.",
      },
    },
    {
      ref: "Psalm 111:1–10",
      title: { en: "Wholehearted Praise", fr: "Louange de Tout Cœur" },
      summary: {
        en: "This acrostic psalm catalogs God's works: they are great, glorious, righteous, and remembered forever. God provides for those who fear Him, keeps His covenant, and has shown His redemptive power. The psalm climaxes with the declaration that the fear of the Lord is the beginning of wisdom—those who practice His precepts have good understanding.",
        fr: "Ce psaume acrostiche catalogue les œuvres de Dieu: elles sont grandes, glorieuses, justes et rappelées pour toujours. Dieu pourvoit à ceux qui Le craignent, garde Son alliance et a montré Sa puissance rédemptrice. Le psaume culmine avec la déclaration que la crainte de l'Éternel est le commencement de la sagesse—ceux qui pratiquent Ses préceptes ont du bon sens.",
      },
      keyPoint: {
        en: "True wisdom begins with reverent fear of God and overflows in wholehearted worship.",
        fr: "La vraie sagesse commence par la crainte révérencieuse de Dieu et déborde en adoration de tout cœur.",
      },
    },
    {
      ref: "Proverbs 15:11",
      title: { en: "God Sees All", fr: "Dieu Voit Tout" },
      summary: {
        en: "Death and Destruction (Sheol and Abaddon) lie open before the Lord—how much more the hearts of humanity! This single verse declares God's omniscience over both the visible and invisible realms. Nothing escapes His knowledge—not the grave, not the abyss, and certainly not our secret thoughts and motives.",
        fr: "La mort et la destruction (le Schéol et l'Abaddon) sont à découvert devant l'Éternel—combien plus les cœurs des hommes! Ce seul verset déclare l'omniscience de Dieu sur les domaines visibles et invisibles. Rien n'échappe à Sa connaissance—ni la tombe, ni l'abîme, et certainement pas nos pensées et motifs secrets.",
      },
      keyPoint: {
        en: "God's all-seeing gaze calls us to live authentically before Him.",
        fr: "Le regard omniscient de Dieu nous appelle à vivre authentiquement devant Lui.",
      },
    },
  ],
  connections: {
    en: [
      "David's confidence came from knowing God saw the battle and would fight for him (1 Sam 17). Jesus' authority came from knowing the Father was always with Him (John 8). Both stood firm because they knew who stood with them.",
      "The Psalmist praises God for works that are 'pondered by all who delight in them' (Ps 111:2). David pondered God's past deliverances (lion and bear) to fuel present courage. Remembering God's works builds faith for new battles.",
      "Jesus declared 'I AM' (John 8:24)—the same God whose works the Psalmist celebrates (Ps 111). The one who parted the Red Sea is the one who stood in the Temple declaring eternal life to those who believe.",
      "Proverbs 15:11 says nothing is hidden from God. Jesus said the Father 'has not left me alone' (John 8:29). David said God 'delivered me from the paw of the lion' (1 Sam 17:37). The God who sees all also saves all who trust in Him.",
      "The fear of the Lord is the beginning of wisdom (Ps 111:10). David feared God, not Goliath. Jesus lived in perfect reverence to the Father. This holy fear produces bold faith and righteous living.",
    ],
    fr: [
      "La confiance de David venait de savoir que Dieu voyait la bataille et combattrait pour lui (1 Sam 17). L'autorité de Jésus venait de savoir que le Père était toujours avec Lui (Jean 8). Les deux se tenaient fermes parce qu'ils savaient qui se tenait avec eux.",
      "Le Psalmiste loue Dieu pour des œuvres qui sont 'recherchées par tous ceux qui s'y plaisent' (Ps 111:2). David a médité sur les délivrances passées de Dieu (lion et ours) pour alimenter le courage présent. Se souvenir des œuvres de Dieu construit la foi pour de nouvelles batailles.",
      "Jésus a déclaré 'JE SUIS' (Jean 8:24)—le même Dieu dont le Psalmiste célèbre les œuvres (Ps 111). Celui qui a divisé la Mer Rouge est celui qui se tenait dans le Temple déclarant la vie éternelle à ceux qui croient.",
      "Proverbes 15:11 dit que rien n'est caché à Dieu. Jésus a dit que le Père 'ne m'a pas laissé seul' (Jean 8:29). David a dit que Dieu 'l'a délivré de la griffe du lion' (1 Sam 17:37). Le Dieu qui voit tout sauve aussi tous ceux qui Lui font confiance.",
      "La crainte de l'Éternel est le commencement de la sagesse (Ps 111:10). David craignait Dieu, pas Goliath. Jésus vivait dans une révérence parfaite envers le Père. Cette sainte crainte produit une foi audacieuse et une vie juste.",
    ],
  },
  deeperStudy: {
    title: { en: "Deeper Study", fr: "Étude Approfondie" },
    sections: [
      {
        heading: { en: "The Theology of Divine Presence", fr: "La Théologie de la Présence Divine" },
        content: {
          en: "Throughout Scripture, God's presence is the defining factor in every battle and every calling. Moses refused to lead Israel without God's presence (Exodus 33:15). Joshua was commanded to be strong because 'the Lord your God is with you wherever you go' (Joshua 1:9). David's confidence came not from skill but from covenant relationship—'the Lord who delivered me...will deliver me' (1 Sam 17:37). Jesus embodied this truth perfectly: 'The one who sent me is with me; he has not left me alone' (John 8:29). The New Testament promise extends this to all believers: 'Never will I leave you; never will I forsake you' (Hebrews 13:5). Our battles are won not by might nor by power, but by the Spirit of the Lord who is with us.",
          fr: "À travers les Écritures, la présence de Dieu est le facteur déterminant dans chaque bataille et chaque appel. Moïse a refusé de conduire Israël sans la présence de Dieu (Exode 33:15). Josué a reçu l'ordre d'être fort parce que 'l'Éternel ton Dieu est avec toi partout où tu iras' (Josué 1:9). La confiance de David ne venait pas de son habileté mais de sa relation d'alliance—'l'Éternel qui m'a délivré...me délivrera' (1 Sam 17:37). Jésus a incarné cette vérité parfaitement: 'Celui qui m'a envoyé est avec moi; il ne m'a pas laissé seul' (Jean 8:29). La promesse du Nouveau Testament étend cela à tous les croyants: 'Je ne te délaisserai point, et je ne t'abandonnerai point' (Hébreux 13:5). Nos batailles sont gagnées non par la puissance ni par la force, mais par l'Esprit de l'Éternel qui est avec nous.",
        },
      },
      {
        heading: { en: "The 'I AM' Declarations", fr: "Les Déclarations 'JE SUIS'" },
        content: {
          en: "When Jesus said 'if you do not believe that I AM (ἐγώ εἰμι), you will die in your sins' (John 8:24), He was claiming the divine name revealed to Moses at the burning bush (Exodus 3:14). The Greek 'ego eimi' without a predicate is a direct claim to deity. This is why the Jews later picked up stones to kill Him (John 8:59). Jesus is not merely a prophet or teacher—He is YHWH in flesh, the eternal self-existent One. The cross ('when you lift up the Son of Man') would be the ultimate revelation of this identity. At Calvary, the 'I AM' who created the universe was lifted up to redeem it. Understanding who Jesus is changes everything about how we approach Him, worship Him, and trust Him in our battles.",
          fr: "Quand Jésus a dit 'si vous ne croyez pas que JE SUIS (ἐγώ εἰμι), vous mourrez dans vos péchés' (Jean 8:24), Il revendiquait le nom divin révélé à Moïse au buisson ardent (Exode 3:14). Le grec 'ego eimi' sans prédicat est une revendication directe de divinité. C'est pourquoi les Juifs ont plus tard ramassé des pierres pour Le tuer (Jean 8:59). Jésus n'est pas simplement un prophète ou un enseignant—Il est YHWH en chair, l'Éternel auto-existant. La croix ('quand vous aurez élevé le Fils de l'homme') serait la révélation ultime de cette identité. Au Calvaire, le 'JE SUIS' qui a créé l'univers a été élevé pour le racheter. Comprendre qui est Jésus change tout dans notre façon de L'approcher, de L'adorer et de Lui faire confiance dans nos batailles.",
        },
      },
      {
        heading: { en: "The Fear of the Lord", fr: "La Crainte de l'Éternel" },
        content: {
          en: "Psalm 111:10 declares that 'the fear of the Lord is the beginning of wisdom.' This fear (Hebrew: יִרְאָה, yir'ah) is not terror but reverential awe—a deep respect for God's holiness, power, and authority that shapes how we live. David feared God, which is why he could not fear Goliath. His holy reverence produced holy boldness. Similarly, Jesus lived in perfect fear of the Father—doing only what pleased Him, speaking only what He commanded. This fear is not opposed to love; it is its foundation. We obey because we revere. We worship because we are awed. We serve because we recognize who He is. In a culture that trivializes God, the fear of the Lord is countercultural wisdom that leads to life.",
          fr: "Psaume 111:10 déclare que 'la crainte de l'Éternel est le commencement de la sagesse.' Cette crainte (hébreu: יִרְאָה, yir'ah) n'est pas la terreur mais la révérence—un profond respect pour la sainteté, la puissance et l'autorité de Dieu qui façonne notre vie. David craignait Dieu, c'est pourquoi il ne pouvait craindre Goliath. Sa sainte révérence produisait une sainte audace. De même, Jésus vivait dans une crainte parfaite du Père—ne faisant que ce qui Lui plaisait, ne disant que ce qu'Il commandait. Cette crainte ne s'oppose pas à l'amour; elle en est le fondement. Nous obéissons parce que nous révérons. Nous adorons parce que nous sommes émerveillés. Nous servons parce que nous reconnaissons qui Il est. Dans une culture qui trivialise Dieu, la crainte de l'Éternel est une sagesse contre-culturelle qui mène à la vie.",
        },
      },
      {
        heading: { en: "Divine Omniscience and Human Accountability", fr: "L'Omniscience Divine et la Responsabilité Humaine" },
        content: {
          en: "Proverbs 15:11 reaches into the unseen realms—Sheol (the grave) and Abaddon (destruction)—and declares them open before God. If the very realm of death cannot hide from His sight, how can any human heart? This truth has two edges: it is terrifying for those living in secret sin, and comforting for those who feel unseen in their suffering. God sees the hidden tears, the private battles, the unspoken prayers. He also sees the secret sins, the masked motives, the hidden idols. This should drive us to radical honesty. Why pretend before the One who already knows? David prayed, 'Search me, O God, and know my heart' (Psalm 139:23). This is the prayer of someone who has embraced God's omniscience as an invitation to authenticity rather than a threat to avoid.",
          fr: "Proverbes 15:11 atteint les domaines invisibles—le Schéol (la tombe) et l'Abaddon (la destruction)—et les déclare ouverts devant Dieu. Si le domaine même de la mort ne peut se cacher de Son regard, comment un cœur humain le pourrait-il? Cette vérité a deux tranchants: elle est terrifiante pour ceux qui vivent dans le péché secret, et réconfortante pour ceux qui se sentent invisibles dans leur souffrance. Dieu voit les larmes cachées, les batailles privées, les prières inexprimées. Il voit aussi les péchés secrets, les motifs masqués, les idoles cachées. Cela devrait nous pousser à une honnêteté radicale. Pourquoi faire semblant devant Celui qui sait déjà? David a prié: 'Sonde-moi, ô Dieu, et connais mon cœur' (Psaume 139:23). C'est la prière de quelqu'un qui a embrassé l'omniscience de Dieu comme une invitation à l'authenticité plutôt qu'une menace à éviter.",
        },
      },
    ],
  },
  characterStudy: {
    name: { en: "David — The Shepherd King", fr: "David — Le Roi Berger" },
    description: {
      en: "David was the youngest of Jesse's eight sons, a ruddy shepherd boy overlooked even by his own family when Samuel came to anoint a king. Yet God saw what others missed: 'The Lord does not look at the things people look at. People look at the outward appearance, but the Lord looks at the heart' (1 Sam 16:7). David's heart was one of worship (he wrote many psalms), faith (he faced the lion, bear, and giant), and intimacy with God (he was called 'a man after God's own heart'). In 1 Samuel 17, we see the essence of David's character: holy indignation at blasphemy against God, confident faith rooted in past deliverances, and bold action in the face of overwhelming odds. David's failures later in life (Bathsheba, the census) remind us that even great faith needs constant renewal and accountability. But his willingness to repent (Psalm 51) shows us the path back to God's favor.",
      fr: "David était le plus jeune des huit fils de Jessé, un jeune berger roux négligé même par sa propre famille quand Samuel est venu oindre un roi. Pourtant, Dieu a vu ce que les autres ont manqué: 'L'Éternel ne regarde pas ce que regarde l'homme. L'homme regarde à ce qui frappe les yeux, mais l'Éternel regarde au cœur' (1 Sam 16:7). Le cœur de David était un cœur d'adoration (il a écrit de nombreux psaumes), de foi (il a affronté le lion, l'ours et le géant), et d'intimité avec Dieu (il a été appelé 'un homme selon le cœur de Dieu'). Dans 1 Samuel 17, nous voyons l'essence du caractère de David: une sainte indignation face au blasphème contre Dieu, une foi confiante enracinée dans les délivrances passées, et une action audacieuse face à des obstacles écrasants. Les échecs de David plus tard dans sa vie (Bathsheba, le recensement) nous rappellent que même une grande foi a besoin d'un renouvellement constant et de responsabilité. Mais sa volonté de se repentir (Psaume 51) nous montre le chemin du retour à la faveur de Dieu.",
    },
    lessons: {
      en: [
        "God sees potential where others see insignificance",
        "Past victories prepare us for present battles",
        "Holy anger at blasphemy is righteous, not sinful",
        "Faith declares what God will do, not what circumstances dictate",
        "Even heroes of faith need accountability and repentance",
      ],
      fr: [
        "Dieu voit le potentiel là où les autres voient l'insignifiance",
        "Les victoires passées nous préparent pour les batailles présentes",
        "La sainte colère contre le blasphème est juste, pas pécheresse",
        "La foi déclare ce que Dieu fera, pas ce que dictent les circonstances",
        "Même les héros de la foi ont besoin de responsabilité et de repentance",
      ],
    },
  },
  wordStudy: {
    word: { en: "I AM (ἐγώ εἰμι)", fr: "JE SUIS (ἐγώ εἰμι)" },
    originalLanguage: "Greek: ego eimi | Hebrew equivalent: YHWH (אֶהְיֶה אֲשֶׁר אֶהְיֶה)",
    meaning: {
      en: "The Greek phrase 'ego eimi' (I AM) used absolutely (without a predicate) is a direct reference to the divine name revealed in Exodus 3:14. When God spoke to Moses from the burning bush and Moses asked for His name, God replied 'I AM WHO I AM' (Hebrew: Ehyeh asher Ehyeh). This name speaks of God's eternal, self-existent, unchanging nature. He is not defined by anything outside Himself. He simply IS.",
      fr: "La phrase grecque 'ego eimi' (JE SUIS) utilisée de manière absolue (sans prédicat) est une référence directe au nom divin révélé dans Exode 3:14. Quand Dieu a parlé à Moïse depuis le buisson ardent et que Moïse a demandé Son nom, Dieu a répondu 'JE SUIS CELUI QUI SUIS' (hébreu: Ehyeh asher Ehyeh). Ce nom parle de la nature éternelle, auto-existante et immuable de Dieu. Il n'est défini par rien en dehors de Lui-même. Il EST simplement.",
    },
    usage: {
      en: "In John's Gospel, Jesus uses 'ego eimi' seven times with predicates (I am the bread, light, door, shepherd, resurrection, way, vine) and several times absolutely—most dramatically in John 8:58: 'Before Abraham was, I AM.' This is why the Jews picked up stones: they understood He was claiming to be YHWH. Understanding this transforms our reading of John 8:24—Jesus is not simply saying 'believe I am the Messiah' but 'believe I am the eternal God of Israel in human flesh.'",
      fr: "Dans l'Évangile de Jean, Jésus utilise 'ego eimi' sept fois avec des prédicats (Je suis le pain, la lumière, la porte, le berger, la résurrection, le chemin, la vigne) et plusieurs fois de manière absolue—le plus dramatiquement dans Jean 8:58: 'Avant qu'Abraham fût, JE SUIS.' C'est pourquoi les Juifs ont ramassé des pierres: ils ont compris qu'Il revendiquait être YHWH. Comprendre cela transforme notre lecture de Jean 8:24—Jésus ne dit pas simplement 'croyez que je suis le Messie' mais 'croyez que je suis le Dieu éternel d'Israël en chair humaine.'",
    },
  },
  crossReferences: [
    {
      verse: "Exodus 3:14",
      connection: {
        en: "God reveals His name 'I AM WHO I AM' to Moses—the foundation for Jesus' 'I AM' claims in John 8.",
        fr: "Dieu révèle Son nom 'JE SUIS CELUI QUI SUIS' à Moïse—le fondement des déclarations 'JE SUIS' de Jésus dans Jean 8.",
      },
    },
    {
      verse: "Joshua 1:9",
      connection: {
        en: "'The Lord your God is with you wherever you go'—the same presence David knew facing Goliath.",
        fr: "'L'Éternel ton Dieu est avec toi partout où tu iras'—la même présence que David connaissait face à Goliath.",
      },
    },
    {
      verse: "Psalm 139:1–4",
      connection: {
        en: "David expands on Proverbs 15:11—God knows our thoughts, words, and ways before we even act.",
        fr: "David développe Proverbes 15:11—Dieu connaît nos pensées, paroles et voies avant même que nous agissions.",
      },
    },
    {
      verse: "Hebrews 4:13",
      connection: {
        en: "'Nothing in all creation is hidden from God's sight'—New Testament echo of Proverbs 15:11.",
        fr: "'Nulle créature n'est cachée devant lui'—écho du Nouveau Testament de Proverbes 15:11.",
      },
    },
    {
      verse: "2 Corinthians 10:4",
      connection: {
        en: "'The weapons we fight with are not the weapons of the world'—David's sling vs. Saul's armor.",
        fr: "'Les armes avec lesquelles nous combattons ne sont pas charnelles'—la fronde de David contre l'armure de Saül.",
      },
    },
    {
      verse: "Proverbs 1:7",
      connection: {
        en: "'The fear of the Lord is the beginning of knowledge'—parallel wisdom to Psalm 111:10.",
        fr: "'La crainte de l'Éternel est le commencement de la science'—sagesse parallèle à Psaume 111:10.",
      },
    },
  ],
  prophecyAndFulfillment: {
    enabled: true,
    content: {
      en: "David's victory over Goliath foreshadows Christ's victory over Satan. Just as David—a shepherd from Bethlehem—defeated the enemy that all of Israel's army feared, so Jesus—the Good Shepherd from Bethlehem—defeated sin, death, and the devil on the cross. Jonathan's giving of his royal robes to David pictures how Christ, the true King, clothes us in His righteousness. The 'lifting up' of the Son of Man (John 8:28) refers to the cross—just as Moses lifted up the serpent in the wilderness so that all who looked would live (Numbers 21:8–9, John 3:14). The themes of 1 Samuel 17 and John 8 converge at Calvary: the Champion has come, the battle has been won, and all who believe receive life.",
      fr: "La victoire de David sur Goliath préfigure la victoire de Christ sur Satan. Tout comme David—un berger de Bethléem—a vaincu l'ennemi que toute l'armée d'Israël craignait, ainsi Jésus—le Bon Berger de Bethléem—a vaincu le péché, la mort et le diable sur la croix. Le don par Jonathan de ses vêtements royaux à David illustre comment Christ, le vrai Roi, nous revêt de Sa justice. L''élévation' du Fils de l'homme (Jean 8:28) fait référence à la croix—tout comme Moïse a élevé le serpent dans le désert afin que tous ceux qui regarderaient vivent (Nombres 21:8–9, Jean 3:14). Les thèmes de 1 Samuel 17 et Jean 8 convergent au Calvaire: le Champion est venu, la bataille a été gagnée, et tous ceux qui croient reçoivent la vie.",
    },
  },
  practicalApplication: {
    personal: {
      en: [
        "Identify your current 'Goliath'—what giant situation is taunting you? Bring it before the Lord this week.",
        "Practice David's pattern: recall past victories before facing present battles. Journal 3 times God delivered you.",
        "Memorize John 8:24 and meditate on what it means that Jesus is the 'I AM.'",
        "Pray Psalm 139:23–24 daily this week, inviting God to search your heart.",
        "Choose one area of secret sin or hidden fear to bring into the light through confession.",
      ],
      fr: [
        "Identifiez votre 'Goliath' actuel—quelle situation géante vous nargue? Apportez-la devant le Seigneur cette semaine.",
        "Pratiquez le modèle de David: rappelez-vous les victoires passées avant d'affronter les batailles présentes. Notez 3 fois où Dieu vous a délivré.",
        "Mémorisez Jean 8:24 et méditez sur ce que signifie que Jésus est le 'JE SUIS.'",
        "Priez Psaume 139:23–24 quotidiennement cette semaine, invitant Dieu à sonder votre cœur.",
        "Choisissez un domaine de péché secret ou de peur cachée à mettre en lumière par la confession.",
      ],
    },
    family: {
      en: [
        "Share the David and Goliath story with children, emphasizing that God fights for His people.",
        "Create a family 'Victory Wall'—write down answered prayers and past deliverances to remember together.",
        "Discuss as a family: What does it mean that God sees everything? Is this scary or comforting? Why?",
        "Pray together using Psalm 111, taking turns praising God for specific works in your family's life.",
      ],
      fr: [
        "Partagez l'histoire de David et Goliath avec les enfants, soulignant que Dieu combat pour Son peuple.",
        "Créez un 'Mur de Victoire' familial—notez les prières exaucées et les délivrances passées à se rappeler ensemble.",
        "Discutez en famille: Que signifie que Dieu voit tout? Est-ce effrayant ou réconfortant? Pourquoi?",
        "Priez ensemble en utilisant le Psaume 111, louant Dieu tour à tour pour des œuvres spécifiques dans la vie de votre famille.",
      ],
    },
    community: {
      en: [
        "Be a Jonathan to someone God is raising up—offer support, resources, and encouragement without jealousy.",
        "In your church or small group, share how remembering God's works has built your faith.",
        "Stand with someone facing a 'Goliath'—pray with them, fast with them, remind them of God's faithfulness.",
        "Lead worship or devotions this week using Psalm 111 as a template for corporate praise.",
      ],
      fr: [
        "Soyez un Jonathan pour quelqu'un que Dieu élève—offrez soutien, ressources et encouragement sans jalousie.",
        "Dans votre église ou petit groupe, partagez comment le souvenir des œuvres de Dieu a construit votre foi.",
        "Tenez-vous aux côtés de quelqu'un qui fait face à un 'Goliath'—priez avec lui, jeûnez avec lui, rappelez-lui la fidélité de Dieu.",
        "Dirigez l'adoration ou les dévotions cette semaine en utilisant le Psaume 111 comme modèle pour la louange corporative.",
      ],
    },
  },
  reflectionQuestions: {
    en: [
      "What 'Goliath' has been taunting you, and what is God calling you to do about it?",
      "Do you truly believe Jesus is the 'I AM'—eternal God in flesh? How does this belief shape your daily life?",
      "When was the last time you pondered and praised God for His works with your whole heart?",
      "Is the truth that God sees everything comforting or convicting to you right now? Why?",
      "What past victory can you remember today to fuel your faith for present battles?",
      "Are there areas of your life where you're wearing 'Saul's armor'—trusting human methods over God's way?",
      "How can you be a Jonathan to someone God is raising up in your community?",
    ],
    fr: [
      "Quel 'Goliath' vous a narguè, et que Dieu vous appelle-t-il à faire à ce sujet?",
      "Croyez-vous vraiment que Jésus est le 'JE SUIS'—Dieu éternel en chair? Comment cette croyance façonne-t-elle votre vie quotidienne?",
      "Quand avez-vous pour la dernière fois médité et loué Dieu pour Ses œuvres de tout votre cœur?",
      "La vérité que Dieu voit tout est-elle réconfortante ou convainquante pour vous en ce moment? Pourquoi?",
      "Quelle victoire passée pouvez-vous vous rappeler aujourd'hui pour alimenter votre foi pour les batailles présentes?",
      "Y a-t-il des domaines de votre vie où vous portez 'l'armure de Saül'—faisant confiance aux méthodes humaines plutôt qu'à la voie de Dieu?",
      "Comment pouvez-vous être un Jonathan pour quelqu'un que Dieu élève dans votre communauté?",
    ],
  },
  groupDiscussion: {
    icebreaker: {
      en: "Share a time when you faced something that felt like a 'giant' in your life. What was the outcome?",
      fr: "Partagez un moment où vous avez fait face à quelque chose qui ressemblait à un 'géant' dans votre vie. Quel a été le résultat?",
    },
    questions: {
      en: [
        "Why do you think Israel's army was paralyzed by Goliath for 40 days? What does this reveal about faith and fear?",
        "David rejected Saul's armor. What 'armor' does the world offer us that we need to reject in favor of faith?",
        "In John 8, Jesus says those who don't believe will 'die in their sins.' How do we share this urgent truth with grace?",
        "The Psalmist praises God in the 'assembly.' How does corporate worship differ from private worship, and why do we need both?",
        "If nothing is hidden from God (Pr 15:11), why do we still try to hide? How can we move toward transparency?",
        "How did Jonathan's response to David differ from Saul's? What can we learn about responding to those God is anointing?",
      ],
      fr: [
        "Pourquoi pensez-vous que l'armée d'Israël était paralysée par Goliath pendant 40 jours? Que révèle cela sur la foi et la peur?",
        "David a rejeté l'armure de Saül. Quelle 'armure' le monde nous offre-t-il que nous devons rejeter en faveur de la foi?",
        "Dans Jean 8, Jésus dit que ceux qui ne croient pas 'mourront dans leurs péchés.' Comment partageons-nous cette vérité urgente avec grâce?",
        "Le Psalmiste loue Dieu dans l''assemblée.' En quoi le culte corporatif diffère-t-il du culte privé, et pourquoi avons-nous besoin des deux?",
        "Si rien n'est caché à Dieu (Pr 15:11), pourquoi essayons-nous encore de nous cacher? Comment pouvons-nous avancer vers la transparence?",
        "Comment la réponse de Jonathan à David différait-elle de celle de Saül? Que pouvons-nous apprendre sur la façon de répondre à ceux que Dieu oint?",
      ],
    },
    activity: {
      en: "Write your current 'Goliath' on a piece of paper. As a group, pray over each person's giant, declaring 'The battle is the Lord's!' Then tear up or burn the papers as a symbol of releasing these battles to God.",
      fr: "Écrivez votre 'Goliath' actuel sur un papier. En groupe, priez sur le géant de chaque personne, déclarant 'Le combat appartient à l'Éternel!' Puis déchirez ou brûlez les papiers comme symbole de remettre ces batailles à Dieu.",
    },
  },
  prayerPoints: {
    en: [
      "Lord, give me David's holy boldness to face the giants in my life without fear.",
      "Jesus, I declare that You are the I AM—the eternal God. I put my faith in You alone for salvation.",
      "Father, I praise You with my whole heart for Your great and glorious works in my life.",
      "Search me, O God, and know my heart. Reveal anything hidden that needs to be brought into Your light.",
      "Lord, help me to fear You rightly—with reverent awe that produces bold faith and righteous living.",
      "Give me the heart of Jonathan—to celebrate and support those You are raising up, without jealousy.",
      "Thank You that the battle is Yours. I release my battles to You today and trust in Your victory.",
    ],
    fr: [
      "Seigneur, donne-moi l'audace sainte de David pour affronter les géants de ma vie sans peur.",
      "Jésus, je déclare que Tu es le JE SUIS—le Dieu éternel. Je mets ma foi en Toi seul pour le salut.",
      "Père, je Te loue de tout mon cœur pour Tes œuvres grandes et glorieuses dans ma vie.",
      "Sonde-moi, ô Dieu, et connais mon cœur. Révèle tout ce qui est caché et qui doit être mis dans Ta lumière.",
      "Seigneur, aide-moi à Te craindre correctement—avec une révérence qui produit une foi audacieuse et une vie juste.",
      "Donne-moi le cœur de Jonathan—pour célébrer et soutenir ceux que Tu élèves, sans jalousie.",
      "Merci que le combat T'appartient. Je Te remets mes batailles aujourd'hui et je fais confiance à Ta victoire.",
    ],
  },
  declarationsAndConfessions: {
    en: [
      "I declare that the Lord fights for me. The battle is not mine—it is the Lord's!",
      "I confess that Jesus Christ is the I AM—the eternal God who became flesh to save me.",
      "I will praise the Lord with my whole heart in the assembly of the upright.",
      "Nothing in my life is hidden from God, and I choose to live in transparency before Him.",
      "The fear of the Lord is my wisdom. I will revere Him and walk in His ways.",
      "I am more than a conqueror through Christ who loves me.",
      "Like David, I will remember past victories to fuel faith for present battles.",
      "The same Spirit that raised Christ from the dead lives in me and empowers me for every giant I face.",
    ],
    fr: [
      "Je déclare que le Seigneur combat pour moi. Le combat n'est pas le mien—il appartient à l'Éternel!",
      "Je confesse que Jésus-Christ est le JE SUIS—le Dieu éternel qui s'est fait chair pour me sauver.",
      "Je louerai l'Éternel de tout mon cœur dans l'assemblée des hommes droits.",
      "Rien dans ma vie n'est caché à Dieu, et je choisis de vivre dans la transparence devant Lui.",
      "La crainte de l'Éternel est ma sagesse. Je Le révérerai et marcherai dans Ses voies.",
      "Je suis plus que vainqueur par Christ qui m'aime.",
      "Comme David, je me souviendrai des victoires passées pour alimenter la foi pour les batailles présentes.",
      "Le même Esprit qui a ressuscité Christ d'entre les morts vit en moi et me fortifie pour chaque géant que j'affronte.",
    ],
  },
  memoryVerse: {
    text: {
      en: "\"You come against me with sword and spear and javelin, but I come against you in the name of the LORD Almighty, the God of the armies of Israel, whom you have defied.\"",
      fr: "\"Tu marches contre moi avec l'épée, la lance et le javelot; et moi, je marche contre toi au nom de l'Éternel des armées, du Dieu de l'armée d'Israël, que tu as insulté.\"",
    },
    reference: "1 Samuel 17:45",
  },
  weeklyChallenge: {
    title: {
      en: "The Giant Slayer Challenge",
      fr: "Le Défi du Tueur de Géants",
    },
    description: {
      en: "This week, you will face your 'Goliath' with intentional faith, following David's pattern of remembering, declaring, and acting.",
      fr: "Cette semaine, vous affronterez votre 'Goliath' avec une foi intentionnelle, suivant le modèle de David: se souvenir, déclarer et agir.",
    },
    steps: {
      en: [
        "Day 1–2: REMEMBER — Write down 5 past victories where God delivered you (your 'lions and bears').",
        "Day 3–4: DECLARE — Each morning, speak 1 Samuel 17:45–47 aloud over your situation.",
        "Day 5: ACT — Take one bold step of faith toward your giant, trusting God for the outcome.",
        "Day 6: PRAISE — Spend focused time praising God using Psalm 111 as your guide.",
        "Day 7: TESTIFY — Share with someone (in person, call, or text) what God is doing in your battle.",
      ],
      fr: [
        "Jour 1–2: SE SOUVENIR — Notez 5 victoires passées où Dieu vous a délivré (vos 'lions et ours').",
        "Jour 3–4: DÉCLARER — Chaque matin, proclamez 1 Samuel 17:45–47 à haute voix sur votre situation.",
        "Jour 5: AGIR — Faites un pas de foi audacieux vers votre géant, faisant confiance à Dieu pour le résultat.",
        "Jour 6: LOUER — Passez du temps concentré à louer Dieu en utilisant le Psaume 111 comme guide.",
        "Jour 7: TÉMOIGNER — Partagez avec quelqu'un (en personne, par appel ou SMS) ce que Dieu fait dans votre combat.",
      ],
    },
  },
  hymnsAndWorship: {
    suggested: {
      en: [
        "\"Way Maker\" — celebrating God who makes a way through impossible situations",
        "\"Raise a Hallelujah\" — declaring praise in the midst of battle",
        "\"Who You Say I Am\" — confessing our identity in Christ",
        "\"Battle Belongs\" — declaring that the battle is the Lord's",
        "\"Holy, Holy, Holy\" — reverential worship of the all-seeing God",
      ],
      fr: [
        "\"Way Maker\" — célébrant Dieu qui fait un chemin à travers les situations impossibles",
        "\"Raise a Hallelujah\" — déclarant la louange au milieu de la bataille",
        "\"Who You Say I Am\" — confessant notre identité en Christ",
        "\"Battle Belongs\" — déclarant que le combat appartient au Seigneur",
        "\"Saint, Saint, Saint\" — adoration révérencieuse du Dieu qui voit tout",
      ],
    },
  },
  closingPrayer: {
    en: "Heavenly Father, thank You for Your Word that equips us for every battle. Like David, may we face our giants not in our own strength but in the name of the Lord Almighty. Like Jesus, may we live in perfect union with You, speaking only what You say and doing only what pleases You. Like the Psalmist, may we praise You with our whole hearts, remembering Your great and glorious works. And as Proverbs reminds us, may we live transparently before You who sees all—finding not fear but freedom in Your omniscience. The battle is Yours, Lord. We trust You for victory. In Jesus' mighty name, Amen.",
    fr: "Père céleste, merci pour Ta Parole qui nous équipe pour chaque bataille. Comme David, puissions-nous affronter nos géants non dans notre propre force mais au nom de l'Éternel des armées. Comme Jésus, puissions-nous vivre en parfaite union avec Toi, ne disant que ce que Tu dis et ne faisant que ce qui Te plaît. Comme le Psalmiste, puissions-nous Te louer de tout notre cœur, nous souvenant de Tes œuvres grandes et glorieuses. Et comme les Proverbes nous le rappellent, puissions-nous vivre dans la transparence devant Toi qui vois tout—trouvant non la peur mais la liberté dans Ton omniscience. Le combat T'appartient, Seigneur. Nous Te faisons confiance pour la victoire. Au puissant nom de Jésus, Amen.",
  },
  additionalResources: {
    commentaries: [
      "Matthew Henry's Commentary on 1 Samuel 17",
      "D.A. Carson's Commentary on John (Pillar NT Commentary)",
      "Derek Kidner's Commentary on Psalms",
      "Tremper Longman's Commentary on Proverbs",
    ],
    relatedPassages: [
      "1 Samuel 16 — David's anointing",
      "Psalm 27 — The Lord is my light and salvation",
      "John 10:1–18 — Jesus the Good Shepherd",
      "Ephesians 6:10–18 — The armor of God",
      "Hebrews 11 — The Hall of Faith",
    ],
  },
};
