import React, { Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const LazyHome = lazy(() => import('../containers/screen/Home'))
const LazyLogin = lazy(() => import('../containers/screen/Login'))
const LazyRegister = lazy(() => import('../containers/screen/Register'))

const LazyArena = lazy(() => import('../containers/screen/Arena'))
const LazyVillage = lazy(() => import('../containers/screen/Village'))
const LazyCharacter = lazy(() => import('../containers/screen/Character'))
const LazyChat = lazy(() => import('../containers/screen/Chat'))
const LazyEquipment = lazy(() => import('../containers/screen/Equipment'))
const LazyField = lazy(() => import('../containers/screen/Field'))
const LazyHospital = lazy(() => import('../containers/screen/Hospital'))
const LazyQuest = lazy(() => import('../containers/screen/Quest'))
const LazyBag = lazy(() => import('../containers/screen/Bag'))
const LazyShop = lazy(() => import('../containers/screen/Shop'))
const LazyTraining = lazy(() => import('../containers/screen/Training'))
const LazyTeam = lazy(() => import('../containers/screen/Team'))
const LazyTutorial = lazy(() => import('../containers/screen/Tutorial'))
const LazyRanking = lazy(() => import('../containers/screen/Ranking'))
const LazyVIP = lazy(() => import('../containers/screen/Vip'))

const routesWhenQuest = [
  '/',
  '/missoes',
  '/personagens',
  '/ranking',
  '/chat',
  '/equipamentos',
  '/mochila',
  '/vip',
  '/treino'
]

const PrivateRoute = ({ path, exact, component }) => {
  const { isAuthenticated, selectedCharacter } = useSelector(({ user }) => ({
    isAuthenticated: user.isAuthenticated,
    selectedCharacter: user.selectedCharacter
  }))

  if (!isAuthenticated) return <Redirect to="/acesso" component={LazyLogin} />

  if (selectedCharacter.inBattle && path !== '/campo')
    return <Redirect to="/campo" />

  if (selectedCharacter.currentQuest && !routesWhenQuest.includes(path))
    return <Redirect to="/missoes" />

  return <Route path={path} exact={exact} component={component} />
}

const OpenRoute = ({ path, exact, component }) => {
  const { isAuthenticated, selectedCharacter } = useSelector(({ user }) => ({
    isAuthenticated: user.isAuthenticated,
    selectedCharacter: user.selectedCharacter
  }))

  if (isAuthenticated && path !== '/')
    return <Redirect to="/" component={LazyLogin} />

  if (selectedCharacter.inBattle && path !== '/campo')
    return <Redirect to="/campo" />

  if (selectedCharacter.currentQuest && !routesWhenQuest.includes(path))
    return <Redirect to="/missoes" />

  return <Route path={path} exact={exact} component={component} />
}

export default () => {
  return (
    <Suspense fallback={'loading'}>
      <Switch>
        <Route path="/" exact={true} component={LazyHome} />
        <Route path="/tutorial" exact={true} component={LazyTutorial} />
        <PrivateRoute path="/arena" component={LazyArena} />
        <PrivateRoute path="/vila" component={LazyVillage} />
        <PrivateRoute path="/equipamentos" component={LazyEquipment} />
        <PrivateRoute path="/missoes" component={LazyQuest} />
        <PrivateRoute path="/time" component={LazyTeam} />
        <PrivateRoute path="/campo" component={LazyField} />
        <PrivateRoute path="/mochila" component={LazyBag} />
        <PrivateRoute path="/loja" component={LazyShop} />
        <PrivateRoute path="/hospital" component={LazyHospital} />
        <PrivateRoute path="/treinamento" component={LazyTraining} />
        <PrivateRoute path="/personagens" component={LazyCharacter} />
        <PrivateRoute path="/chat" component={LazyChat} />
        <PrivateRoute path="/ranking" component={LazyRanking} />
        <PrivateRoute path="/vip" component={LazyVIP} />
        <OpenRoute path="/acesso" component={LazyLogin} />
        <OpenRoute path="/registro" component={LazyRegister} />
      </Switch>
    </Suspense>
  )
}
