'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

async function fetchPhotos(query, page = 1) {
  const URL = `/api/photos?query=${query}&orientation=landscape&per_page=15&page=${page}`;
  const res = await fetch(URL);
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json();
}

const Gallery = ({ initialData, query }) => {
  const [data, setData] = useState(initialData);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setData(initialData);
  }, [initialData, query]);

  const loadPhotos = async () => {
    try {
      setLoading(true);
      const newData = await fetchPhotos(query, page);
      setData(prevData => [...prevData, ...newData.results]);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='container mx-auto pt-[72px] lg:px-0 md:px-5 sm:px-5 xs:px-4'>
      <h2 className='my-5 text-2xl text-black font-medium'>Search results for &apos;{query}&apos;</h2>
      {error && <p className='text-red-500 font-bold'>{error}</p>}
      <div className='grid lg:grid-cols-3 gap-4 md:grid-cols-2 '>
        {data.map((result) => (
          <div className='flex flex-col drop-shadow-md' key={result.id}>
            <li className='h-full list-none flex flex-col justify-between'>
              <Image className='w-full h-full bg-cover bg-no-repeat bg-center object-cover' width={result.width} height={result.height} src={result.urls.small} alt={result.alt_description} priority />
              <div className='flex content-between justify-around mt-2'>
                <p className='capitalize font-medium'>{result.user.name}</p>
                <Link href={result.urls.raw} target='_blank' className='underline'>Original size</Link>
              </div>
            </li>
          </div>
        ))}
      </div>
      {loading && (
        <div className='flex justify-center my-5'>
          <p className='text-lg font-medium'>Loading...</p>
        </div>
      )}
      {!loading && (
        <div className='flex justify-center mt-8 mb-16'>
          <button
            onClick={loadPhotos}
            className='px-6 py-2 bg-slate-600 hover:bg-slate-700 text-white font-medium rounded lg:w-40 sm:w-full'>
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export { Gallery };
