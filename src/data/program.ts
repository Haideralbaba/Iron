export interface PlanItem {
  uid: string;
  exerciseId: string;
  sets: number;
  repsMin: number;
  repsMax: number;
  rest: number;
}

export interface PlanDay {
  /** JS getDay(): 6 = Saturday ... 4 = Thursday, 5 = Friday */
  weekday: number;
  key: string;
  ar: string;
  title: string;
  focus: string;
  rest: boolean;
  items: PlanItem[];
}

export const WEEK_ORDER = [6, 0, 1, 2, 3, 4, 5];

export const WEEKDAY_AR: Record<number, string> = {
  6: "السبت",
  0: "الأحد",
  1: "الاثنين",
  2: "الثلاثاء",
  3: "الأربعاء",
  4: "الخميس",
  5: "الجمعة",
};

type Row = [string, number, number, number, number];

const day = (weekday: number, key: string, title: string, focus: string, rows: Row[]): PlanDay => ({
  weekday,
  key,
  ar: WEEKDAY_AR[weekday] ?? "",
  title,
  focus,
  rest: rows.length === 0,
  items: rows.map(([exerciseId, sets, repsMin, repsMax, rest], i) => ({
    uid: `${key}-${i}`,
    exerciseId,
    sets,
    repsMin,
    repsMax,
    rest,
  })),
});

export function defaultProgram(): PlanDay[] {
  return [
    day(6, "push_a", "Push A", "الصدر والأكتاف والترايسبس", [
      ["bb_bench", 3, 6, 10, 150],
      ["incline_db", 3, 8, 12, 120],
      ["seated_db_press", 2, 8, 12, 120],
      ["lateral_raise", 3, 12, 20, 60],
      ["pushdown", 3, 10, 15, 60],
      ["overhead_cable_ext", 2, 10, 15, 60],
    ]),
    day(0, "pull_a", "Pull A", "الظهر والترابيس والبايسبس والساعد والقبضة", [
      ["lat_pulldown", 3, 8, 12, 120],
      ["bb_row", 3, 6, 10, 150],
      ["cable_row", 2, 8, 12, 90],
      ["bb_shrug", 2, 10, 15, 75],
      ["bb_curl", 3, 8, 12, 75],
      ["farmers_walk", 2, 30, 45, 90],
    ]),
    day(1, "legs_a", "Legs A", "الفخذ والألوية والسمانة والجذع", [
      ["bb_squat", 3, 5, 8, 180],
      ["rdl", 3, 6, 10, 150],
      ["leg_press", 2, 10, 15, 120],
      ["lying_leg_curl", 3, 10, 15, 60],
      ["standing_calf", 3, 10, 15, 60],
      ["plank", 2, 20, 45, 60],
    ]),
    day(2, "push_b", "Push B", "الصدر والأكتاف والترايسبس بزوايا مختلفة", [
      ["incline_bb", 3, 6, 10, 150],
      ["machine_press", 3, 8, 12, 90],
      ["arnold", 2, 8, 12, 120],
      ["cable_cross", 2, 10, 15, 75],
      ["seated_lateral", 3, 12, 20, 60],
      ["lying_tri", 3, 8, 12, 75],
    ]),
    day(3, "pull_b", "Pull B", "الظهر والدالية الخلفية والترابيس والذراعان والساعد", [
      ["pullups", 3, 5, 10, 150],
      ["db_row", 3, 8, 12, 90],
      ["face_pull", 3, 12, 20, 60],
      ["reverse_fly", 2, 12, 20, 60],
      ["hammer_curl", 3, 10, 15, 60],
      ["reverse_curl", 2, 10, 15, 60],
    ]),
    day(4, "legs_b", "Legs B + Core", "الأرجل والألوية والسمانة والبطن والجذع", [
      ["hack_squat", 3, 8, 12, 150],
      ["hip_thrust", 3, 8, 12, 120],
      ["split_squat", 2, 8, 12, 90],
      ["seated_leg_curl", 3, 10, 15, 60],
      ["seated_calf", 3, 12, 20, 60],
      ["cable_crunch", 3, 10, 15, 60],
      ["pallof", 2, 10, 12, 60],
    ]),
    day(5, "rest", "راحة", "يوم راحة وتعافٍ", []),
  ];
}
