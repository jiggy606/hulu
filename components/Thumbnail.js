import React from 'react'
import Image from 'next/image'
import { ThumbDownIcon, ThumbUpIcon } from '@heroicons/react/outline'

const Thumbnail = ({ result }) => {

    const poster_path = '/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg' 

    const baseUrl = 'https://image.tmdb.org/t/p/original/';

    return (
        <div className='group cursor-pointer'>
            <Image
                alt='image'
                layout='responsive'
                height={1080}
                width={1920}
                src={
                    `${baseUrl}${result.backdrop_path || result.poster_path}` ||
                    `${baseUrl}${result.poster_path}`
                }
            />
            <div className='p-2'>
                <p className='truncate max-w-md'>{result.overview}</p>
                <h2 className='mt-1'>{result.title || result.original_name}</h2>
                <p className='flex items-center opacity-0 group-hover:opacity-100'>
                    {result.media_type && `${result.media_type} .`}{" "}
                    {result.release_date || result.first_air_date} .{" "}
                    <ThumbUpIcon className='h-5 mx-2' /> {result.vote_count}
                </p>
            </div>
        </div>
    );
}

export default Thumbnail