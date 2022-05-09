BEGIN;

DROP TABLE IF EXISTS "experiences", "photos";

CREATE TABLE IF NOT EXISTS "experiences" (
    "id" SERIAL PRIMARY KEY,
  "title" TEXT,
  "date"TEXT,
  "city" TEXT,
   "description" TEXT
)

CREATE TABLE IF NOT EXISTS "photos" (
    "id" SERIAL PRIMARY KEY,
  "title" TEXT,
  "img_url" TEXT,
);

INSERT INTO "experiences" ("title", "date", "city","description") VALUES

('Congé parental', '2020 à 2021', 'Replonges, France', "Gerer la vie de famille, Organiser des activités épanouissantes, Accompagner le developpement de l'enfant, Plannifier les différents rendez-vous"),
('Genius, Apple Retail', '2014 à 2019', 'Lyon, France', 'Diagnostiquer des ordinateurs et des téléphones Apple
Réparer la relation client en suivant le code de l’entreprise
Réparer le matériel en suivant des processus précis
Aider au bon fonctionnement d’applications et logiciels'),
('Specialiste, Apple Retail', '2012 à 2014','Lyon, France','Accueillir et conseiller les clients,
Etablir une solution complète, matériel et services,
Animer les réunions matinales entre collègues,
Superviser les nouveaux collègues'),
('Chargée de communication, Théâtre de la Petite Montagne', '2010 à 2011','St Maur, Jura, France','Prospecter les salles des spectacles pour les tournées,
Organiser les déplacements et l’accueil des artistes,
Imaginer et créer les supports de communication du théâtre,
Améliorer la visibilité du théâtre avec des partenariat régionaux'),
('Assitante de direction, Hamadani Architecture', '2009 à 2010','Tunis, Tunisie','Accueil physique, téléphonique et par e-mails du cabinet,
Editer et relancer les factures,
Organiser les déplacements des architectes chez les clients'),
('Directrice adjointe, Téléfrance', '2008 à 2009', 'Sousse, Tunisie','Gérer les relations avec la clientèle française, 
Superviser la formation de 50 téléconseillers tunisiens, 
Recruter une vingtaine de téléconseillers français');


INSERT INTO "photos" ("title", "img_url") VALUES
('Big Dreams, Little Kid', 'BigDreams.png' ),
("Portrait de l'absent", 'PictureofDad'),
('Lost Cats of Tunisia', 'CatsOfTunisia1.png'),
('Lost Cats of Tunisia', 'CatsOfTunisia2.png'),
('Lost Cats of Tunisia', 'CatsOfTunisia3.png'),
('Dossier de presse "Une opérette à Ravensbrück"', 'PressForRavensbruck'),
('Programmes trimestriels du théâtre de la Petite Montagne', 'ProgrammForTPM');





COMMIT;



