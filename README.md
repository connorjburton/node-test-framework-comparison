# Node.js 18 Test Runner vs Jest

The purpose of this repo is to demonstrate the differences between Jest and the new native test runner in Node.js.

Run `yarn test:jest` and `yarn test:node` respectively.

## Notes

- Mocking still has to be done via a package like sinon
- The Node.js assert library is used, this is not new to Node.js
- It's likely possible you could use Chai or another assertion library. This is purely a comparison against test runners, not assertion or mocking libraries.
- Node.js test runner is around 75% faster than Jest in my testing. See my conversion of [hmac-auth-express](https://github.com/connorjburton/hmac-auth-express/blob/node-test-runner/tests/unit/index.test.js) for a larger, more real world comparison.
- You have to roll your own TypeScript support, `ts-node` may work but it's not as simple as simple as adding `ts-jest`
- There is no before/after lifecycle function support, this is the biggest functional downside that I believe should be included in the test runner for this to be a competitive alternative to Jest or other test runners.
- CLI output is pretty bad for the Node.js test runner, in comparison to Jest, this also needs improving.