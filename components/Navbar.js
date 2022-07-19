/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  HomeIcon,
  IdentificationIcon,
  CursorClickIcon,
  MenuIcon,
  RefreshIcon,
  PresentationChartBarIcon,
  XIcon,
  AdjustmentsIcon,
  AcademicCapIcon,
  ChatAlt2Icon,
} from "@heroicons/react/outline";
import Link from "next/link";

const menu = [
  {
    name: "Inicio",
    description: "Inicio da página",
    href: "/inicio",
    icon: HomeIcon,
  },
  {
    name: "Sobre",
    description: "Sobre mim...",
    href: "/sobre",
    icon: IdentificationIcon,
  },
  {
    name: "Habilidades",
    description: "Minhas habilidades.",
    href: "/habilidades",
    icon: AdjustmentsIcon,
  },
  {
    name: "Currículo",
    description: "Meu currículo.",
    href: "/curriculo",
    icon: AcademicCapIcon,
  },
  {
    name: "Portifólio",
    description: "Meu Portifólio...",
    href: "/portifolio",
    icon: PresentationChartBarIcon,
  },
  {
    name: "Contato",
    description: "Meu Contato...",
    href: "/contato",
    icon: ChatAlt2Icon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Popover className="relative bg-thi5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-thi2 py-2 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="#">
              <a className="font-[wght] text-2xl font-bold text-thi1 hover:text-thi2 ">
                Coding With Thi.
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-thi2 rounded-md p-2 inline-flex items-center justify-center text-thi1 hover:text-thi5 hover:bg-thi1 hover:border hover:border-thi3 border border-thi1 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Abrir Menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 p-2">
            {menu.map((item) => (
              <Link href={item.href} key={item.name}>
                <a className="text-base font-medium text-thi1 hover:text-thi2 m-3">
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-thi1 ">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Link href="#">
                    <a className="font-[wght] text-xl font-semibold text-thi5">
                      Coding With Thi.
                    </a>
                  </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-thi3 rounded-md p-2 inline-flex items-center justify-center border border-thi5 text-thi1 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {menu.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-thi2"
                    >
                      <item.icon
                        className="flex-shrink-0 h-6 w-6 text-thi5"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-thi4">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
