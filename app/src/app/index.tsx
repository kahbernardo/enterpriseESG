import { persistor, store } from '@app/store';
import { Provider } from 'react-redux';

import ContextGlobalIntance from '@context/contextGlobalIntance';
import { PersistGate } from 'redux-persist/integration/react';

import Routes from '@app/routes';
import ControllerApp from '@components/controllerApp';
import { NativeRouter } from 'react-router-native';
import * as St from './styles';
import { Menu } from '@components/menu';

const AppStart = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeRouter>
          <ContextGlobalIntance>
            <St.Container>
              <Menu />
              <St.Content>
                <ControllerApp>
                  <Routes />
                </ControllerApp>
              </St.Content>
            </St.Container>
          </ContextGlobalIntance>
        </NativeRouter>
      </PersistGate>
    </Provider>
  );
};
export default AppStart;
