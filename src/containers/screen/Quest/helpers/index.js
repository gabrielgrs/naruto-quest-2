import { addMinutes, differenceInSeconds } from 'date-fns'
import { ninjaRankRequiredLevel } from '../../../../config/rules'

export const filters = [
  {
    name: 'Solo',
    conditionToRender: () => true
  },
  {
    name: 'Time',
    conditionToRender: ({ currentTeam }) => !!currentTeam
  },
  {
    name: 'Graduação',
    conditionToRender: ({ level }) => level >= ninjaRankRequiredLevel.genin
  }
]

export const canShowQuest = (character, quest, questFilter) => {
  const characterHasQuestLevel = character.level >= quest.requiredLevel
  if (!characterHasQuestLevel) return false

  // Solo
  if (questFilter === filters[0].name) {
    return !quest.advanceRank && !quest.needTeam
  }

  // Time
  if (questFilter === filters[1].name) {
    return !quest.advanceRank && quest.needTeam
  }

  // Graduação
  if (questFilter === filters[2].name) {
    return !quest.needTeam && quest.advanceRank
  }

  return characterHasQuestLevel
}

export const getRemainingTime = selectedCharacter => {
  const additectedMinutes = addMinutes(
    selectedCharacter.startedLastQuestAt,
    selectedCharacter.currentQuest.duration
  )

  const differenceBetweenDatesInSeconds = differenceInSeconds(
    additectedMinutes,
    Date.now()
  )

  const secondsToMinutesAndSeconds = s => {
    return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s
  }

  return secondsToMinutesAndSeconds(differenceBetweenDatesInSeconds)
}
