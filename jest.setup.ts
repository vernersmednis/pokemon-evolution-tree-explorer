import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

// Polyfill TextEncoder/TextDecoder for react-router-dom v7+
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(global as any).TextEncoder = TextEncoder;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(global as any).TextDecoder = TextDecoder;
