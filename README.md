# TypeScript Diff Generator

This is a TypeScript library for generating unified diffs from two strings.

## Installation

```bash
npm install ts-diff-generator
```

## Usage

```typescript
import { diffGenerator } from './src/index.ts';

const string1 = 'Hello, World!';
const string2 = 'Hello, Universe!';

const diff = diffGenerator(string1, string2);

console.log(diff);
```

## Testing

This library uses Jest for testing. Run the tests with the following command:

```bash
npm run test
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)