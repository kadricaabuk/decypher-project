import * as Sentry from '@sentry/react-native';

class InitFunctions {
    constructor(){

    }
    initializeSentry = () => {
        Sentry.init({
            dsn: "https://2add90128bbd40e5968ea2f1fd502dc3@o4504077826981888.ingest.sentry.io/4504806628524032"
          });
    }
}

export const init = new InitFunctions();