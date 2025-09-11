import { useEffect, useCallback } from 'react';

interface KeyboardNavigationOptions {
  onEscape?: () => void;
  onEnter?: () => void;
  onArrowUp?: () => void;
  onArrowDown?: () => void;
  onArrowLeft?: () => void;
  onArrowRight?: () => void;
  onTab?: () => void;
  onSpace?: () => void;
  enabled?: boolean;
  preventDefault?: boolean;
}

export const useKeyboardNavigation = (options: KeyboardNavigationOptions = {}) => {
  const {
    onEscape,
    onEnter,
    onArrowUp,
    onArrowDown,
    onArrowLeft,
    onArrowRight,
    onTab,
    onSpace,
    enabled = true,
    preventDefault = false
  } = options;

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!enabled) return;

    const { key, ctrlKey, altKey, metaKey } = event;

    // Skip if modifier keys are pressed (except for specific cases)
    if (ctrlKey || altKey || metaKey) return;

    switch (key) {
      case 'Escape':
        onEscape?.();
        if (preventDefault) event.preventDefault();
        break;
      case 'Enter':
        onEnter?.();
        if (preventDefault) event.preventDefault();
        break;
      case 'ArrowUp':
        onArrowUp?.();
        if (preventDefault) event.preventDefault();
        break;
      case 'ArrowDown':
        onArrowDown?.();
        if (preventDefault) event.preventDefault();
        break;
      case 'ArrowLeft':
        onArrowLeft?.();
        if (preventDefault) event.preventDefault();
        break;
      case 'ArrowRight':
        onArrowRight?.();
        if (preventDefault) event.preventDefault();
        break;
      case 'Tab':
        onTab?.();
        if (preventDefault) event.preventDefault();
        break;
      case ' ':
        onSpace?.();
        if (preventDefault) event.preventDefault();
        break;
    }
  }, [
    enabled,
    onEscape,
    onEnter,
    onArrowUp,
    onArrowDown,
    onArrowLeft,
    onArrowRight,
    onTab,
    onSpace,
    preventDefault
  ]);

  useEffect(() => {
    if (!enabled) return;

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown, enabled]);
};

// Hook for focus management
export const useFocusManagement = () => {
  const focusFirstElement = useCallback((container: HTMLElement) => {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    firstElement?.focus();
  }, []);

  const focusLastElement = useCallback((container: HTMLElement) => {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
    lastElement?.focus();
  }, []);

  const trapFocus = useCallback((container: HTMLElement, event: KeyboardEvent) => {
    if (event.key !== 'Tab') return;

    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    }
  }, []);

  return {
    focusFirstElement,
    focusLastElement,
    trapFocus
  };
};

// Hook for skip links
export const useSkipLinks = () => {
  const createSkipLink = useCallback((targetId: string, label: string) => {
    const skipLink = document.createElement('a');
    skipLink.href = `#${targetId}`;
    skipLink.textContent = label;
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-villa-olive text-white px-4 py-2 rounded z-50';
    
    return skipLink;
  }, []);

  const addSkipLink = useCallback((targetId: string, label: string) => {
    const skipLink = createSkipLink(targetId, label);
    document.body.insertBefore(skipLink, document.body.firstChild);
    return skipLink;
  }, [createSkipLink]);

  return {
    createSkipLink,
    addSkipLink
  };
};

export default useKeyboardNavigation;
