import React from 'react'
import { useSelector } from 'react-redux'
import { SidebarComponent } from '../../../components'
import ResponsiveSidebar from '../../../components/sidebar/responsiveSidebar'

export default () => {
  const { selectedCharacter } = useSelector(({ user }) => {
    return {
      selectedCharacter: user.selectedCharacter
    }
  })

  return selectedCharacter && !!Object.keys(selectedCharacter).length ? (
    <>
      <SidebarComponent selectedCharacter={selectedCharacter} />
      <ResponsiveSidebar selectedCharacter={selectedCharacter} />
    </>
  ) : null
}
