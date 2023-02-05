import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import VideoCard from '../conponents/VideoCard';
import Youtube from '../api/Youtube';
import FakeYoutube from '../api/FakeYoutube';

export default function Vidoe() {
  const { keyword } = useParams();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () => {
    // const youtube = new FakeYoutube();
    const youtube = new Youtube();
    return youtube.Search(keyword);
  });
  return (
    <>
      <div>Vidoe {keyword ? ' 검색결과' : '핫트렌드'}</div>
      {isLoading && <div>isLoading</div>}
      {error && <div>error!</div>}
      {videos && (
        <div>
          {videos.map(item => (
            <VideoCard key={item.id} video={item} />
          ))}
        </div>
      )}
    </>
  );
}

/* useQuery 2개의 인자가 필요하다, 
  
  1.캐시 키  2.어떻게 가져올 것인가 

*/
