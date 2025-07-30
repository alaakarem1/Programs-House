import React from "react";
import { useState, useEffect } from "react";
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

function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
export default function Clintes() {
  const [colsPerRow, setColsPerRow] = useState(4); // الافتراضي 4 أعمدة

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setColsPerRow(2); // للموبايل
      } else {
        setColsPerRow(4); // للشاشات الكبيرة
      }
    };

    handleResize(); // شغّله عند أول تحميل
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <>
      <section
        id="projects"
        className="bg-[#02021E] py-20 text-white text-center"
      >
        <h2 className="text-4xl lg:text-6xl font-normal leading-relaxed font-azonix">
          TRUSTED BY
        </h2>
        <h2>
          <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F00] to-[#007BFF] font-azonix font-normal lg:text-6xl">
            LEADING BUSINESSES
          </span>
        </h2>

        <div className="overflow-x-auto py-16 px-4">
          <table className="table-auto border-separate border-spacing-0 w-full max-w-6xl mx-auto">
            {/* <tbody>
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
            </tbody> */}
            <tbody>
              {chunkArray(clients, colsPerRow).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((client, colIndex) => {
                    const index = rowIndex * colsPerRow + colIndex;
                    const isFirstRow = rowIndex === 0;
                    const isFirstCol = colIndex === 0;

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
                              className="mx-auto object-contain py-3 md:w-50 lg:w-auto"
                            />
                            <p className="font-inter font-medium text-lg mt-3 text-white">
                              {client.name}
                            </p>
                          </>
                        ) : (
                          <div className="group">
                            <img
                              src={client.src}
                              alt={client.name}
                              className={`w-20   mx-auto object-contain transition-transform duration-500 group-hover:scale-110 group-active:scale-110
                                ${
                                  hoveredIndex === index
                                    ? "scale-110 "
                                    : "translate-y-1/2"
                                }`}
                            />
                            <p
                              className={`font-inter font-medium text-sm mt-2 text-[#FFFFFF99] transition-all duration-300 ease-in-out  w-full text-center ${
                                hoveredIndex === index
                                  ? "opacity-100 translate-y-0"
                                  : "opacity-0 -translate-y-2 pointer-events-none"
                              }`}
                            >
                              {client.name}
                            </p>
                          </div>
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
