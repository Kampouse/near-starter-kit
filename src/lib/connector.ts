import { HotConnector } from '@hot-labs/kit';
import nearConnector from '@hot-labs/kit/near';

// Singleton instance of HotConnector
// This ensures the same connector instance is used throughout the app
export const hotConnector = new HotConnector({
  apiKey: '1292473190ce7eb75c9de67e15aaad99',
  connectors: [nearConnector()],
});
