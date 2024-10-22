import React from "react";

const InfoSection = () => {
  return (
    <div>
      <section>
        <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div class="relative z-10 lg:py-16">
              <div class="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt=""
                  src="https://www.hdcarwallpapers.com/download/mercedes_benz_c_class_2023_4k-2560x1440.jpg"
                  class="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div class="relative flex items-center bg-[#eef0fc]">
              <span class="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-[#eef0fc]"></span>

              <div class="p-8 sm:p-16 lg:p-24">
                <h2 class="text-2xl font-bold sm:text-3xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempore, debitis.
                </h2>

                <p class="mt-4 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid, molestiae! Quidem est esse numquam odio deleniti,
                  beatae, magni dolores provident quaerat totam eos, aperiam
                  architecto eius quis quibusdam fugiat dicta.
                </p>

                <a
                  href="#"
                  class="mt-8 inline-block rounded border border-primary bg-white px-12 py-3 text-sm font-medium text-primary hover:bg-primary hover:text-white duration-150 focus:outline-none focus:ring active:text-indigo-500"
                >
                  Explorar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfoSection;
