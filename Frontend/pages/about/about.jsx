import React from 'react'

const About = () => {
  return  (<>
  <section class="container mx-auto px-6 p-10">
      <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">
        Features
      </h2>
      <div class="flex items-center flex-wrap mb-20">
        <div class="w-full md:w-1/2">
          <h4 class="text-3xl text-gray-800 font-bold mb-3">Exercise Metric</h4>
          <p class="text-gray-600 mb-8">Our Smart Health Monitoring Wristwatch is able to capture you vitals while you exercise. You can create different category of exercises and can track your vitals on the go.</p>
        </div>
        <div class="w-full md:w-1/2">
          <img src="https://images.unsplash.com/photo-1509223197845-458d87318791" alt="Monitoring" />
        </div>
      </div>

      <div class="flex items-center flex-wrap mb-20">
        <div class="w-full md:w-1/2">
          <img src="https://th.bing.com/th/id/OIP.sv1YtK031FFJ3ZoV9P9LGgHaGX?w=232&h=198&c=7&r=0&o=5&pid=1.7" alt="Reporting" />
        </div>
        <div class="w-full md:w-1/2 pl-10">
          <h4 class="text-3xl text-gray-800 font-bold mb-3">Reporting</h4>
          <p class="text-gray-600 mb-8">Our Smart Health Monitoring Wristwatch can generate a comprehensive report on your vitals depending on your settings either daily, weekly, monthly, quarterly or yearly.</p>
        </div>
      </div>

      <div class="flex items-center flex-wrap mb-20">
        <div class="w-full md:w-1/2">
          <h4 class="text-3xl text-gray-800 font-bold mb-3">Syncing</h4>
          <p class="text-gray-600 mb-8">Our Smart Health Monitoring Wristwatch allows you to sync data across all your mobile devices whether iOS, Android or Windows OS and also to your laptop whether MacOS, GNU/Linux or Windows OS.</p>
        </div>
        <div class="w-full md:w-1/2">
          <img src="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,w_730/at/art/design/2020-05/encyclopedia-of-houseplants/thumbnail%20images/aloe-8a1ff3f2d8ccbee3918ad01b75417e5b59f19686_cropped" alt="Syncing" />
        </div>
      </div>
    </section>
</>
)
  }

export default About