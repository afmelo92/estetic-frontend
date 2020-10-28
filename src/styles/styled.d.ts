import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    color: {
      primary: string;
      secondary: string;

      background: string;
      text: string;
      altText: string;
    };
  }
}
