import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import projectOne from "../assets/images/project-1.png";
import projectTwo from "../assets/images/project-2.jpg";
// import projectThree from "../assets/images/project-3.jfif";
// import projectFour from "../assets/images/project-4.jfif";

import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Project = () => {
  const projects = [
    {
      img: projectTwo,
      name: "CashTrack App",
      github_link: "https://github.com/flip360pranjit/CashTrack.client",
      //live_link: "https://myjobsearch.netlify.app",
    },
    {
      img: projectOne,
      name: "Fake News Detection",
      github_link: "https://github.com/devanshu-singhh/Fake-news-detection",
      //live_link: "https://aryyan0701.github.io/type_verse/",
    },
    {
      img: projectThree,
      name: "Epilepsy Seizure Detection App",
      //github_link: "",
      // live_link: "https://highking01.netlify.app",
    },
    {
      img: projectFour,
      name: "FurryTails",
      github_link: "https://artiflex31.github.io/FurryTails.client/",
      live_link: "",
    },
    {
      img: projectSix,
      name: "ArtBook",
      github_link:
        "https://artiflex31.github.io/The-Artbook-learning-Bootstrap/",
      live_link: "https://artiflex31.github.io/The-Artbook-learning-Bootstrap/",
    },
  ];
  return (
    <section id="projects" className="py-20 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My Works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-12/13 w-full h-full ">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
