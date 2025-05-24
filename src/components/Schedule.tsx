export default function Schedule() {
  return (
    <section id="jadwal" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Jadwal Keberangkatan</h2>
          <p className="text-xl text-gray-700">Informasi jadwal keberangkatan umroh dan haji terbaru</p>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
        </div>

        <div className="max-w-4xl mx-auto animate-fade-in delay-200">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-blue-50 border-b border-gray-200">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Tanggal</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Paket</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Durasi</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-blue-800 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 text-gray-700 whitespace-nowrap">TBA</td>
                    <td className="px-6 py-4 text-gray-700 whitespace-nowrap">Umroh Reguler</td>
                    <td className="px-6 py-4 text-gray-700 whitespace-nowrap">12 Hari</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 text-sm font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Coming Soon
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 text-gray-700 whitespace-nowrap">TBA</td>
                    <td className="px-6 py-4 text-gray-700 whitespace-nowrap">Umroh Plus</td>
                    <td className="px-6 py-4 text-gray-700 whitespace-nowrap">15 Hari</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 text-sm font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Coming Soon
                      </span>
                    </td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-12 animate-fade-in delay-300">
            <a href="#kontak">
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