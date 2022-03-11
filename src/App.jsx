import { useRef } from 'react'
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import routes from "./routes";

import AppHeader from './cmps/AppHeader';

import './style/main.scss';
// import './style/setup/_typograpfy.scss';
import ErrorBoundary from "./cmps/errors/ErrorBoundary";
import ErrorPage from "./cmps/errors/ErrorPage";
import AppFooter from "./cmps/AppFooter";
import Hero from "./cmps/Hero";

function App() {
  const appList = useRef()
  const heroCmp = useRef()
  const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop - 80);
  const scrollToTop = () => window.scrollTo(0, 0);
  const scrollToList = () => scrollToRef(appList);

  return (
    <Provider store={store}>
      <Router>
        <div id='app' className={'main-container'}>
          <AppHeader routes={routes} />
          <Hero onScrollToList={scrollToList} />
          <main ref={appList} className={"mb10"}>
            {/* <ErrorBoundary errorCmp={<ErrorPage />}> */}
            <Routes>
              {routes.map(({ path, element }, idx) => <Route key={idx} path={path} element={element} />)}
            </Routes>
            {/* </ErrorBoundary> */}
          </main>
          <AppFooter />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
