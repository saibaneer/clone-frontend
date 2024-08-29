// global.d.ts
interface Window {
  trustwallet?: unknown;
  solana?: {
    isPhantom: boolean;
    connect: () => Promise<void>;
    disconnect: () => Promise<void>;
    publicKey: {
      toString: () => string;
    };
  };
}
