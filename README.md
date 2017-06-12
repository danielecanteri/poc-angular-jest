# PocAngularJest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.4.

## Steps

```
ng new poc-angular-jest
```
From the project directory
```
npm i --save-dev jest jest-preset-angular @types/jest
```
Add configuration to ``package.json``

```
"jest": {
  "preset": "jest-preset-angular",
  "setupTestFrameworkScriptFile": "<rootDir>/src/setupJest.ts"
}
```

And replace the way tests are run
```
"test": "jest",
"test:watch": "jest --watch",
```

Create the file ``setupJest.ts``

```
import 'jest-preset-angular';
```

Run your tests:
```
npm run test
```

## References

[Testing angular faster with Jest](https://www.xfive.co/blog/testing-angular-faster-jest/).
