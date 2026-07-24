import { CanDeactivateFn } from '@angular/router';

export interface canComponenrDeactivate {
  canDeactivate: () => boolean;
}

export const canDeactivateGuard: CanDeactivateFn<canComponenrDeactivate> = (component, currentRoute, currentState, nextState) => {
  return component.canDeactivate();
};
