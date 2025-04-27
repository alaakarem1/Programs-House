import React from "react";
import { useState } from "react";
import MSE from "../../assets/MSE.png";
import Dolphine from "../../assets/Dolphine.png";
import Medical from "../../assets/Medical Islands.png";
import MS from "../../assets/M&S.png";
import Tasheel from "../../assets/Tasheel.png";
import Qaswaa from "../../assets/Qaswaa.png";
import Kazepton from "../../assets/Kazepton.png";
import planet from "../../assets/planet.gif";

const clients = [
  {
    src: MSE,
    name: "Redesigning and enhancing the digital experience for Prof Company.",
  },
  {
    src: Dolphine,
    name: "Building an ERP system and digital registration platform for Dolphine Print.",
  },
  {
    src: Medical,
    name: "Developing an ERP solution, website, and client registration for Medical Islands.",
  },
  {
    src: MS,
    name: "Optimizing performance and revamping the online presence of M&S.",
  },
  {
    src: Tasheel,
    name: "Creating a full-scale website and digital platform for Tasheel.",
  },
  {
    src: Qaswaa,
    name: "Designing a contestant management and results system for Al-Quswa Group.",
  },
  {
    src: Kazepton,
    name: "Developing a complete and dynamic website for Kazepton.",
  },
  { src: planet, name: "+50 Clients Worldwide" },
];
export default function Clintes() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <>
      <section className="bg-[#02021E] py-20 text-white text-center">
        <h2 className="text-6xl font-normal leading-relaxed font-azonix">
          TRUSTED BY
        </h2>
        <h2>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F00] to-[#007BFF] font-azonix font-normal text-6xl">
            LEADING BUSINESSES
          </span>
        </h2>

        <div className="overflow-x-auto py-16 px-4">
          <table className="table-auto border-separate border-spacing-0 w-full max-w-6xl mx-auto">
            <tbody>
              {/* {[0, 1].map((row) => (
                                <tr key={row} className=''>
                                    {[0, 1, 2, 3].map((col) => {
                                        const index = row * 4 + col;
                                        const client = clients[index]; */}
              {/* {[0, 1].map((row) => (
                                <tr key={row}>
                                    {[0, 1, 2, 3].map((col) => {
                                        const index = row * 4 + col;
                                        const client = clients[index];

                                        const isFirstRow = row === 0;
                                        const isFirstCol = col === 0;
                                        return (
                                            <td
                                                key={index}
                                                // className=" border-t border-l  border-gray-700 text-center align-middle w-[200px] h-[180px] px-4 py-6"
                                                className={`text-center align-middle w-[200px] h-[180px] px-4 py-6
                                                    ${!isFirstRow ? 'border-t-2 border-[#282840]' : ''}
                                                    ${!isFirstCol ? 'border-l-2 border-[#282840]' : ''}
                                                  `}
                                                // onMouseEnter={() => setHoveredIndex(index)}
                                                // onMouseLeave={() => setHoveredIndex(null)}
                                                onMouseEnter={() => {
                                                    if (index !== 7) setHoveredIndex(index);
                                                }}
                                                onMouseLeave={() => {
                                                    if (index !== 7) setHoveredIndex(null);
                                                }}
                                            >

                                                <img
                                                    src={client.src}
                                                    alt={client.name}
                                                    className="w-24 h-24 mx-auto object-contain transition-transform duration-300 hover:scale-110"
                                                />
                                                {hoveredIndex === index && (
                                                    <p className="font-inter font-medium text-sm mt-2 text-[#FFFFFF99] ">{client.name}</p>
                                                )}

                                            </td>
                                        );
                                    })}
                                </tr>
                            ))} */}
              {[0, 1].map((row) => (
                <tr key={row}>
                  {[0, 1, 2, 3].map((col) => {
                    const index = row * 4 + col;
                    const client = clients[index];
                    const isFirstRow = row === 0;
                    const isFirstCol = col === 0;

                    return (
                      <td
                        key={index}
                        className={`text-center align-middle w-[300px] h-[200px] px-4 
                        ${!isFirstRow ? "border-t-2 border-[#282840]" : ""}
                        ${!isFirstCol ? "border-l-2 border-[#282840]" : ""}`}
                        onMouseEnter={() => {
                          if (index !== 7) setHoveredIndex(index);
                        }}
                        onMouseLeave={() => {
                          if (index !== 7) setHoveredIndex(null);
                        }}
                      >
                        {index === 7 ? (
                          <>
                            <img
                              src={client.src}
                              alt={client.name}
                              className=" mx-auto object-contain py-3"
                            />
                            <p className="font-inter font-medium text-lg mt-3 text-white">
                              {client.name}
                            </p>
                          </>
                        ) : (
                          <>
                            <img
                              src={client.src}
                              alt={client.name}
                              className="w-24 h-24 mx-auto object-contain transition-transform duration-300 hover:scale-110"
                            />
                            {hoveredIndex === index && (
                              <p className="font-inter font-medium text-sm mt-2 text-[#FFFFFF99]">
                                {client.name}
                              </p>
                            )}
                          </>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
