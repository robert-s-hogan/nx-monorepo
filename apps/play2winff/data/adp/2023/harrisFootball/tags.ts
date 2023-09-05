const harrisTags = [
  { name: 'Christian McCaffrey', tags: ['worried'], team: 'SF' },
  {
    name: 'Austin Ekeler',
    tags: ['coach_improved', 'coach_improved'],
    team: 'LAC',
  },
  { name: 'Saquon Barkley', tags: ['target', 'safe_player'], team: 'NYG' },
  { name: 'Justin Jefferson', tags: ['breakout'], team: 'MIN' },
  { name: 'Stefon Diggs', tags: ['breakout'], team: 'BUF' },
  { name: "Ja'Marr Chase", tags: ['breakout'], team: 'CIN' },
  { name: 'Tyreek Hill', tags: ['breakout'], team: 'MIA' },
  { name: 'Nick Chubb', tags: ['safe_player'], team: 'CLE' },
  {
    name: 'Cooper Kupp',
    tags: ['injury_concerns', 'swing_player'],
    team: 'LAR',
  },
  { name: 'Davante Adams', tags: ['safe_player'], team: 'LV' },
  { name: 'Jonathan Taylor', tags: ['contract_issues', 'swing'], team: 'IND' },
  { name: 'AJ Brown', tags: ['offensive_line_plus'], team: 'PHI' },
  {
    name: 'CeeDee Lamb',
    tags: ['offensive_line_plus', 'safe_player'],
    team: 'DAL',
  },
  { name: 'Travis Kelce', tags: ['safe_player'], team: 'KC' },
  { name: 'Josh Jacobs', tags: ['swing_player'], team: 'LV' },
  { name: 'Derrick Henry', tags: ['offensive_line_down'], team: 'TEN' },
  { name: 'Tony Pollard', tags: ['offensive_line_plus'], team: 'DAL' },
  {
    name: 'Bijan Robinson',
    tags: [
      'offensive_line_plus',
      'rookie',
      'breakout',
      'swing_player',
      'worried',
    ],
    team: 'ATL',
  },
  { name: 'Travis Etienne', tags: ['worried'], team: 'JAC' },
  { name: 'Jaylen Waddle', tags: ['worried'], team: 'MIA' },
  { name: 'DeVonta Smith', tags: ['offensive_line_plus'], team: 'PHI' },
  { name: 'Tee Higgins', tags: ['breakout'], team: 'CIN' },
  { name: 'Garrett Wilson', tags: ['breakout'], team: 'NYJ' },
  { name: 'Amon-Ra St Brown', tags: ['worried'], team: 'DET' },
  { name: 'Patrick Mahomes', tags: ['safe_player'], team: 'KC' },
  { name: 'Joe Mixon', tags: ['safe_player'], team: 'CIN' },
  { name: 'DK Metcalf', tags: ['target'], team: 'SEA' },
  { name: 'Chris Olave', tags: ['breakout'], team: 'NO' },
  { name: 'Mark Andrews', tags: ['safe_player'], team: 'BAL' },
  { name: 'Aaron Jones', tags: ['safe_player'], team: 'GB' },
  { name: 'Rhamondre Stevenson', tags: ['crowded_position_group'], team: 'NE' },
  { name: 'Najee Harris', tags: ['bust'], team: 'PIT' },
  { name: 'Josh Allen', tags: ['safe_player'], team: 'BUF' },
  { name: 'Jalen Hurts', tags: ['offensive_line_plus'], team: 'PHI' },
  {
    name: 'DeAndre Hopkins',
    tags: ['target', 'offensive_line_down'],
    team: 'TEN',
  },
  { name: 'Brandon Aiyuk', tags: ['flag'], team: 'SF' },
  { name: 'Amari Cooper', tags: ['swing_player'], team: 'CLE' },
  { name: 'Deebo Samuel', tags: ['swing_player'], team: 'SF' },
  { name: 'Ken Walker', tags: ['flag', 'swing_player'], team: 'SEA' },
  { name: 'DJ Moore', tags: [''], team: 'CHI' },
  { name: 'Keenan Allen', tags: ['coach_improved'], team: 'LAC' },
  { name: 'Miles Sanders', tags: ['swing_player'], team: 'CAR' },
  { name: 'JK Dobbins', tags: [], team: 'BAL' },
  { name: 'Christian Kirk', tags: ['target'], team: 'JAC' },
  { name: 'Tyler Lockett', tags: ['target'], team: 'SEA' },
  { name: 'Calvin Ridley', tags: ['worried'], team: 'JAC' },
  { name: 'Terry McLaurin', tags: ['injury_concerns', 'flag'], team: 'WAS' },
  { name: 'Joe Burrow', tags: ['injury_concerns'], team: 'CIN' },
  { name: 'Lamar Jackson', tags: ['coach_improved'], team: 'BAL' },
  { name: 'Michael Pittman', tags: ['flag'], team: 'IND' },
  { name: 'Drake London', tags: ['offensive_line_plus'], team: 'ATL' },
  { name: 'Chris Godwin', tags: ['safe_player'], team: 'TB' },
  {
    name: "D'Andre Swift",
    tags: ['offensive_line_plus', 'swing_player', 'target'],
    team: 'PHI',
  },
  { name: 'Jahmyr Gibbs', tags: ['swing_player', 'bust'], team: 'DET' },
  { name: 'Cam Akers', tags: ['swing_player'], team: 'LAR' },
  {
    name: 'Alvin Kamara',
    tags: ['suspension', 'swing_player', 'worried'],
    team: 'NO',
  },
  { name: 'Christian Watson', tags: ['swing_player'], team: 'GB' },
  { name: 'Diontae Johnson', tags: ['safe_player'], team: 'PIT' },
  { name: 'George Kittle', tags: ['crowded_position_group'], team: 'SF' },
  {
    name: 'TJ Hockenson',
    tags: ['target', 'swing_player'],
    team: 'MIN',
  },
  { name: 'Justin Fields', tags: ['swing_player'], team: 'CHI' },
  { name: 'Justin Herbert', tags: ['coach_improved', 'target'], team: 'LAC' },
  { name: 'Mike Evans', tags: ['safe_player'], team: 'TB' },
  { name: 'Alexander Mattison', tags: ['swing_player'], team: 'MIN' },
  { name: 'Dalvin Cook', tags: ['swing_player'], team: 'NYJ' },
  { name: 'James Conner', tags: ['bust'], team: 'ARI' },
  { name: 'Isiah Pacheco', tags: ['injury_concerns'], team: 'KC' },
  { name: 'Anthony Richardson', tags: ['bust'], team: 'IND' },
  { name: 'Khalil Herbert', tags: ['flag'], team: 'CHI' },
  { name: 'Dameon Pierce', tags: ['bust'], team: 'HOU' },
  { name: 'James Cook', tags: ['crowded_position_group'], team: 'BUF' },
  { name: 'Javonte Williams', tags: ['injury_concerns'], team: 'DEN' },
  { name: 'George Pickens', tags: ['breakout'], team: 'PIT' },
  { name: 'Jerry Jeudy', tags: ['injury_concerns'], team: 'DEN' },
  { name: 'Marquise Brown', tags: ['safe_player'], team: 'ARI' },
  { name: 'Trevor Lawrence', tags: ['breakout'], team: 'JAC' },
  { name: 'Breece Hall', tags: ['injury_concerns', 'bust'], team: 'NYJ' },
  { name: 'David Montgomery', tags: ['swing_player'], team: 'CHI' },
  { name: 'Rachaad White', tags: ['crowded_position_group'], team: 'TB' },
  { name: 'Courtland Sutton', tags: ['flag'], team: 'DEN' },
  {
    name: 'Mike Williams',
    tags: ['coach_improved'],
    team: 'LAC',
  },
  { name: 'Jahan Dotson', tags: ['breakout', 'target'], team: 'WAS' },
  { name: 'Jakobi Meyers', tags: ['flag'], team: 'LV' },
  { name: 'Darren Waller', tags: ['swing_player'], team: 'NYG' },
  { name: 'Dallas Goedert', tags: ['offensive_line_plus'], team: 'PHI' },
  { name: 'Kyle Pitts', tags: ['offensive_line_plus', 'worried'], team: 'ATL' },
  { name: 'Michael Thomas', tags: ['swing_player'], team: 'NO' },
  { name: 'Jordan Addison', tags: ['rookie'], team: 'MIN' },
  { name: 'Zay Flowers', tags: ['rookie'], team: 'BAL' },
  {
    name: 'Rashaad Penny',
    tags: ['offensive_line_plus', 'post_hype_sleepers'],
    team: 'PHI',
  },
  { name: 'Antonio Gibson', tags: ['safe_player'], team: 'WAS' },
  { name: 'Elijah Moore', tags: ['post_hype_sleepers'], team: 'CLE' },
  { name: 'Tua Tagovailoa', tags: ['swing_player', 'flag'], team: 'MIA' },
  { name: 'AJ Dillon', tags: ['crowded_position_group'], team: 'GB' },
  { name: 'Jamaal Williams', tags: ['swing_player'], team: 'NO' },
  {
    name: 'Raheem Mostert',
    tags: ['post_hype_sleepers'],
    team: 'MIA',
  },
  { name: 'Devin Singletary', tags: ['safe_player'], team: 'HOU' },
  { name: 'Jerick McKinnon', tags: ['swing_player'], team: 'KC' },
  { name: 'Zach Charbonnet', tags: ['sleeper', 'rookie'], team: 'SEA' },
  { name: 'Brian Robinson', tags: ['crowded_position_group'], team: 'WAS' },
  { name: 'Gabe Davis', tags: ['post_hype_sleepers'], team: 'BUF' },
  { name: 'Brandin Cooks', tags: ['offensive_line_plus'], team: 'DAL' },
  { name: 'Odell Beckham', tags: ['swing_player'], team: 'BAL' },
  {
    name: 'Jaxon Smith-Njigba',
    tags: ['injury_concerns', 'rookie'],
    team: 'JAC',
  },
  { name: 'Skyy Moore', tags: ['sleeper'], team: 'KC' },
  {
    name: 'Treylon Burks',
    tags: ['injury_concerns', 'post_hype_sleepers', 'offensive_line_down'],
    team: 'TEN',
  },
  { name: 'Jameson Williams', tags: ['post_hype_sleepers'], team: 'DET' },
  { name: 'JuJu Smith-Schuster', tags: ['swing_player'], team: 'NE' },
  { name: 'Nico Collins', tags: ['post_hype_sleepers'], team: 'HOU' },
  {
    name: 'Jeff Wilson',
    tags: ['flag', 'post_hype_sleepers', 'injury_concerns'],
    team: 'MIA',
  },
  { name: 'Jaylen Warren', tags: ['flag'], team: 'PIT' },
  { name: 'Samaje Perine', tags: ['crowded_position_group'], team: 'WAS' },
  { name: 'Adam Thielen', tags: ['swing_player'], team: 'CAR' },
  { name: 'Tyler Boyd', tags: ['safe_player'], team: 'CIN' },
  { name: 'Evan Engram', tags: ['breakout'], team: 'JAC' },
  { name: 'Pat Freiermuth', tags: [''], team: 'PIT' },
  { name: 'Damien Harris', tags: ['post_hype_sleepers'], team: 'BUF' },
  { name: 'Kareem Hunt', tags: ['swing_player'], team: 'NA' },
  { name: 'Rashod Bateman', tags: ['swing_player'], team: 'BAL' },
  { name: "D'Onta Foreman", tags: ['bust'], team: 'CHI' },
  { name: 'Quentin Johnston', tags: ['coach_improved', 'rookie'], team: 'LAC' },
  { name: 'Darnell Mooney', tags: ['swing_player'], team: 'CHI' },
  { name: 'Romeo Doubs', tags: ['swing_player'], team: 'GB' },
  { name: 'Alec Pierce', tags: ['sleeper'], team: 'IND' },
  { name: 'Aaron Rodgers', tags: ['safe_player'], team: 'NYJ' },
  { name: 'Dak Prescott', tags: ['offensive_line_plus'], team: 'DAL' },
  { name: 'Deshaun Watson', tags: ['swing_player'], team: 'CLE' },
  { name: 'Elijah Mitchell', tags: ['safe_player'], team: 'SF' },
  { name: 'Kenny Gainwell', tags: ['offensive_line_plus'], team: 'PHI' },
  { name: 'Tyler Allgeier', tags: ['offensive_line_plus'], team: 'ATL' },
  { name: 'Allen Lazard', tags: ['bust'], team: 'NYJ' },
  { name: 'Donovan Peoples-Jones', tags: ['bust'], team: 'CLE' },
  { name: 'KJ Osborn', tags: ['crowded_position_group'], team: 'MIN' },
  { name: 'David Njoku', tags: ['swing_player'], team: 'CLE' },
  { name: 'Dalton Schultz', tags: ['offensive_line_plus'], team: 'DAL' },
  { name: 'Joshua Kelley', tags: ['coach_improved'], team: 'LAC' },
  { name: 'Devon Achane', tags: ['rookie', 'swing_player'], team: 'MIA' },
  { name: 'Ezekiel Elliott', tags: ['crowded_position_group'], team: 'NE' },
  { name: 'Gus Edwards', tags: ['swing_player'], team: 'BAL' },
  { name: 'Leonard Fournette', tags: ['bust'], team: 'NA' },
  { name: 'Marquez Valdes-Scantling', tags: ['bust'], team: 'GB' },
  { name: 'Curtis Samuel', tags: ['swing_player'], team: 'WAS' },
  {
    name: 'Tyjae Spears',
    tags: ['rookie', 'offensive_line_down'],
    team: 'TEN',
  },
  { name: 'Kendre Miller', tags: ['rookie'], team: 'NO' },
  { name: 'Kirk Cousins', tags: ['safe_player'], team: 'MIN' },
  { name: 'Derek Carr', tags: ['safe_player'], team: 'NO' },
  { name: 'Kadarius Toney', tags: ['injury_concerns'], team: 'KC' },
  { name: 'Marvin Mims', tags: ['sleeper', 'rookie'], team: 'DEN' },
  { name: 'Rashid Shaheed', tags: ['breakout'], team: 'NO' },
  { name: 'Roschon Johnson', tags: ['rookie'], team: 'CHI' },
  { name: 'Evan Hull', tags: ['rookie', 'swing_player'], team: 'IND' },
  { name: 'DJ Chark', tags: ['swing_player'], team: 'CAR' },
  { name: 'John Metchie', tags: ['sleeper'], team: 'HOU' },
  { name: 'Zay Jones', tags: ['swing_player'], team: 'JAC' },
  { name: 'Isaiah Hodgins', tags: ['swing_player'], team: 'NYG' },
  { name: 'Kyren Williams', tags: [''], team: 'LAR' },
  { name: 'Chig Okonkwo', tags: ['', 'offensive_line_down'], team: 'TEN' },
  { name: 'Ty Chandler', tags: [''], team: 'MIN' },
  { name: 'Zamir White', tags: [''], team: 'LV' },
  { name: 'Tank Bigsby', tags: ['rookie'], team: 'JAC' },
  {
    name: 'Cordarrelle Patterson',
    tags: ['crowded_position_group', 'offensive_line_plus'],
    team: 'ATL',
  },
  { name: 'Deon Jackson', tags: ['swing_player'], team: 'IND' },
  { name: 'Zach Moss', tags: ['swing_player'], team: 'IND' },
];

export default harrisTags;