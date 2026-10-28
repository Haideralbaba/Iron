export type Equipment = "barbell" | "dumbbell" | "machine" | "cable" | "bodyweight" | "band" | "smith";
export type Pattern =
  | "horizontal_push"
  | "vertical_push"
  | "horizontal_pull"
  | "vertical_pull"
  | "squat"
  | "hinge"
  | "lunge"
  | "isolation"
  | "carry"
  | "core_anti"
  | "core_flex";
export type Level = "beginner" | "intermediate" | "advanced";
/** how load is recorded: per dumbbell, total external load, bodyweight-based, or time-based */
export type LoadMode = "total" | "per_dumbbell" | "bodyweight" | "time";

export interface Exercise {
  id: string;
  ar: string;
  en: string;
  desc: string;
  primary: string[];
  secondary: string[];
  equipment: Equipment;
  pattern: Pattern;
  level: Level;
  compound: boolean;
  sets: number;
  reps: [number, number];
  rest: number;
  loadMode: LoadMode;
  steps: string[];
  breathing: string;
  mistakes: string[];
  criteria: string[];
  alts: string[];
  /** free-exercise-db folder id; null when no verified photo exists */
  img: string | null;
  safety: string;
}

export const EQUIPMENT_AR: Record<Equipment, string> = {
  barbell: "بار حديد",
  dumbbell: "دمبل",
  machine: "جهاز",
  cable: "كيبل",
  bodyweight: "وزن الجسم",
  band: "حبل مطاطي",
  smith: "جهاز سميث",
};

export const PATTERN_AR: Record<Pattern, string> = {
  horizontal_push: "دفع أفقي",
  vertical_push: "دفع عمودي",
  horizontal_pull: "سحب أفقي",
  vertical_pull: "سحب عمودي",
  squat: "قرفصاء",
  hinge: "مفصلة الورك",
  lunge: "طعن / رجل واحدة",
  isolation: "عزل",
  carry: "حمل ومشي",
  core_anti: "ثبات الجذع",
  core_flex: "ثني الجذع",
};

export const LEVEL_AR: Record<Level, string> = {
  beginner: "مبتدئ",
  intermediate: "متوسط",
  advanced: "متقدم",
};

export const LOAD_MODE_AR: Record<LoadMode, string> = {
  total: "الوزن الإجمالي",
  per_dumbbell: "وزن الدمبل الواحد",
  bodyweight: "وزن الجسم (+ وزن إضافي اختياري)",
  time: "بالثواني",
};

export const IMAGE_SOURCE = {
  name: "Free Exercise DB (yuhonas)",
  license: "The Unlicense — ملكية عامة",
  repo: "https://github.com/yuhonas/free-exercise-db",
};

export const imageUrl = (img: string, frame = 0) =>
  `https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/${img}/${frame}.jpg`;
export const imageSourcePage = (img: string) =>
  `https://github.com/yuhonas/free-exercise-db/tree/main/exercises/${img}`;

const BRACE = "شهيق قبل النزول، ثبّت البطن، وزفير بعد تجاوز أصعب نقطة في الصعود.";
const ISO = "شهيق في المرحلة السلبية، وزفير أثناء الانقباض. لا تحبس النفس طويلًا.";

export const EXERCISES: Exercise[] = [
  // ---------- CHEST ----------
  {
    id: "bb_bench", ar: "ضغط الصدر بالبار", en: "Barbell Bench Press", desc: "تمرين دفع أفقي أساسي لبناء قوة الصدر والترايسبس.",
    primary: ["pec_major", "pec_stern"], secondary: ["delt_front", "triceps", "serratus"], equipment: "barbell", pattern: "horizontal_push", level: "intermediate", compound: true,
    sets: 3, reps: [6, 10], rest: 150, loadMode: "total",
    steps: ["استلقِ والعينان تحت البار، والقدمان ثابتتان على الأرض.", "اقبض البار أعرض قليلًا من الكتفين، واسحب لوحي الكتف للخلف وللأسفل.", "أنزل البار بتحكم إلى أسفل الصدر والمرفقان بزاوية 45–70 درجة تقريبًا.", "ادفع البار للأعلى حتى تمتد الذراعان دون قفل عنيف."],
    breathing: BRACE, mistakes: ["ارتداد البار عن الصدر", "رفع الأرداف عن المقعد", "فتح المرفقين 90 درجة"], criteria: ["البار يلامس الصدر بتحكم", "لوحا الكتف ثابتان", "مسار ثابت في كل تكرار"],
    alts: ["db_bench", "machine_press", "pushups"], img: "Barbell_Bench_Press_-_Medium_Grip", safety: "استخدم مساعدًا أو مساند أمان عند الأوزان الثقيلة.",
  },
  {
    id: "db_bench", ar: "ضغط الصدر بالدمبل", en: "Dumbbell Bench Press", desc: "دفع أفقي بنطاق حركة أوسع وحرية أكبر للكتف.",
    primary: ["pec_major", "pec_stern"], secondary: ["delt_front", "triceps"], equipment: "dumbbell", pattern: "horizontal_push", level: "beginner", compound: true,
    sets: 3, reps: [8, 12], rest: 120, loadMode: "per_dumbbell",
    steps: ["اجلس والدمبل على الفخذين ثم استلقِ وارفعهما فوق الصدر.", "أنزل الدمبل بتحكم إلى جانبي الصدر.", "ادفع للأعلى وقرّب الدمبل دون أن يصطدما."],
    breathing: BRACE, mistakes: ["النزول السريع", "فقدان ثبات لوحي الكتف"], criteria: ["نزول متحكم فيه", "مسار متماثل للذراعين"],
    alts: ["bb_bench", "machine_press", "pushups"], img: "Dumbbell_Bench_Press", safety: "أنزل الدمبل إلى الجانبين بهدوء عند الانتهاء ولا ترمها.",
  },
  {
    id: "incline_db", ar: "ضغط الصدر المائل بالدمبل", en: "Incline Dumbbell Press", desc: "يركّز أكثر على الجزء العلوي من الصدر.",
    primary: ["pec_clav"], secondary: ["pec_major", "delt_front", "triceps"], equipment: "dumbbell", pattern: "horizontal_push", level: "beginner", compound: true,
    sets: 3, reps: [8, 12], rest: 120, loadMode: "per_dumbbell",
    steps: ["اضبط المقعد على 15–30 درجة.", "ابدأ والدمبل فوق الصدر العلوي.", "أنزل الدمبل إلى مستوى أعلى الصدر.", "ادفع للأعلى بمسار مائل قليلًا للداخل."],
    breathing: BRACE, mistakes: ["زاوية مقعد مرتفعة جدًا تحوّل التمرين للأكتاف", "تقويس مفرط للظهر"], criteria: ["الصدر العلوي هو مصدر الدفع", "مرفقان تحت المعصمين"],
    alts: ["incline_bb", "machine_press", "db_bench"], img: "Incline_Dumbbell_Press", safety: "توقف إذا شعرت بألم حاد في مقدمة الكتف.",
  },
  {
    id: "incline_bb", ar: "ضغط الصدر المائل بالبار", en: "Barbell Incline Bench Press", desc: "دفع مائل بالبار للصدر العلوي والأكتاف الأمامية.",
    primary: ["pec_clav"], secondary: ["pec_major", "delt_front", "triceps"], equipment: "barbell", pattern: "horizontal_push", level: "intermediate", compound: true,
    sets: 3, reps: [6, 10], rest: 150, loadMode: "total",
    steps: ["اضبط المقعد على زاوية خفيفة.", "أنزل البار إلى أعلى الصدر تحت الترقوة.", "ادفع البار للأعلى دون رفع الكتفين."],
    breathing: BRACE, mistakes: ["ارتداد البار", "إنزال البار إلى الرقبة"], criteria: ["مسار ثابت", "لوحا الكتف للخلف"],
    alts: ["incline_db", "machine_press"], img: "Barbell_Incline_Bench_Press_-_Medium_Grip", safety: "استخدم مساند أمان أو مساعدًا.",
  },
  {
    id: "machine_press", ar: "ضغط الصدر على الجهاز", en: "Machine Chest Press", desc: "دفع أفقي بمسار ثابت، مناسب للمبتدئين وللإجهاد العالي بأمان.",
    primary: ["pec_major"], secondary: ["delt_front", "triceps"], equipment: "machine", pattern: "horizontal_push", level: "beginner", compound: true,
    sets: 3, reps: [8, 12], rest: 90, loadMode: "total",
    steps: ["اضبط المقعد حتى تكون المقابض على مستوى منتصف الصدر.", "ادفع المقابض للأمام حتى تمتد الذراعان.", "ارجع ببطء حتى تشعر بإطالة في الصدر."],
    breathing: ISO, mistakes: ["مقعد منخفض أو مرتفع جدًا", "رفع الكتفين نحو الأذنين"], criteria: ["حركة سلسة دون ارتطام الأوزان"],
    alts: ["db_bench", "bb_bench", "pushups"], img: "Machine_Bench_Press", safety: "لا تترك الأوزان ترتطم في نهاية الحركة.",
  },
  {
    id: "pushups", ar: "تمرين الضغط", en: "Push-Up", desc: "دفع أفقي بوزن الجسم.",
    primary: ["pec_major"], secondary: ["delt_front", "triceps", "serratus", "rectus_abd"], equipment: "bodyweight", pattern: "horizontal_push", level: "beginner", compound: true,
    sets: 3, reps: [8, 20], rest: 90, loadMode: "bodyweight",
    steps: ["ضع اليدين أعرض قليلًا من الكتفين.", "حافظ على خط مستقيم من الرأس إلى الكعبين.", "انزل حتى يقترب الصدر من الأرض ثم ادفع."],
    breathing: "شهيق في النزول وزفير في الدفع.", mistakes: ["هبوط الحوض", "نطاق حركة قصير"], criteria: ["جسم مستقيم كاللوح"],
    alts: ["db_bench", "machine_press"], img: "Pushups", safety: "خفف الصعوبة بوضع اليدين على مرتفع إذا لزم.",
  },
  {
    id: "db_fly", ar: "تفتيح الصدر بالدمبل", en: "Dumbbell Fly", desc: "عزل للصدر بحركة تقريب الذراعين.",
    primary: ["pec_major"], secondary: ["delt_front"], equipment: "dumbbell", pattern: "isolation", level: "beginner", compound: false,
    sets: 2, reps: [10, 15], rest: 75, loadMode: "per_dumbbell",
    steps: ["استلقِ والدمبل فوق الصدر والمرفقان مثنيان قليلًا.", "افتح الذراعين بقوس واسع حتى تشعر بإطالة مريحة.", "قرّب الذراعين بالقوس نفسه."],
    breathing: ISO, mistakes: ["مد المرفقين بالكامل", "النزول أعمق من راحة الكتف"], criteria: ["زاوية مرفق ثابتة"],
    alts: ["cable_cross", "pec_deck"], img: "Dumbbell_Flyes", safety: "استخدم وزنًا خفيفًا؛ الكتف في وضع حساس عند الإطالة.",
  },
  {
    id: "cable_cross", ar: "تقاطع الكيبل", en: "Cable Crossover", desc: "عزل للصدر بشد ثابت طوال الحركة.",
    primary: ["pec_major", "pec_stern"], secondary: ["delt_front"], equipment: "cable", pattern: "isolation", level: "beginner", compound: false,
    sets: 3, reps: [10, 15], rest: 75, loadMode: "total",
    steps: ["قف في منتصف الجهاز والبكرات مرتفعة.", "خطوة للأمام وميل خفيف بالجذع.", "اسحب المقابض بقوس للأسفل وللداخل حتى تلتقي اليدان.", "ارجع ببطء."],
    breathing: ISO, mistakes: ["تحويل الحركة إلى دفع بالترايسبس", "الاندفاع بالجسم"], criteria: ["مرفق ثابت ومثني قليلًا"],
    alts: ["db_fly", "pec_deck"], img: "Cable_Crossover", safety: "لا ترجع الذراعين خلف مستوى الجسم بقوة.",
  },
  {
    id: "pec_deck", ar: "جهاز الفراشة", en: "Pec Deck (Butterfly)", desc: "عزل للصدر بمسار ثابت على الجهاز.",
    primary: ["pec_major"], secondary: ["delt_front"], equipment: "machine", pattern: "isolation", level: "beginner", compound: false,
    sets: 3, reps: [10, 15], rest: 75, loadMode: "total",
    steps: ["اضبط المقعد حتى تكون المقابض على مستوى الصدر.", "قرّب الذراعين أمام الصدر.", "ارجع ببطء."],
    breathing: ISO, mistakes: ["الرجوع السريع"], criteria: ["انقباض واضح في المنتصف"],
    alts: ["cable_cross", "db_fly"], img: "Butterfly", safety: "اضبط نطاق البداية بحيث لا تُجهد مقدمة الكتف.",
  },
  {
    id: "dips", ar: "المتوازي للترايسبس", en: "Triceps Dips", desc: "دفع بوزن الجسم للترايسبس والصدر السفلي.",
    primary: ["triceps"], secondary: ["pec_major", "delt_front", "pec_minor"], equipment: "bodyweight", pattern: "vertical_push", level: "intermediate", compound: true,
    sets: 3, reps: [6, 12], rest: 120, loadMode: "bodyweight",
    steps: ["أمسك المتوازي وجسمك مستقيم.", "انزل بثني المرفقين حتى زاوية 90 درجة تقريبًا.", "ادفع للأعلى."],
    breathing: "شهيق في النزول وزفير في الصعود.", mistakes: ["النزول العميق جدًا", "رفع الكتفين للأذنين"], criteria: ["نزول متحكم فيه"],
    alts: ["close_grip_bench", "pushdown"], img: "Dips_-_Triceps_Version", safety: "غير مناسب إذا كان لديك انزعاج في مقدمة الكتف.",
  },
  // ---------- SHOULDERS ----------
  {
    id: "seated_db_press", ar: "ضغط الأكتاف بالدمبل جالسًا", en: "Seated Dumbbell Shoulder Press", desc: "دفع عمودي للدالية الأمامية والجانبية والترايسبس.",
    primary: ["delt_front"], secondary: ["delt_side", "triceps", "trap_upper", "serratus"], equipment: "dumbbell", pattern: "vertical_push", level: "beginner", compound: true,
    sets: 3, reps: [8, 12], rest: 120, loadMode: "per_dumbbell",
    steps: ["اجلس على مقعد بظهر عمودي.", "ابدأ والدمبل على مستوى الأذنين.", "ادفع للأعلى حتى تقترب الذراعان دون قفل عنيف.", "انزل بتحكم."],
    breathing: BRACE, mistakes: ["تقويس أسفل الظهر", "نزول قصير"], criteria: ["الساعدان عموديان"],
    alts: ["machine_shoulder", "arnold"], img: "Seated_Dumbbell_Press", safety: "توقف عند أي ألم حاد أثناء الرفع فوق الرأس.",
  },
  {
    id: "machine_shoulder", ar: "ضغط الأكتاف على الجهاز", en: "Machine Shoulder Press", desc: "دفع عمودي بمسار ثابت.",
    primary: ["delt_front"], secondary: ["delt_side", "triceps"], equipment: "machine", pattern: "vertical_push", level: "beginner", compound: true,
    sets: 3, reps: [8, 12], rest: 90, loadMode: "total",
    steps: ["اضبط المقعد حتى تكون المقابض على مستوى الكتفين.", "ادفع للأعلى.", "ارجع ببطء."],
    breathing: ISO, mistakes: ["رفع الأرداف عن المقعد"], criteria: ["حركة سلسة"],
    alts: ["seated_db_press", "arnold"], img: "Machine_Shoulder_Military_Press", safety: "لا تترك الأوزان ترتطم.",
  },
  {
    id: "arnold", ar: "ضغط أرنولد", en: "Arnold Dumbbell Press", desc: "دفع عمودي مع تدوير الرسغين.",
    primary: ["delt_front"], secondary: ["delt_side", "triceps"], equipment: "dumbbell", pattern: "vertical_push", level: "intermediate", compound: true,
    sets: 3, reps: [8, 12], rest: 120, loadMode: "per_dumbbell",
    steps: ["ابدأ والدمبل أمام الصدر والكفان نحوك.", "ادفع للأعلى مع تدوير الكفين للأمام.", "اعكس الحركة في النزول."],
    breathing: BRACE, mistakes: ["الاستعجال في التدوير"], criteria: ["تدوير سلس ومتزامن"],
    alts: ["seated_db_press", "machine_shoulder"], img: "Arnold_Dumbbell_Press", safety: "خفف الوزن إذا شعرت بضغط في الكتف.",
  },
  {
    id: "lateral_raise", ar: "الرفرفة الجانبية بالدمبل", en: "Dumbbell Lateral Raise", desc: "عزل مباشر للدالية الجانبية.",
    primary: ["delt_side"], secondary: ["trap_upper", "supraspinatus"], equipment: "dumbbell", pattern: "isolation", level: "beginner", compound: false,
    sets: 3, reps: [12, 20], rest: 60, loadMode: "per_dumbbell",
    steps: ["قف والدمبل بجانب الجسم.", "ارفع الذراعين جانبيًا حتى مستوى الكتف والمرفقان مثنيان قليلًا.", "انزل ببطء."],
    breathing: ISO, mistakes: ["التأرجح بالجسم", "رفع الكتفين نحو الأذنين", "وزن ثقيل جدًا"], criteria: ["المرفق يقود الحركة", "لا يتجاوز مستوى الكتف"],
    alts: ["seated_lateral"], img: "Side_Lateral_Raise", safety: "الوزن الخفيف مع التحكم أهم من الوزن الثقيل.",
  },
  {
    id: "seated_lateral", ar: "الرفرفة الجانبية جالسًا", en: "Seated Lateral Raise", desc: "نسخة جالسة تقلل الغش بالجسم.",
    primary: ["delt_side"], secondary: ["supraspinatus"], equipment: "dumbbell", pattern: "isolation", level: "beginner", compound: false,
    sets: 3, reps: [12, 20], rest: 60, loadMode: "per_dumbbell",
    steps: ["اجلس على طرف المقعد.", "ارفع الذراعين جانبيًا حتى مستوى الكتف.", "انزل ببطء."],
    breathing: ISO, mistakes: ["الميل للأمام"], criteria: ["حركة متماثلة"],
    alts: ["lateral_raise"], img: "Seated_Side_Lateral_Raise", safety: "توقف عند ألم في أعلى الكتف.",
  },
  {
    id: "face_pull", ar: "السحب للوجه", en: "Face Pull", desc: "سحب بالكيبل للدالية الخلفية والترابيس الوسطى والكفة المدورة.",
    primary: ["delt_rear"], secondary: ["trap_mid", "trap_lower", "rhomboids", "infraspinatus", "teres_minor"], equipment: "cable", pattern: "horizontal_pull", level: "beginner", compound: false,
    sets: 3, reps: [12, 20], rest: 60, loadMode: "total",
    steps: ["اضبط البكرة على مستوى الوجه مع حبل.", "اسحب الحبل نحو الوجه مع فتح اليدين للجانبين.", "دوّر الكتفين للخارج في النهاية ثم ارجع ببطء."],
    breathing: ISO, mistakes: ["الميل للخلف", "وزن ثقيل يحوّلها إلى تجديف"], criteria: ["المرفقان مرتفعان", "توقف قصير في النهاية"],
    alts: ["reverse_fly", "band_pull_apart"], img: "Face_Pull", safety: "تمرين لصحة الكتف؛ لا تحمّله بأوزان ثقيلة.",
  },
  {
    id: "reverse_fly", ar: "التفتيح العكسي", en: "Reverse Fly", desc: "عزل للدالية الخلفية بالدمبل.",
    primary: ["delt_rear"], secondary: ["rhomboids", "trap_mid", "infraspinatus"], equipment: "dumbbell", pattern: "isolation", level: "beginner", compound: false,
    sets: 3, reps: [12, 20], rest: 60, loadMode: "per_dumbbell",
    steps: ["انحنِ من الورك والظهر مستقيم.", "افتح الذراعين جانبيًا والمرفقان مثنيان قليلًا.", "انزل ببطء."],
    breathing: ISO, mistakes: ["رفع الجذع أثناء الحركة", "ضم لوحي الكتف بقوة بدل تحريك الذراع"], criteria: ["ثبات الجذع"],
    alts: ["face_pull", "band_pull_apart"], img: "Reverse_Flyes", safety: "استخدم مقعدًا مائلًا للدعم إذا تعب أسفل ظهرك.",
  },
  {
    id: "band_pull_apart", ar: "فتح الحبل المطاطي", en: "Band Pull Apart", desc: "حركة خفيفة للدالية الخلفية ومثبتات لوح الكتف، مناسبة للإحماء.",
    primary: ["delt_rear"], secondary: ["rhomboids", "trap_mid", "scap_stab"], equipment: "band", pattern: "isolation", level: "beginner", compound: false,
    sets: 2, reps: [15, 25], rest: 45, loadMode: "bodyweight",
    steps: ["أمسك الحبل أمامك على مستوى الكتفين.", "افتح الذراعين حتى يلامس الحبل الصدر.", "ارجع ببطء."],
    breathing: ISO, mistakes: ["ثني المرفقين كثيرًا"], criteria: ["الكتفان منخفضان"],
    alts: ["face_pull", "reverse_fly"], img: "Band_Pull_Apart", safety: "استخدم حبلًا سليمًا غير متشقق.",
  },
  // ---------- TRICEPS ----------
  {
    id: "pushdown", ar: "دفع الترايسبس بالكيبل", en: "Triceps Pushdown", desc: "عزل للترايسبس بالكيبل.",
    primary: ["triceps", "tri_lat"], secondary: ["tri_med"], equipment: "cable", pattern: "isolation", level: "beginner", compound: false,
    sets: 3, reps: [10, 15], rest: 60, loadMode: "total",
    steps: ["قف أمام البكرة العالية والمرفقان بجانب الجسم.", "ادفع المقبض للأسفل حتى تمتد الذراعان.", "ارجع حتى زاوية 90 درجة تقريبًا."],
    breathing: ISO, mistakes: ["تحريك المرفقين للأمام", "الميل بالجسم فوق المقبض"], criteria: ["المرفقان ثابتان"],
    alts: ["rope_pushdown", "close_grip_bench"], img: "Triceps_Pushdown", safety: "لا تقفل المرفق بقوة.",
  },
  {
    id: "rope_pushdown", ar: "دفع الترايسبس بالحبل", en: "Rope Triceps Pushdown", desc: "دفع بالحبل مع فتح اليدين في النهاية.",
    primary: ["triceps", "tri_lat"], secondary: ["tri_med"], equipment: "cable", pattern: "isolation", level: "beginner", compound: false,
    sets: 3, reps: [10, 15], rest: 60, loadMode: "total",
    steps: ["أمسك الحبل والمرفقان بجانب الجسم.", "ادفع للأسفل وافتح طرفي الحبل في النهاية.", "ارجع ببطء."],
    breathing: ISO, mistakes: ["استخدام الكتفين"], criteria: ["مد كامل للمرفق"],
    alts: ["pushdown"], img: "Triceps_Pushdown_-_Rope_Attachment", safety: "حرّك المرفق فقط.",
  },
  {
    id: "overhead_cable_ext", ar: "مد الترايسبس فوق الرأس بالكيبل", en: "Cable Overhead Triceps Extension", desc: "يضع الرأس الطويل للترايسبس في وضع إطالة.",
    primary: ["tri_long", "triceps"], secondary: ["tri_med"], equipment: "cable", pattern: "isolation", level: "beginner", compound: false,
    sets: 3, reps: [10, 15], rest: 60, loadMode: "total",
    steps: ["أمسك الحبل وأدر ظهرك للبكرة.", "ابدأ واليدان خلف الرأس والمرفقان للأعلى.", "مد المرفقين للأمام وللأعلى ثم ارجع ببطء."],
    breathing: ISO, mistakes: ["فتح المرفقين للجانبين", "تقويس الظهر"], criteria: ["المرفقان قريبان من الرأس"],
    alts: ["lying_tri", "rope_pushdown"], img: "Cable_Rope_Overhead_Triceps_Extension", safety: "ابدأ بوزن خفيف إذا كان مرفقك حساسًا.",
  },
  {
    id: "lying_tri", ar: "مد الترايسبس مستلقيًا", en: "Lying Triceps Extension", desc: "عزل للترايسبس بالبار مستلقيًا (Skull Crusher).",
    primary: ["triceps", "tri_long"], secondary: ["tri_med", "tri_lat"], equipment: "barbell", pattern: "isolation", level: "intermediate", compound: false,
    sets: 3, reps: [8, 12], rest: 75, loadMode: "total",
    steps: ["استلقِ والبار فوق الصدر.", "اثنِ المرفقين لإنزال البار خلف الجبهة.", "مد المرفقين للعودة."],
    breathing: ISO, mistakes: ["تحريك الكتفين", "النزول السريع نحو الوجه"], criteria: ["المرفقان يشيران للأعلى"],
    alts: ["overhead_cable_ext", "close_grip_bench"], img: "Lying_Triceps_Press", safety: "تحكم كامل؛ البار يتحرك قرب الرأس.",
  },
  {
    id: "close_grip_bench", ar: "ضغط الصدر بقبضة ضيقة", en: "Close-Grip Bench Press", desc: "دفع مركب يركز على الترايسبس.",
    primary: ["triceps"], secondary: ["pec_major", "delt_front"], equipment: "barbell", pattern: "horizontal_push", level: "intermediate", compound: true,
    sets: 3, reps: [6, 10], rest: 120, loadMode: "total",
    steps: ["اقبض البار بعرض الكتفين.", "أنزله إلى أسفل الصدر والمرفقان قريبان.", "ادفع للأعلى."],
    breathing: BRACE, mistakes: ["قبضة ضيقة جدًا تُجهد الرسغ"], criteria: ["المرفقان قريبان من الجسم"],
    alts: ["dips", "pushdown"], img: "Close-Grip_Barbell_Bench_Press", safety: "استخدم مساند أمان.",
  },
  // ---------- BACK ----------
  {
    id: "lat_pulldown", ar: "السحب العلوي بقبضة عريضة", en: "Wide-Grip Lat Pulldown", desc: "سحب عمودي أساسي للظهرية العريضة.",
    primary: ["lats"], secondary: ["teres_major", "biceps", "brachialis", "trap_lower", "rhomboids", "delt_rear"], equipment: "cable", pattern: "vertical_pull", level: "beginner", compound: true,
    sets: 3, reps: [8, 12], rest: 120, loadMode: "total",
    steps: ["اجلس وثبّت الفخذين تحت الوسادة.", "اقبض البار أعرض من الكتفين.", "اسحب البار نحو أعلى الصدر مع خفض الكتفين.", "ارجع حتى تمتد الذراعان بالكامل."],
    breathing: "زفير أثناء السحب، شهيق أثناء الرجوع.", mistakes: ["الميل للخلف كثيرًا", "السحب خلف الرقبة", "نطاق حركة قصير"], criteria: ["الصدر للأعلى", "المرفقان يتجهان للأسفل"],
    alts: ["pullups", "close_pulldown", "straight_arm"], img: "Wide-Grip_Lat_Pulldown", safety: "لا تسحب البار خلف الرقبة.",
  },
  {
    id: "close_pulldown", ar: "السحب العلوي بقبضة ضيقة", en: "Close-Grip Lat Pulldown", desc: "سحب عمودي بقبضة ضيقة ومسار أطول.",
    primary: ["lats"], secondary: ["biceps", "brachialis", "teres_major"], equipment: "cable", pattern: "vertical_pull", level: "beginner", compound: true,
    sets: 3, reps: [8, 12], rest: 120, loadMode: "total",
    steps: ["اقبض المقبض بقبضة ضيقة.", "اسحب نحو أعلى الصدر.", "ارجع ببطء حتى امتداد كامل."],
    breathing: "زفير أثناء السحب.", mistakes: ["السحب بالذراعين فقط"], criteria: ["خفض الكتفين أولًا"],
    alts: ["lat_pulldown", "pullups"], img: "Close-Grip_Front_Lat_Pulldown", safety: "حافظ على جذع ثابت.",
  },
  {
    id: "pullups", ar: "العقلة", en: "Pull-Up", desc: "سحب عمودي بوزن الجسم.",
    primary: ["lats"], secondary: ["biceps", "brachialis", "teres_major", "trap_lower", "rhomboids", "grip", "rectus_abd"], equipment: "bodyweight", pattern: "vertical_pull", level: "intermediate", compound: true,
    sets: 3, reps: [5, 10], rest: 150, loadMode: "bodyweight",
    steps: ["تعلّق بالبار بقبضة أعرض قليلًا من الكتفين.", "اسحب جسمك حتى يتجاوز الذقن البار.", "انزل بتحكم حتى امتداد كامل."],
    breathing: "زفير أثناء الصعود، شهيق أثناء النزول.", mistakes: ["التأرجح", "نصف تكرار"], criteria: ["امتداد كامل في الأسفل"],
    alts: ["lat_pulldown", "close_pulldown"], img: "Pullups", safety: "استخدم جهاز المساعدة أو السحب العلوي إذا لم تستطع 5 تكرارات.",
  },
  {
    id: "straight_arm", ar: "السحب بذراع مستقيمة", en: "Straight-Arm Pulldown", desc: "عزل للظهرية العريضة دون مشاركة البايسبس.",
    primary: ["lats"], secondary: ["teres_major", "tri_long"], equipment: "cable", pattern: "isolation", level: "beginner", compound: false,
    sets: 2, reps: [10, 15], rest: 60, loadMode: "total",
    steps: ["قف أمام البكرة العالية والذراعان ممدودتان.", "اسحب البار بقوس نحو الفخذين.", "ارجع ببطء."],
    breathing: ISO, mistakes: ["ثني المرفقين كثيرًا"], criteria: ["الحركة من الكتف"],
    alts: ["lat_pulldown"], img: "Straight-Arm_Pulldown", safety: "حافظ على ظهر محايد.",
  },
  {
    id: "bb_row", ar: "التجديف بالبار منحنيًا", en: "Bent-Over Barbell Row", desc: "سحب أفقي مركب للظهر بأكمله.",
    primary: ["lats", "trap_mid", "rhomboids"], secondary: ["delt_rear", "erectors", "biceps", "teres_major", "grip"], equipment: "barbell", pattern: "horizontal_pull", level: "intermediate", compound: true,
    sets: 3, reps: [6, 10], rest: 150, loadMode: "total",
    steps: ["انحنِ من الورك والظهر مستقيم والركبتان مثنيتان قليلًا.", "اسحب البار نحو أسفل البطن.", "أنزله بتحكم."],
    breathing: BRACE, mistakes: ["تقوس أسفل الظهر", "رفع الجذع للغش"], criteria: ["زاوية جذع ثابتة"],
    alts: ["cable_row", "db_row", "tbar_row"], img: "Bent_Over_Barbell_Row", safety: "اختر بديلًا مدعومًا إذا تعب أسفل ظهرك.",
  },
  {
    id: "cable_row", ar: "التجديف بالكيبل جالسًا", en: "Seated Cable Row", desc: "سحب أفقي بثبات أعلى ودعم أفضل للجذع.",
    primary: ["lats", "trap_mid", "rhomboids"], secondary: ["delt_rear", "biceps", "brachialis"], equipment: "cable", pattern: "horizontal_pull", level: "beginner", compound: true,
    sets: 3, reps: [8, 12], rest: 90, loadMode: "total",
    steps: ["اجلس والقدمان على الدعامة والركبتان مثنيتان قليلًا.", "اسحب المقبض نحو البطن مع ضم لوحي الكتف.", "ارجع حتى تشعر بإطالة."],
    breathing: "زفير أثناء السحب.", mistakes: ["التأرجح بالجذع", "رفع الكتفين"], criteria: ["الجذع ثابت تقريبًا"],
    alts: ["db_row", "bb_row", "tbar_row"], img: "Seated_Cable_Rows", safety: "لا تقوّس أسفل الظهر.",
  },
  {
    id: "db_row", ar: "التجديف بالدمبل بذراع واحدة", en: "One-Arm Dumbbell Row", desc: "سحب أفقي أحادي مع دعم اليد والركبة على المقعد.",
    primary: ["lats"], secondary: ["trap_mid", "rhomboids", "delt_rear", "biceps", "grip"], equipment: "dumbbell", pattern: "horizontal_pull", level: "beginner", compound: true,
    sets: 3, reps: [8, 12], rest: 90, loadMode: "per_dumbbell",
    steps: ["ضع ركبة ويدًا على المقعد.", "اسحب الدمبل نحو الورك.", "أنزله حتى امتداد كامل."],
    breathing: "زفير أثناء السحب.", mistakes: ["دوران الجذع"], criteria: ["المرفق يتحرك نحو الورك"],
    alts: ["cable_row", "bb_row"], img: "One-Arm_Dumbbell_Row", safety: "حافظ على ظهر مستقيم.",
  },
  {
    id: "tbar_row", ar: "تجديف T-Bar", en: "T-Bar Row", desc: "تجديف بحمل ثقيل ومقابض محايدة.",
    primary: ["lats", "trap_mid"], secondary: ["rhomboids", "delt_rear", "erectors", "biceps"], equipment: "barbell", pattern: "horizontal_pull", level: "intermediate", compound: true,
    sets: 3, reps: [8, 12], rest: 120, loadMode: "total",
    steps: ["قف فوق البار وانحنِ من الورك.", "اسحب المقبض نحو الصدر السفلي.", "أنزل بتحكم."],
    breathing: BRACE, mistakes: ["تقوس الظهر"], criteria: ["جذع ثابت"],
    alts: ["bb_row", "cable_row"], img: "T-Bar_Row_with_Handle", safety: "اختر نسخة مدعومة الصدر عند وجود ألم أسفل الظهر.",
  },
  {
    id: "bb_shrug", ar: "الهز بالبار", en: "Barbell Shrug", desc: "عزل للترابيس العلوية.",
    primary: ["trap_upper"], secondary: ["grip", "neck_move"], equipment: "barbell", pattern: "isolation", level: "beginner", compound: false,
    sets: 3, reps: [10, 15], rest: 75, loadMode: "total",
    steps: ["قف والبار أمام الفخذين.", "ارفع الكتفين نحو الأذنين مباشرة.", "توقف لحظة ثم انزل."],
    breathing: ISO, mistakes: ["لف الكتفين", "ثني المرفقين"], criteria: ["حركة عمودية"],
    alts: ["db_shrug"], img: "Barbell_Shrug", safety: "حافظ على الرأس محايدًا ولا تدفعه للأمام.",
  },
  {
    id: "db_shrug", ar: "الهز بالدمبل", en: "Dumbbell Shrug", desc: "هز بالدمبل بمسار طبيعي أكثر.",
    primary: ["trap_upper"], secondary: ["grip"], equipment: "dumbbell", pattern: "isolation", level: "beginner", compound: false,
    sets: 3, reps: [10, 15], rest: 75, loadMode: "per_dumbbell",
    steps: ["قف والدمبل بجانب الجسم.", "ارفع الكتفين للأعلى.", "انزل ببطء."],
    breathing: ISO, mistakes: ["لف الكتفين"], criteria: ["توقف قصير في الأعلى"],
    alts: ["bb_shrug", "farmers_walk"], img: "Dumbbell_Shrug", safety: "لا تحرّك الرقبة.",
  },
  {
    id: "farmers_walk", ar: "مشي المزارع", en: "Farmer's Walk", desc: "حمل ثقيل ومشي لتقوية القبضة والجذع والترابيس.",
    primary: ["grip"], secondary: ["trap_upper", "ql", "ext_obl", "finger_flex", "foot"], equipment: "dumbbell", pattern: "carry", level: "beginner", compound: true,
    sets: 3, reps: [30, 45], rest: 90, loadMode: "per_dumbbell",
    steps: ["ارفع الدمبل بظهر مستقيم كما في الرفعة الميتة.", "امشِ بخطوات قصيرة والجذع منتصب.", "ضع الأوزان بتحكم."],
    breathing: "تنفس قصير ومنتظم مع شد البطن.", mistakes: ["الميل للجانب", "خطوات طويلة متسرعة"], criteria: ["جذع منتصب", "كتفان للخلف"],
    alts: ["db_shrug"], img: "Farmers_Walk", safety: "اختر مسارًا خاليًا من العوائق. التكرارات هنا بالثواني.",
  },
  // ---------- BICEPS / FOREARMS ----------
  {
    id: "bb_curl", ar: "ثني البايسبس بالبار", en: "Barbell Curl", desc: "تمرين أساسي لثني المرفق.",
    primary: ["biceps"], secondary: ["brachialis", "brachioradialis", "wrist_flex"], equipment: "barbell", pattern: "isolation", level: "beginner", compound: false,
    sets: 3, reps: [8, 12], rest: 75, loadMode: "total",
    steps: ["قف والبار أمام الفخذين بقبضة للأعلى.", "اثنِ المرفقين لرفع البار.", "انزل ببطء حتى امتداد كامل."],
    breathing: ISO, mistakes: ["التأرجح بالظهر", "تحريك المرفقين للأمام"], criteria: ["المرفقان ثابتان بجانب الجسم"],
    alts: ["preacher_curl", "hammer_curl"], img: "Barbell_Curl", safety: "استخدم بار EZ إذا تألم الرسغ.",
  },
  {
    id: "hammer_curl", ar: "ثني المطرقة", en: "Hammer Curl", desc: "ثني بقبضة محايدة للعضدية والعضدية الكعبرية.",
    primary: ["brachialis", "brachioradialis"], secondary: ["biceps", "grip"], equipment: "dumbbell", pattern: "isolation", level: "beginner", compound: false,
    sets: 3, reps: [10, 15], rest: 60, loadMode: "per_dumbbell",
    steps: ["أمسك الدمبل والكفان متقابلان.", "اثنِ المرفقين دون تدوير.", "انزل ببطء."],
    breathing: ISO, mistakes: ["التأرجح"], criteria: ["ثبات المرفق"],
    alts: ["reverse_curl", "incline_hammer"], img: "Hammer_Curls", safety: "تحكم في النزول.",
  },
  {
    id: "incline_hammer", ar: "ثني المطرقة على مقعد مائل", en: "Incline Hammer Curl", desc: "ثني محايد مع دعم الجذع.",
    primary: ["brachialis", "brachioradialis"], secondary: ["biceps"], equipment: "dumbbell", pattern: "isolation", level: "beginner", compound: false,
    sets: 3, reps: [10, 15], rest: 60, loadMode: "per_dumbbell",
    steps: ["استلقِ على مقعد مائل.", "اثنِ المرفقين بقبضة محايدة.", "انزل ببطء."],
    breathing: ISO, mistakes: ["رفع الكتفين"], criteria: ["نطاق كامل"],
    alts: ["hammer_curl"], img: "Incline_Hammer_Curls", safety: "وزن معتدل.",
  },
  {
    id: "preacher_curl", ar: "ثني البايسبس على مقعد الواعظ", en: "Preacher Curl", desc: "ثني مع تثبيت الذراع لمنع الغش.",
    primary: ["biceps"], secondary: ["brachialis"], equipment: "barbell", pattern: "isolation", level: "beginner", compound: false,
    sets: 3, reps: [8, 12], rest: 75, loadMode: "total",
    steps: ["ضع ظهر الذراعين على الوسادة.", "اثنِ المرفقين.", "انزل ببطء دون قفل المرفق بقوة في الأسفل."],
    breathing: ISO, mistakes: ["النزول السريع في الأسفل"], criteria: ["تحكم كامل في الأسفل"],
    alts: ["bb_curl"], img: "Preacher_Curl", safety: "المرفق حساس في وضع الإطالة؛ لا ترتد.",
  },
  {
    id: "reverse_curl", ar: "الثني العكسي بالدمبل", en: "Reverse Dumbbell Curl", desc: "ثني بقبضة للأسفل لباسطات الرسغ والعضدية الكعبرية.",
    primary: ["brachioradialis", "wrist_ext"], secondary: ["brachialis", "biceps"], equipment: "dumbbell", pattern: "isolation", level: "beginner", compound: false,
    sets: 2, reps: [10, 15], rest: 60, loadMode: "per_dumbbell",
    steps: ["أمسك الدمبل والكفان للأسفل.", "اثنِ المرفقين.", "انزل ببطء."],
    breathing: ISO, mistakes: ["ثني الرسغ"], criteria: ["رسغ محايد"],
    alts: ["hammer_curl", "wrist_curl"], img: "Standing_Dumbbell_Reverse_Curl", safety: "وزن خفيف.",
  },
  {
    id: "wrist_curl", ar: "ثني الرسغ", en: "Wrist Curl", desc: "عزل لقابضات الرسغ.",
    primary: ["wrist_flex"], secondary: ["finger_flex", "grip"], equipment: "barbell", pattern: "isolation", level: "beginner", compound: false,
    sets: 2, reps: [12, 20], rest: 45, loadMode: "total",
    steps: ["ضع الساعدين على الفخذين أو المقعد والكفان للأعلى.", "اثنِ الرسغين للأعلى.", "انزل ببطء."],
    breathing: ISO, mistakes: ["رفع الساعدين"], criteria: ["الحركة من الرسغ فقط"],
    alts: ["reverse_curl", "farmers_walk"], img: "Palms-Up_Barbell_Wrist_Curl_Over_A_Bench", safety: "اختياري؛ أوقفه عند ألم في الرسغ أو المرفق.",
  },
  // ---------- LEGS ----------
  {
    id: "bb_squat", ar: "القرفصاء بالبار", en: "Barbell Back Squat", desc: "تمرين قرفصاء أساسي لرباعية الرؤوس والألوية.",
    primary: ["quads", "glute_max"], secondary: ["adductors", "erectors", "rectus_abd", "tva", "soleus"], equipment: "barbell", pattern: "squat", level: "intermediate", compound: true,
    sets: 3, reps: [5, 8], rest: 180, loadMode: "total",
    steps: ["ضع البار على أعلى الظهر والقدمان بعرض الكتفين.", "خذ نفسًا وثبّت البطن.", "انزل بثني الورك والركبة معًا حتى عمق مريح مع ظهر محايد.", "ادفع الأرض للصعود."],
    breathing: BRACE, mistakes: ["انهيار الركبتين للداخل", "رفع الكعبين", "تقوس أسفل الظهر في الأسفل"], criteria: ["الركبتان تتبعان أصابع القدم", "عمق ثابت في كل تكرار"],
    alts: ["hack_squat", "leg_press", "goblet_squat"], img: "Barbell_Squat", safety: "استخدم مساند الأمان في القفص دائمًا.",
  },
  {
    id: "hack_squat", ar: "القرفصاء على جهاز الهاك", en: "Hack Squat", desc: "قرفصاء على جهاز بمسار ثابت ودعم للظهر.",
    primary: ["quads"], secondary: ["glute_max", "adductors"], equipment: "machine", pattern: "squat", level: "beginner", compound: true,
    sets: 3, reps: [8, 12], rest: 150, loadMode: "total",
    steps: ["ضع الظهر على الوسادة والقدمان في منتصف المنصة.", "انزل بتحكم.", "ادفع للأعلى دون قفل الركبتين."],
    breathing: BRACE, mistakes: ["رفع الكعبين", "قفل الركبتين بقوة"], criteria: ["عمق ثابت"],
    alts: ["leg_press", "bb_squat"], img: "Hack_Squat", safety: "تأكد من فتح وإغلاق مقابض الأمان بشكل صحيح.",
  },
  {
    id: "leg_press", ar: "ضغط الأرجل", en: "Leg Press", desc: "دفع بالأرجل على جهاز بحمل عالٍ وخطر منخفض نسبيًا.",
    primary: ["quads", "glute_max"], secondary: ["adductors", "hamstrings"], equipment: "machine", pattern: "squat", level: "beginner", compound: true,
    sets: 3, reps: [8, 15], rest: 120, loadMode: "total",
    steps: ["اجلس والقدمان بعرض الكتفين على المنصة.", "أنزل المنصة حتى زاوية عميقة دون رفع الحوض عن المقعد.", "ادفع للأعلى دون قفل الركبتين."],
    breathing: BRACE, mistakes: ["رفع الحوض في الأسفل", "قفل الركبتين"], criteria: ["أسفل الظهر ملاصق للمقعد"],
    alts: ["hack_squat", "goblet_squat"], img: "Leg_Press", safety: "لا تقفل الركبتين أبدًا تحت الحمل.",
  },
  {
    id: "goblet_squat", ar: "قرفصاء الكأس", en: "Goblet Squat", desc: "قرفصاء بدمبل أمام الصدر، ممتازة للتعلم والإحماء.",
    primary: ["quads", "glute_max"], secondary: ["adductors", "rectus_abd", "tva"], equipment: "dumbbell", pattern: "squat", level: "beginner", compound: true,
    sets: 3, reps: [8, 15], rest: 90, loadMode: "per_dumbbell",
    steps: ["أمسك دمبلًا أمام الصدر.", "انزل بين الركبتين والجذع منتصب.", "ادفع للأعلى."],
    breathing: BRACE, mistakes: ["الميل للأمام"], criteria: ["جذع منتصب"],
    alts: ["leg_press", "bb_squat"], img: "Goblet_Squat", safety: "عمق مريح دون ألم.",
  },
  {
    id: "leg_ext", ar: "مد الركبة على الجهاز", en: "Leg Extension", desc: "عزل لرباعية الرؤوس.",
    primary: ["quads", "rec_fem"], secondary: [], equipment: "machine", pattern: "isolation", level: "beginner", compound: false,
    sets: 3, reps: [10, 15], rest: 60, loadMode: "total",
    steps: ["اضبط الجهاز حتى تتوافق الركبة مع محور الدوران.", "مد الركبتين.", "انزل ببطء."],
    breathing: ISO, mistakes: ["رفع الأرداف", "الارتداد"], criteria: ["توقف قصير في الأعلى"],
    alts: ["leg_press"], img: "Leg_Extensions", safety: "خفف الوزن عند ألم في مقدمة الركبة.",
  },
  {
    id: "rdl", ar: "الرفعة الرومانية", en: "Romanian Deadlift", desc: "مفصلة ورك لأوتار الركبة والألوية.",
    primary: ["hamstrings", "glute_max"], secondary: ["erectors", "adductors", "grip", "trap_upper"], equipment: "barbell", pattern: "hinge", level: "intermediate", compound: true,
    sets: 3, reps: [6, 10], rest: 150, loadMode: "total",
    steps: ["قف والبار أمام الفخذين والركبتان مثنيتان قليلًا.", "ادفع الورك للخلف وأنزل البار قريبًا من الساقين.", "انزل حتى تشعر بإطالة قوية مع ظهر محايد.", "ادفع الورك للأمام للعودة."],
    breathing: BRACE, mistakes: ["تقوس الظهر", "ثني الركبتين كثيرًا", "البار بعيد عن الجسم"], criteria: ["البار قريب من الساقين", "ظهر محايد"],
    alts: ["pull_through", "hip_thrust"], img: "Romanian_Deadlift", safety: "عمق النزول يحدده ثبات ظهرك، لا وصول البار للأرض.",
  },
  {
    id: "pull_through", ar: "السحب بين الساقين بالكيبل", en: "Cable Pull-Through", desc: "مفصلة ورك بحمل منخفض على الظهر.",
    primary: ["glute_max", "hamstrings"], secondary: ["erectors"], equipment: "cable", pattern: "hinge", level: "beginner", compound: true,
    sets: 3, reps: [10, 15], rest: 75, loadMode: "total",
    steps: ["أدر ظهرك للبكرة المنخفضة وأمسك الحبل بين الساقين.", "ادفع الورك للخلف.", "اقبض الألوية للوقوف."],
    breathing: ISO, mistakes: ["السحب بالذراعين"], criteria: ["الحركة من الورك"],
    alts: ["rdl", "hip_thrust"], img: "Pull_Through", safety: "ظهر محايد.",
  },
  {
    id: "lying_leg_curl", ar: "ثني الركبة مستلقيًا", en: "Lying Leg Curl", desc: "عزل لأوتار الركبة.",
    primary: ["hamstrings"], secondary: ["gastroc"], equipment: "machine", pattern: "isolation", level: "beginner", compound: false,
    sets: 3, reps: [10, 15], rest: 60, loadMode: "total",
    steps: ["استلقِ والوسادة فوق الكاحلين.", "اثنِ الركبتين.", "انزل ببطء."],
    breathing: ISO, mistakes: ["رفع الحوض"], criteria: ["نطاق كامل"],
    alts: ["seated_leg_curl"], img: "Lying_Leg_Curls", safety: "لا ترتد في الأسفل.",
  },
  {
    id: "seated_leg_curl", ar: "ثني الركبة جالسًا", en: "Seated Leg Curl", desc: "ثني الركبة بوضع إطالة أكبر لأوتار الركبة.",
    primary: ["hamstrings"], secondary: ["gastroc"], equipment: "machine", pattern: "isolation", level: "beginner", compound: false,
    sets: 3, reps: [10, 15], rest: 60, loadMode: "total",
    steps: ["اجلس وثبّت الفخذين.", "اثنِ الركبتين للأسفل.", "ارجع ببطء."],
    breathing: ISO, mistakes: ["الحركة السريعة"], criteria: ["تحكم كامل"],
    alts: ["lying_leg_curl"], img: "Seated_Leg_Curl", safety: "اضبط الجهاز على محور الركبة.",
  },
  {
    id: "hip_thrust", ar: "دفع الورك بالبار", en: "Barbell Hip Thrust", desc: "مد ورك مباشر للألوية الكبرى.",
    primary: ["glute_max"], secondary: ["hamstrings", "glute_med", "adductors"], equipment: "barbell", pattern: "hinge", level: "beginner", compound: true,
    sets: 3, reps: [8, 12], rest: 120, loadMode: "total",
    steps: ["ضع أعلى الظهر على مقعد والبار على الورك مع وسادة.", "ادفع الورك للأعلى حتى يصبح الجسم مستقيمًا.", "انزل بتحكم."],
    breathing: BRACE, mistakes: ["تقويس أسفل الظهر في الأعلى"], criteria: ["الحوض مائل قليلًا للخلف في الأعلى"],
    alts: ["glute_bridge", "pull_through"], img: "Barbell_Hip_Thrust", safety: "استخدم وسادة للبار.",
  },
  {
    id: "glute_bridge", ar: "جسر الألوية", en: "Glute Bridge", desc: "دفع ورك من الأرض.",
    primary: ["glute_max"], secondary: ["hamstrings"], equipment: "barbell", pattern: "hinge", level: "beginner", compound: true,
    sets: 3, reps: [10, 15], rest: 90, loadMode: "total",
    steps: ["استلقِ والركبتان مثنيتان.", "ادفع الورك للأعلى.", "انزل ببطء."],
    breathing: ISO, mistakes: ["الدفع بالظهر"], criteria: ["انقباض الألوية"],
    alts: ["hip_thrust"], img: "Barbell_Glute_Bridge", safety: "يمكن أداؤه دون وزن.",
  },
  {
    id: "split_squat", ar: "القرفصاء المنقسمة بالدمبل", en: "Dumbbell Split Squat", desc: "تمرين رجل واحدة للفخذ والألوية والتوازن.",
    primary: ["quads", "glute_max"], secondary: ["glute_med", "adductors", "pelvic_stab", "foot"], equipment: "dumbbell", pattern: "lunge", level: "beginner", compound: true,
    sets: 3, reps: [8, 12], rest: 90, loadMode: "per_dumbbell",
    steps: ["قف بوضع خطوة طويلة والدمبل بجانبيك.", "انزل بالركبة الخلفية نحو الأرض.", "ادفع بالقدم الأمامية للصعود.", "أكمل جهة ثم بدّل."],
    breathing: BRACE, mistakes: ["انهيار الركبة للداخل", "خطوة قصيرة جدًا"], criteria: ["جذع منتصب", "توازن ثابت"],
    alts: ["db_lunge", "leg_press"], img: "Split_Squat_with_Dumbbells", safety: "التكرارات لكل رجل.",
  },
  {
    id: "db_lunge", ar: "الطعن بالدمبل", en: "Dumbbell Lunge", desc: "طعن للأمام مع العودة.",
    primary: ["quads", "glute_max"], secondary: ["glute_med", "adductors", "pelvic_stab"], equipment: "dumbbell", pattern: "lunge", level: "beginner", compound: true,
    sets: 3, reps: [8, 12], rest: 90, loadMode: "per_dumbbell",
    steps: ["قف والدمبل بجانبيك.", "خطوة للأمام وانزل.", "ادفع للعودة."],
    breathing: BRACE, mistakes: ["فقدان التوازن"], criteria: ["الركبة فوق القدم"],
    alts: ["split_squat"], img: "Dumbbell_Lunges", safety: "التكرارات لكل رجل.",
  },
  {
    id: "abductor", ar: "جهاز إبعاد الورك", en: "Hip Abduction Machine", desc: "عزل لمبعدات الورك والألوية الوسطى.",
    primary: ["abductors", "glute_med"], secondary: ["glute_min"], equipment: "machine", pattern: "isolation", level: "beginner", compound: false,
    sets: 2, reps: [12, 20], rest: 60, loadMode: "total",
    steps: ["اجلس والوسائد خارج الركبتين.", "افتح الفخذين.", "ارجع ببطء."],
    breathing: ISO, mistakes: ["الارتداد"], criteria: ["تحكم"],
    alts: ["split_squat"], img: "Thigh_Abductor", safety: "اختياري.",
  },
  {
    id: "adductor", ar: "جهاز تقريب الورك", en: "Hip Adduction Machine", desc: "عزل لمقربات الورك.",
    primary: ["adductors"], secondary: [], equipment: "machine", pattern: "isolation", level: "beginner", compound: false,
    sets: 2, reps: [12, 20], rest: 60, loadMode: "total",
    steps: ["اجلس والوسائد داخل الركبتين.", "قرّب الفخذين.", "ارجع ببطء."],
    breathing: ISO, mistakes: ["نطاق فتح مفرط"], criteria: ["تحكم"],
    alts: ["goblet_squat"], img: "Thigh_Adductor", safety: "ابدأ بنطاق فتح مريح.",
  },
  {
    id: "standing_calf", ar: "رفع السمانة واقفًا", en: "Standing Calf Raise", desc: "عزل للسمانة التوأمية.",
    primary: ["gastroc"], secondary: ["soleus", "foot"], equipment: "machine", pattern: "isolation", level: "beginner", compound: false,
    sets: 3, reps: [10, 15], rest: 60, loadMode: "total",
    steps: ["قف ومشط القدم على الحافة والركبتان ممدودتان.", "انزل حتى إطالة كاملة.", "ارتفع لأعلى نقطة ممكنة."],
    breathing: ISO, mistakes: ["الارتداد السريع", "نطاق قصير"], criteria: ["توقف في الأسفل والأعلى"],
    alts: ["seated_calf"], img: "Standing_Calf_Raises", safety: "توقف قصير في الأسفل يحمي وتر العرقوب.",
  },
  {
    id: "seated_calf", ar: "رفع السمانة جالسًا", en: "Seated Calf Raise", desc: "يركز على العضلة النعلية.",
    primary: ["soleus"], secondary: ["gastroc"], equipment: "machine", pattern: "isolation", level: "beginner", compound: false,
    sets: 3, reps: [12, 20], rest: 60, loadMode: "total",
    steps: ["اجلس والوسادة فوق الركبتين.", "انزل حتى إطالة كاملة.", "ارتفع."],
    breathing: ISO, mistakes: ["نطاق قصير"], criteria: ["حركة كاملة"],
    alts: ["standing_calf"], img: "Seated_Calf_Raise", safety: "تحكم كامل.",
  },
  // ---------- CORE ----------
  {
    id: "plank", ar: "البلانك", en: "Plank", desc: "ثبات للجذع ضد التقوس.",
    primary: ["rectus_abd", "tva"], secondary: ["ext_obl", "int_obl", "serratus", "multifidus"], equipment: "bodyweight", pattern: "core_anti", level: "beginner", compound: false,
    sets: 3, reps: [20, 45], rest: 60, loadMode: "time",
    steps: ["استند على الساعدين وأصابع القدم.", "شد البطن والألوية والجسم مستقيم.", "حافظ على الوضع."],
    breathing: "تنفس طبيعي مع إبقاء البطن مشدودة.", mistakes: ["هبوط الحوض", "رفع الأرداف كثيرًا"], criteria: ["خط مستقيم"],
    alts: ["dead_bug", "ab_roller"], img: "Plank", safety: "التكرارات بالثواني. أوقف عند ألم أسفل الظهر.",
  },
  {
    id: "side_bridge", ar: "الجسر الجانبي", en: "Side Plank", desc: "ثبات جانبي للمائلات والمربعة القطنية.",
    primary: ["ext_obl", "int_obl"], secondary: ["ql", "glute_med", "tva"], equipment: "bodyweight", pattern: "core_anti", level: "beginner", compound: false,
    sets: 2, reps: [20, 40], rest: 45, loadMode: "time",
    steps: ["استند على ساعد واحد وجانب القدم.", "ارفع الحوض حتى يستقيم الجسم.", "حافظ ثم بدّل الجهة."],
    breathing: "تنفس طبيعي.", mistakes: ["هبوط الحوض"], criteria: ["جسم مستقيم"],
    alts: ["pallof"], img: "Side_Bridge", safety: "بالثواني لكل جهة.",
  },
  {
    id: "dead_bug", ar: "الحشرة الميتة", en: "Dead Bug", desc: "تحكم في الجذع مع حركة الأطراف.",
    primary: ["tva", "rectus_abd"], secondary: ["multifidus", "hip_flex"], equipment: "bodyweight", pattern: "core_anti", level: "beginner", compound: false,
    sets: 2, reps: [8, 12], rest: 45, loadMode: "bodyweight",
    steps: ["استلقِ على الظهر والذراعان والركبتان للأعلى.", "مد ذراعًا والرجل المقابلة ببطء.", "ارجع وبدّل."],
    breathing: "زفير أثناء مد الأطراف.", mistakes: ["تقوس أسفل الظهر"], criteria: ["أسفل الظهر ملاصق للأرض"],
    alts: ["plank"], img: "Dead_Bug", safety: "مناسب للإحماء.",
  },
  {
    id: "cable_crunch", ar: "طحن البطن بالكيبل", en: "Cable Crunch", desc: "ثني للجذع بمقاومة قابلة للزيادة.",
    primary: ["rectus_abd"], secondary: ["ext_obl", "int_obl"], equipment: "cable", pattern: "core_flex", level: "beginner", compound: false,
    sets: 3, reps: [10, 15], rest: 60, loadMode: "total",
    steps: ["اجثُ أمام البكرة العالية والحبل بجانب الرأس.", "اثنِ الجذع لتقريب الأضلاع من الحوض.", "ارجع ببطء."],
    breathing: "زفير أثناء الثني.", mistakes: ["السحب بالذراعين", "الجلوس على الكعبين"], criteria: ["الحركة من البطن"],
    alts: ["hanging_leg_raise", "ab_roller"], img: "Cable_Crunch", safety: "تجنب سحب الرقبة.",
  },
  {
    id: "hanging_leg_raise", ar: "رفع الأرجل معلقًا", en: "Hanging Leg Raise", desc: "ثني للحوض مع مشاركة مثنيات الورك.",
    primary: ["rectus_abd", "hip_flex"], secondary: ["ext_obl", "grip"], equipment: "bodyweight", pattern: "core_flex", level: "intermediate", compound: false,
    sets: 3, reps: [8, 15], rest: 75, loadMode: "bodyweight",
    steps: ["تعلّق بالعقلة.", "ارفع الركبتين أو الأرجل مع ثني الحوض.", "انزل ببطء دون تأرجح."],
    breathing: "زفير أثناء الرفع.", mistakes: ["التأرجح"], criteria: ["تحكم في النزول"],
    alts: ["cable_crunch", "dead_bug"], img: "Hanging_Leg_Raise", safety: "ابدأ برفع الركبتين المثنيتين.",
  },
  {
    id: "pallof", ar: "ضغط بالوف", en: "Pallof Press", desc: "مقاومة الدوران بالكيبل للمائلات.",
    primary: ["ext_obl", "int_obl"], secondary: ["tva", "rectus_abd", "pelvic_stab"], equipment: "cable", pattern: "core_anti", level: "beginner", compound: false,
    sets: 3, reps: [10, 12], rest: 60, loadMode: "total",
    steps: ["قف بجانب البكرة والمقبض أمام الصدر.", "ادفع المقبض للأمام وقاوم الدوران.", "ارجع ببطء. أكمل الجهة ثم بدّل."],
    breathing: "زفير أثناء الدفع.", mistakes: ["دوران الجذع"], criteria: ["الجذع ثابت"],
    alts: ["side_bridge"], img: "Pallof_Press", safety: "التكرارات لكل جهة.",
  },
  {
    id: "ab_roller", ar: "عجلة البطن", en: "Ab Wheel Rollout", desc: "مقاومة التقوس بمدى حركة كبير.",
    primary: ["rectus_abd", "tva"], secondary: ["lats", "ext_obl", "serratus"], equipment: "bodyweight", pattern: "core_anti", level: "advanced", compound: false,
    sets: 3, reps: [6, 12], rest: 75, loadMode: "bodyweight",
    steps: ["اجثُ والعجلة أمامك.", "تدحرج للأمام مع إبقاء الظهر محايدًا.", "ارجع بشد البطن."],
    breathing: "شهيق للأمام وزفير للعودة.", mistakes: ["تقوس أسفل الظهر"], criteria: ["مدى يناسب التحكم"],
    alts: ["plank", "dead_bug"], img: "Ab_Roller", safety: "متقدم؛ لا يناسب من لديه ألم أسفل الظهر.",
  },
];

export const EXERCISE_BY_ID: Record<string, Exercise> = Object.fromEntries(EXERCISES.map((e) => [e.id, e]));

/** Warm-up movements (reference only, not logged as working sets). */
export const WARMUP = {
  general: ["5–8 دقائق مشي سريع أو دراجة أو جهاز التجديف بجهد خفيف.", "الهدف رفع حرارة الجسم دون إرهاق."],
  prep: [
    { ar: "دوائر الذراعين", en: "Arm Circles", img: "Arm_Circles" },
    { ar: "فتح الحبل المطاطي", en: "Band Pull Apart", img: "Band_Pull_Apart" },
    { ar: "قرفصاء بوزن الجسم", en: "Bodyweight Squat", img: "Bodyweight_Squat" },
    { ar: "تمدد القط", en: "Cat Stretch", img: "Cat_Stretch" },
    { ar: "دوائر الورك", en: "Standing Hip Circles", img: "Standing_Hip_Circles" },
  ],
  ramp: [
    "للتمرين المركب الأول: 2–3 مجموعات تمهيدية بأوزان متصاعدة.",
    "مثال: 40٪ × 8، ثم 60٪ × 5، ثم 80٪ × 3 من وزن العمل المخطط.",
    "التمارين اللاحقة لنفس العضلة غالبًا لا تحتاج تمهيدًا طويلًا.",
  ],
};
