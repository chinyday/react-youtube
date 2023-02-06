import React from 'react';
import { formatAgo } from '../util/util';

export default function VideoCard({ video }) {
  const { thumbnails, title, publishedAt, channelTitle } = video.snippet;
  return (
    <li>
      <img src={thumbnails.medium.url} alt={title} />
      <p>{title}</p>
      <p>{channelTitle}</p>
      <p>{formatAgo(publishedAt)}</p>
    </li>
  );
}
