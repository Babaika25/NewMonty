import { readFileSync } from 'fs';
import { load } from 'js-yaml';
import { join } from 'path';

const configPath = join(process.cwd(), 'src/config.yaml');
const config = load(readFileSync(configPath, 'utf8')) as Record<string, any>;

export const SITE = config.site || {};
export const METADATA = config.metadata || {};
export const I18N = config.i18n || {};
export const APP_BLOG = config.apps?.blog || {};
export const ANALYTICS = config.analytics || {};
export const UI = config.ui || {};
