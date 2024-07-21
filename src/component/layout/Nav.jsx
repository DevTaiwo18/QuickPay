import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

const navigation = [
  { name: "Services", href: "services" },
  { name: "FAQs", href: "faqs" },
  { name: "Contact", href: "contact" },
];

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const Nav = ({ scrollToSection }) => {
  const { user, logoutUser } = useAuthContext();
  const navigate = useNavigate();


  const handleLogout = async () => {
    await logoutUser();
    navigate('/')
  };

  return (
    <Disclosure as="nav" className="py-4">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-black-600 font-thin focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
                {/* End of Mobile menu button*/}
              </div>

              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                {/* logo */}
                <div className="flex flex-shrink-0 items-center">
                  <Link to={"/"}>
                    <img
                      className="h-12 w-auto"
                      src={assets.QuickPayLogoTransparent}
                      alt="QuickPay Logo"
                    />
                  </Link>
                </div>
                {/* end of logo */}

                {/* menu items */}
                <div className="hidden sm:ml-30 sm:block m-auto">
                  <div className="flex gap-8">
                    <button>
                      <Link to={"/"} className="hover:text-green-400 font-bold">
                        Home
                      </Link>
                    </button>
                    {navigation.map((item, index) => (
                      <button
                        key={index}
                        className={classNames(
                          "text-black-300 hover:text-blue-400",
                          "px-3 py-2 font-bold my-auto"
                        )}
                        aria-current={item.current ? "page" : undefined}
                        onClick={() => {
                          scrollToSection(item.href);
                        }}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
                {/* end of menu items */}
              </div>

              {/* NAV RIGHT */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {user ? (
                  <>
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src={assets.userImage}
                            alt=""
                          />
                        </MenuButton>
                      </div>
                      <Transition
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <MenuItem>
                            {({ focus }) => (
                              <Link
                                to={"/dashboard/"}
                                className={classNames(
                                  focus ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Dashboard
                              </Link>
                            )}
                          </MenuItem>
                          <MenuItem>
                            {({ focus }) => (
                              <button
                                onClick={handleLogout}
                                className={classNames(
                                  focus ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700 w-full text-left"
                                )}
                              >
                                Sign out
                              </button>
                            )}
                          </MenuItem>
                        </MenuItems>
                      </Transition>
                    </Menu>
                  </>
                ) : (
                  <Link
                    to={"/signin"}
                    className="hover:text-green-400 flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 stroke-green-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
                      />
                    </svg>
                    <span>Login</span>
                  </Link>
                )}
              </div>
              {/* END OF NAV RIGHT */}
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <DisclosureButton className="w-full">
                <Link
                  to={"/"}
                  className={classNames(
                    "text-black-300 hover:bg-gray-700 hover:text-white ",
                    "block rounded-md px-3 py-2 text-start font-medium"
                  )}
                >
                  Home
                </Link>
              </DisclosureButton>
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  onClick={() => {
                    scrollToSection(item.href);
                  }}
                  className={classNames(
                    "text-black-300 hover:bg-gray-700 hover:text-white hover:cursor-pointer",
                    "block rounded-md px-3 py-2 font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default Nav;
