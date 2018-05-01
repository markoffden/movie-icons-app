import { IconsLoadedGuard } from './icons-loaded/icons-loaded.guard';
import { SingleIconExistsGuard } from './single-icon-exists/single-icon-exists.guard';

export const guards = [IconsLoadedGuard, SingleIconExistsGuard];

export * from './icons-loaded/icons-loaded.guard';
export * from './single-icon-exists/single-icon-exists.guard';
