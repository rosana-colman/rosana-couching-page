/// <reference types="astro/client" />
/// <reference types="@astrojs/react" />

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    class?: string;
  }
} 