import React from 'react';
import { FaFilePdf } from 'react-icons/fa';
import style from './ImpactReports.module.css';

const ImpactReports = () => {
  const reports = [
    {
      id: 1,
      title: '2023–2024 Impact Report PDF',
      url: '/reports/techten-impact-report-2023-2024.pdf'
    },
    {
      id: 2,
      title: '2022 Summary Report PDF',
      url: '/reports/techten-summary-report-2022.pdf'
    }
  ];

  return (
    <div className={style.impactReports}>
      <div className={style.container}>
        <h2 className={style.title}>Annual Reports</h2>
        <p className={style.description}>
          <FaFilePdf className={style.pdfIcon} /> Download our latest impact reports:
        </p>
        <div className={style.reportButtons}>
          {reports.map(report => (
            <a 
              key={report.id} 
              href={report.url} 
              className={style.reportButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFilePdf className={style.buttonIcon} />
              <span>{report.title}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactReports;
