export default function Schedule() {
  return (
    <section id="jadwal" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Jadwal Keberangkatan</h2>
          <p className="text-xl text-gray-700">AWAL MUSIM 1447H (JULI - SEPTEMBER 2025)</p>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
        </div>

        <div className="max-w-7xl mx-auto animate-fade-in delay-200">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-blue-50 border-b border-gray-200">
                    <th className="px-3 py-4 text-left font-semibold text-blue-800 uppercase tracking-wider">No</th>
                    <th className="px-3 py-4 text-left font-semibold text-blue-800 uppercase tracking-wider">Hari</th>
                    <th className="px-3 py-4 text-left font-semibold text-blue-800 uppercase tracking-wider">Tgl Berangkat</th>
                    <th className="px-3 py-4 text-left font-semibold text-blue-800 uppercase tracking-wider">Time</th>
                    <th className="px-3 py-4 text-left font-semibold text-blue-800 uppercase tracking-wider">Rute</th>
                    <th className="px-3 py-4 text-left font-semibold text-blue-800 uppercase tracking-wider">Tgl Pulang</th>
                    <th className="px-3 py-4 text-left font-semibold text-blue-800 uppercase tracking-wider">Time</th>
                    <th className="px-3 py-4 text-left font-semibold text-blue-800 uppercase tracking-wider">Flight</th>
                    <th className="px-3 py-4 text-left font-semibold text-blue-800 uppercase tracking-wider">Seat</th>
                    <th className="px-3 py-4 text-left font-semibold text-blue-800 uppercase tracking-wider">Program</th>
                    <th className="px-3 py-4 text-left font-semibold text-blue-800 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {scheduleData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-3 py-4 text-gray-700 whitespace-nowrap">{item.no}</td>
                      <td className="px-3 py-4 text-gray-700 whitespace-nowrap">{item.hari}</td>
                      <td className="px-3 py-4 text-gray-700 whitespace-nowrap">{item.tglBerangkat}</td>
                      <td className="px-3 py-4 text-gray-700 whitespace-nowrap">{item.timeBerangkat}</td>
                      <td className="px-3 py-4 text-gray-700 whitespace-nowrap">{item.rute}</td>
                      <td className="px-3 py-4 text-gray-700 whitespace-nowrap">{item.tglPulang}</td>
                      <td className="px-3 py-4 text-gray-700 whitespace-nowrap">{item.timePulang}</td>
                      <td className="px-3 py-4 text-gray-700 whitespace-nowrap">{item.flight}</td>
                      <td className="px-3 py-4 text-gray-700 whitespace-nowrap">{item.seat}</td>
                      <td className="px-3 py-4 text-gray-700 whitespace-nowrap">{item.program}</td>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                          item.status === 'FULL' 
                            ? 'bg-red-100 text-red-800'
                            : item.status === 'AVAILABLE SEAT'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-8 text-gray-600 text-sm">
            <p>Update Seat Tanggal: 26 APRIL 2025</p>
            <p>Call Office: +6281-2980-93910</p>
          </div>

          <div className="text-center mt-12 animate-fade-in delay-300">
            <a href="https://wa.me/6281298093910" target="_blank" rel="noopener noreferrer" className="group inline-block">
              <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75 transform hover:-translate-y-1">
                Hubungi Kami untuk Info Terkini
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const scheduleData = [
  {
    no: "1",
    hari: "SABTU",
    tglBerangkat: "05-Jul-25",
    timeBerangkat: "17:30-23:05",
    rute: "CGK-JED-CGK",
    tglPulang: "15-Jul-25",
    timePulang: "16:10-06:20",
    flight: "SVB19-SV820",
    seat: "45",
    program: "12 HARI",
    status: "FULL"
  },
  {
    no: "2",
    hari: "SABTU",
    tglBerangkat: "12-Jul-25",
    timeBerangkat: "17:30-23:05",
    rute: "CGK-JED-COK",
    tglPulang: "22-Jul-25",
    timePulang: "16:10-06:20",
    flight: "SV819-5V820",
    seat: "45",
    program: "12 HARI",
    status: "FULL"
  },
  {
    no: "3",
    hari: "SABTU",
    tglBerangkat: "19-Jul-25",
    timeBerangkat: "17:30-23:05",
    rute: "CGK-JED-CGK",
    tglPulang: "29-Jul-25",
    timePulang: "16:10-06:20",
    flight: "SV819-SV820",
    seat: "45",
    program: "12 HARI",
    status: "24 SEAT"
  },
  {
    no: "4",
    hari: "SELASA",
    tglBerangkat: "22-Jul-25",
    timeBerangkat: "11:50-17:40",
    rute: "CGK-JED-CGK",
    tglPulang: "30-Jul-25",
    timePulang: "19:40-10:00+1",
    flight: "GA980-GA981",
    seat: "45",
    program: "10 HARI",
    status: "14 SEAT"
  },
  {
    no: "5",
    hari: "SABTU",
    tglBerangkat: "26-Jul-25",
    timeBerangkat: "17:30-23:05",
    rute: "CGK-JED-COK",
    tglPulang: "05-Aug-25",
    timePulang: "16:10-06:20",
    flight: "SV819-SV820",
    seat: "45",
    program: "12 HARI",
    status: "5 SEAT"
  },
  {
    no: "6",
    hari: "MINGGU",
    tglBerangkat: "27-Jul-25",
    timeBerangkat: "11:50-17:40",
    rute: "CGK-JED-COK",
    tglPulang: "04-Aug-25",
    timePulang: "19:40-10:00+1",
    flight: "GA980-GA981",
    seat: "45",
    program: "10 HARI",
    status: "FULL"
  },
  {
    no: "7",
    hari: "SENIN",
    tglBerangkat: "11-Aug-25",
    timeBerangkat: "07:50-13:25",
    rute: "CGK-JED-COK",
    tglPulang: "22-Aug-25",
    timePulang: "01:50-16:00",
    flight: "SV821-SV818",
    seat: "45",
    program: "12 HARI",
    status: "FULL"
  },
  {
    no: "8",
    hari: "SENIN",
    tglBerangkat: "18-Aug-25",
    timeBerangkat: "07:50-13:25",
    rute: "CGK-JED-COK",
    tglPulang: "26-Aug-25",
    timePulang: "01:50-16:00",
    flight: "SV821-SV818",
    seat: "45",
    program: "9 HARI",
    status: "40 SEAT"
  },
  {
    no: "9",
    hari: "SENIN",
    tglBerangkat: "18-Aug-25",
    timeBerangkat: "07:50-13:25",
    rute: "CGK-JED-COK",
    tglPulang: "29-Aug-25",
    timePulang: "01:50-16:00",
    flight: "SV821-SV818",
    seat: "45",
    program: "12 HARI",
    status: "35 SEAT"
  },
  {
    no: "10",
    hari: "SELASA",
    tglBerangkat: "19-Aug-25",
    timeBerangkat: "15:55-21:45",
    rute: "COK-JED-CGK",
    tglPulang: "29-Aug-25",
    timePulang: "10:35-06:55+1",
    flight: "GA982-GA991",
    seat: "45",
    program: "12 HARI",
    status: "FULL"
  },
  {
    no: "11",
    hari: "SENIN",
    tglBerangkat: "25-Aug-25",
    timeBerangkat: "07:50-13:25",
    rute: "CGK-JED-CGK",
    tglPulang: "05-Sep-25",
    timePulang: "01:50-16:00",
    flight: "SV821-5V818",
    seat: "90",
    program: "12 HARI",
    status: "28 SEAT"
  },
  {
    no: "12",
    hari: "SENIN",
    tglBerangkat: "01-Sep-25",
    timeBerangkat: "07:50-13:25",
    rute: "CGK-JED-CGK",
    tglPulang: "12-Sep-25",
    timePulang: "01:50-16:00",
    flight: "SV821-5V818",
    seat: "180",
    program: "12 HARI",
    status: "155 SEAT"
  },
  {
    no: "13",
    hari: "SENIN",
    tglBerangkat: "01-Sep-25",
    timeBerangkat: "07:50-13:25",
    rute: "CGK-JED-CGK",
    tglPulang: "09-Sep-25",
    timePulang: "01:50-18:00",
    flight: "SV821-5V818",
    seat: "45",
    program: "9 HARI",
    status: "AVAILABLE SEAT"
  },
  {
    no: "14",
    hari: "SELASA",
    tglBerangkat: "02-Sep-25",
    timeBerangkat: "15:55-21:45",
    rute: "CGK-JED-CGK",
    tglPulang: "12-Sep-25",
    timePulang: "16:35-06:55+1",
    flight: "GA982-GA991",
    seat: "40",
    program: "12 HARI",
    status: "FULL"
  },
  {
    no: "15",
    hari: "MINGGU",
    tglBerangkat: "07-Sep-25",
    timeBerangkat: "08:45-14:35",
    rute: "CGK-JED-CGK",
    tglPulang: "15-Sep-25",
    timePulang: "00:01-14:20",
    flight: "GA990-GA983",
    seat: "40",
    program: "9 HARI",
    status: "FULL"
  },
  {
    no: "16",
    hari: "RABU",
    tglBerangkat: "17-Sep-25",
    timeBerangkat: "15:55-21:45",
    rute: "CGK-JED-COK",
    tglPulang: "28-Sep-25",
    timePulang: "00:00-14:20",
    flight: "GA982-GA963",
    seat: "40",
    program: "12 HARI",
    status: "AVAILABLE SEAT"
  },
  {
    no: "17",
    hari: "SABTU",
    tglBerangkat: "27-Sep-25",
    timeBerangkat: "11:50-17:40",
    rute: "CGK-JED-CGK",
    tglPulang: "05-Oct-25",
    timePulang: "00:00-14:20",
    flight: "GA980-GA989",
    seat: "40",
    program: "9 HARI",
    status: "AVAILABLE SEAT"
  }
]; 