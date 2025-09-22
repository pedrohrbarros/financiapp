import { DefaultTheme } from "react-native-paper";

declare global {
  namespace ReactNativePaper {
    interface Theme {
      custom: {
        background: {
          container: string;
          input: string;
          view: string;
        };
        font: {
          light: string;
          dark: string;
        };
        outline: string;
        underline: string;
        button: {
          primary: string;
          secondary: string;
        };
      };
    }
  }
}

const theme = {
  ...DefaultTheme,
  custom: {
    background: {
      container: '#308653',
      input: '#FFFFFF',
      view: '#1e293b',
    },
    font: {
      light: "#FFFFFF",
      dark: "#000000"
    },
    outline: "#FFFFFF",
    underline: "#000000",
    button: {
      primary: "#339989",
      secondary: "#337CA0"
    }
  },
};

export default theme;