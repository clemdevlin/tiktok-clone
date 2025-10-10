"use client";
import { Button, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { LogIn } from "lucide-react";
import { useState } from "react";

export default function Login() {
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  return (
    <>
      <Button
        onClick={open}
        className="flex items-center gap-2 rounded-md bg-slate-800 px-4 py-2 text-sm font-medium text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-slate-700 cursor-pointer"
      >
        Log in <LogIn size={15} />
      </Button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-40 focus:outline-none "
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto backdrop-blur-md bg-black/70">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogBackdrop>
            <DialogPanel
              transition
              className="w-full min-w-xl rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-white"
              >
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                  <img
                    alt="Your Company"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                    className="mx-auto h-10 w-auto"
                  />
                  <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
                    Sign in to your account
                  </h2>
                </div>
              </DialogTitle>
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="#" method="POST" className="space-y-6">
                  <div className="w-full">
                    <label
                      htmlFor="email"
                      className="block text-sm/6 font-medium text-gray-100"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm/6 font-medium text-gray-100"
                      >
                        Password
                      </label>
                      <div className="text-sm">
                        <a
                          href="#"
                          className="font-semibold text-indigo-400 hover:text-indigo-300"
                        >
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        autoComplete="current-password"
                        className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="w-full">
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Sign in
                    </button>
                  </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-400">
                  Not a member?{" "}
                  <a
                    href="#"
                    className="font-semibold text-indigo-400 hover:text-indigo-300"
                  >
                    Start a 14 day free trial
                  </a>
                </p>
              </div>
            </DialogPanel>
            </DialogBackdrop>
          </div>
        </div>
      </Dialog>
    </>
  );
}
