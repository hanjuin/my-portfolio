import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center w-full px-6 text-gray-900">

      <div className="flex flex-col items-center justify-center text-center p-10 w-full">

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
              Bio
            </caption>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Full Name
                </th>
                <td className="px-6 py-4 text-gray-900 dark:text-white">
                  Han Juin Wong
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Location
                </th>
                <td className="px-6 py-4 text-gray-900 dark:text-white">
                  Auckland, New Zealand
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Nationality
                </th>
                <td className="px-6 py-4 text-gray-900 dark:text-white">
                  Malaysian
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Current Role
                </th>
                <td className="px-6 py-4 text-gray-900 dark:text-white">
                  Master’s Student in Computer and Information Sciences
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Specialization
                </th>
                <td className="px-6 py-4 text-gray-900 dark:text-white">
                  Artificial Intelligence & Software Development
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Languages
                </th>
                <td className="px-6 py-4 text-gray-900 dark:text-white">
                  <p>English - Fluently</p>
                  <p>Mandarin - Native</p>
                  <p>Cantonese - Native</p>
                  <p>Malay - Fluently</p>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Status
                </th>
                <td className="px-6 py-4 text-gray-900 dark:text-white">
                  Actively seeking graduate opportunities in tech
                </td>
              </tr>
            </tbody>
          </table>
        </div>


      </div>

      <div className="flex flex-col items-center justify-center text-center w-full">
        <h2 className="text-3xl font-bold mb-6">Education</h2>
          <ul className="text-left space-y-2">
            <li><strong>Master of Computer and Information Sciences</strong><br />
                Auckland University of Technology, New Zealand<br />
                Focus: AI, ML, Data Mining, Software Engineering (Expected 2025)
            </li>
            <li><strong>Bachelor Degree of Computer Sciences</strong><br />
                Asia Pacific University, Malaysia<br />
                Focus: Web Development, Software Developent, Database, System Design
            </li>
          </ul>
      </div>

      <div className="flex flex-col items-center justify-center text-center w-full">
        <h2 className="text-3xl font-bold mb-6">Goals</h2>
        <p>
          
        </p>
      </div>

      <div className="flex flex-col items-center justify-center text-center w-full">
        <h2 className="text-3xl font-bold mb-6">Hobbies</h2>
        <p>
          
        </p>
      </div>

    </div>
  );
};

export default About;
