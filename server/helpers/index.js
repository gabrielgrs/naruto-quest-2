const rules = require('../config/rules')

// Specific Rules
const getExpBonus = exp =>
  exp * process.env.EXP_MULTIPLIER || rules.expMultiplier

const getGoldWithBonus = gold => gold * rules.goldMultiplier

// Formules
const getMaxLife = (vitality, level = 1) => {
  const multiplier = 10 + level
  return (vitality + 1) * multiplier + 100
}

const getMaxMana = (intelligence, level = 1) => {
  const multiplier = 10 + level
  return (intelligence + 1) * multiplier + 100
}
const getMaxStamina = level =>
  29 + Math.ceil((level + 1) / rules.levelQuantityToGetStaminaPoint)

const getAttack = attack => attack * 3
const getMagicAttack = intelligence => intelligence * 10

// Update back and front
const createExpRequesite = exp => ({
  exp: {
    base: Math.trunc(exp / rules.expDivisor)
  }
})

const levels = {
  1: createExpRequesite(0),
  2: createExpRequesite(500),
  3: createExpRequesite(1450),
  4: createExpRequesite(2950),
  5: createExpRequesite(5150),
  6: createExpRequesite(5150),
  7: createExpRequesite(8350),
  8: createExpRequesite(12150),
  9: createExpRequesite(16350),
  10: createExpRequesite(20900),
  11: createExpRequesite(31400),
  12: createExpRequesite(37400),
  13: createExpRequesite(43500),
  14: createExpRequesite(49850),
  15: createExpRequesite(56550),
  16: createExpRequesite(63900),
  17: createExpRequesite(71900),
  18: createExpRequesite(80300),
  19: createExpRequesite(89100),
  20: createExpRequesite(98300),
  21: createExpRequesite(108000),
  22: createExpRequesite(118300),
  23: createExpRequesite(129300),
  24: createExpRequesite(141100),
  25: createExpRequesite(154100),
  26: createExpRequesite(168100),
  27: createExpRequesite(183100),
  28: createExpRequesite(199100),
  29: createExpRequesite(216100),
  30: createExpRequesite(234100),
  31: createExpRequesite(253100),
  32: createExpRequesite(273100),
  33: createExpRequesite(294100),
  34: createExpRequesite(316100),
  35: createExpRequesite(339300),
  36: createExpRequesite(363300),
  37: createExpRequesite(389300),
  38: createExpRequesite(416800),
  39: createExpRequesite(445800),
  40: createExpRequesite(475800),
  41: createExpRequesite(507300),
  42: createExpRequesite(540300),
  43: createExpRequesite(574300),
  44: createExpRequesite(610300),
  45: createExpRequesite(647800),
  46: createExpRequesite(685800),
  47: createExpRequesite(725800),
  48: createExpRequesite(767800),
  49: createExpRequesite(812300),
  50: createExpRequesite(859300),
  51: createExpRequesite(908300),
  52: createExpRequesite(959300),
  53: createExpRequesite(1012300),
  54: createExpRequesite(1067300),
  55: createExpRequesite(1124300),
  56: createExpRequesite(1183300),
  57: createExpRequesite(1244800),
  58: createExpRequesite(1307800),
  59: createExpRequesite(1372800),
  60: createExpRequesite(1439800),
  61: createExpRequesite(1508800),
  62: createExpRequesite(1578800),
  63: createExpRequesite(1651800),
  64: createExpRequesite(1728800),
  65: createExpRequesite(1808800),
  66: createExpRequesite(1892800),
  67: createExpRequesite(1980800),
  68: createExpRequesite(2071800),
  69: createExpRequesite(2166800),
  70: createExpRequesite(2276800),
  71: createExpRequesite(2404800),
  72: createExpRequesite(2544800),
  73: createExpRequesite(2699800),
  74: createExpRequesite(2862800),
  75: createExpRequesite(3032800),
  76: createExpRequesite(3212800),
  77: createExpRequesite(3400800),
  78: createExpRequesite(3595800),
  79: createExpRequesite(3795800),
  80: createExpRequesite(4025800),
  81: createExpRequesite(4285800),
  82: createExpRequesite(4585800),
  83: createExpRequesite(4935800),
  84: createExpRequesite(5335800),
  85: createExpRequesite(5815800),
  86: createExpRequesite(6365800),
  87: createExpRequesite(6965800),
  88: createExpRequesite(7645800),
  89: createExpRequesite(8395800),
  90: createExpRequesite(9295800),
  91: createExpRequesite(10295800),
  92: createExpRequesite(11495800),
  93: createExpRequesite(12995800),
  94: createExpRequesite(14795800),
  95: createExpRequesite(16895800),
  96: createExpRequesite(19295800),
  97: createExpRequesite(22095800),
  98: createExpRequesite(25395800),
  99: createExpRequesite(99999999)
}

module.exports = {
  getExpBonus,
  getGoldWithBonus,
  levels,
  getMaxLife,
  getMaxMana,
  getMaxStamina,
  getAttack,
  getMagicAttack
}
