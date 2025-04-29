import React, { useEffect, useRef } from 'react';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend,
  ChartData,
  ChartOptions 
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import '../styles/ReportsSection.css';

// Register ChartJS components
ChartJS.register(
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend
);

const ReportsSection: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (chartRef.current) {
              chartRef.current.classList.add('animate-chart');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (chartRef.current) {
      observer.observe(chartRef.current);
    }
    
    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, []);
  
  // Chart data
  const labels = ['8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM'];
  
  const chartData: ChartData<'line'> = {
    labels,
    datasets: [
      {
        label: 'Before AI',
        data: [12, 15, 17, 14, 20, 18, 16, 19, 15, 17, 14],
        borderColor: '#FF9800',
        backgroundColor: 'rgba(255, 152, 0, 0.5)',
        tension: 0.3
      },
      {
        label: 'After AI',
        data: [18, 22, 25, 28, 30, 28, 26, 27, 25, 23, 20],
        borderColor: '#00E676',
        backgroundColor: 'rgba(0, 230, 118, 0.5)',
        tension: 0.3
      }
    ]
  };
  
  const chartOptions: ChartOptions<'line'> = {
    responsive: true,
    animation: {
      duration: 2000,
      easing: 'easeOutQuart'
    },
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#ffffff',
          font: {
            family: 'Inter',
            size: 12
          }
        }
      },
      title: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#00E676',
        borderWidth: 1,
        padding: 10,
        titleFont: {
          family: 'Inter',
          size: 14
        },
        bodyFont: {
          family: 'Inter',
          size: 12
        },
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${context.parsed.y} km/h`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: '#ffffff'
        }
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: '#ffffff',
          callback: function(value) {
            return value + ' km/h';
          }
        },
        title: {
          display: true,
          text: 'Average Speed (km/h)',
          color: '#ffffff',
          font: {
            family: 'Inter',
            size: 12
          }
        }
      }
    }
  };
  
  // Table data
  const vehicleData = [
    { id: 1, vehiclesPerHour: 850, lane01: 60, lane02: 45, lane03: 50, lane04: 40, total: 195 },
    { id: 2, vehiclesPerHour: 1100, lane01: 75, lane02: 50, lane03: 52, lane04: 45, total: 222 },
    { id: 3, vehiclesPerHour: 950, lane01: 65, lane02: 48, lane03: 47, lane04: 42, total: 202 },
    { id: 4, vehiclesPerHour: 1200, lane01: 80, lane02: 55, lane03: 60, lane04: 50, total: 245 },
    { id: 5, vehiclesPerHour: 1050, lane01: 70, lane02: 52, lane03: 55, lane04: 48, total: 225 },
    { id: 6, vehiclesPerHour: 980, lane01: 68, lane02: 49, lane03: 51, lane04: 43, total: 211 },
    { id: 7, vehiclesPerHour: 1150, lane01: 78, lane02: 54, lane03: 58, lane04: 47, total: 237 },
    { id: 8, vehiclesPerHour: 900, lane01: 62, lane02: 46, lane03: 49, lane04: 41, total: 198 },
    { id: 9, vehiclesPerHour: 1020, lane01: 69, lane02: 51, lane03: 53, lane04: 44, total: 217 },
    { id: 10, vehiclesPerHour: 1080, lane01: 72, lane02: 53, lane03: 56, lane04: 46, total: 227 }
  ];
  
  return (
    <section className="section reports-section" id="reports">
      <h2 className="section-title">Traffic Reports - <span className="accent-text">Tahrir Square</span></h2>
      
      <div className="chart-container" ref={chartRef}>
        <h3 className="section-subtitle">Average Speed Before vs After AI</h3>
        <div className="chart-wrapper">
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>
      
      <div className="table-container">
        <h3 className="section-subtitle">Vehicle Data Analysis</h3>
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Vehicles per hour</th>
                <th>Lane 01</th>
                <th>Lane 02</th>
                <th>Lane 03</th>
                <th>Lane 04</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {vehicleData.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.vehiclesPerHour}</td>
                  <td>{row.lane01}</td>
                  <td>{row.lane02}</td>
                  <td>{row.lane03}</td>
                  <td>{row.lane04}</td>
                  <td>{row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ReportsSection;