-- Ensure the uuid-ossp extension is available for UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Inserting data into the 'club' table
INSERT INTO club (id, name, location, stadium, league, wins, losses, draws, founded_at, created_at, updated_at, deleted_at)
VALUES
(uuid_generate_v4(), 'Manchester United', 'Manchester', 'Old Trafford', 'Premier League', 0, 0, 0, '1878-01-01', NOW(), NOW(), NULL),
(uuid_generate_v4(), 'Real Madrid', 'Madrid', 'Santiago Bernabeu', 'La Liga', 0, 0, 0, '1902-03-06', NOW(), NOW(), NULL),
(uuid_generate_v4(), 'FC Barcelona', 'Barcelona', 'Camp Nou', 'La Liga', 0, 0, 0, '1899-11-29', NOW(), NOW(), NULL),
(uuid_generate_v4(), 'Liverpool FC', 'Liverpool', 'Anfield', 'Premier League', 0, 0, 0, '1892-06-03', NOW(), NOW(), NULL),
(uuid_generate_v4(), 'Bayern Munich', 'Munich', 'Allianz Arena', 'Bundesliga', 0, 0, 0, '1900-02-27', NOW(), NOW(), NULL),
(uuid_generate_v4(), 'Paris Saint-Germain', 'Paris', 'Parc des Princes', 'Ligue 1', 0, 0, 0, '1970-08-12', NOW(), NOW(), NULL),
(uuid_generate_v4(), 'Borussia Dortmund', 'Dortmund', 'Signal Iduna Park', 'Bundesliga', 0, 0, 0, '1909-12-19', NOW(), NOW(), NULL),
(uuid_generate_v4(), 'Inter Milan', 'Milan', 'San Siro', 'Serie A', 0, 0, 0, '1908-03-09', NOW(), NOW(), NULL),
(uuid_generate_v4(), 'Atletico Madrid', 'Madrid', 'Wanda Metropolitano', 'La Liga', 0, 0, 0, '1903-04-26', NOW(), NOW(), NULL),
(uuid_generate_v4(), 'Manchester City', 'Manchester', 'Etihad Stadium', 'Premier League', 0, 0, 0, '1880-11-13', NOW(), NOW(), NULL),
(uuid_generate_v4(), 'Sevilla FC', 'Sevilla', 'Ramon Sanchez Pizjuan', 'La Liga', 0, 0, 0, '1905-10-14', NOW(), NOW(), NULL),
(uuid_generate_v4(), 'AS Roma', 'Rome', 'Stadio Olimpico', 'Serie A', 0, 0, 0, '1927-07-22', NOW(), NOW(), NULL),
(uuid_generate_v4(), 'Ajax', 'Amsterdam', 'Johan Cruyff Arena', 'Eredivisie', 0, 0, 0, '1900-03-18', NOW(), NOW(), NULL),
(uuid_generate_v4(), 'Shakhtar Donetsk', 'Donetsk', 'Donbass Arena', 'Ukrainian Premier League', 0, 0, 0, '1936-05-24', NOW(), NOW(), NULL),
(uuid_generate_v4(), 'FC Porto', 'Porto', 'Estadio do Dragao', 'Primeira Liga', 0, 0, 0, '1893-09-28', NOW(), NOW(), NULL),
(uuid_generate_v4(), 'Zenit Saint Petersburg', 'Saint Petersburg', 'Krestovsky Stadium', 'Russian Premier League', 0, 0, 0, '1925-05-25', NOW(), NOW(), NULL),
(uuid_generate_v4(), 'Galatasaray', 'Istanbul', 'Turk Telekom Stadium', 'Super Lig', 0, 0, 0, '1905-10-01', NOW(), NOW(), NULL),
(uuid_generate_v4(), 'Benfica', 'Lisbon', 'Estadio da Luz', 'Primeira Liga', 0, 0, 0, '1904-02-28', NOW(), NOW(), NULL),
(uuid_generate_v4(), 'Olympique Lyonnais', 'Lyon', 'Groupama Stadium', 'Ligue 1', 0, 0, 0, '1950-08-03', NOW(), NOW(), NULL),
(uuid_generate_v4(), 'Feyenoord', 'Rotterdam', 'De Kuip', 'Eredivisie', 0, 0, 0, '1908-07-19', NOW(), NOW(), NULL);

-- Inserting data into the 'player' table
INSERT INTO player (id, name, age, position, country, goals, assists, saves, matches_played, club_id)
VALUES
(uuid_generate_v4(), 'Cristiano Ronaldo', 35, 'Forward', 'Portugal', 0, 0, 0, 0, (SELECT id FROM club WHERE name = 'Juventus')),
(uuid_generate_v4(), 'Lionel Messi', 33, 'Forward', 'Argentina', 0, 0, 0, 0, (SELECT id FROM club WHERE name = 'FC Barcelona')),
(uuid_generate_v4(), 'Neymar Jr', 28, 'Forward', 'Brazil', 0, 0, 0, 0, (SELECT id FROM club WHERE name = 'Paris Saint-Germain')),
(uuid_generate_v4(), 'Robert Lewandowski', 32, 'Forward', 'Poland', 0, 0, 0, 0, (SELECT id FROM club WHERE name = 'Bayern Munich')),
(uuid_generate_v4(), 'Virgil van Dijk', 29, 'Defender', 'Netherlands', 0, 0, 0, 0, (SELECT id FROM club WHERE name = 'Liverpool FC')),
(uuid_generate_v4(), 'Marcus Rashford', 23, 'Forward', 'England', 0, 0, 0, 0, (SELECT id FROM club WHERE name = 'Manchester United')),
(uuid_generate_v4(), 'Eden Hazard', 30, 'Forward', 'Belgium', 0, 0, 0, 0, (SELECT id FROM club WHERE name = 'Real Madrid')),
(uuid_generate_v4(), 'Sergio Aguero', 32, 'Forward', 'Argentina', 0, 0, 0, 0, (SELECT id FROM club WHERE name = 'Manchester City')),
(uuid_generate_v4(), 'Paul Pogba', 28, 'Midfielder', 'France', 0, 0, 0, 0, (SELECT id FROM club WHERE name = 'Manchester United')),
(uuid_generate_v4(), 'Erling Haaland', 20, 'Forward', 'Norway', 0, 0, 0, 0, (SELECT id FROM club WHERE name = 'Borussia Dortmund')),
(uuid_generate_v4(), 'Frenkie de Jong', 23, 'Midfielder', 'Netherlands', 0, 0, 0, 0, (SELECT id FROM club WHERE name = 'FC Barcelona')),
(uuid_generate_v4(), 'Alphonso Davies', 20, 'Defender', 'Canada', 0, 0, 0, 0, (SELECT id FROM club WHERE name = 'Bayern Munich')),
(uuid_generate_v4(), 'Luka Modric', 35, 'Midfielder', 'Croatia', 0, 0, 0, 0, (SELECT id FROM club WHERE name = 'Real Madrid')),
(uuid_generate_v4(), 'Harry Kane', 27, 'Forward', 'England', 0, 0, 0, 0, (SELECT id FROM club WHERE name = 'Tottenham Hotspur')),
(uuid_generate_v4(), 'Toni Kroos', 31, 'Midfielder', 'Germany', 0, 0, 0, 0, (SELECT id FROM club WHERE name = 'Real Madrid')),
(uuid_generate_v4(), 'Karim Benzema', 33, 'Forward', 'France', 0, 0, 0, 0, (SELECT id FROM club WHERE name = 'Real Madrid')),
(uuid_generate_v4(), 'Luis Suarez', 34, 'Forward', 'Uruguay', 0, 0, 0, 0, (SELECT id FROM club WHERE name = 'Atletico Madrid')),
(uuid_generate_v4(), 'Sadio Mane', 28, 'Forward', 'Senegal', 0, 0, 0, 0, (SELECT id FROM club WHERE name = 'Liverpool FC')),
(uuid_generate_v4(), 'Jadon Sancho', 20, 'Forward', 'England', 0, 0, 0, 0, (SELECT id FROM club WHERE name = 'Borussia Dortmund')),
(uuid_generate_v4(), 'Marco Reus', 31, 'Forward', 'Germany', 0, 0, 0, 0, (SELECT id FROM club WHERE name = 'Borussia Dortmund')),
(uuid_generate_v4(), 'Eden Hazard', 30, 'Winger', 'Belgium', 0, 0, 0, 0, (SELECT id FROM club WHERE name = 'Real Madrid')),
(uuid_generate_v4(), 'Paul Pogba', 27, 'Midfielder', 'France', 0, 0, 0, 0, (SELECT id FROM club WHERE name = 'Manchester United')),
(uuid_generate_v4(), 'Alisson Becker', 28, 'Goalkeeper', 'Brazil', 0, 0, 10, 0, (SELECT id FROM club WHERE name = 'Liverpool FC')),
(uuid_generate_v4(), 'Sergio Aguero', 32, 'Forward', 'Argentina', 0, 0, 0, 0, (SELECT id FROM club WHERE name = 'Manchester City')),
(uuid_generate_v4(), 'Luis Suarez', 34, 'Forward', 'Uruguay', 0, 0, 0, 0, (SELECT id FROM club WHERE name = 'Atletico Madrid')),
(uuid_generate_v4(), 'Romelu Lukaku', 27, 'Forward', 'Belgium', 0, 0, 0, 0, (SELECT id FROM club WHERE name = 'Inter Milan')),
(uuid_generate_v4(), 'Gerard Pique', 34, 'Defender', 'Spain', 0, 0, 0, 0, (SELECT id FROM club WHERE name = 'FC Barcelona')),
(uuid_generate_v4(), 'Harry Maguire', 27, 'Defender', 'England', 0, 0, 0, 0, (SELECT id FROM club WHERE name = 'Manchester United')),
(uuid_generate_v4(), 'Gareth Bale', 31, 'Winger', 'Wales', 0, 0, 0, 0, (SELECT id FROM club WHERE name = 'Tottenham Hotspur')),
(uuid_generate_v4(), 'Zlatan Ibrahimovic', 39, 'Forward', 'Sweden', 0, 0, 0, 0, (SELECT id FROM club WHERE name = 'AC Milan')),
(uuid_generate_v4(), 'Frenkie de Jong', 23, 'Midfielder', 'Netherlands', 0, 0, 0, 0, (SELECT id FROM club WHERE name = 'FC Barcelona')),
(uuid_generate_v4(), 'Angel Di Maria', 32, 'Winger', 'Argentina', 0, 0, 0, 0, (SELECT id FROM club WHERE name = 'Paris Saint-Germain')),
(uuid_generate_v4(), 'Thomas Müller', 31, 'Forward', 'Germany', 0, 0, 0, 0, (SELECT id FROM club WHERE name = 'Bayern Munich')),
(uuid_generate_v4(), 'Goran Pandev', 37, 'Forward', 'Macedonia', 0, 0, 0, 0, null),
(uuid_generate_v4(), 'Elif Elmas', 21, 'Midfielder', 'Macedonia', 0, 0, 0, 0, (SELECT id FROM club WHERE name = 'SSC Napoli')),
(uuid_generate_v4(), 'Stole Dimitrievski', 27, 'Goalkeeper', 'Macedonia', 0, 0, 10, 0, (SELECT id FROM club WHERE name = 'Rayo Vallecano')),
(uuid_generate_v4(), 'Ezgjan Alioski', 29, 'Defender', 'Macedonia', 0, 0, 0, 0, (SELECT id FROM club WHERE name = 'Leeds United')),
(uuid_generate_v4(), 'Visar Musliu', 26, 'Defender', 'Macedonia', 0, 0, 0, 0, (SELECT id FROM club WHERE name = 'Fehervar FC'));

