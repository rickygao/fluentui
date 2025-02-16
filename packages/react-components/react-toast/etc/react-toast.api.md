## API Report File for "@fluentui/react-toast"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import * as React_2 from 'react';

// @public (undocumented)
export const Toaster: React_2.FC<ToasterProps>;

// @public (undocumented)
export type ToastId = string;

// @public (undocumented)
export type ToastOffset = Partial<Record<ToastPosition, ToastOffsetObject>> | ToastOffsetObject;

// @public (undocumented)
export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

// @public (undocumented)
export function useToastController(toasterId?: ToasterId): {
    dispatchToast: (content: React_2.ReactNode, options?: Partial<Omit<ToastOptions, "toasterId">> | undefined) => void;
    dismissToast: (toastId: ToastId) => void;
    dismissAllToasts: () => void;
    updateToast: (options: UpdateToastEventDetail) => void;
};

// (No @packageDocumentation comment for this package)

```
