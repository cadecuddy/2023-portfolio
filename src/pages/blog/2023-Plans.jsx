/* eslint-disable react/no-unescaped-entities */
import BlogPostLayout from '@/components/blog/BlogPostLayout'
import React from 'react'
import Link from 'next/link'

export default function PlansFor2023() {
  return (
    <BlogPostLayout date='2022-12-31' title='Goals, Technologies, and Plans for 2023'>
      Both the calendar year and progress on my new website have decided to come to a close on the last day of 2022. In
      accordance with the time of year I believe some introspection, retrospection, and prospection is in order!
      <br />
      <br />
      <h1 className='text-2xl font-bold text-yellow-600'>👀 Looking Back on 2022</h1>
      <br />
      <h2 className='text-xl font-bold text-yellow-600'>2022 // The Front Half</h2>
      <br />
      While I'm eager to dive into all the goals and things I have planned for the upcoming year, 2022 deserves to be
      examined and thanked. What good are experiences if you don't look back and learn from them?
      <br />
      <br />
      The first 5-6 months of the year were spent finishing up my sophomore spring semester. Outside of classwork and
      finals, I'm struggling to recall anything notable from that time period, which bothers me. A lot.
      <br />
      <br />
      Over the past couple of months, learning and the creation of valuable experiences have become very important to
      me. I want to meet more people! I want to know more interesting things and speak with others about them! I want to
      understand things and become more articulate!
      <br />
      <br />I don't want to <span className='font-bold text-red-800'>waste time</span>.
      <br />
      <br />
      With that being the broad statement that it is, let's define what I consider a "waste" of time: any activity in
      which my mind is not critically engaged or I'm not challenged in some way.
      <br />
      <br />
      My intent isn't to massacre all leisure activities in my life or sound like some high-roading STEMlord.
      Admittedly, I spent a lot of my idle time this year simply trying to stimulate myself. I barely allocated myself
      time to listen to my thoughts or read and frequently gave in to instant gratification.
      <br />
      <br />
      2022 illustrated to me that I'm not challenging myself as much as I know I can. This year's plan, at a high level,
      is to migrate my leisure time into more productive, interesting, and challenging pursuits.
      <br />
      <br />
      <h2 className='text-xl font-bold text-yellow-600'>2022 // The Summer + Internship</h2>
      <br />
      Whew. That last section probably gave the impression that my entire year was an unproductive shit show. Promise it
      wasn't.
      <br />
      <br />
      The summer brought along an internship to keep me busy. Fantastic experience all around. Thankfully, I was placed
      on a team that gave a shit! They never shied away from answering my intern questions or helping me work through my
      challenges. One of the most constructive experiences of my developer life, bar none.
      <br />
      <br />
      I learned Golang, participated in both sides of code reviews, and picked the brains of some vary talented people.
      The thing I got to design and build was actually relevant to the team as well. Whether or not they're still using
      it today; I'm grateful to my manager for not throwing my intern self to the "React Dashboard" wolves (something
      other managers at the company are infamous for doing).
      <br />
      <br />
      While working over the summer, I had the privilege of living with one of my good friends. We watched a lot of kino
      together, became homeowners for a brief period of time, and lifted in the 100+ degree Texas heat in his garage.
      He's one of those friends I never want to lose contact with, and continues to inspire me to this day. Shout out
      Breakable Men.
      <br />
      <br />
      <h2 className='text-xl font-bold text-yellow-600'>2022 // The Back Half</h2>
      <br />
      The return to school from 3 months as a grown-up in industry had me motivated as ever. YouTube's algorithm blessed
      me with{' '}
      <Link href='https://www.youtube.com/@t3dotgg' target='_blank' className='text-yellow-600 hover:text-yellow-500'>
        Theo Browne
      </Link>
      's channel where I once more became enamored with web technologies. Theo's{' '}
      <Link
        href='https://www.youtube.com/watch?v=rzwaaWH0ksk'
        target='_blank'
        className='text-yellow-600 hover:text-yellow-500'>
        video
      </Link>{' '}
      on goal setting was a beneficial kick in the teeth for me. I used to be so concerned with lacking dev knowledge
      that I found myself consuming media about technologies rather than just building cool shit with it!
      <br />
      <br />
      I got to building.
      <br />
      <br />
      September - December saw the release of several projects of mine:
      <br />
      <Link
        href='https://github.com/cadecuddy/sauce'
        target='_blank'
        className='text-yellow-600 hover:text-yellow-500'
        passHref>
        Sauce{' '}
      </Link>
      - my novelty anime identification CLI tool.
      <br />
      <Link
        href='https://github.com/cadecuddy/equihire'
        target='_blank'
        className='text-yellow-600 hover:text-yellow-500'
        passHref>
        Equihire{' '}
      </Link>
      - a hackathon project: an inclusive resume screening web app. <br />
      <Link
        href='https://main.d21udxm8rad8sx.amplifyapp.com/'
        target='_blank'
        className='text-yellow-600 hover:text-yellow-500'
        passHref>
        Mastermind{' '}
      </Link>
      - the 1970s puzzle game, written in 4 hours on Thanksgiving.
      <br />
      <Link
        href='https://github.com/cadecuddy/GeoSleuth'
        target='_blank'
        className='text-yellow-600 hover:text-yellow-500'
        passHref>
        GeoSleuth{' '}
      </Link>
      - [current project] full-stack GeoGuessr-esque web app
      <br />
      <br />
      Theo was absolutely right. I've learned more in the past couple months about full stack development principles,
      database choices and design paradigms by just... building shit. Moving forward I want to focus on more "serious"
      projects i.e. devtools, startup, etc.
      <br />
      <br />
      <h2 className='text-xl font-bold text-yellow-600'>2022 // Advent of Code 🎄</h2>
      <br />
      I made it much further than last year in Advent of Code - up to day 14 this time. I'd frequently stay up until
      midnight (when the questions released) to attempt a spot on the leaderboard. This was sustainable for... you
      guessed it: 2 weeks. It really messed with my sleep schedule. By day 14 I had to move back home for winter break
      anyway, falling off the wagon as a result.
      <br />
      <br />
      My leaderboard aspirations were not in vain! I'll forever be on the Advent of Code 2022{' '}
      <Link
        href='https://adventofcode.com/2022/leaderboard/day/4'
        target='_blank'
        className='text-yellow-600 hover:text-yellow-500'
        passHref>
        question 4 leaderboard{' '}
      </Link>
      forever 😎 [peep 54th]
      <br />
      <br />
      <h2 className='text-xl font-bold text-yellow-600'>2022 // Technologies Learned 💻</h2>
      <span className='font-bold'>Golang</span> - learned at internship. Fast, but Rust is faster. <br />
      <span className='font-bold'>NextJs</span> - best fullstack React framework out there. <br />
      <span className='font-bold'>TypeScript</span> - I now am aware of typesafety's importance. <br />
      <span className='font-bold'>tRPC</span> - typesafe client-sever communication. What's REST? <br />
      <span className='font-bold'>Prisma / ORMs</span> - Made interfacing w/DBs ezaf. <br />
      <br />
      <h2 className='text-xl font-bold text-yellow-600'>2022 // Books Read 📚</h2>
      Billionaire Wilderness - Justin Farell
      <br />
      Cryptonomicon - Neal Stephenson
      <br />
      The War Below - James Scott
      <br />
      Numerous H.P. Lovecraft works...
      <br />
      <br />
      <h1 className='text-2xl font-bold text-yellow-600'>👀 Looking towards to 2023</h1>
      <br />
      I'll keep this concise. 2023 is the year of: building, reading, socializing, and pursuing interesting/meaningful
      hobbies and experiences. Development of critical thought will be an important focus as well. Frequently I find
      myself looking to others for opinions without thinking critically myself. Alas.
      <br />
      <br />
      Last, the technologies I'm learning or diving deeper into this year:
      <br />
      <span className='font-bold'>TypeScript</span>
      <br />
      <span className='font-bold'>tRPC</span>
      <br />
      <span className='font-bold'>Docker</span> <br />
      <span className='font-bold'>More AWS</span>
      <br />
      <span className='font-bold'>Raspberry Pi</span> - Have a project idea for this :) <br />
      <span className='font-bold'>Rust</span> - Used extensively from 2020-21 but picking up again. <br />
      <span className='font-bold'>Distributed Systems</span> - My copy of DDIA is in the mail as of writing this.
      Excited!
      <br />
      <br />
      2022 was great. Let's make 2023 better.
      <br />~ C
    </BlogPostLayout>
  )
}
