// Run once to seed the locked Original Superflex snapshot from the user's
// first superflex PPR rankings paste (9/5/2026): pnpm migrate:play2winff:seed-original-superflex
// Requires TURSO_DATABASE_URL / TURSO_AUTH_TOKEN in the environment (e.g. via .env.local).
//
// Refuses to run if an Original Superflex snapshot already exists — Original
// is meant to be set exactly once (see lib/server/rankings.ts commitSnapshot).
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

// Flat "rank Name POS" stream, no team column, no positional-rank fusion —
// pasted by the user as one continuous paragraph rather than one line per
// player, so this is tokenized directly rather than reusing lib/rankings.ts
// parsePaste() (which expects one entry per line).
const RAW = `
1 Josh Allen QB 2 Lamar Jackson QB 3 Jahmyr Gibbs RB 4 Bijan Robinson RB 5 Christian McCaffrey RB 6 Ja'Marr Chase WR 7 Jaxon Smith-Njigba WR 8 Puka Nacua WR 9 Joe Burrow QB 10 Drake Maye QB 11 Jonathan Taylor RB 12 James Cook RB 13 Saquon Barkley RB 14 Amon-Ra St. Brown WR 15 CeeDee Lamb WR 16 Justin Jefferson WR 17 Drake London WR 18 Nico Collins WR 19 De'Von Achane RB 20 Chase Brown RB 21 A.J. Brown WR 22 DeVonta Smith WR 23 Matthew Stafford QB 24 Kyren Williams RB 25 Derrick Henry RB 26 Ashton Jeanty RB 27 Chris Olave WR 28 Zay Flowers WR 29 Justin Herbert QB 30 Jayden Daniels QB 31 Jalen Hurts QB 32 Kenneth Walker RB 33 George Pickens WR 34 Tee Higgins WR 35 Tetairoa McMillan WR 36 Trey McBride TE 37 Brock Bowers TE 38 Dak Prescott QB 39 Caleb Williams QB 40 Trevor Lawrence QB 41 Javonte Williams RB 42 Breece Hall RB 43 Omarion Hampton RB 44 Quinshon Judkins RB 45 Bucky Irving RB 46 Travis Etienne RB 47 Malik Nabers WR 48 Rashee Rice WR 49 Jared Goff QB 50 Patrick Mahomes QB 51 Brock Purdy QB 52 Terry McLaurin WR 53 Jameson Williams WR 54 Rome Odunze WR 55 Ladd McConkey WR 56 Davante Adams WR 57 Jaylen Waddle WR 58 D.J. Moore WR 59 Garrett Wilson WR 60 Emeka Egbuka WR 61 Luther Burden WR 62 Courtland Sutton WR 63 D'Andre Swift RB 64 Cam Skattebo RB 65 Jeremiyah Love RB 66 David Montgomery RB 67 Carnell Tate WR 68 Christian Watson WR 69 Parker Washington WR 70 Bo Nix QB 71 Jaxson Dart QB 72 Jordan Love QB 73 Sam LaPorta TE 74 Tyler Warren TE 75 Harold Fannin TE 76 Colston Loveland TE 77 Mike Evans WR 78 Bhayshul Tuten RB 79 Jaylen Warren RB 80 Tony Pollard RB 81 R.J. Harvey RB 82 Jadarian Price RB 83 TreVeyon Henderson RB 84 Rhamondre Stevenson RB 85 Chris Godwin WR 86 Michael Pittman WR 87 Alec Pierce WR 88 Brian Thomas WR 89 DK Metcalf WR 90 Baker Mayfield QB 91 Daniel Jones QB 92 C.J. Stroud QB 93 Sam Darnold QB 94 Kyler Murray QB 95 Tyler Shough QB 96 J.K. Dobbins RB 97 Michael Wilson WR 98 Jakobi Meyers WR 99 Marvin Harrison WR 100 Blake Corum RB 101 Kenneth Gainwell RB 102 MarShawn Lloyd RB 103 Chuba Hubbard RB 104 Jonathon Brooks RB 105 Rachaad White RB 106 Rico Dowdle RB 107 Aaron Jones RB 108 Wan'Dale Robinson WR 109 Stefon Diggs WR 110 Cam Ward QB 111 Bryce Young QB 112 Malik Willis QB 113 Tucker Kraft TE 114 George Kittle TE 115 Brenton Strange TE 116 Juwan Johnson TE 117 Kyle Pitts TE 118 Travis Kelce TE 119 Woody Marks RB 120 Chris Rodriguez RB 121 Khalil Shakir WR 122 Jordan Addison WR 123 Jayden Reed WR 124 Quentin Johnston WR 125 De'Zhaun Stribling WR 126 Makai Lemon WR 127 Jordan Mason RB 128 Jacory Croskey-Merritt RB 129 Josh Downs WR 130 Romeo Doubs WR 131 Jacoby Brissett QB 132 Aaron Rodgers QB 133 Michael Penix QB 134 Tyler Allgeier RB 135 Isaiah Likely TE 136 Mark Andrews TE 137 Jalen Coker WR 138 Matthew Golden WR 139 KC Concepcion WR 140 Denzel Boston WR 141 Keenan Allen WR 142 Jauan Jennings WR 143 Deebo Samuel WR 144 Keaton Mitchell RB 145 Kimani Vidal RB 146 Dylan Sampson RB 147 Tyjae Spears RB 148 Kyle Monangai RB 149 Xavier Worthy WR 150 Rashid Shaheed WR 151 Malachi Fields WR 152 Jordyn Tyson WR 153 Jaylin Noel WR 154 Tre Tucker WR 155 Fernando Mendoza QB 156 Geno Smith QB 157 Isaac TeSlaa WR 158 Caleb Douglas WR 159 Pat Bryant WR 160 Brian Robinson RB 161 Chris Brooks RB 162 Kaleb Johnson RB 163 Braelon Allen RB 164 Kaelon Black RB 165 Deshaun Watson QB 166 Kirk Cousins QB 167 Shedeur Sanders QB 168 Jake Ferguson TE 169 Dallas Goedert TE 170 Hunter Henry TE 171 Terrance Ferguson TE 172 Dalton Kincaid TE 173 Oronde Gadsden TE 174 Kenyon Sadiq TE 175 Malik Washington WR 176 Adonai Mitchell WR 177 Ja'Kobi Lane WR 178 Jalen McMillan WR 179 Ted Hurst WR 180 Jalen Nailor WR 181 Jack Bech WR 182 Tre Harris WR 183 Jerry Jeudy WR 184 Calvin Ridley WR 185 Tua Tagovailoa QB 186 Tank Bigsby RB 187 Jonah Coleman RB 188 Mike Washington RB 189 Josh Jacobs RB 190 Emmett Johnson RB 191 Alvin Kamara RB 192 Tyrone Tracy RB 193 Zach Charbonnet RB 194 Nick Singleton RB 195 Chig Okonkwo TE 196 Dalton Schultz TE 197 T.J. Hockenson TE 198 Dontayvion Wicks WR 199 Travis Hunter WR 200 Jahan Dotson WR
`;

const VALID_POSITIONS = new Set(['QB', 'RB', 'WR', 'TE', 'K', 'DST', 'DEF', 'D/ST']);

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

function parseFlat(raw: string): Row[] {
  const tokens = raw.trim().split(/\s+/);
  const rows: Row[] = [];
  let i = 0;
  while (i < tokens.length) {
    const rank = parseInt(tokens[i], 10);
    if (!Number.isFinite(rank)) {
      throw new Error(`Expected a rank number at token ${i}, got "${tokens[i]}"`);
    }
    i++;
    const nameParts: string[] = [];
    while (i < tokens.length && !VALID_POSITIONS.has(tokens[i].toUpperCase())) {
      nameParts.push(tokens[i]);
      i++;
    }
    if (i >= tokens.length) {
      throw new Error(`Missing position for rank ${rank} (${nameParts.join(' ')})`);
    }
    const position = tokens[i].toUpperCase();
    i++;
    rows.push({
      rank,
      name: nameParts.join(' '),
      name_canon: canonName(nameParts.join(' ')),
      team: null,
      position,
    });
  }
  return rows;
}

async function main() {
  const rows = parseFlat(RAW);
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
    sql: `SELECT id FROM ranking_snapshots WHERE list_type='superflex' AND role='original'`,
    args: [],
  });
  if (existing.rows.length > 0) {
    console.error(
      'An Original Superflex snapshot already exists — refusing to create a second one.'
    );
    process.exit(1);
  }

  const label = 'Superflex Original — 9/5/2026';
  const snapshotResult = await db.execute({
    sql: `INSERT INTO ranking_snapshots (list_type, role, label) VALUES ('superflex', 'original', ?)`,
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
