import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { lacaleConfig } from './locales';
import { ConfigProvider } from 'antd';
import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import RenderRouter from './routes';
import { useAppDispatch, useAppState } from 'stores';
import { setTagPlanVisible } from 'stores/tags-view.store';
import { webSocketManager } from 'utils/websocket';
const App: React.FC = () => {
  const { locale } = useAppState(state => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (locale === 'en_US') {
      moment.locale('en');
    } else if (locale === 'zh_CN') {
      moment.locale('zh-cn');
    }
  }, [locale]);
  useEffect(() => {
    const clickRemove = () => {
      dispatch(setTagPlanVisible(false));
    };
    window.addEventListener('click', clickRemove);
    return () => {
      window.removeEventListener('click', clickRemove);
    };
  }, [dispatch]);

  useEffect(() => {
		webSocketManager.create()
		return webSocketManager.close
  }, [])

  const getAntdLocale = () => {
    if (locale === 'en_US') {
      return enUS;
    } else if (locale === 'zh_CN') {
      return zhCN;
    }
  };

  return (
    <ConfigProvider locale={getAntdLocale()} componentSize="middle">
      <IntlProvider locale={locale.split('_')[0]} messages={lacaleConfig[locale]}>
        <BrowserRouter>
          <RenderRouter />
        </BrowserRouter>
      </IntlProvider>
    </ConfigProvider>
  );
};

export default App;
