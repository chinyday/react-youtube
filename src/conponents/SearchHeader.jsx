import React, { useState, useEffect } from 'react';
import { BsYoutube, BsSearch } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function SearchHeader() {
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  const { keyword } = useParams();

  const handelSubmit = e => {
    e.preventDefault();
    // 라우터에서 이동하기 위해서는 네비게이션 사용
    navigate(`/videos/${value}`);
  };

  useEffect(() => {
    // 뒤로 가기 했을 때 keyword가 있다면 설정
    setValue(keyword || '');
  }, [keyword]);

  return (
    <header className="w-full flex border-b border-zinc-600 p-4">
      <Link to="/" className="flex items-center">
        <BsYoutube className="text-4xl text-brand" />
        <h1 className="font-bold ml-2 text-3xl">Youtube</h1>
      </Link>

      <form onSubmit={handelSubmit} className="w-full flex justify-center">
        <input type="text" value={value} placeholder="search.." onChange={e => setValue(e.target.value)} className="w-7/12 p-2 outline-none bg-black text-gray-50" />
        <button type="button" className="bg-zinc-600 px-4">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
