import Toast from 'react-native-toast-message';

const showToast = (type, message, subMessage) => {
    Toast.show({
      type: type,
      text1: message,
      text2: subMessage
    });
  }

export {
  showToast
}