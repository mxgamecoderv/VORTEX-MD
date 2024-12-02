global.rpg = {
  role(level) {
    level = parseInt(level)
    if (isNaN(level)) return { name: '', level: '' }

    const role = [
{ name: '🎄 Little Elf', level: 0 },
{ name: '🧸 Toy Maker', level: 5 },
{ name: '🎅 Santa’s Helper', level: 10 },
{ name: '🎁 Gift Wrapping Apprentice', level: 15 },
{ name: '🦌 Reindeer Diplomat', level: 20 },
{ name: '🥷 Snowman Tamer', level: 25 },
{ name: '⚔️ Gingerbread Warrior', level: 30 },
{ name: '👑 Frost King', level: 35 },
{ name: '🪙 Santa’s Right Hand', level: 40 },
{ name: '🐍 Yule Ambassador', level: 45 },
{ name: '👹 Krampus’ Guardian', level: 50 },
{ name: '🧙‍♂️ Winter Sage', level: 60 },
{ name: '🧝‍♂️ Master of the North Pole', level: 70 },
{ name: '🐲 Frost Dragon', level: 80 },
{ name: '🔮 Holiday Overlord 🔮', level: 90 },
{ name: '😎 Santa’s Ultimate Boss 😎', level: 100 }
,
    ]

    return role.reverse().find(role => level >= role.level)
  },
}
