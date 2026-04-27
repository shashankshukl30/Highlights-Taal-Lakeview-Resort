"use client";

import { useEffect, useState } from "react";

export function useVariant<T extends string>(
  flagName: string,
  variants: readonly [T, ...T[]]
): T {
  const fallback = variants[0];
  const [variant, setVariant] = useState<T>(fallback);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const ph = window.posthog;
    if (!ph) return;

    function read() {
      const phAny = window.posthog as unknown as {
        getFeatureFlag?: (key: string) => string | boolean | undefined;
        onFeatureFlags?: (cb: () => void) => () => void;
      };
      const v = phAny.getFeatureFlag?.(flagName);
      if (typeof v === "string" && (variants as readonly string[]).includes(v)) {
        setVariant(v as T);
      }
    }

    read();
    const phAny = ph as unknown as {
      onFeatureFlags?: (cb: () => void) => () => void;
    };
    const off = phAny.onFeatureFlags?.(read);
    return () => {
      if (typeof off === "function") off();
    };
  }, [flagName, variants]);

  return variant;
}

export function useFeatureFlag(flagName: string): boolean {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const phAny = window.posthog as unknown as {
      getFeatureFlag?: (key: string) => string | boolean | undefined;
      onFeatureFlags?: (cb: () => void) => () => void;
    };
    if (!phAny) return;

    function read() {
      const v = phAny.getFeatureFlag?.(flagName);
      setEnabled(v === true || v === "true");
    }
    read();
    const off = phAny.onFeatureFlags?.(read);
    return () => {
      if (typeof off === "function") off();
    };
  }, [flagName]);
  return enabled;
}
