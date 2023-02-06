import { format } from 'timeago.js';

export function formatAgo(data, lang = 'en_Us') {
  return format(data, lang);
}
