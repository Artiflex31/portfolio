import React from "react";

const Education = () => {
  const educationDetails = [
    {
      logo: "logo-arrow",
      degree: "Bachelor of Technology",
      institution: "National Institute of Technology, Silchar",
      grades: "CGPA: 8.13",
      year: " [2021-present]",
      desc: "I am currently pursuing a Bachelor's degree in Electrical Engineering at National Institute of Technology, Silchar, Assam. I have completed 7 semesters and have a CGPA of 8.13.",
    },
    {
      logo: "logo-play",
      degree: "U.P. State Board (XII)",
      institution: "R.D.S. Inter College",
      grades: "Grade: 88.4% ",
      year: " [2018-2020]",
      desc: "I completed my class 12th education at R.D.S. Inter College, Bamgarmau, Unnao.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h3 className="text-4xl text-center font-semibold mb-1">
        My <span className="text-cyan-600">Education</span>
      </h3>
      <p className="text-lg text-center font-normal ">
        My educational details are as follows.
      </p>
      <hr className="border-gray-300 w-full mb-8" />
      <div>
        {educationDetails.map((edu, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-lg shadow-md p-6 flex flex-col items-start mb-4"
          >
            {/* <ion-icon name={edu.logo} class="text-primary text-xl mr-2" /> */}
            <div className="text-lg font-medium mb-2 text-gray-700">
              {edu.degree}
            </div>
            <div className="flex-1">
              <div className="text-base text-gray-500">{edu.institution}</div>
              <div className="text-base text-gray-500">{edu.grades}</div>
              <div className="text-base text-gray-500">{edu.year}</div>
            </div>
            <p className="text-gray-700">{edu.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
