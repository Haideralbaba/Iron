export type Region = "chest" | "back" | "shoulders" | "arms" | "legs" | "core" | "neck" | "stabilizers";

export type MuscleCategory = "major" | "sub" | "stabilizer" | "small";

export interface Muscle {
  id: string;
  ar: string;
  en: string;
  region: Region;
  category: MuscleCategory;
  /** parent group id when this is a head/sub-region */
  parent?: string;
  fn: string;
  notes: string;
  /** whether the default program tracks a weekly set target for it */
  tracked: boolean;
}

export const REGIONS: { id: Region; ar: string; en: string }[] = [
  { id: "chest", ar: "الصدر", en: "Chest" },
  { id: "back", ar: "الظهر", en: "Back" },
  { id: "shoulders", ar: "الأكتاف", en: "Shoulders" },
  { id: "arms", ar: "الذراعان", en: "Arms" },
  { id: "legs", ar: "الأرجل", en: "Legs" },
  { id: "core", ar: "الجذع", en: "Core" },
  { id: "neck", ar: "الرقبة", en: "Neck" },
  { id: "stabilizers", ar: "عضلات التثبيت", en: "Stabilizers" },
];

export const CATEGORY_AR: Record<MuscleCategory, string> = {
  major: "عضلة رئيسية",
  sub: "رأس أو منطقة فرعية",
  stabilizer: "عضلة تثبيت",
  small: "عضلة صغيرة",
};

const m = (
  id: string,
  ar: string,
  en: string,
  region: Region,
  category: MuscleCategory,
  fn: string,
  notes: string,
  tracked = false,
  parent?: string,
): Muscle => ({ id, ar, en, region, category, fn, notes, tracked, ...(parent ? { parent } : {}) });

export const MUSCLES: Muscle[] = [
  // Chest
  m("pec_major", "الصدرية الكبرى", "Pectoralis Major", "chest", "major", "تقريب الذراع ودورانها للداخل ودفعها للأمام.", "تُدرَّب بتمارين الضغط والتفتيح. لا تُنزل الوزن أعمق مما يسمح به كتفك دون ألم.", true),
  m("pec_clav", "الرأس الترقوي للصدر", "Clavicular Head", "chest", "sub", "رفع الذراع للأمام ولأعلى مع التقريب.", "الضغط المائل بزاوية 15–30 درجة يزيد مشاركته؛ لا يلزم عزله بتمرين مستقل.", false, "pec_major"),
  m("pec_stern", "الجزء القصي/الضلعي للصدر", "Sternal/Costal Regions", "chest", "sub", "تقريب الذراع ومدها من وضع مرتفع.", "يعمل بقوة في الضغط المستوي والمتوازي.", false, "pec_major"),
  m("pec_minor", "الصدرية الصغرى", "Pectoralis Minor", "chest", "small", "خفض لوح الكتف وسحبه للأمام.", "تعمل ضمنيًا في الضغط والمتوازي؛ لا تحتاج تمرينًا مستقلًا.", false),
  // Back
  m("lats", "العضلة الظهرية العريضة", "Latissimus Dorsi", "back", "major", "سحب الذراع للأسفل وللخلف وتقريبها.", "السحب العمودي والأفقي يغطيها. ابدأ الحركة من الكتف لا من الذراع فقط.", true),
  m("trap_upper", "الترابيس العلوية", "Upper Trapezius", "back", "sub", "رفع لوح الكتف ودورانه للأعلى.", "تمارين الهز (Shrug) بأوزان معتدلة؛ تجنب لف الكتفين.", true, "traps"),
  m("trap_mid", "الترابيس الوسطى", "Middle Trapezius", "back", "sub", "تقريب لوحي الكتف.", "تعمل في التجديف والسحب للوجه.", false, "traps"),
  m("trap_lower", "الترابيس السفلية", "Lower Trapezius", "back", "sub", "خفض لوح الكتف ودورانه للأعلى.", "تعمل في السحب العمودي والسحب للوجه.", false, "traps"),
  m("rhomboids", "المعينية", "Rhomboids", "back", "small", "تقريب لوحي الكتف ورفعهما.", "تعمل في كل تمارين التجديف؛ لا تحتاج عزلًا.", false),
  m("erectors", "ناصبة العمود الفقري", "Erector Spinae", "back", "major", "بسط العمود الفقري وتثبيته.", "تعمل بقوة في الرفعة الرومانية والتجديف المنحني. حافظ على ظهر محايد.", true),
  m("teres_major", "المدورة الكبرى", "Teres Major", "back", "small", "تقريب الذراع وتدويرها للداخل.", "تعمل مع الظهرية العريضة.", false),
  m("teres_minor", "المدورة الصغرى", "Teres Minor", "back", "small", "تدوير الذراع للخارج (من الكفة المدورة).", "تعمل في السحب للوجه والتفتيح الخلفي.", false, "rotator_cuff"),
  m("infraspinatus", "تحت الشوكة", "Infraspinatus", "back", "small", "تدوير الذراع للخارج وتثبيت مفصل الكتف.", "تُدرَّب بأوزان خفيفة جدًا؛ توقف عند أي ألم في الكتف.", false, "rotator_cuff"),
  m("supraspinatus", "فوق الشوكة", "Supraspinatus", "back", "small", "بدء رفع الذراع جانبيًا وتثبيت رأس العضد.", "تشارك في الرفرفة الجانبية؛ تجنب رفع الذراع فوق مستوى الألم.", false, "rotator_cuff"),
  m("scap_stab", "مثبتات لوح الكتف", "Scapular Stabilizers", "stabilizers", "stabilizer", "التحكم في حركة لوح الكتف ووضعه.", "تتحسن بالتحكم الجيد في التجديف والضغط وتمارين Band Pull Apart.", false),
  // Shoulders
  m("delt_front", "الدالية الأمامية", "Anterior Deltoid", "shoulders", "major", "رفع الذراع للأمام.", "تعمل كثيرًا في تمارين الصدر والضغط فوق الرأس؛ غالبًا لا تحتاج تمرينًا إضافيًا.", true),
  m("delt_side", "الدالية الجانبية", "Lateral Deltoid", "shoulders", "major", "رفع الذراع جانبيًا.", "الرفرفة الجانبية بوزن خفيف وتحكم كامل هي التمرين الأساسي لها.", true),
  m("delt_rear", "الدالية الخلفية", "Posterior Deltoid", "shoulders", "major", "مد الذراع أفقيًا للخلف وتدويرها للخارج.", "السحب للوجه والتفتيح العكسي. تعمل أيضًا في التجديف.", true),
  m("rotator_cuff", "الكفة المدورة", "Rotator Cuff Muscles", "shoulders", "stabilizer", "تثبيت رأس العضد داخل مفصل الكتف.", "أربع عضلات: فوق الشوكة، تحت الشوكة، المدورة الصغرى، تحت الكتف. لا تُحمَّل بأوزان ثقيلة.", false),
  // Arms
  m("biceps", "العضلة ذات الرأسين", "Biceps Brachii", "arms", "major", "ثني المرفق وتدوير الساعد للخارج.", "تعمل في كل تمارين السحب، وتمارين الثني تضيف حجمًا مباشرًا.", true),
  m("brachialis", "العضدية", "Brachialis", "arms", "major", "ثني المرفق في كل أوضاع الساعد.", "تمرين المطرقة (Hammer) والثني العكسي يزيدان مشاركتها.", false),
  m("triceps", "العضلة ثلاثية الرؤوس", "Triceps Brachii", "arms", "major", "مد المرفق؛ الرأس الطويل يشارك في مد الكتف.", "تعمل في كل تمارين الضغط. حافظ على ثبات المرفقين.", true),
  m("tri_long", "الرأس الطويل للترايسبس", "Triceps Long Head", "arms", "sub", "مد المرفق ومد الكتف.", "التمارين فوق الرأس تضعها في وضع إطالة.", false, "triceps"),
  m("tri_lat", "الرأس الجانبي للترايسبس", "Triceps Lateral Head", "arms", "sub", "مد المرفق.", "يعمل بقوة في الدفع للأسفل والضغط الضيق.", false, "triceps"),
  m("tri_med", "الرأس الإنسي للترايسبس", "Triceps Medial Head", "arms", "sub", "مد المرفق في كل الزوايا.", "يعمل في كل تمارين الترايسبس.", false, "triceps"),
  m("brachioradialis", "العضدية الكعبرية", "Brachioradialis", "arms", "major", "ثني المرفق في وضع محايد.", "الثني بالمطرقة والثني العكسي.", false),
  m("wrist_flex", "قابضات الرسغ", "Wrist Flexors", "arms", "small", "ثني الرسغ.", "ثني الرسغ بوزن خفيف؛ تتعب بسرعة فلا تبالغ.", false),
  m("wrist_ext", "باسطات الرسغ", "Wrist Extensors", "arms", "small", "بسط الرسغ.", "الثني العكسي وثني الرسغ العكسي. مفيدة لتوازن المرفق.", false),
  m("finger_flex", "قابضات وباسطات الأصابع", "Finger Flexors and Extensors", "arms", "small", "إغلاق وفتح الأصابع.", "تعمل في كل حمل للوزن.", false),
  m("grip", "عضلات القبضة", "Grip Muscles", "arms", "stabilizer", "الإمساك بالأوزان وتثبيتها.", "مشي المزارع والتعلق بالعقلة يقويانها دون تمرين عزل.", true),
  // Legs
  m("quads", "رباعية الرؤوس", "Quadriceps", "legs", "major", "مد الركبة؛ المستقيمة الفخذية تثني الورك أيضًا.", "القرفصاء والضغط بالأرجل ومد الركبة. ركبتك تتبع اتجاه أصابع القدم.", true),
  m("rec_fem", "المستقيمة الفخذية", "Rectus Femoris", "legs", "sub", "مد الركبة وثني الورك.", "مد الركبة على الجهاز يزيد مشاركتها.", false, "quads"),
  m("vas_lat", "المتسعة الوحشية", "Vastus Lateralis", "legs", "sub", "مد الركبة.", "تعمل في كل تمارين القرفصاء.", false, "quads"),
  m("vas_med", "المتسعة الإنسية", "Vastus Medialis", "legs", "sub", "مد الركبة وتثبيت الرضفة.", "النطاق الكامل للحركة مفيد لها.", false, "quads"),
  m("vas_int", "المتسعة المتوسطة", "Vastus Intermedius", "legs", "sub", "مد الركبة.", "عضلة عميقة تعمل مع بقية الرباعية.", false, "quads"),
  m("hamstrings", "أوتار الركبة الخلفية", "Hamstrings", "legs", "major", "ثني الركبة ومد الورك.", "تحتاج حركة ثني ركبة (Leg Curl) وحركة مد ورك (RDL) لتغطيتها جيدًا.", true),
  m("glute_max", "الألوية الكبرى", "Gluteus Maximus", "legs", "major", "مد الورك وتدويره للخارج.", "دفع الورك والقرفصاء والطعن.", true),
  m("glute_med", "الألوية الوسطى", "Gluteus Medius", "legs", "major", "إبعاد الورك وتثبيت الحوض.", "تعمل في الطعن وتمارين الرجل الواحدة؛ جهاز الإبعاد يضيف حجمًا مباشرًا.", true),
  m("glute_min", "الألوية الصغرى", "Gluteus Minimus", "legs", "small", "إبعاد الورك وتثبيته.", "تعمل مع الألوية الوسطى.", false),
  m("adductors", "مقربات الورك", "Hip Adductors", "legs", "major", "تقريب الفخذ ومساعدة مد الورك.", "تعمل بقوة في القرفصاء العميقة؛ جهاز التقريب اختياري.", false),
  m("abductors", "مبعدات الورك", "Hip Abductors", "legs", "major", "إبعاد الفخذ.", "تشمل الألوية الوسطى والصغرى وموتّرة اللفافة العريضة.", false),
  m("hip_flex", "مثنيات الورك", "Hip Flexors", "legs", "major", "ثني الورك.", "تعمل في رفع الأرجل المعلقة؛ لا تحتاج حجمًا كبيرًا.", false),
  m("gastroc", "عضلة الساق التوأمية", "Gastrocnemius", "legs", "major", "ثني الكاحل للأسفل وثني الركبة.", "رفع السمانة واقفًا والركبة ممدودة.", true),
  m("soleus", "العضلة النعلية", "Soleus", "legs", "major", "ثني الكاحل للأسفل.", "رفع السمانة جالسًا والركبة مثنية يزيد مشاركتها.", true),
  m("tib_ant", "الظنبوبية الأمامية", "Tibialis Anterior", "legs", "small", "رفع مشط القدم.", "لا يتضمنها البرنامج الافتراضي كتمرين مستقل؛ تعمل في التوازن والمشي.", false),
  m("foot", "عضلات القدم", "Foot Muscles", "legs", "stabilizer", "دعم قوس القدم والتوازن.", "تعمل في تمارين الوقوف والرجل الواحدة.", false),
  // Core
  m("rectus_abd", "المستقيمة البطنية", "Rectus Abdominis", "core", "major", "ثني الجذع ومقاومة تقوس أسفل الظهر.", "Cable Crunch ورفع الأرجل والبلانك.", true),
  m("ext_obl", "المائلة الخارجية", "External Obliques", "core", "major", "الدوران والميل الجانبي ومقاومتهما.", "Pallof Press والجسر الجانبي.", true),
  m("int_obl", "المائلة الداخلية", "Internal Obliques", "core", "major", "الدوران والميل الجانبي.", "تعمل مع المائلة الخارجية.", false),
  m("tva", "المستعرضة البطنية", "Transverse Abdominis", "core", "stabilizer", "شد جدار البطن وزيادة الضغط داخل البطن.", "تعمل في البلانك والتنفس المضبوط أثناء الرفعات.", false),
  m("multifidus", "متعددة الشق", "Multifidus", "core", "stabilizer", "تثبيت فقرات العمود الفقري.", "تعمل في الحفاظ على ظهر محايد.", false),
  m("ql", "المربعة القطنية", "Quadratus Lumborum", "core", "stabilizer", "الميل الجانبي وتثبيت الحوض.", "مشي المزارع والجسر الجانبي.", false),
  m("pelvic_stab", "مثبتات الحوض", "Pelvic Stabilizers", "core", "stabilizer", "التحكم في وضع الحوض.", "تعمل في تمارين الرجل الواحدة.", false),
  // Neck
  m("scm", "القصية الترقوية الخشائية", "Sternocleidomastoid", "neck", "major", "ثني الرقبة ودوران الرأس.", "لا يتضمن البرنامج الافتراضي تمارين رقبة بأوزان. استشر مختصًا قبل تحميلها.", false),
  m("neck_deep", "عضلات الرقبة العميقة", "Deep Neck Muscles", "neck", "stabilizer", "تثبيت الفقرات العنقية.", "تعمل في الحفاظ على وضع الرأس المحايد أثناء الرفعات.", false),
  m("neck_move", "عضلات الثني والبسط والميل الجانبي للرقبة", "Neck Flexors, Extensors & Lateral Flexors", "neck", "stabilizer", "تحريك الرأس في كل الاتجاهات.", "الترابيس العلوية تشارك في بسط الرقبة. لا أوزان ثقيلة على الرأس.", false),
  // Extras
  m("serratus", "المنشارية الأمامية", "Serratus Anterior", "stabilizers", "stabilizer", "سحب لوح الكتف للأمام وتدويره للأعلى.", "تعمل في الضغط والضغط فوق الرأس.", false),
  m("joint_stab", "عضلات التثبيت العميقة للمفاصل", "Deep Joint Stabilizers", "stabilizers", "stabilizer", "تثبيت المفاصل أثناء الحركة.", "تتحسن بالأداء المتحكم فيه؛ لا تُعزل.", false),
];

export const MUSCLE_BY_ID: Record<string, Muscle> = Object.fromEntries(MUSCLES.map((x) => [x.id, x]));

/** Weekly direct-set target band per tracked muscle (beginner/intermediate starting point). */
export const WEEKLY_TARGET = { min: 6, max: 16 };
