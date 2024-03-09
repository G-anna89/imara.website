"use client"

import {CheckIcon, ChevronDownIcon, MagnifyingGlassIcon} from "@heroicons/react/20/solid";
import {Dialog, Listbox, Transition} from "@headlessui/react";
import {Fragment, useState} from "react";
import {Button} from "@/components/Button";
import Image from "next/image";
import Yt from "@/images/yt.png";
import Link from "next/link";
import {Container} from "@/components/Container";
import { ArrowRightIcon } from "@heroicons/react/24/outline";


const categories = [
    {
        id: 1,
        name: "Short films",
    },
    {
        id: 2,
        name: "Series",
    },
    {
        id: 3,
        name: "Educative",
    },
    {
        id: 4,
        name: "Trailers",
    },
    {
        id: 5,
        name: "Comedy",
    },
]

const dates = [
    {
        id: 1,
        name: "Jan",
    },
    {
        id: 2,
        name: "Feb",
    },
    {
        id: 3,
        name: "Mar",
    },
    {
        id: 4,
        name: "Apr",
    },
    {
        id: 5,
        name: "May",
    },
]

const qualities = [
    {id: 1, name: 'Medium', unavailable: false},
    {id: 2, name: '4D', unavailable: false},
    {id: 3, name: 'HD', unavailable: false},
    {id: 4, name: 'Standard', unavailable: true},
    {id: 5, name: 'Low', unavailable: false},
]
const suggestions = [
    {
        id: 1,
        name: 'The bad choice',
        series: 'series/ ss2 / Eps 3',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 2,
        name: 'The bad choice',
        series: 'series/ ss2 / Eps 3',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 3,
        name: 'The bad choice',
        series: 'series/ ss2 / Eps 3',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 4,
        name: 'The bad choice',
        series: 'series/ ss2 / Eps 3',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 5,
        name: 'The bad choice',
        series: 'series/ ss2 / Eps 3',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },

]
const files = [
    {
        title: 'Chills for Who',
        category: 'Mental health',
        time: '1hr 23 min',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
    {
        title: 'The Circle',
        category: 'Politics',
        time: '45 min',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
    {
        title: 'Hapa nje kwetu',
        category: 'Mental health',
        time: '45 min',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
    {
        title: 'Against my will short film',
        category: 'GBV',
        time: '22 min',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
    {
        title: 'Making the right decisions',
        category: 'GBV',
        time: '22 min',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
    {
        title: 'Cut across my will',
        category: 'GBV',
        time: '22 min',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
    {
        title: 'Covid - Comic cartoons',
        category: 'GBV',
        time: '22 min',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
    {
        title: 'Chills for Who',
        category: 'Mental health',
        time: '1hr 23 min',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
    {
        title: 'Life of Wambo',
        category: 'FGM',
        time: '45 min',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
]

export function Recommended() {
    const [selected, setSelected] = useState(qualities[0])
    const [active, setActive] = useState(dates[0])

    let [isOpen, setIsOpen] = useState(true)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <Container>
                <div className='md:flex justify-between mt-[53px]'>
                    <div className='md:flex'>
                        <div className="text-[40px] text-[#2B2B2B] font-bold mr-[43px]">Recommended</div>
                        {categories.map((category, index) => (
                            <button
                                type="button"
                                key={category.id}
                                className={`inline-flex mr-[24px] items-center gap-x-2 rounded-md bg-white px-[13px] py-2 text-[17px] font-medium text-[#525252] shadow-sm ${
                                    index === 0
                                        ? 'ring-1 ring-inset ring-[#525252]'
                                        : 'hover:bg-gray-50'
                                }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                    <div className='md:flex px-6'>
                        <div className="">
                            <Listbox value={selected} onChange={setSelected}>
                                <div className="relative mt-1">
                                    <Listbox.Button
                                        className="relative inline-flex mr-2 items-center gap-x-2 rounded-md bg-white px-6 py-2 text-[17px] font-medium text-[#525252] shadow-sm ring-1 ring-inset ring-[#525252] hover:bg-gray-50">
                                        <span className="block truncate pr-1">{selected.name}</span>
                                        <span
                                            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                                            <ChevronDownIcon
                                                className="h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                            />
                                          </span>
                                    </Listbox.Button>
                                    <Transition
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options
                                            className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                            {qualities.map((quality, qualityIdx) => (
                                                <Listbox.Option
                                                    key={qualityIdx}
                                                    className={({active}) =>
                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                        }`
                                                    }
                                                    value={quality}
                                                >
                                                    {({selected}) => (
                                                        <>
                                                            <span
                                                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                }`}
                                                            >
                                                              {quality.name}
                                                            </span>
                                                            {selected ? (
                                                                <span
                                                                    className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                                    <CheckIcon className="h-5 w-5" aria-hidden="true"/>
                                                                  </span>
                                                            ) : null}
                                                        </>
                                                    )}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </Listbox>
                        </div>
                        <div className="">
                            <Listbox value={active} onChange={setActive}>
                                <div className="relative mt-1">
                                    <Listbox.Button
                                        className="relative inline-flex mr-2 items-center gap-x-2 rounded-md bg-white px-6 py-2 text-[17px] font-medium text-[#525252] shadow-sm ring-1 ring-inset ring-[#525252] hover:bg-gray-50">
                                        <span className="block truncate pr-1">{active.name}</span>
                                        <span
                                            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                                            <ChevronDownIcon
                                                className="h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </Listbox.Button>
                                    <Transition
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options
                                            className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                            {dates.map((date, dateIdx) => (
                                                <Listbox.Option
                                                    key={dateIdx}
                                                    className={({active}) =>
                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                        }`
                                                    }
                                                    value={date}
                                                >
                                                    {({active}) => (
                                                        <>
                                                            <span
                                                                className={`block truncate ${active ? 'font-medium' : 'font-normal'
                                                                }`}
                                                            >
                                                              {date.name}
                                                            </span>
                                                            {active ? (
                                                                <span
                                                                    className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                                    <CheckIcon className="h-5 w-5" aria-hidden="true"/>
                                                                </span>
                                                            ) : null}
                                                        </>
                                                    )}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </Listbox>
                        </div>
                        <Link
                            href="#"
                            className="group inline-flex bg-[#007BFF] items-center justify-center rounded-lg py-1.5 px-[28px] text-lg font-medium text-white focus:outline-none"
                        >
                            Filter
                        </Link>
                    </div>

                </div>

                <div className='md:flex justify-between mt-[90px] gap-32'>
                    <div className="md:w-3/4">
                        <ul role="list"
                            className="grid grid-cols-1 gap-x-4 gap-y-[100px] sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-2 xl:gap-x-8">
                            {files.map((file) => (
                                <li key={file.title} className="relative">
                                    <div onClick={openModal}
                                         className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                                        <img src={file.source} alt=""
                                             className="pointer-events-none object-cover group-hover:opacity-75"/>

                                        <button type="button" className="absolute inset-0 focus:outline-none">
                                            <span className="sr-only">View details for {file.title}</span>
                                        </button>
                                    </div>
                                    <Image className='absolute inset-0 top-1/4 left-1/2' width={50} height={43} src={Yt}
                                           alt={"ÿt"}/>
                                    <div className='flex gap-3 mt-5'>
                                        <button
                                            type="button"
                                            className="inline-flex items-center gap-x-2 rounded-md bg-white px-6 py-1.5 text-[17px] font-medium text-[#525252] shadow-sm ring-1 ring-inset ring-[#007BFF] hover:bg-gray-50"
                                        >
                                            {file.time}
                                        </button>
                                        <p className="pointer-events-none mt-2 block truncate text-[16px] font-medium text-[#525252]">{file.category}</p>
                                    </div>

                                    <p className="pointer-events-none block text-[19px] mt-9 font-bold text-[#525252]">{file.title}</p>
                                </li>
                            ))}
                        </ul>
                        <Transition appear show={isOpen} as={Fragment}>
                            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="fixed inset-0 bg-black/25"/>
                                </Transition.Child>

                                <div className="fixed inset-0 overflow-y-auto">
                                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95"
                                        >
                                            <Dialog.Panel
                                                className="w-[342px] h-auto max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-[19px] font-bold text-[#525252]"
                                                >
                                                    Making the right decision
                                                </Dialog.Title>
                                                <div className='flex gap-7 items-center mt-5'>
                                                    <button
                                                        className='px-2 py-1 bg-[#F2970F] rounded-lg font-bold text-[18px] text-white'>HD
                                                    </button>
                                                    <div className='font-medium text-[15px] text-[#525252]'>2023</div>
                                                    <div className='font-medium text-[15px] text-[#525252]'>1 hr</div>
                                                </div>
                                                <div className='flex gap-1 items-center mt-[55px] mb-[27px]'>
                                                    <div className='font-bold text-[20px] text-[#525252]'>Category:
                                                    </div>
                                                    <div className='font-medium text-[17px] text-[#525252]'>GBV
                                                        awareness
                                                    </div>
                                                </div>
                                                <div className="mt-2">
                                                    <p className="text-[15px] text-[#525252]">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod
                                                        tempor incididunt.
                                                    </p>
                                                </div>

                                                <div className="mt-9">
                                                    <Link href="/watch"
                                                          className="inline-flex justify-center rounded-md border border-transparent bg-[#007BFF] px-4 py-2 text-[17px] font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                    >
                                                        Watch Now
                                                    </Link>
                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                    </div>

                    <div className="md:w-1/4">
                        <div className="text-[40px] text-[#2B2B2B] font-bold mb-[53px]">Recently updated</div>
                        <ul role="list" className="-mt-12 space-y-12 xl:col-span-3">
                            {suggestions.map((suggestion) => (
                                <li key={suggestion.name}
                                    className="flex flex-col gap-10 pt-12 sm:flex-row items-center justify-center">
                                    <img className="aspect-[4/5] w-[131px] flex-none rounded-l-2xl object-cover"
                                         src={suggestion.imageUrl} alt=""/>
                                    <div className="max-w-xl flex-auto space-y-[26px]">
                                        <p className="text-[17px] font-medium text-[#525252]">{suggestion.series}</p>
                                        <h3 className="text-[19px] font-bold text-[#525252]">{suggestion.name}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
            <div className="w-full border-t-[1px] mb-[44px] mt-[44px] border-[#D9D9D9]"/>

            <Container>
                <div className="flex items-center justify-end text-[#F2970F] space-x-[34px] mb-[60px]">
                    <span className="text-[26px] font-bold">Watch more </span>
                    <ArrowRightIcon className="h-[36px] w-[36px]"/>
                </div>
            </Container>


        </>

    )
}
