import 'express-session';

declare module 'express-session' {
  export interface SessionData {
    user: {
      type: string;
      email: string;
    };
  }
}
