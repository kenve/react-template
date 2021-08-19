declare module '*.png';

declare module '*.module.less' {
  const value: {
    [key: string]: string;
  };
  export = value;
}
