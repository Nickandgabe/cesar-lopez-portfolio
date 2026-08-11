import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { MeataDataComponent } from './components/common';
import { LoaderComponent } from './components/common';

import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

import { useDispatch, useSelector } from 'react-redux';
import { setAssetLoader } from './store/gobal';


// const HeroVehicle = React.lazy(() => import('./container/heroVehicleDetails/index2'));
const MainCarScene = React.lazy(() => import('./container/mainCarScene'));
const HeroVehicle = React.lazy(() => import('./container/heroVehicleDetails/'));
const Theater = React.lazy(() => import('./container/T360'))
const PhotoGift = React.lazy(() => import('./container/photoGift/'));
const Drivers = React.lazy(() => import('./container/drivers'));
const Quiz = React.lazy(() => import('./container/quiz'));

const Explore = React.lazy(() => import('./container/explore'));
const ExploreVehicles = React.lazy(() => import('./container/exploreVehicles'));

const ExploreHeroVehicle = React.lazy(() => import('./container/exploreHeroVechicle'));

const HeroVideoVehicle = React.lazy(() => import('./container/heroVideo'));

const IframeTest = React.lazy(() => import('./container/iframe'));
const Wheel = React.lazy(() => import('./container/spinWheel'));

const Survey = React.lazy(() => import('./container/survey'));

const AppRouter = () => {
  const dispatch = useDispatch();
  const loader = useSelector(state => state.loaderState)  //useSelector(selectAssetLoader);

  const history = createBrowserHistory();

  useEffect(() => {
    if (!('scrollBehavior' in document.documentElement.style)) {
      import('scroll-behavior-polyfill');
    }
    window.firstVisit = true;
    dispatch(setAssetLoader(true));

  }, []);

  //Sending pageView to analytics
  useEffect(() => {
    //console.log('localtion: ', history.location);
    ReactGA.set({ page: history.location.pathname }); // Update the user's current page
    ReactGA.pageview(history.location.pathname); // Record a pageview for the given page
  })


  return (
    <>
      {loader.isLoading && <LoaderComponent />}
      <Suspense fallback={<LoaderComponent />}>
        <Router>
          {/* <MeataDataComponent /> */}
          <Switch>
            {/* <Route path="/">
            <MainCarScene />
          </Route> */}
            {/* TODO: remove / toyota before prod */}
            {/* <Route path="/toyota">
              <MainCarScene />
            </Route>
            <Route path="/home">
              <MainCarScene />
            </Route> */}

             <Route exact path="/">
              <MainCarScene />
            </Route>
            <Route exact path="/overview">
              <MainCarScene />
            </Route>

            {/* <Route path="/heroCar:carName">
              <HeroVehicle />
            </Route> */}
             <Route exact path="/toyota-racing">
              <HeroVehicle />
            </Route>
            <Route exact path="/supra">
              <HeroVehicle />
            </Route>
            <Route exact path="/highlander">
              <HeroVehicle />
            </Route>
            <Route exact path="/trd-pro">
              <HeroVehicle />
            </Route>
            <Route exact path="/rav4hybrid">
              <HeroVehicle />
            </Route>
            <Route exact path="/sienna">
              <HeroVehicle />
            </Route>
            <Route exact path="/venza">
              <HeroVehicle />
            </Route>
            <Route exact path="/mobility">
              <HeroVehicle />
            </Route>
            <Route exact path="/mirai">
              <HeroVehicle />
            </Route>
            <Route exact path="/camryhybrid">
              <HeroVehicle />
            </Route>
            <Route exact path="/team-toyota">
              <HeroVehicle />
            </Route>


            {/* <Route path="/Theater:name">
              <Theater />
            </Route> */}
            <Route exact path="/t360-theater">
              <Theater />
            </Route>
            <Route exact path="/t360-theater/choose-your-experience">
              <Theater />
            </Route>
            <Route exact path="/t360-theater/sienna">
              <Theater />
            </Route>
            <Route exact path="/t360-theater/venza">
              <Theater />
            </Route>
            <Route exact path="/t360-theater/brand">
              <Theater />
            </Route>
            <Route exact path="/t360-theater/quiz">
              <Quiz />
            </Route>


            {/* <Route exact path="/photo:platform">
              <PhotoGift />
            </Route> */}
            <Route exact path="/toyota-racing/photo-booth">
              <PhotoGift />
            </Route>
            <Route exact path="/team-toyota/photo-booth">
              <PhotoGift />
            </Route>

            {/* <Route path="/drivers">
              <Drivers />
            </Route> */}
             <Route exact path="/toyota-racing/drivers">
              <Drivers />
            </Route>

           
            <Route exact path="/explore-more-vehicles">
              <Explore />
            </Route>

            {/* <Route path="/exploreVehicle:carName">
              <ExploreVehicles />
            </Route> */}
            {/* <Route path="/exploreHeroVehicle:carName">
              <ExploreHeroVehicle />
            </Route> */}
            {/* <Route path="/heroVideo:carName">
              <HeroVideoVehicle />
            </Route> */}

            <Route exact path="/sienna/genvmonitor">
              <HeroVideoVehicle />
            </Route>
            <Route exact path="/venza/genvmonitor">
              <HeroVideoVehicle />
            </Route>


            <Route exact path="/supra/walk-around">
              <ExploreHeroVehicle />
            </Route>
            <Route exact path="/highlander/walk-around">
              <ExploreHeroVehicle />
            </Route>
            <Route exact path="/trd-pro/walk-around">
              <ExploreHeroVehicle />
            </Route>
            <Route exact path="/rav4hybrid/walk-around">
              <ExploreHeroVehicle />
            </Route>
            <Route exact path="/sienna/walk-around">
              <ExploreHeroVehicle />
            </Route>
            <Route exact path="/venza/walk-around">
              <ExploreHeroVehicle />
            </Route>
            <Route exact path="/mobility/walk-around">
              <ExploreHeroVehicle />
            </Route>
            <Route exact path="/mirai/walk-around">
              <ExploreHeroVehicle />
            </Route>
            <Route exact path="/camryhybrid/walk-around">
              <ExploreHeroVehicle />
            </Route>


            <Route exact path="/camry/walk-around">
              <ExploreVehicles />
            </Route>
            <Route exact path="/avalon/walk-around">
              <ExploreVehicles />
            </Route>
            <Route exact path="/rav4/walk-around">
              <ExploreVehicles />
            </Route>
            <Route exact path="/priusprime/walk-around">
              <ExploreVehicles />
            </Route>
            <Route exact path="/avalonhybrid/walk-around">
              <ExploreVehicles />
            </Route>
            <Route exact path="/rav4prime/walk-around">
              <ExploreVehicles />
            </Route>
            <Route exact path="/prius/walk-around">
              <ExploreVehicles />
            </Route>
            <Route exact path="/tacoma/walk-around">
              <ExploreVehicles />
            </Route>
            <Route exact path="/4runner/walk-around">
              <ExploreVehicles />
            </Route>
            <Route exact path="/corolla/walk-around">
              <ExploreVehicles />
            </Route>
            <Route exact path="/tundra/walk-around">
              <ExploreVehicles />
            </Route>
            <Route exact path="/sequoia/walk-around">
              <ExploreVehicles />
            </Route>
            <Route exact path="/corollahybrid/walk-around">
              <ExploreVehicles />
            </Route>
            <Route exact path="/highlanderhybrid/walk-around">
              <ExploreVehicles />
            </Route>
            <Route exact path="/landcruiser/walk-around">
              <ExploreVehicles />
            </Route>
            <Route exact path="/corollahatchback/walk-around">
              <ExploreVehicles />
            </Route>
            <Route exact path="/c-hr/walk-around">
              <ExploreVehicles />
            </Route>


            <Route exact path="/iframe">
              <IframeTest />
            </Route>
            <Route exact path="/spin">
              <Wheel />
            </Route>
            <Route exact path="/survey">
              <Survey />
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </>
  );
};

export default AppRouter;
