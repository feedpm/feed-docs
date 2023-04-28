const sidebars = require('../sidebars');

const test = (source, check) => {
  const verify = (name) =>
    check instanceof RegExp ? check.test(name) : name.indexOf(check) === 0;

  return source.every((name) =>
    typeof name === 'string' ? verify(name) : name.items.every(verify),
  );
};

describe('Sidebars', () => {
  it('All docs must follow kebab case with at least 1 "/"', () => {
    const regex = /^[a-z]+(-[a-z0-9]+)*?(\/[a-z0-9]+)+(-[a-z0-9]+)*?$/;
    const source = Object.values(sidebars.docs);
    const result = source.every((item) => test(item, regex));

    expect(source).toBeDefined();
    expect(result).toBe(true);
  });

  it('Getting Started docs are suffixed with "getting-started/"', () => {
    const source = sidebars.docs.Welcome;

    expect(source).toBeDefined();
    expect(test(source, 'welcome/')).toBe(true);
  });

  it('CSS docs are suffixed with "css/"', () => {
    const source = sidebars.docs.CSS;

    expect(source).toBeDefined();
    expect(test(source, 'css/')).toBe(true);
  });

  it('JS docs are suffixed with "js/"', () => {
    const source = sidebars.docs.JS;

    expect(source).toBeDefined();
    expect(test(source, 'js/')).toBe(true);
  });

  it('React docs are suffixed with "react/"', () => {
    const source = sidebars.docs.React;

    expect(source).toBeDefined();
    expect(test(source, 'react/')).toBe(true);
  });

  it('Angular docs are suffixed with "angular/"', () => {
    const source = sidebars.docs.Angular;

    expect(source).toBeDefined();
    expect(test(source, 'angular/')).toBe(true);
  });

  it('Node docs are suffixed with "node/"', () => {
    const source = sidebars.docs.Node;

    expect(source).toBeDefined();
    expect(test(source, 'node/')).toBe(true);
  });

  it('React Native docs are suffixed with "react-native/"', () => {
    const source = sidebars.docs['React Native'];

    expect(source).toBeDefined();
    expect(test(source, 'react-native/')).toBe(true);
  });
});
