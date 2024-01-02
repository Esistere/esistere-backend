import 'express-session';

declare module 'express-session' {
  interface Session {
    user: {
      type: string;
      email: string;
    };
  }
}
