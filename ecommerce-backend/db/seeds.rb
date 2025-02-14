user1 = User.create!(
  username: 'PixelWarrior',
  first_name: 'Max',
  last_name: 'Power',
  email: 'pixelwarrior@example.com',
  address: '123 Game Street, Pixel City, USA',
  password: 'securepassword123',  # Ajoute un mot de passe
  password_confirmation: 'securepassword123'  # Confirmation du mot de passe
)

user2 = User.create!(
  username: 'LagKing',
  first_name: 'Eliot',
  last_name: 'Knight',
  email: 'lagking@example.com',
  address: '456 Noob Avenue, Lag Town, USA',
  password: 'lagkingpassword',  # Mot de passe pour l'utilisateur 2
  password_confirmation: 'lagkingpassword'  # Confirmation du mot de passe
)

user3 = User.create!(
  username: 'ManaMage',
  first_name: 'Lina',
  last_name: 'Flame',
  email: 'manamage@example.com',
  address: '789 Spell Road, Mana Valley, USA',
  password: 'manamagemagic',  # Mot de passe pour l'utilisateur 3
  password_confirmation: 'manamagemagic'  # Confirmation du mot de passe
)

game1 = Game.create!(
  title: 'Kingdom Come: Deliverance',
  publisher: 'Deep Silver',
  developer: 'Warhorse Studios',
  description: 'Kingdom Come: Deliverance est un RPG en monde ouvert se déroulant dans le Saint-Empire romain germanique du XVe siècle. Le jeu met l\'accent sur un réalisme historique, un système de combat détaillé et une narration immersive.',
  price: 59.99,
  image: 'kcd.jpg',
  rating: 9,
  release_date: Date.new(2018, 2, 13)
)

game2 = Game.create!(
  title: 'The Elder Scrolls V: Skyrim',
  publisher: 'Bethesda Softworks',
  developer: 'Bethesda Game Studios',
  description: 'Skyrim est un RPG en monde ouvert où le joueur incarne le Dernier Dragonborn. Il explore un immense monde riche en quêtes et en histoires, tout en combattant des dragons et en découvrant des secrets anciens.',
  price: 49.99,
  image: 'skyrim.png',
  rating: 10,
  release_date: Date.new(2011, 11, 11)
)

game3 = Game.create!(
  title: 'The Witcher 3: Wild Hunt',
  publisher: 'CD Projekt Red',
  developer: 'CD Projekt Red',
  description: 'Incarnez Geralt de Riv, un chasseur de monstres, dans cette aventure épique dans un monde ouvert. Avec des personnages profonds et des quêtes intenses, ce jeu est l\'un des RPG les plus acclamés de tous les temps.',
  price: 39.99,
  image: 'theWitcher.jpg',
  rating: 10,
  release_date: Date.new(2015, 5, 19)
)

game4 = Game.create!(
  title: 'Red Dead Redemption 2',
  publisher: 'Rockstar Games',
  developer: 'Rockstar Games',
  description: 'Un jeu d\'action-aventure en monde ouvert où vous incarnez Arthur Morgan, un hors-la-loi du gang Van der Linde, dans l\'Amérique de la fin du XIXe siècle. Un jeu époustouflant visuellement et narrativement.',
  price: 59.99,
  image: 'rdd.jpg',
  rating: 10,
  release_date: Date.new(2018, 10, 26)
)

game5 = Game.create!(
  title: 'Cyberpunk 2077',
  publisher: 'CD Projekt Red',
  developer: 'CD Projekt Red',
  description: 'Cyberpunk 2077 est un RPG futuriste où vous incarnez V, un mercenaire dans la ville de Night City. Avec des choix d\'histoire impactants et un monde vaste à explorer, il propose une expérience immersive.',
  price: 59.99,
  image: 'cyberpunk.jpg',
  rating: 7,
  release_date: Date.new(2020, 12, 10)
)

game6 = Game.create!(
  title: 'Dark Souls III',
  publisher: 'Bandai Namco Entertainment',
  developer: 'FromSoftware',
  description: 'Dans Dark Souls III, vous affrontez des ennemis impitoyables et des boss gigantesques dans un monde sombre et brutal. Ce jeu est reconnu pour sa difficulté et sa profondeur.',
  price: 49.99,
  image: 'CoverDarkSoulsIII.png',
  rating: 9,
  release_date: Date.new(2016, 4, 12)
)

game7 = Game.create!(
  title: 'Horizon Zero Dawn',
  publisher: 'Sony Interactive Entertainment',
  developer: 'Guerrilla Games',
  description: 'Horizon Zero Dawn est un jeu d\'action-aventure en monde ouvert où vous incarnez Aloy, une chasseuse qui explore un monde peuplé de créatures robotiques. Le jeu est reconnu pour ses graphismes époustouflants et son gameplay captivant.',
  price: 49.99,
  image: 'horizon.jpg',
  rating: 9,
  release_date: Date.new(2017, 2, 28)
)

game8 = Game.create!(
  title: 'Assassin\'s Creed Valhalla',
  publisher: 'Ubisoft',
  developer: 'Ubisoft',
  description: 'Assassin\'s Creed Valhalla suit les aventures d\'Eivor, un viking qui explore et conquiert l\'Angleterre du IXe siècle. Ce jeu est riche en exploration, en combats et en intrigues historiques.',
  price: 59.99,
  image: 'assassins.jpg',
  rating: 8,
  release_date: Date.new(2020, 11, 10)
)

game9 = Game.create!(
  title: 'Fallout 4',
  publisher: 'Bethesda Softworks',
  developer: 'Bethesda Game Studios',
  description: 'Fallout 4 est un jeu de rôle en monde ouvert où vous explorez un monde post-apocalyptique après une guerre nucléaire. Vous devez survivre, trouver des alliés et résoudre des énigmes dans un environnement dévasté.',
  price: 39.99,
  image: 'Fallout.jpg',
  rating: 8,
  release_date: Date.new(2015, 11, 10)
)

game10 = Game.create!(
  title: 'Minecraft',
  publisher: 'Mojang',
  developer: 'Mojang',
  description: 'Minecraft est un jeu de construction en monde ouvert où les joueurs peuvent explorer, miner, construire et survivre. Il offre une créativité infinie avec un style graphique pixélisé unique.',
  price: 29.99,
  image: 'minecraft.jpeg',
  rating: 10,
  release_date: Date.new(2011, 11, 18)
)

game11 = Game.create!(
  title: 'The Last of Us Part II',
  publisher: 'Sony Interactive Entertainment',
  developer: 'Naughty Dog',
  description: 'Incarnez Ellie, une jeune femme dans un monde post-apocalyptique où la survie est au cœur de l\'histoire. Le jeu est acclamé pour sa narration poignante et son gameplay intense.',
  price: 59.99,
  image: 'tlof.jpg',
  rating: 9,
  release_date: Date.new(2020, 6, 19)
)

game12 = Game.create!(
  title: 'God of War',
  publisher: 'Sony Interactive Entertainment',
  developer: 'Santa Monica Studio',
  description: 'God of War suit les aventures de Kratos et de son fils Atreus dans la mythologie nordique. Ce jeu allie exploration, combats et narration immersive.',
  price: 49.99,
  image: 'gow.png',
  rating: 10,
  release_date: Date.new(2018, 4, 20)
)

game13 = Game.create!(
  title: 'Bloodborne',
  publisher: 'Sony Computer Entertainment',
  developer: 'FromSoftware',
  description: 'Bloodborne est un jeu d\'action-aventure où vous incarnez un chasseur dans une ville gothique envahie par des créatures effrayantes. Le jeu est réputé pour sa difficulté et son atmosphère unique.',
  price: 39.99,
  image: 'Bloodborne.jpg',
  rating: 9,
  release_date: Date.new(2015, 3, 24)
)

WishlistItem.create!(
  user_id: user1.id,
  game_id: game1.id
)

WishlistItem.create!(
  user_id: user1.id,
  game_id: game10.id
)

WishlistItem.create!(
  user_id: user2.id,
  game_id: game2.id
)
WishlistItem.create!(
  user_id: user2.id,
  game_id: game1.id
)

WishlistItem.create!(
  user_id: user3.id,
  game_id: game7.id
)

WishlistItem.create!(
  user_id: user3.id,
  game_id: game8.id
)
