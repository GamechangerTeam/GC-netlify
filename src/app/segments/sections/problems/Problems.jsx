import Image from "next/image";
import React from "react";
import "./problems.scss";
export default function Problems({data}) {

  const icons = [
    "/icons/problems/recruitment.svg",
    "/icons/problems/work-in-progress.svg",
    "/icons/problems/adaptation.svg",
    "/icons/problems/employee.svg",
    "/icons/problems/folder-management.svg",
    "/icons/problems/motivation.svg",
    "/icons/problems/conflict-of-interest.svg",
    "/icons/problems/data.svg",
  ];
  return (
    <div className="problems">
      <div className="container">
      <h2>Избавьтесь от:</h2>
      <ul>
        {data.map((text, index) => (
          <li key={index}>
            <Image src={icons[index]} alt="svg icon" width={64} height={64} />
            <p>{text}</p>
          </li>
        ))}
      </ul>

      </div>
    </div>
  );
}
