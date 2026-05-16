export interface StudyNote {
  ref: string;
  icon: string;
  color: string;
  title: { en: string; fr: string };
  summary: { en: string; fr: string };
  context: { en: string; fr: string };
  keyThemes: { en: string[]; fr: string[] };
  keyVerses: { en: string[]; fr: string[] };
  application: { en: string; fr: string };
  discussion: { en: string[]; fr: string[] };
}

export const bibleStudyNotes: StudyNote[] = [
  {
    ref: "1 Sam 17:1–18:4",
    icon: "⚔️",
    color: "from-purple-500 to-indigo-600",
    title: {
      en: "David & Goliath — The Battle Belongs to the Lord",
      fr: "David & Goliath — Le Combat Appartient à l'Éternel",
    },
    summary: {
      en: "The Philistine army assembles against Israel, and their champion Goliath — a giant standing over nine feet tall — challenges Israel to send a fighter for single combat. For forty days, Goliath taunts the armies of the living God while Saul and his soldiers cower in fear. Young David, a shepherd boy delivering food to his brothers, is outraged not by the giant's size but by his blasphemy against the Lord. Refusing Saul's armor, David goes forward with five smooth stones and a sling — but above all, with unwavering faith in God. He strikes Goliath with a single stone and cuts off his head, routing the Philistines. The chapter concludes with Jonathan, Saul's son, making a covenant of deep friendship with David, giving him his robe, armor, and weapons — symbolizing the transfer of royal destiny.",
      fr: "L'armée philistine se rassemble contre Israël et leur champion Goliath — un géant de plus de 2m80 — défie Israël d'envoyer un combattant en duel. Pendant quarante jours, Goliath nargue les armées du Dieu vivant tandis que Saül et ses soldats tremblent de peur. Le jeune David, un berger venu apporter de la nourriture à ses frères, est indigné non par la taille du géant mais par son blasphème contre l'Éternel. Refusant l'armure de Saül, David s'avance avec cinq pierres lisses et une fronde — mais surtout avec une foi inébranlable en Dieu. Il frappe Goliath d'une seule pierre et lui tranche la tête, mettant en déroute les Philistins. Le chapitre se conclut par l'alliance d'amitié profonde entre Jonathan, fils de Saül, et David — Jonathan lui donnant sa robe, son armure et ses armes, symbolisant le transfert de la destinée royale.",
    },
    context: {
      en: "This story takes place during the early period of Israel's monarchy. Saul is king but has already disobeyed God and lost divine favor. David has been secretly anointed by Samuel (1 Sam 16) but is still unknown to most. This battle marks David's public emergence as God's chosen vessel.",
      fr: "Cette histoire se situe au début de la monarchie d'Israël. Saül est roi mais a déjà désobéi à Dieu et perdu la faveur divine. David a été secrètement oint par Samuel (1 Sam 16) mais reste inconnu de la plupart. Cette bataille marque l'émergence publique de David comme instrument choisi de Dieu.",
    },
    keyThemes: {
      en: [
        "Faith over fear — David's confidence rested in God, not in weapons or armor",
        "God uses the unlikely — A shepherd boy defeats a trained warrior",
        "Spiritual warfare — The real battle is always spiritual before it is physical",
        "Covenant friendship — Jonathan's bond with David foreshadows Christ's sacrificial love",
        "Divine preparation — David's past victories over the lion and bear prepared him for Goliath",
      ],
      fr: [
        "La foi sur la peur — La confiance de David reposait en Dieu, pas dans les armes",
        "Dieu utilise l'improbable — Un berger défait un guerrier entraîné",
        "Le combat spirituel — La vraie bataille est toujours spirituelle avant d'être physique",
        "L'amitié d'alliance — Le lien de Jonathan avec David préfigure l'amour sacrificiel de Christ",
        "La préparation divine — Les victoires passées de David sur le lion et l'ours l'ont préparé pour Goliath",
      ],
    },
    keyVerses: {
      en: [
        '"The LORD who rescued me from the paw of the lion and the paw of the bear will rescue me from the hand of this Philistine." — 1 Sam 17:37',
        '"You come against me with sword and spear, but I come against you in the name of the LORD Almighty." — 1 Sam 17:45',
        '"All those gathered here will know that it is not by sword or spear that the LORD saves; for the battle is the LORD\'s." — 1 Sam 17:47',
      ],
      fr: [
        '"L\'Éternel, qui m\'a délivré de la griffe du lion et de la griffe de l\'ours, me délivrera aussi de la main de ce Philistin." — 1 Sam 17:37',
        '"Tu marches contre moi avec l\'épée et la lance ; moi, je marche contre toi au nom de l\'Éternel des armées." — 1 Sam 17:45',
        '"Toute cette multitude saura que ce n\'est ni par l\'épée ni par la lance que l\'Éternel sauve." — 1 Sam 17:47',
      ],
    },
    application: {
      en: "Every believer faces \"giants\" — financial pressures, health crises, spiritual battles, relational conflicts. Like David, we must not look at the size of the giant but at the size of our God. The weapons of our warfare are not carnal but mighty through God. Remember: your past victories are training ground for present battles. Step forward in faith!",
      fr: "Chaque croyant fait face à des « géants » — pressions financières, crises de santé, combats spirituels, conflits relationnels. Comme David, nous ne devons pas regarder la taille du géant mais la grandeur de notre Dieu. Les armes de notre combat ne sont pas charnelles mais puissantes par Dieu. Rappelez-vous : vos victoires passées sont le terrain d'entraînement pour les batailles présentes. Avancez dans la foi !",
    },
    discussion: {
      en: [
        "What \"Goliath\" is taunting you right now, and how is God calling you to respond?",
        "David remembered past victories to fuel present courage. What has God already delivered you from?",
        "How can Jonathan's example inspire you to sacrificially support someone God is raising up?",
      ],
      fr: [
        "Quel « Goliath » vous défie en ce moment, et comment Dieu vous appelle-t-il à répondre ?",
        "David s'est souvenu de ses victoires passées. De quoi Dieu vous a-t-il déjà délivré ?",
        "Comment l'exemple de Jonathan peut-il vous inspirer à soutenir celui que Dieu élève ?",
      ],
    },
  },
  {
    ref: "John 8:21–30",
    icon: "✝️",
    color: "from-blue-500 to-cyan-600",
    title: {
      en: "Jesus — The Light of Origin & Authority",
      fr: "Jésus — La Lumière d'Origine et d'Autorité",
    },
    summary: {
      en: "Jesus is in the Temple courts during the Feast of Tabernacles, teaching the Pharisees and religious leaders. He tells them plainly: \"I am going away, and you will look for me, and you will die in your sin. Where I go, you cannot come.\" The Jews are confused — is He going to kill Himself? Jesus clarifies that He is from above; they are from below. He is not of this world. He declares, \"If you do not believe that I am he, you will indeed die in your sins.\" When pressed on His identity, Jesus points them to the cross: \"When you have lifted up the Son of Man, then you will know that I am he.\" He speaks only what the Father taught Him, and the Father is always with Him. Many who heard Him believed.",
      fr: "Jésus est dans les parvis du Temple pendant la Fête des Tabernacles, enseignant les Pharisiens et les chefs religieux. Il leur dit clairement : « Je m'en vais, et vous me chercherez, et vous mourrez dans votre péché. Là où je vais, vous ne pouvez venir. » Les Juifs sont confus — va-t-il se suicider ? Jésus clarifie qu'Il vient d'en haut ; eux sont d'en bas. Il n'est pas de ce monde. Il déclare : « Si vous ne croyez pas que je suis, vous mourrez dans vos péchés. » Quand on Le presse sur Son identité, Jésus désigne la croix : « Quand vous aurez élevé le Fils de l'homme, alors vous connaîtrez que je suis. » Il ne dit que ce que le Père Lui a enseigné, et le Père est toujours avec Lui. Beaucoup de ceux qui L'entendirent crurent.",
    },
    context: {
      en: "This discourse occurs during one of the most public and contentious moments of Jesus' ministry. The Feast of Tabernacles celebrated God's provision in the wilderness. Jesus' \"I AM\" statements echo God's self-revelation to Moses at the burning bush (Exodus 3:14), making a direct claim to deity.",
      fr: "Ce discours a lieu lors d'un des moments les plus publics et controversés du ministère de Jésus. La Fête des Tabernacles célébrait la provision de Dieu dans le désert. Les déclarations « JE SUIS » de Jésus font écho à la révélation de Dieu à Moïse au buisson ardent (Exode 3:14), affirmant directement Sa divinité.",
    },
    keyThemes: {
      en: [
        "The deity of Christ — \"I AM\" is God's covenant name; Jesus claims it for Himself",
        "The urgency of belief — Without faith in Christ, we die in our sins",
        "Origin determines destiny — Jesus is from above; those who reject Him remain in darkness",
        "The cross as revelation — It is at the cross that Jesus' true identity is fully revealed",
        "Perfect obedience — Jesus only speaks and does what the Father commands",
      ],
      fr: [
        "La divinité du Christ — « JE SUIS » est le nom d'alliance de Dieu ; Jésus le revendique",
        "L'urgence de croire — Sans la foi en Christ, nous mourons dans nos péchés",
        "L'origine détermine la destinée — Jésus vient d'en haut ; ceux qui Le rejettent restent dans les ténèbres",
        "La croix comme révélation — C'est à la croix que la vraie identité de Jésus est pleinement révélée",
        "L'obéissance parfaite — Jésus ne dit et ne fait que ce que le Père commande",
      ],
    },
    keyVerses: {
      en: [
        '"I told you that you would die in your sins; if you do not believe that I am he, you will indeed die in your sins." — John 8:24',
        '"When you have lifted up the Son of Man, then you will know that I am he." — John 8:28',
        '"The one who sent me is with me; he has not left me alone, for I always do what pleases him." — John 8:29',
      ],
      fr: [
        '"Je vous ai dit que vous mourrez dans vos péchés ; si vous ne croyez pas que je suis, vous mourrez dans vos péchés." — Jean 8:24',
        '"Quand vous aurez élevé le Fils de l\'homme, alors vous connaîtrez que je suis." — Jean 8:28',
        '"Celui qui m\'a envoyé est avec moi ; il ne m\'a pas laissé seul, parce que je fais toujours ce qui lui est agréable." — Jean 8:29',
      ],
    },
    application: {
      en: "Jesus makes it clear: there is no neutral ground. We must believe He is who He says He is — the eternal \"I AM\" — or we remain in our sins. This passage also challenges us to live in complete obedience to the Father, just as Jesus modeled. Are you speaking what the Father says? Are you doing what pleases Him?",
      fr: "Jésus est clair : il n'y a pas de terrain neutre. Nous devons croire qu'Il est qui Il dit être — le « JE SUIS » éternel — ou nous restons dans nos péchés. Ce passage nous défie aussi à vivre dans l'obéissance complète au Père, comme Jésus l'a modelé. Dites-vous ce que le Père dit ? Faites-vous ce qui Lui plaît ?",
    },
    discussion: {
      en: [
        "What does it mean practically that Jesus is 'from above' while we are 'from below'?",
        "How does the cross serve as the ultimate proof of Jesus' identity?",
        "In what areas of your life do you need to align more with what the Father is saying?",
      ],
      fr: [
        "Que signifie concrètement que Jésus vient « d'en haut » tandis que nous sommes « d'en bas » ?",
        "Comment la croix sert-elle de preuve ultime de l'identité de Jésus ?",
        "Dans quels domaines devez-vous mieux vous aligner sur ce que le Père dit ?",
      ],
    },
  },
  {
    ref: "Ps 111:1–10",
    icon: "🎵",
    color: "from-emerald-500 to-teal-600",
    title: {
      en: "Psalm 111 — Great Are the Works of the Lord",
      fr: "Psaume 111 — Grandes Sont les Œuvres de l'Éternel",
    },
    summary: {
      en: "This is an acrostic psalm of pure praise — each line begins with a successive letter of the Hebrew alphabet, symbolizing complete, A-to-Z worship. The psalmist opens with wholehearted praise in the assembly of the upright. He then catalogs the works of God: they are great, glorious, majestic, and righteous. God has provided food for those who fear Him, remembering His covenant forever. He has shown His people the power of His works. His precepts are trustworthy, established forever, and performed in faithfulness and uprightness. He sent redemption to His people and ordained His covenant forever. The psalm climaxes with the famous declaration: \"The fear of the LORD is the beginning of wisdom; all who follow his precepts have good understanding. To him belongs eternal praise.\"",
      fr: "C'est un psaume acrostiche de louange pure — chaque ligne commence par une lettre successive de l'alphabet hébreu, symbolisant une adoration complète de A à Z. Le psalmiste ouvre avec une louange de tout cœur dans l'assemblée des hommes droits. Il catalogue ensuite les œuvres de Dieu : elles sont grandes, glorieuses, majestueuses et justes. Dieu a donné de la nourriture à ceux qui Le craignent, Se souvenant de Son alliance pour toujours. Il a montré à Son peuple la puissance de Ses œuvres. Ses ordonnances sont dignes de confiance, établies pour toujours, accomplies avec fidélité et droiture. Il a envoyé la rédemption à Son peuple et ordonné Son alliance pour toujours. Le psaume culmine avec la fameuse déclaration : « La crainte de l'Éternel est le commencement de la sagesse ; tous ceux qui la pratiquent ont une raison saine. Sa louange subsiste à jamais. »",
    },
    context: {
      en: "Psalm 111 is a Hallelujah psalm, likely sung in Temple worship. It is paired with Psalm 112, which describes the blessed person who fears the Lord. Together they teach that God's character (Ps 111) shapes the character of His people (Ps 112).",
      fr: "Le Psaume 111 est un psaume d'Alléluia, probablement chanté dans le culte du Temple. Il est associé au Psaume 112, qui décrit la personne bénie qui craint l'Éternel. Ensemble, ils enseignent que le caractère de Dieu (Ps 111) façonne le caractère de Son peuple (Ps 112).",
    },
    keyThemes: {
      en: [
        "Wholehearted worship — Praise is not casual but complete and intentional",
        "God's faithfulness — His covenant and works stand forever",
        "Provision & redemption — God feeds and frees His people",
        "Holy reverence — The fear of the Lord is wisdom's foundation",
        "Community worship — Praise belongs in the assembly, not just in private",
      ],
      fr: [
        "Adoration de tout cœur — La louange n'est pas désinvolte mais complète et intentionnelle",
        "La fidélité de Dieu — Son alliance et Ses œuvres subsistent à jamais",
        "Provision et rédemption — Dieu nourrit et libère Son peuple",
        "La sainte révérence — La crainte de l'Éternel est le fondement de la sagesse",
        "Le culte communautaire — La louange appartient à l'assemblée, pas seulement en privé",
      ],
    },
    keyVerses: {
      en: [
        '"Great are the works of the LORD; they are pondered by all who delight in them." — Ps 111:2',
        '"He provides food for those who fear him; he remembers his covenant forever." — Ps 111:5',
        '"The fear of the LORD is the beginning of wisdom; all who follow his precepts have good understanding." — Ps 111:10',
      ],
      fr: [
        '"Les œuvres de l\'Éternel sont grandes, recherchées par tous ceux qui s\'y plaisent." — Ps 111:2',
        '"Il a donné de la nourriture à ceux qui le craignent ; il se souvient toujours de son alliance." — Ps 111:5',
        '"La crainte de l\'Éternel est le commencement de la sagesse ; tous ceux qui la pratiquent ont une raison saine." — Ps 111:10',
      ],
    },
    application: {
      en: "This psalm invites us to slow down and ponder the works of God — not rush past them. How often do we take time to recount what God has done? The psalm also reminds us that true wisdom doesn't start with education or intellect — it starts with reverence for God. Let your worship this week be wholehearted, detailed, and full of remembrance.",
      fr: "Ce psaume nous invite à ralentir et à méditer sur les œuvres de Dieu — ne pas les survoler. Combien de fois prenons-nous le temps de raconter ce que Dieu a fait ? Le psaume nous rappelle aussi que la vraie sagesse ne commence pas par l'éducation ou l'intellect — elle commence par la révérence envers Dieu. Que votre adoration cette semaine soit de tout cœur, détaillée et pleine de souvenir.",
    },
    discussion: {
      en: [
        "When was the last time you truly pondered and listed out God's works in your life?",
        "What does it look like to 'fear the Lord' in practical, everyday terms?",
        "How can we bring more wholehearted, intentional worship to our weekly gatherings?",
      ],
      fr: [
        "Quand avez-vous pour la dernière fois vraiment médité et listé les œuvres de Dieu dans votre vie ?",
        "À quoi ressemble « craindre l'Éternel » dans la vie pratique de tous les jours ?",
        "Comment pouvons-nous apporter une adoration plus entière et intentionnelle à nos rassemblements ?",
      ],
    },
  },
  {
    ref: "Pr 15:11",
    icon: "💡",
    color: "from-amber-500 to-orange-600",
    title: {
      en: "Proverbs 15:11 — Nothing Is Hidden from God",
      fr: "Proverbes 15:11 — Rien n'Est Caché à Dieu",
    },
    summary: {
      en: "\"Death and Destruction lie open before the LORD — how much more do human hearts!\" This single verse packs a profound truth: if even Sheol (the realm of the dead) and Abaddon (the place of destruction) are fully exposed before God's gaze, then certainly every thought, motive, and secret of the human heart is laid bare before Him. Nothing escapes His knowledge — not our hidden sins, our unspoken fears, our secret motives, or our deepest longings. This proverb is both a warning and a comfort: a warning because we cannot hide from God, and a comfort because the One who sees everything still loves us and invites us to come to Him with honesty.",
      fr: "« Le séjour des morts et l'abîme sont devant l'Éternel ; combien plus les cœurs des fils de l'homme ! » Ce verset unique contient une vérité profonde : si même le Schéol (le séjour des morts) et l'Abaddon (le lieu de destruction) sont pleinement exposés au regard de Dieu, alors certainement chaque pensée, chaque motif et chaque secret du cœur humain est mis à nu devant Lui. Rien n'échappe à Sa connaissance — ni nos péchés cachés, ni nos peurs inavouées, ni nos motifs secrets, ni nos aspirations les plus profondes. Ce proverbe est à la fois un avertissement et un réconfort : un avertissement parce que nous ne pouvons nous cacher de Dieu, et un réconfort parce que Celui qui voit tout nous aime encore et nous invite à venir à Lui avec honnêteté.",
    },
    context: {
      en: "Proverbs 15 is part of Solomon's collection of wise sayings contrasting the righteous and the wicked, the wise and the foolish. Verse 11 sits in a section dealing with how God perceives inner realities, not just outward appearances. It connects to Hebrews 4:13 — 'Nothing in all creation is hidden from God's sight.'",
      fr: "Proverbes 15 fait partie du recueil de maximes de Salomon contrastant les justes et les méchants, les sages et les insensés. Le verset 11 se situe dans une section traitant de la façon dont Dieu perçoit les réalités intérieures, pas seulement les apparences extérieures. Il se connecte à Hébreux 4:13 — « Nulle créature n'est cachée devant lui. »",
    },
    keyThemes: {
      en: [
        "God's omniscience — He knows everything, including the unseen spiritual realm",
        "Heart transparency — We cannot mask our true selves before God",
        "Accountability — Knowing God sees all should shape how we live",
        "Invitation to honesty — God's all-seeing nature is a call to authentic living",
        "Comfort in sovereignty — The God who sees all is also the God who redeems all",
      ],
      fr: [
        "L'omniscience de Dieu — Il connaît tout, y compris le domaine spirituel invisible",
        "La transparence du cœur — Nous ne pouvons masquer notre vrai nous devant Dieu",
        "La responsabilité — Savoir que Dieu voit tout devrait façonner notre manière de vivre",
        "L'invitation à l'honnêteté — La nature omnisciente de Dieu est un appel à l'authenticité",
        "Le réconfort dans la souveraineté — Le Dieu qui voit tout est aussi le Dieu qui rachète tout",
      ],
    },
    keyVerses: {
      en: [
        '"Death and Destruction lie open before the LORD — how much more do human hearts!" — Pr 15:11',
        '"Nothing in all creation is hidden from God\'s sight. Everything is uncovered and laid bare." — Heb 4:13',
        '"Search me, God, and know my heart; test me and know my anxious thoughts." — Ps 139:23',
      ],
      fr: [
        '"Le séjour des morts et l\'abîme sont devant l\'Éternel ; combien plus les cœurs des fils de l\'homme !" — Pr 15:11',
        '"Nulle créature n\'est cachée devant lui, mais tout est à nu et à découvert." — Héb 4:13',
        '"Sonde-moi, ô Dieu, et connais mon cœur ! Éprouve-moi, et connais mes pensées !" — Ps 139:23',
      ],
    },
    application: {
      en: "This verse challenges us to stop performing for people and start being real before God. If He already sees everything, then pretending is pointless. Instead, let His all-knowing gaze drive you to repentance, transparency, and deeper intimacy. Pray David's prayer from Psalm 139:23 — invite God to search your heart. What He reveals, He also heals.",
      fr: "Ce verset nous défie d'arrêter de jouer un rôle devant les gens et de commencer à être authentiques devant Dieu. S'Il voit déjà tout, alors feindre est inutile. Laissez plutôt Son regard omniscient vous conduire à la repentance, à la transparence et à une intimité plus profonde. Priez la prière de David du Psaume 139:23 — invitez Dieu à sonder votre cœur. Ce qu'Il révèle, Il le guérit aussi.",
    },
    discussion: {
      en: [
        "Is the idea that God sees everything more comforting or convicting to you right now? Why?",
        "What area of your heart do you need to bring into the light this week?",
        "How does God's omniscience change the way you approach prayer and worship?",
      ],
      fr: [
        "L'idée que Dieu voit tout est-elle plus réconfortante ou convainquante pour vous en ce moment ? Pourquoi ?",
        "Quel domaine de votre cœur avez-vous besoin de mettre en lumière cette semaine ?",
        "Comment l'omniscience de Dieu change-t-elle votre approche de la prière et de l'adoration ?",
      ],
    },
  },
];
