// Run once to seed the locked Original PPR snapshot from the 8/6/2026
// "PPR Top 200" chart: pnpm migrate:play2winff:seed-original-ppr
// Requires TURSO_DATABASE_URL / TURSO_AUTH_TOKEN in the environment (e.g. via .env.local).
//
// Refuses to run if an Original PPR snapshot already exists — Original is
// meant to be set exactly once (see lib/server/rankings.ts commitSnapshot).
import { config } from 'dotenv';
import { resolve } from 'path';
import { createClient } from '@libsql/client';

config({ path: resolve(__dirname, '../../../.env.local') });

const url = process.env.TURSO_DATABASE_URL;
const authToken = process.env.TURSO_AUTH_TOKEN;

if (!url || !authToken) {
  console.error(
    'Missing TURSO_DATABASE_URL or TURSO_AUTH_TOKEN — copy .env.example to .env.local and fill them in.'
  );
  process.exit(1);
}

const db = createClient({ url, authToken });

// rank, name, positional-rank token (e.g. "RB1") — this chart has no team
// column. Transcribed from the attached "PPR Top 200" chart, 8/6/2026.
const RAW = `
1	Jahmyr Gibbs	RB1
2	Bijan Robinson	RB2
3	Christian McCaffrey	RB3
4	Ja'Marr Chase	WR1
5	Jaxon Smith-Njigba	WR2
6	Puka Nacua	WR3
7	Jonathan Taylor	RB4
8	James Cook	RB5
9	Saquon Barkley	RB6
10	De'Von Achane	RB7
11	Amon-Ra St. Brown	WR4
12	CeeDee Lamb	WR5
13	Justin Jefferson	WR6
14	Drake London	WR7
15	Nico Collins	WR8
16	Ashton Jeanty	RB8
17	Chase Brown	RB9
18	A.J. Brown	WR9
19	DeVonta Smith	WR10
20	Kyren Williams	RB10
21	Derrick Henry	RB11
22	Chris Olave	WR11
23	Zay Flowers	WR12
24	Kenneth Walker	RB12
25	Breece Hall	RB13
26	George Pickens	WR13
27	Rashee Rice	WR14
28	Tee Higgins	WR15
29	Tetairoa McMillan	WR16
30	Trey McBride	TE1
31	Brock Bowers	TE2
32	Josh Jacobs	RB14
33	Javonte Williams	RB15
34	Jeremiyah Love	RB16
35	Omarion Hampton	RB17
36	Josh Allen	QB1
37	Quinshon Judkins	RB18
38	Bucky Irving	RB19
39	Travis Etienne	RB20
40	Terry McLaurin	WR17
41	Jameson Williams	WR18
42	Davante Adams	WR19
43	Emeka Egbuka	WR20
44	Rome Odunze	WR21
45	Ladd McConkey	WR22
46	Jaylen Waddle	WR23
47	Lamar Jackson	QB2
48	D.J. Moore	WR24
49	Luther Burden	WR25
50	Garrett Wilson	WR26
51	Malik Nabers	WR27
52	Courtland Sutton	WR28
53	TreVeyon Henderson	RB21
54	D'Andre Swift	RB22
55	Cam Skattebo	RB23
56	David Montgomery	RB24
57	Carnell Tate	WR29
58	Christian Watson	WR30
59	Parker Washington	WR31
60	Joe Burrow	QB3
61	Drake Maye	QB4
62	Tucker Kraft	TE3
63	Sam LaPorta	TE4
64	Tyler Warren	TE5
65	Harold Fannin	TE6
66	Colston Loveland	TE7
67	Mike Evans	WR32
68	Chuba Hubbard	RB25
69	Bhayshul Tuten	RB26
70	Jaylen Warren	RB27
71	Tony Pollard	RB28
72	R.J. Harvey	RB29
73	Jadarian Price	RB30
74	Rhamondre Stevenson	RB31
75	Matthew Stafford	QB5
76	Chris Godwin	WR33
77	Michael Pittman	WR34
78	Makai Lemon	WR35
79	Alec Pierce	WR36
80	Brian Thomas	WR37
81	DK Metcalf	WR38
82	J.K. Dobbins	RB32
83	Rachaad White	RB33
84	Michael Wilson	WR39
85	Jakobi Meyers	WR40
86	Marvin Harrison	WR41
87	Justin Herbert	QB6
88	Jayden Daniels	QB7
89	Jalen Hurts	QB8
90	Blake Corum	RB34
91	Kenneth Gainwell	RB35
92	Rico Dowdle	RB36
93	Woody Marks	RB37
94	Wan'Dale Robinson	WR42
95	Stefon Diggs	WR43
96	Jordyn Tyson	WR44
97	Brenton Strange	TE8
98	Juwan Johnson	TE9
99	Kyle Pitts	TE10
100	Travis Kelce	TE11
101	George Kittle	TE12
102	Chris Rodriguez	RB38
103	Kyle Monangai	RB39
104	Aaron Jones	RB40
105	Tyrone Tracy	RB41
106	Jacory Croskey-Merritt	RB42
107	Josh Downs	WR45
108	Khalil Shakir	WR46
109	Jordan Addison	WR47
110	Jayden Reed	WR48
111	Quentin Johnston	WR49
112	Dak Prescott	QB9
113	Caleb Williams	QB10
114	Trevor Lawrence	QB11
115	Jayden Higgins	WR50
116	De'Zhuan Stribling	WR51
117	Romeo Doubs	WR52
118	Jordan Mason	RB43
119	Tyler Allgeier	RB44
120	Isiah Pacheco	RB45
121	Zach Charbonnet	RB46
122	Kaelon Black	RB47
123	Oronde Gadsden	TE13
124	Isaiah Likely	TE14
125	Mark Andrews	TE15
126	Jalen Coker	WR53
127	Matthew Golden	WR54
128	Jauan Jennings	WR55
129	Deebo Samuel	WR56
130	Jalen McMillan	WR57
131	Tre Tucker	WR58
132	Keaton Mitchell	RB48
133	Kimani Vidal	RB49
134	Alvin Kamara	RB50
135	Jared Goff	QB12
136	Patrick Mahomes	QB13
137	Brock Purdy	QB14
138	James Conner	RB51
139	Dylan Sampson	RB52
140	Tyjae Spears	RB53
141	Jonathon Brooks	RB54
142	Xavier Worthy	WR59
143	KC Concepcion	WR60
144	Denzel Boston	WR61
145	Tory Horton	WR62
146	Isaac TeSlaa	WR63
147	Rashid Shaheed	WR64
148	Brian Robinson	RB55
149	Braelon Allen	RB56
150	Emanuel Wilson	RB57
151	Bo Nix	QB15
152	Jaxson Dart	QB16
153	Jordan Love	QB17
154	Jake Ferguson	TE16
155	Dallas Goedert	TE17
156	Hunter Henry	TE18
157	Terrance Ferguson	TE19
158	Dalton Kincaid	TE20
159	Kenyon Sadiq	TE21
160	Troy Franklin	WR65
161	Omar Cooper	WR66
162	Antonio Williams	WR67
163	Jalen Nailor	WR68
164	Jack Bech	WR69
165	Tre Harris	WR70
166	Jerry Jeudy	WR71
167	Calvin Ridley	WR72
168	Tank Bigsby	RB58
169	Malik Davis	RB59
170	Jonah Coleman	RB60
171	Mike Washington	RB61
172	Emmett Johnson	RB62
173	Nick Singleton	RB63
174	Chig Okonkwo	TE22
175	Dalton Schultz	TE23
176	T.J. Hockenson	TE24
177	Dontayvion Wicks	WR73
178	Chris Bell	WR74
179	Travis Hunter	WR75
180	Sean Tucker	RB64
181	Trey Benson	RB65
182	Baker Mayfield	QB18
183	C.J. Stroud	QB19
184	Sam Darnold	QB20
185	Kyler Murray	QB21
186	Tyler Shough	QB22
187	Chris Brooks	RB66
188	Brashard Smith	RB67
189	Ty Johnson	RB68
190	Tahj Brooks	RB69
191	Jordan James	RB70
192	Skyler Bell	WR76
193	Germie Bernard	WR77
194	Adonai Mitchell	WR78
195	Ryan Flournoy	WR79
196	Jaylin Noel	WR80
197	Kaleb Johnson	RB71
198	MarShawn Lloyd	RB72
199	Kendre Miller	RB73
200	Devin Neal	RB74
`;

function canonName(name: string): string {
  return name
    .toLowerCase()
    .replace(/\b(jr|sr|ii|iii|iv|v)\b/gi, '')
    .replace(/[^a-z0-9 ]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

type Row = {
  rank: number;
  name: string;
  name_canon: string;
  team: string | null;
  position: string;
};

function parseRows(): Row[] {
  const rows: Row[] = [];
  for (const line of RAW.split('\n').map((l) => l.trim()).filter(Boolean)) {
    const [rankStr, name, posToken] = line.split('\t');
    const rank = parseInt(rankStr, 10);
    const position = posToken.replace(/\d+$/, '');
    rows.push({ rank, name, name_canon: canonName(name), team: null, position });
  }
  return rows;
}

async function main() {
  const rows = parseRows();
  console.log(`Parsed ${rows.length} rows.`);

  const ranks = rows.map((r) => r.rank);
  const uniqueRanks = new Set(ranks);
  if (rows.length !== 200 || uniqueRanks.size !== 200) {
    console.error(
      `Expected exactly 200 unique ranks, got ${rows.length} rows / ${uniqueRanks.size} unique ranks.`
    );
    process.exit(1);
  }
  for (let i = 1; i <= 200; i++) {
    if (!uniqueRanks.has(i)) {
      console.error(`Missing rank ${i}.`);
      process.exit(1);
    }
  }

  const existing = await db.execute({
    sql: `SELECT id FROM ranking_snapshots WHERE list_type='ppr' AND role='original'`,
    args: [],
  });
  if (existing.rows.length > 0) {
    console.error(
      'An Original PPR snapshot already exists — refusing to create a second one.'
    );
    process.exit(1);
  }

  const label = 'PPR Original — 8/6/2026';
  const snapshotResult = await db.execute({
    sql: `INSERT INTO ranking_snapshots (list_type, role, label) VALUES ('ppr', 'original', ?)`,
    args: [label],
  });
  const snapshotId = Number(snapshotResult.lastInsertRowid);

  const BATCH = 50;
  for (let i = 0; i < rows.length; i += BATCH) {
    const chunk = rows.slice(i, i + BATCH);
    const placeholders = chunk.map(() => '(?,?,?,?,?,?)').join(',');
    const args: (string | number | null)[] = [];
    for (const r of chunk) {
      args.push(snapshotId, r.rank, r.name, r.name_canon, r.team, r.position);
    }
    await db.execute({
      sql: `INSERT INTO rankings (snapshot_id, rank, name, name_canon, team, position)
            VALUES ${placeholders}`,
      args,
    });
  }

  console.log(`Seeded snapshot ${snapshotId} ("${label}") with 200 rows.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
